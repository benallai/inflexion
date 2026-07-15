/* Ask corpus: self-assembles from the content modules. Playbook EXCLUDED by design. */
// @ts-nocheck
import { FW } from './content/frameworks';
import { SITS } from './content/situations';
import { PHASES } from './content/phases';
import { DIAG_DIMS, DIAG_RECO } from './content/diagnostic';
import { GLOSS } from './content/glossary';
import { LIB } from './content/library';

let CORPUS: any[] | null = null;
const SIT_TAGS: Record<string, string> = {
  ghosttool: 'sap erp crm software tool system application version upgrade adoption usage login accountant accounting complicated productive workaround excel spreadsheet shadow refuse resistance training',
  stalled: 'stalled stuck momentum losing steam relaunch fading',
  erp: 'sap erp shared services standardization harmonization process unit',
  fatigue: 'fatigue tired saturation exhausted overload too many',
  merger: 'merger acquisition m&a integration culture clash fusion',
  survivors: 'layoff layoffs downsizing redundancy restructuring survivor',
  regulatory: 'regulation regulatory compliance imposed law legal gdpr',
  middlemgmt: 'middle manager managers resistance frozen silent quiet refuse',
  nosponsor: 'sponsor sponsorship weak absent missing leadership commitment',
  skills: 'ai automation digital skills upskilling reskilling fear obsolete',
  hybrid: 'hybrid remote office return rto flexibility work from home',
  culture: 'culture values behavior transformation program'
};

