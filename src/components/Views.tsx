// @ts-nocheck
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { T, useT, useLang, loc } from '@/lib/i18n';
import { HOME_SVGS } from '@/lib/content/dict';
import { FAMILIES, FW, FW_FR } from '@/lib/content/frameworks';
import { SIT_GROUPS, SITS, SIT_GROUPS_FR, SVC_FR, SITS_FR } from '@/lib/content/situations';
import { PHASES, PH_FR } from '@/lib/content/phases';
import { TPL } from '@/lib/content/methodTemplates';
import { TK_TPL } from '@/lib/content/toolkit';
import { GLOSS_GROUPS, GLOSS, GLOSS_GROUPS_FR } from '@/lib/content/glossary';
import { LIB_GROUPS, LIB, LIB_GROUPS_FR } from '@/lib/content/library';
import TemplateViewer from './TemplateViewer';
import ContactForm from './ContactForm';
import { exportAll } from '@/lib/templates';

/* ============ HOME ============ */
export function HomeView() {
  const t = useT();
  return (
    <>
      <div className="wrap hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{t('hero_eyebrow')}</div>
            <T k="hero_h1" as="h1" />
            <p className="lede">{t('hero_lede')}</p>
            <div className="hero-actions">
              <Link to="/diagnostic"><button className="btn btn-primary"><span>{t('hero_cta')}</span> <span className="arrow">→</span></button></Link>
              <span className="muted" style={{ fontSize: 13 }}>{t('hero_time')}</span>
            </div>
            <div className="hero-secondary">
              <Link to="/situations">{t('hero_alt1')}</Link>
              <Link to="/frameworks">{t('hero_alt2')}</Link>
              <Link to="/consulting">{t('hero_alt3')}</Link>
            </div>
          </div>
          <div className="curve-box" dangerouslySetInnerHTML={{ __html: HOME_SVGS[0] || '' }} />
        </div>
      </div>
      <div className="wrap">
        <div className="trust-strip">
          <span><b>6</b><span>{t('ts1')}</span></span>
          <span><b>5</b><span>{t('ts2')}</span></span>
          <span><b>2</b><span>{t('ts3')}</span></span>
          <span><b>1</b><span>{t('ts4')}</span></span>
        </div>
      </div>
      <div className="wrap section">
        <div className="eyebrow">{t('home_paths_eb')}</div>
        <h2>{t('home_paths_h')}</h2>
        <div className="grid-3" style={{ marginTop: 30 }}>
          {[['/diagnostic', 'chip_reco', 'p1'], ['/situations', 'chip_prob', 'p2'], ['/frameworks', 'chip_learn', 'p3']].map(([href, chip, p]) => (
            <Link key={p} to={href} style={{ display: 'block' }}>
              <div className="card clickable" style={{ height: '100%' }}>
                <span className="chip">{t(chip)}</span>
                <h3>{t(p + '_h')}</h3>
                <p>{t(p + '_p')}</p>
                <span className="card-link">{t(p + '_l')}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="band">
        {HOME_SVGS[1] && <div className="curve-bg" dangerouslySetInnerHTML={{ __html: HOME_SVGS[1] }} />}
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="eyebrow" style={{ color: 'var(--orange)' }}>{t('band_eb')}</div>
          <h2 style={{ color: '#fff', maxWidth: 620 }}>{t('band_h')}</h2>
          <p style={{ color: '#B9BFBC', maxWidth: 560, marginTop: 12 }}>{t('band_p')}</p>
          <Link to="/method"><button className="btn btn-primary" style={{ marginTop: 22 }}>{t('band_cta')}</button></Link>
        </div>
      </div>
    </>
  );
}

/* ============ METHOD ============ */
export function MethodView() {
  const t = useT();
  const { lang } = useLang();
  const FRL = lang === 'fr';
  const [cur, setCur] = useState(0);
  const [tplOpen, setTplOpen] = useState(false);
  const p: any = loc(PHASES[cur], FRL ? PH_FR[cur] : undefined, lang);
  return (
    <div className="wrap section">
      <div className="eyebrow">{t('mt_eb')}</div>
      <h2>{t('mt_h')}</h2>
      <p className="lede">{t('mt_lede')}</p>
      <div className="phase-rail">
        {PHASES.map((ph: any, i: number) => (
          <button key={i} className={'phase-pill' + (i === cur ? ' on' : '')} onClick={() => { setCur(i); setTplOpen(false); }}>
            <span className="num">0{i + 1}</span><span className="nm">{FRL ? PH_FR[i].n : ph.n}</span>
          </button>
        ))}
      </div>
      <div className="phase-detail">
        <h3>0{cur + 1} · {p.n}</h3>
        <div className="obj">{p.obj}</div>
        <div className="anatomy">
          <div className="anat-item"><b>{FRL ? 'Activités clés' : 'Key activities'}</b><p>{p.act}</p></div>
          <div className="anat-item"><b>{FRL ? 'Outil' : 'Tool'}</b><p>{p.tool}</p></div>
          <div className="anat-item"><b>{FRL ? 'Livrable' : 'Deliverable'}</b><p>{p.del}</p></div>
          <div className="anat-item"><b>{FRL ? 'Durée typique' : 'Typical duration'}</b><p>{p.dur}</p></div>
          <div className="mistake"><b>{FRL ? "L'erreur classique" : 'The classic mistake'}</b>{p.mis}</div>
        </div>
        <div style={{ marginTop: 22 }}>
          <button className="btn btn-primary" style={{ padding: '11px 20px', fontSize: 14 }} onClick={() => setTplOpen(!tplOpen)}>
            {(FRL ? 'Ouvrir le modèle : ' : 'Open the template: ') + p.n}
          </button>
        </div>
      </div>
      {tplOpen && TPL[cur] && <TemplateViewer tpl={TPL[cur]} onClose={() => setTplOpen(false)} />}

      <div style={{ marginTop: 64 }}>
        <div className="eyebrow">{t('mx_eb')}</div>
        <h2>{t('mx_h')}</h2>
        <p className="lede">{t('mx_lede')}</p>
        <table className="matrix" style={{ marginTop: 26 }}>
          <thead><tr><th>{t('mx_c1')}</th><th>{t('mx_c2')}</th></tr></thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <tr key={i}><td><T k={'mxr' + i + 'a'} /></td><td><T k={'mxr' + i + 'b'} /></td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 64 }}>
        <div className="eyebrow">{t('mo_eb')}</div>
        <h2>{t('mo_h')}</h2>
        <div className="grid-2" style={{ marginTop: 26 }}>
          <div className="card"><span className="chip gray">{t('mo_obj_c')}</span><T k="mo_obj_p" as="p" style={{ marginTop: 8 }} /></div>
          <div className="card" style={{ borderColor: 'var(--orange)', borderWidth: 1.5 }}><span className="chip">{t('mo_ans_c')}</span><T k="mo_ans_p" as="p" style={{ marginTop: 8 }} /></div>
        </div>
      </div>

      <div style={{ marginTop: 64 }}>
        <div className="eyebrow">{t('wk_eb')}</div>
        <h2>{t('wk_h')}</h2>
        <p className="lede" style={{ marginBottom: 8 }}>{t('wk_lede')}</p>
        <p style={{ fontSize: 12.5, color: 'var(--gray)', marginBottom: 26, fontStyle: 'italic' }}>{t('wk_disc')}</p>
        <div className="case-box">
          <span className="chip">{t('wk_cchip')}</span>
          <h3 style={{ color: '#fff', margin: '14px 0 10px' }}>{t('wk_ch')}</h3>
          <T k="wk_cp" as="p" />
        </div>
        <div className="steps" style={{ marginTop: 26 }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div className="step" key={i}><div><b>{t('wk_s' + i + 'b')}</b><T k={'wk_s' + i + 'p'} as="p" /></div></div>
          ))}
        </div>
        <div className="grid-2" style={{ marginTop: 26 }}>
          <div className="card"><span className="chip gray">{t('wk_out_c')}</span><T k="wk_out_p" as="p" style={{ marginTop: 8 }} /></div>
          <div className="card">
            <span className="chip gray">{t('wk_ben_c')}</span>
            <div className="case-metric" style={{ marginTop: 12 }}>
              <div><b style={{ color: 'var(--orange)' }}>22→84%</b><span style={{ color: 'var(--gray)' }}>{t('wk_m1')}</span></div>
              <div><b style={{ color: 'var(--orange)' }}>0</b><span style={{ color: 'var(--gray)' }}>{t('wk_m2')}</span></div>
              <div><b style={{ color: 'var(--orange)' }}>41→74</b><span style={{ color: 'var(--gray)' }}>{t('wk_m3')}</span></div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--gray)', marginTop: 12 }}>{t('wk_held')}</p>
          </div>
        </div>
        <p className="proof-note">{t('wk_lesson')}</p>
      </div>
    </div>
  );
}

