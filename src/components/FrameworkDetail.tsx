// @ts-nocheck
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang, loc } from '@/lib/i18n';
import { FW, FW_FR } from '@/lib/content/frameworks';

export default function FrameworkDetail({ id }: { id: string }) {
  const { lang } = useLang();
  const FRL = lang === 'fr';
  const [tab, setTab] = useState('over');
  const f: any = loc((FW as any)[id], (FW_FR as any)[id], lang);
  const tabs: [string, string][] = [
    ['over', FRL ? "Vue d'ensemble" : 'Overview'], ['origin', FRL ? 'Origines' : 'Origins'], ['prin', FRL ? 'Principes' : 'Principles'],
    ['when', FRL ? "Quand (ne pas) l'utiliser" : 'When (not) to use'], ['how', FRL ? 'Méthodologie' : 'Methodology'],
    ['deliv', FRL ? 'Rôles et livrables' : 'Roles & deliverables'], ['case', FRL ? 'Cas réel' : 'Real case'], ['pit', FRL ? 'Pièges' : 'Pitfalls'],
  ];
  return (
    <div id="fw-detail">
      <div className="eyebrow">{FRL ? 'Framework' : 'Framework'}</div>
      <h2>{f.name}</h2>
      <p className="lede" style={{ marginTop: 6 }}>{f.desc}</p>
      <div className="fw-tabs" style={{ marginTop: 24 }}>
        {tabs.map(([k, l]) => <button key={k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{l}</button>)}
      </div>
      <div style={{ marginTop: 26 }}>
        {tab === 'over' && <p style={{ maxWidth: 760, fontSize: 15.5 }}>{f.overview}</p>}
        {tab === 'origin' && (
          <div className="anatomy">
            <div className="anat-item"><b>{FRL ? 'Créateur' : 'Creator'}</b><p>{f.origin.creator}</p></div>
            <div className="anat-item"><b>{FRL ? 'Quand / où' : 'When / where'}</b><p>{f.origin.when} · {f.origin.where}</p></div>
            <div className="anat-item" style={{ gridColumn: '1/-1' }}><b>{FRL ? "L'histoire" : 'The story'}</b><p>{f.origin.story}</p></div>
          </div>
        )}
        {tab === 'prin' && <div className="steps">{f.principles.map((p: string, i: number) => <div className="step" key={i}><div><p style={{ fontSize: 14.5, color: 'var(--ink)' }}>{p}</p></div></div>)}</div>}
        {tab === 'when' && (
          <div className="grid-2">
            <div className="uselist yes"><h4>{FRL ? 'À saisir quand' : 'Reach for it when'}</h4><ul>{f.whenYes.map((x: string, i: number) => <li key={i}>{x}</li>)}</ul></div>
            <div className="uselist no"><h4>{FRL ? 'À laisser de côté quand' : 'Leave it on the shelf when'}</h4><ul>{f.whenNo.map((x: string, i: number) => <li key={i}>{x}</li>)}</ul></div>
          </div>
        )}
        {tab === 'how' && <div className="steps">{f.steps.map((s: any, i: number) => <div className="step" key={i}><div><b>{i + 1}. {s.t}</b><p>{s.p}</p></div></div>)}</div>}
        {tab === 'deliv' && (
          <div className="grid-2">
            <div className="uselist yes"><h4 style={{ color: 'var(--ink)' }}>{FRL ? 'Rôles clés' : 'Key roles'}</h4><ul>{f.roles.map((x: string, i: number) => <li key={i}>{x}</li>)}</ul></div>
            <div className="uselist yes"><h4 style={{ color: 'var(--ink)' }}>{FRL ? 'Livrables typiques' : 'Typical deliverables'}</h4><ul>{f.deliverables.map((x: string, i: number) => <li key={i}>{x}</li>)}</ul></div>
          </div>
        )}
        {tab === 'case' && (
          <div className="case-box"><span className="chip">{f.caseStudy.chip}</span><h3 style={{ color: '#fff', margin: '14px 0 10px' }}>{f.caseStudy.h}</h3><p>{f.caseStudy.p}</p></div>
        )}
        {tab === 'pit' && <div className="steps">{f.pitfalls.map((p: any, i: number) => <div className="step" key={i}><div><b>{p.t}</b><p>{p.p}</p></div></div>)}</div>}
      </div>
      {f.related && (
        <div style={{ marginTop: 26 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gray)', marginRight: 12 }}>{FRL ? 'Liés' : 'Related'}</span>
          {f.related.map((r: string) => <Link key={r} to={'/frameworks/' + r}><button className="rel-chip">{(FW as any)[r].name} →</button></Link>)}
        </div>
      )}
      <p className="attrib">{f.attrib}</p>
      <div className="ctx-cta">
        <div><b>{FRL ? "C'est plus dur que ça n'en a l'air." : 'This is harder than it reads.'}</b><p>{FRL ? 'Déployer ' + f.name + " dans une organisation réelle, c'est là que vit le métier. C'est ce que je fais." : 'Deploying ' + f.name + " in a real organization is where the craft lives. That's what I do."}</p></div>
        <Link to="/consulting"><button className="btn btn-dark">{FRL ? 'Travailler avec moi' : 'Work with me'}</button></Link>
      </div>
    </div>
  );
}