export function buildCorpus() {
  if (CORPUS) return CORPUS;
  const C: any[] = [];
  const add = (id: string, title: string, section: string, text: string, tags?: string) => C.push({ id, title, section, text, tags: tags || '' });

  Object.entries(FW).forEach(([id, f]: any) => {
    add('fw-' + id + '-o', f.name + ': overview and principles', 'Framework library', f.name + '. ' + f.desc + ' ' + f.overview + ' Created by ' + f.origin.creator + ' (' + f.origin.when + ', ' + f.origin.where + '). ' + f.origin.story + ' Core principles: ' + f.principles.join('; ') + '.');
    add('fw-' + id + '-w', f.name + ': when to use and when not', 'Framework library', f.name + '. Reach for it when: ' + f.whenYes.join('; ') + '. Leave it on the shelf when: ' + f.whenNo.join('; ') + '.');
    add('fw-' + id + '-m', f.name + ': methodology steps', 'Framework library', f.name + ' methodology: ' + f.steps.map((s: any, i: number) => (i + 1) + '. ' + s.t + ': ' + s.p).join(' ') + ' Key roles: ' + f.roles.join('; ') + '. Typical deliverables: ' + f.deliverables.join(', ') + '.');
    add('fw-' + id + '-p', f.name + ': pitfalls and case', 'Framework library', f.name + ' classic pitfalls: ' + f.pitfalls.map((p: any) => p.t + ': ' + p.p).join(' ') + ' Illustrative case (' + f.caseStudy.h + '): ' + f.caseStudy.p);
  });
  Object.entries(SITS).forEach(([id, s]: any) => {
    add('sit-' + id, 'Situation: ' + s.t, 'Situations index', s.t + '. How it presents: ' + s.d + ' What is usually underneath: ' + s.root + ' Recommended assembly: ' + s.asm.map((a: any) => FW[a.fw].name + ' (' + a.why + ')').join(' ') + ' How it plays out: ' + s.how.join(' ') + ' Watch out: ' + s.watch + ' Matching service: ' + s.svc + '.', SIT_TAGS[id] || '');
  });
  PHASES.forEach((p: any, i: number) => {
    add('ph-' + i, 'Method phase ' + (i + 1) + ': ' + p.n, 'The Problem-First Method', 'Phase ' + (i + 1) + ' of the Problem-First Change Method: ' + p.n + '. Objective: ' + p.obj + ' Key activities: ' + p.act + ' Tool: ' + p.tool + '. Deliverable: ' + p.del + '. Typical duration: ' + p.dur + '. The classic mistake: ' + p.mis);
  });
  add('method-core', 'The Problem-First Change Method: philosophy and assembly rules', 'The Problem-First Method', 'The Problem-First Change Method holds that most change programs fail because someone picked a framework before understanding the problem. Frameworks are component libraries, not religions. Assembly rules: one spine framework (usually Kotter for the mobilization arc or ADKAR for adoption tracking) plus targeted grafted components, never more than three sources total. The assembly matrix maps diagnostic findings to components: urgency deficit maps to Kotter steps 1 to 4; individual adoption bottleneck maps to ADKAR as tracking spine; imposed change with grief maps to Bridges endings work first; diffuse structural symptoms map to 7-S as diagnostic grid; behaviors that must stick map to ADKAR Reinforcement plus Lewin refreeze; small contained scope maps to Lewin over Kotter.');
  add('method-lambda', 'Worked case: Client Lambda (IT services, fictional illustrative)', 'The Problem-First Method', 'Client Lambda is a fictional illustrative case: an IT services company of 1,200 people where the COO asked for change management training because engineers refused the new delivery platform. The framing sprint found the real causes: utilization-based bonuses punished platform work, and the golden paths automated senior engineers hard-won expertise. Diagnosis found soft sponsorship at delivery-director level, scar tissue from a failed agile transformation, and the architects guild as the informal power node. Assembly: ADKAR spine, Bridges endings graft, Kotter quick-wins wave logic. Waves included guild co-design of golden paths and a redefinition of utilization. Illustrative outcomes: adoption 22 to 84 percent by month nine, zero regretted senior departures, director sponsorship score from 41 to 74.');
  add('diag-dims', 'The readiness diagnostic: five dimensions', 'Readiness diagnostic', 'The Inflexion readiness diagnostic profiles an organization across five research-based dimensions: ' + Object.values(DIAG_DIMS).map((d: any) => d.name + ' (' + d.short + ')').join('; ') + '. It uses 12 behavioral and scenario questions, outputs a profile with risk flags, never a single score. Sources synthesized: Weiner organizational readiness theory, Armenakis and Harris readiness beliefs, Prosci readiness factors, BCG DICE variables. One perspective is an opinion; a real diagnostic triangulates sponsors, managers and the front line.');
  Object.entries(DIAG_RECO).forEach(([k, r]: any) => add('diag-reco-' + k, 'Diagnostic recommendation: ' + r.title, 'Readiness diagnostic', r.title + '. ' + r.body));
  GLOSS.forEach((g: any, i: number) => add('gl-' + i, 'Glossary: ' + g.en + ' / ' + g.fr, 'Glossary', g.en + ' (French: ' + g.fr + '): ' + g.p));
  LIB.forEach((l: any, i: number) => add('lib-' + i, 'Source: ' + l.t + ' (' + l.a + ', ' + l.y + ')', 'Research library', l.t + ' by ' + l.a + ' (' + l.y + ', ' + l.type + '). ' + l.what + ' How this platform uses it: ' + l.use));
  add('svc', 'Consulting services ladder', 'Consulting', 'Inflexion offers five services: 01 Framing Sprint (one to two weeks on the problem as stated, fixed scope and price, delivering a sponsor-signed Change Brief; the entry point). 02 Readiness Diagnostic (two weeks, multi-perspective triangulation, readiness profile and risk map). 03 Transformation Support (end-to-end deployment of the five phases with governance and resistance work). 04 Training and Academies (workshops on the frameworks and the method, in English or French). 05 Sponsor and Leader Coaching (the sponsor behavior is the strongest predictor of success). Every engagement ends with capability transferred, not dependency.');
  add('case-s4', 'Illustrative case: SAP S/4HANA finance adoption', 'Consulting', 'Fictional composite: an industrial group of 3,200 people, eleven months after S/4HANA go-live, with the 45-person accounting team living in exported spreadsheets, Fiori adoption at 28 percent and the close gone from six to nine days. Diagnosis found mastery loss among veterans (ECC transaction codes typed from muscle memory versus searching Fiori tiles), transaction-based instead of close-process-based training, and deadline pressure making Excel rational. Assembly: ADKAR spine segmented (seniors blocked at Desire, juniors at Ability), Bridges endings for expertise loss, Lewin force field on the close. Illustrative outcomes: close back to five days by month eight, Fiori adoption 86 percent, zero regretted departures.', 'sap s4hana s4 hana ecc erp fiori upgrade migration version accountant accountants accounting finance financial controller close complicated complexity productive productivity spreadsheet excel workaround refuse adoption');
  add('case-bank', 'Illustrative case: bank waterfall to agile', 'Consulting', 'Fictional composite: a retail bank of 4,800 people, eight months into an agile operating model with the mechanics installed and the spirit absent: standups as status theater, sprint plans signed like gates, double bureaucracy because risk still required stage-gate documents. Diagnosis: annual budgets and stage-gated risk approvals made iteration structurally impossible (7-S contradiction), ex project managers converted ceremonies into control instruments (identity loss), and error-averse culture made standup honesty unsafe. Assembly: 7-S to executives, Bridges for the PM transition, ADKAR at squad level, Kotter quick-win logic on one flagship value stream with quarterly funding and a redesigned risk path. Illustrative outcomes: cycle time from six months to six weeks on the flagship, business attendance at reviews from 20 to 90 percent, zero forced PM exits.', 'agile scrum standup stand-up sprint ceremony waterfall cascade bank banking squad tribe kanban retrospective velocity backlog');
  add('toolkit', 'Toolkit: nine free consulting canvases', 'Toolkit', 'The Inflexion toolkit offers nine consulting canvases, all free, fillable online, downloadable as editable files and exportable to Word: the Change Definition Canvas (frame the problem before the solution, sponsor sign-off rule), the Change Charter (one-page contract of the change), the Stakeholder Power-Attitude Map, the Sponsor Roadmap (sponsorship as scheduled behavior), the Readiness Risk Map, Lewin Force Field Analysis, the Communication Plan (conversation architecture with sender rules), the Impact Assessment (who changes what, per population), and the Resistance Log (resistance treated as data). The complete kit downloads as one editable file. No email or signup required.');
  CORPUS = C;
  return C;
}

const ASK_STOP = new Set(['the','a','an','and','or','of','to','in','on','for','is','are','be','with','what','how','do','does','my','our','we','you','i','it','that','this','de','la','le','les','un','une','et','en','est','que','pour','dans','du','au','aux','change','changement','management','gestion','organization','organisation','project','projet','deal','they','them','their','use','new']);
export function retrieve(q: string, k = 8) {
  const corpus = buildCorpus();
  const words = q.toLowerCase().replace(/[^a-z0-9àâçéèêëîïôûùüÿ\s-]/g, ' ').split(/\s+/).filter((w) => w.length > 2 && !ASK_STOP.has(w));
  return corpus
    .map((c: any) => {
      const hay = (c.title + ' ' + c.text).toLowerCase();
      const tl = c.title.toLowerCase();
      const tg = (c.tags || '').toLowerCase();
      let s = 0;
      words.forEach((w) => { if (tg.includes(w)) s += 4; if (tl.includes(w)) s += 3; if (hay.includes(w)) s += 1; });
      return { c, s };
    })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, k)
    .map((x) => x.c);
}