/* ============ FRAMEWORKS INDEX ============ */
export function FrameworksIndex() {
  const t = useT();
  const { lang } = useLang();
  return (
    <div className="wrap section">
      <div className="eyebrow">{t('fw_eb')}</div>
      <h2>{t('fw_h')}</h2>
      <p className="lede">{t('fw_lede')}</p>
      <div style={{ marginTop: 36 }}>
        {FAMILIES.map((fam: any) => (
          <div className="fam-block" key={fam.id}>
            <h3 className="fam-title">{fam.name}</h3>
            <p className="fam-desc">{fam.desc}</p>
            <div className="grid-3">
              {Object.entries(FW).filter(([, f]: any) => f.family === fam.id).map(([id, fEn]: any) => {
                const f: any = loc(fEn, (FW_FR as any)[id], lang);
                return (
                  <Link key={id} to={'/frameworks/' + id} style={{ display: 'block' }}>
                    <div className="card clickable" style={{ height: '100%' }}>
                      <h3 style={{ fontSize: 17 }}>{f.name}</h3>
                      <p style={{ fontSize: 13.5, margin: '8px 0 14px' }}>{f.desc}</p>
                      <span className="card-link">{lang === 'fr' ? 'Ouvrir' : 'Open'} →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ SITUATIONS ============ */
export function SituationsIndex() {
  const t = useT();
  const { lang } = useLang();
  return (
    <div className="wrap section">
      <div className="eyebrow">{t('st_eb')}</div>
      <h2>{t('st_h')}</h2>
      <p className="lede">{t('st_lede')}</p>
      <div style={{ marginTop: 36 }}>
        {SIT_GROUPS.map((g: any) => {
          const gl: any = lang === 'fr' && (SIT_GROUPS_FR as any)[g.id] ? (SIT_GROUPS_FR as any)[g.id] : g;
          return (
            <div className="fam-block" key={g.id}>
              <h3 className="fam-title">{gl.name}</h3>
              <p className="fam-desc">{gl.desc}</p>
              <div className="grid-2">
                {Object.entries(SITS).filter(([, s]: any) => s.group === g.id).map(([id, sEn]: any) => {
                  const s: any = lang === 'fr' && (SITS_FR as any)[id] ? { ...sEn, ...(SITS_FR as any)[id] } : sEn;
                  return (
                    <Link key={id} to={'/situations/' + id} style={{ display: 'block' }}>
                      <div className="card clickable" style={{ height: '100%' }}>
                        <h3>{s.t}</h3><p style={{ margin: '8px 0 14px' }}>{s.d}</p>
                        <span className="card-link">{lang === 'fr' ? 'Voir la prescription' : 'See the prescription'} →</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SituationDetail({ id }: { id: string }) {
  const { lang } = useLang();
  const FRL = lang === 'fr';
  const sEn: any = (SITS as any)[id];
  const s: any = FRL && (SITS_FR as any)[id] ? { ...sEn, ...(SITS_FR as any)[id] } : sEn;
  return (
    <div className="wrap section">
      <div className="eyebrow">{FRL ? 'Prescription de situation' : 'Situation prescription'}</div>
      <h2>{s.t}</h2>
      <div className="grid-2" style={{ margin: '26px 0' }}>
        <div className="card"><span className="chip gray">{FRL ? 'Comment ça se présente' : 'How it presents'}</span><p style={{ marginTop: 8 }}>{s.d}</p></div>
        <div className="card"><span className="chip">{FRL ? "Ce qu'il y a dessous, en général" : 'What is usually underneath'}</span><p style={{ marginTop: 8 }}>{s.root}</p></div>
      </div>
      <h3 style={{ margin: '34px 0 6px' }}>{FRL ? "L'assemblage, et le pourquoi de chaque composant" : 'The assembly, and why each component'}</h3>
      <div className="steps" style={{ marginTop: 14 }}>
        {s.asm.map((a: any, i: number) => (
          <div className="step" key={i}><div>
            <b style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>{(FW as any)[a.fw].name}
              <Link to={'/frameworks/' + a.fw}><button className="rel-chip" style={{ margin: 0 }}>{FRL ? 'Ouvrir le framework' : 'Open framework'} →</button></Link></b>
            <p>{a.why}</p>
          </div></div>
        ))}
      </div>
      <h3 style={{ margin: '34px 0 6px' }}>{FRL ? 'Comment ça se déroule, concrètement' : 'How it plays out, concretely'}</h3>
      <div className="steps" style={{ marginTop: 14 }}>
        {s.how.map((x: string, i: number) => <div className="step" key={i}><div><p style={{ fontSize: 14.5, color: 'var(--ink)' }}>{x}</p></div></div>)}
      </div>
      <div className="flag" style={{ marginTop: 26 }}>⚑ <span><b>{FRL ? 'Vigilance :' : 'Watch out:'}</b> {s.watch}</span></div>
      <div className="ctx-cta">
        <div><b>{(FRL ? 'Offre correspondante : ' : 'Matching service: ') + (FRL ? (SVC_FR as any)[sEn.svc] || s.svc : sEn.svc)}</b><p>{FRL ? 'Cette situation correspond à une mission définie, au périmètre de départ fixé.' : 'This situation maps to a defined engagement with a fixed starting scope.'}</p></div>
        <Link to="/consulting"><button className="btn btn-dark">{FRL ? "Voir l'offre" : 'See the offer'}</button></Link>
      </div>
    </div>
  );
}

/* ============ TOOLKIT ============ */
export function ToolkitView() {
  const t = useT();
  const { lang } = useLang();
  const [tpl, setTpl] = useState<any>(null);
  return (
    <div className="wrap section">
      <div className="eyebrow">{t('tk_eb')}</div>
      <h2>{t('tk_h')}</h2>
      <p className="lede">{t('tk_lede')}</p>
      <div className="grid-3" style={{ marginTop: 32 }}>
        {TK_TPL.map((x: any, i: number) => (
          <div key={i} className="card tool-card clickable" onClick={() => setTpl(x)}>
            <div className="mini-cv"><div className="mh"></div><div className="mg"><div className="mz" style={{ gridColumn: 'span 3' }}><i></i><i></i><i></i></div><div className="mz" style={{ gridColumn: 'span 3' }}><i></i><i></i><i></i></div><div className="mz" style={{ gridColumn: 'span 2' }}><i></i><i></i></div><div className="mz" style={{ gridColumn: 'span 2' }}><i></i><i></i></div><div className="mz" style={{ gridColumn: 'span 2' }}><i></i><i></i></div></div><div className="mf"></div></div>
            <span className="chip">{lang === 'fr' ? 'Gratuit · modifiable' : 'Free · editable'}</span>
            <h3 style={{ fontSize: 16.5 }}>{x.name}</h3>
            <p style={{ fontSize: 13 }}>{x.intro.split('.')[0]}.</p>
            <span className="card-link">{lang === 'fr' ? 'Ouvrir le canevas' : 'Open the canvas'} →</span>
          </div>
        ))}
      </div>
      {tpl && <TemplateViewer tpl={tpl} onClose={() => setTpl(null)} />}
      <div className="ctx-cta" style={{ marginTop: 34 }}>
        <div><b>{t('tk_cta_b')}</b><p>{t('tk_cta_p')}</p></div>
        <button className="btn btn-primary" onClick={() => exportAll(TK_TPL, 'Inflexion Change Toolkit')}>{t('tk_cta_btn')}</button>
      </div>
    </div>
  );
}

/* ============ GLOSSARY ============ */
export function GlossaryView() {
  const t = useT();
  const { lang } = useLang();
  const [f, setF] = useState('');
  const q = f.toLowerCase().trim();
  return (
    <div className="wrap section">
      <div className="eyebrow">{t('gl_eb')}</div>
      <h2>{t('gl_h')}</h2>
      <p className="lede">{t('gl_lede')}</p>
      <input value={f} onChange={(e) => setF(e.target.value)} placeholder={lang === 'fr' ? 'Rechercher un terme...' : 'Search a term...'} style={{ marginTop: 26, width: '100%', maxWidth: 460, border: '1.5px solid var(--line)', borderRadius: 10, padding: '12px 16px', fontFamily: 'var(--font-body)', fontSize: 14.5, background: 'var(--panel)' }} />
      <div style={{ marginTop: 30 }}>
        {GLOSS_GROUPS.map((gr: any) => {
          const gname = lang === 'fr' ? (GLOSS_GROUPS_FR as any)[gr.id] || gr.name : gr.name;
          const items = GLOSS.filter((x: any) => x.g === gr.id && (!q || (x.en + ' ' + x.fr + ' ' + x.p + ' ' + (x.pf || '')).toLowerCase().includes(q)));
          if (!items.length) return null;
          return (
            <div className="fam-block" key={gr.id}>
              <h3 className="fam-title">{gname}</h3>
              <div className="gloss" style={{ marginTop: 14 }}>
                {items.map((x: any, i: number) => (
                  <div className="gloss-item" key={i}><b>{x.en}</b><span className="fr">{x.fr}</span><p>{lang === 'fr' && x.pf ? x.pf : x.p}</p></div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ============ LIBRARY ============ */
export function LibraryView() {
  const t = useT();
  const { lang } = useLang();
  const FRL = lang === 'fr';
  const [f, setF] = useState('');
  const [ty, setTy] = useState('All');
  const q = f.toLowerCase().trim();
  const types = ['All', 'Book', 'Paper', 'Study', 'Survey'];
  const tlabel: any = { All: FRL ? 'Tout' : 'All', Book: FRL ? 'Livre' : 'Book', Paper: FRL ? 'Article' : 'Paper', Study: FRL ? 'Étude' : 'Study', Survey: FRL ? 'Enquête' : 'Survey' };
  return (
    <div className="wrap section">
      <div className="eyebrow">{t('lb_eb')}</div>
      <h2>{t('lb_h')}</h2>
      <p className="lede">{t('lb_lede')}</p>
      <input value={f} onChange={(e) => setF(e.target.value)} placeholder="Search title, author, topic..." style={{ marginTop: 26, width: '100%', maxWidth: 460, border: '1.5px solid var(--line)', borderRadius: 10, padding: '12px 16px', fontFamily: 'var(--font-body)', fontSize: 14.5, background: 'var(--panel)' }} />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
        {types.map((x) => <button key={x} className="rel-chip" style={x === ty ? { background: 'var(--orange)', color: '#fff' } : {}} onClick={() => setTy(x)}>{tlabel[x]}</button>)}
      </div>
      <div style={{ marginTop: 30 }}>
        {LIB_GROUPS.map((g: any) => {
          const gl: any = FRL && (LIB_GROUPS_FR as any)[g.id] ? (LIB_GROUPS_FR as any)[g.id] : g;
          const items = LIB.filter((x: any) => x.g === g.id && (ty === 'All' || x.type === ty) && (!q || (x.t + ' ' + x.a + ' ' + x.what + ' ' + x.use + ' ' + (x.whatFr || '')).toLowerCase().includes(q)));
          if (!items.length) return null;
          return (
            <div className="fam-block" key={g.id}>
              <h3 className="fam-title">{gl.name}</h3><p className="fam-desc">{gl.desc}</p>
              <div className="grid-2" style={{ marginTop: 14 }}>
                {items.map((x: any, i: number) => (
                  <div className="card" key={i}>
                    <span className="chip gray">{tlabel[x.type]} · {x.y}</span>
                    <h3 style={{ fontSize: 16.5 }}>{x.t}</h3>
                    <p className="muted" style={{ fontSize: 12.5, fontWeight: 600, margin: '2px 0 10px' }}>{x.a}</p>
                    <p style={{ fontSize: 13.5 }}>{FRL && x.whatFr ? x.whatFr : x.what}</p>
                    <p style={{ fontSize: 12.5, color: 'var(--orange-deep)', fontWeight: 600, marginTop: 10 }}>{FRL ? 'Sur cette plateforme' : 'On this platform'} · <span style={{ fontWeight: 400, color: 'var(--ink-2)' }}>{FRL && x.useFr ? x.useFr : x.use}</span></p>
                    <a className="card-link" href={x.link} target="_blank" rel="noopener noreferrer">{FRL ? 'Explorer la source' : 'Explore the source'} ↗</a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <p className="attrib">{FRL ? "Toutes les annotations sont des commentaires originaux d'Inflexion. Les titres et résultats sont cités à des fins pédagogiques ; aucun contenu source n'est reproduit. Les marques appartiennent à leurs propriétaires." : 'All annotations are original Inflexion commentary. Titles and findings are cited for educational purposes; no source content is reproduced. Trademarks belong to their owners.'}</p>
    </div>
  );
}

/* ============ CONSULTING ============ */
export function ConsultingView() {
  const t = useT();
  const { lang } = useLang();
  const FRL = lang === 'fr';
  return (
    <div className="wrap section">
      <div className="eyebrow">{t('cs_eb')}</div>
      <h2>{t('cs_h')}</h2>
      <p className="lede">{t('cs_lede')}</p>
      <div className="grid-2" style={{ marginTop: 32 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div className="card" key={i} style={i === 0 ? { borderColor: 'var(--orange)', borderWidth: 1.5 } : {}}>
            <span className="chip">{'0' + (i + 1)}</span>
            <h3 style={{ marginTop: 8 }}>{t('s' + i + '_h')}</h3>
            <T k={'s' + i + '_p'} as="p" style={{ marginTop: 8, fontSize: 13.5 }} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 64 }}>
        <div className="eyebrow">{t('pf_eb')}</div>
        <h2>{t('pf_h')}</h2>
        <p className="lede">{t('pf_lede')}</p>
        <div className="grid-2" style={{ marginTop: 26 }}>
          <div className="card"><span className="chip gray">{t('pf1_c')}</span><h3 style={{ marginTop: 8 }}>{t('pf1_h')}</h3><T k="pf1_p" as="p" style={{ marginTop: 8, fontSize: 13.5 }} /></div>
          <div className="card"><span className="chip gray">{t('pf2_c')}</span><h3 style={{ marginTop: 8 }}>{t('pf2_h')}</h3><T k="pf2_p" as="p" style={{ marginTop: 8, fontSize: 13.5 }} /></div>
        </div>
        <p className="proof-note">{t('pf_note')}</p>
      </div>
      <div style={{ marginTop: 64 }} className="about-grid">
        <img src="/assets/portrait.jpg" alt="Imad Benallai, founder of Inflexion" style={{ width: '100%', borderRadius: 'var(--radius)', border: '1px solid var(--line)', display: 'block', boxShadow: 'var(--shadow)' }} />
        <div>
          <div className="eyebrow">{t('ab_eb')}</div>
          <h2>{t('ab_h')}</h2>
          <p style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--orange-deep)', marginTop: 2 }}>
            Founder &amp; CEO · <a href="https://www.nhancit.com" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1.5px solid var(--orange)' }}>www.nhancit.com</a> · {FRL ? "créateur d'Inflexion" : 'creator of Inflexion'}
          </p>
          <p style={{ maxWidth: 640, marginTop: 8 }}>{t('ab_p')}</p>
          <p style={{ maxWidth: 640, marginTop: 14 }}>{FRL ? "Mon objectif est simple : livrer des résultats tout en construisant la capacité interne de votre organisation à conduire seule les changements futurs." : "My objective is simple: deliver results while building your organization's internal capability to lead future change independently."}</p>
          <p style={{ maxWidth: 640, marginTop: 14 }}>{t('ab_net')}</p>
          <blockquote>{t('ab_q')}</blockquote>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
