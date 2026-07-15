import { useState } from 'react';
import { useLang } from '@/lib/i18n';
import { exportEditable, exportDoc, printTpl } from '@/lib/templates';

export default function TemplateViewer({ tpl, onClose }: { tpl: any; onClose?: () => void }) {
  const { lang } = useLang();
  const [values, setValues] = useState<Record<string, string>>({});
  if (!tpl) return null;
  return (
    <div className="diag-card" style={{ marginTop: 34 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14, flexWrap: 'wrap' }}>
        <div>
          <span className="chip">{tpl.phase}</span>
          <h3 style={{ margin: '10px 0 6px' }}>{tpl.name}</h3>
          {tpl.intro && <p style={{ fontSize: 13.5, color: 'var(--ink-2)', maxWidth: 640 }}>{tpl.intro}</p>}
          {tpl.src && <p style={{ fontSize: 12, color: 'var(--gray)', marginTop: 6 }}>{tpl.src}</p>}
        </div>
        {onClose && <button className="rel-chip" style={{ margin: 0 }} onClick={onClose}>✕</button>}
      </div>
      {(tpl.sections || []).map((s: any, si: number) => (
        <div key={si} style={{ marginTop: 22 }}>
          <h4 style={{ borderBottom: '1px solid var(--line)', paddingBottom: 6, color: 'var(--orange-deep)' }}>{s.h}</h4>
          {(s.fields || []).map((f: any, fi: number) => (
            <div key={fi} style={{ marginTop: 12 }}>
              <label style={{ display: 'block', fontWeight: 700, fontSize: 13 }}>{f.l}</label>
              {f.hint && <div style={{ fontSize: 12, color: 'var(--gray)', margin: '3px 0 5px' }}>{f.hint}</div>}
              <textarea rows={Math.max(2, f.r || 2)} value={values[si + ':' + fi] || ''} onChange={(e) => setValues({ ...values, [si + ':' + fi]: e.target.value })} style={{ width: '100%', border: '1.5px solid var(--line)', borderRadius: 8, padding: 9, fontFamily: 'var(--font-body)', fontSize: 14, boxSizing: 'border-box' }} />
            </div>
          ))}
        </div>
      ))}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 22 }}>
        <button className="btn btn-primary" onClick={() => exportEditable(tpl, values)}>{lang === 'fr' ? 'Télécharger la copie modifiable' : 'Download editable copy'}</button>
        <button className="btn btn-ghost" onClick={() => exportDoc(tpl, values)}>Word (.doc)</button>
        <button className="btn btn-ghost" onClick={() => printTpl(tpl, values)}>{lang === 'fr' ? 'Imprimer' : 'Print'}</button>
      </div>
    </div>
  );
}
