// @ts-nocheck
export const TPL = [
 {name:"Change Definition Brief", phase:"Phase 1 · Frame the problem",
  intro:"Filled during the framing workshop, signed by the sponsor. Rule: no zone may contain a solution; if one appears, it goes back to line 1 as a stated problem.",
  sections:[
   {h:"The problem as stated", fields:[
    {l:"The client's words, verbatim", hint:"Resist the urge to improve them. The gap between this and the root cause is where the value lives.", r:3}]},
   {h:"Five whys", fields:[
    {l:"Why 1",r:1},{l:"Why 2",r:1},{l:"Why 3",r:1},{l:"Why 4",r:1},{l:"Why 5",r:1},
    {l:"Root cause hypothesis", hint:"One sentence. If it names a system, an incentive or a decision right, you are close. If it names a person, dig again.", r:2}]},
   {h:"Change type", fields:[
    {l:"Nature (developmental / transitional / transformational)",r:1},
    {l:"Origin (imposed / chosen)",r:1},
    {l:"Dominant dimension (structural / behavioral)",r:1}]},
   {h:"The outcome, defined observably", fields:[
    {l:"By [date], [population] does [observable behavior] at [level], without [prompting]", hint:"A deliverable is not an outcome. A slogan is not an outcome. If you cannot film it, it is not written yet.", r:3}]},
   {h:"Scope and populations", fields:[
    {l:"In scope",r:3},{l:"Out of scope (said now, or renegotiated forever)",r:3},
    {l:"Populations affected + impact level (H/M/L)",r:3}]},
   {h:"Sponsorship check", fields:[
    {l:"Sponsor name and role",r:1},
    {l:"Will they defend it at political cost? Mentioned it unprompted this month? Own the outcome above?", hint:"Answer honestly. A no here is a stop condition, not a formality.", r:3}]},
   {h:"Success metrics and sign-off", fields:[
    {l:"Three metrics maximum; at least one measures adoption, not delivery",r:3},
    {l:"Sponsor signature / date", hint:"No launch without signature. A change nobody will sign for is a change nobody owns.", r:1}]}]},

 {name:"Terrain Diagnosis Workbook", phase:"Phase 2 · Diagnose the terrain",
  intro:"Know the ground before choosing weapons. Triangulate: sponsors, managers, front line. One perspective is an opinion; three are a diagnosis.",
  sections:[
   {h:"Readiness profile", fields:[
    {l:"Sponsorship: evidence and score (/100)", hint:"Behaviors observed, not declarations.", r:2},
    {l:"Capacity to absorb: evidence and score", hint:"What else is this population carrying right now?", r:2},
    {l:"Cultural openness: evidence and score", hint:"What happened to the last person who challenged how things are done?", r:2},
    {l:"Change history: evidence and score", hint:"How are the last three changes remembered? What promises were broken?", r:2},
    {l:"Clarity of the ask: evidence and score", hint:"Run the three-managers test.", r:2}]},
   {h:"Stakeholder map", fields:[
    {l:"Key stakeholders: name · power (H/M/L) · attitude (champion / neutral / skeptic / opponent) · engagement move", hint:"One line each. Include the informal leaders, not just the org chart.", r:6}]},
   {h:"History audit", fields:[
    {l:"The last three comparable changes: what happened, what each one left behind",r:4}]},
   {h:"Informal organization", fields:[
    {l:"Who actually influences whom? Whose blessing makes or kills adoption?",r:3}]},
   {h:"Risk map", fields:[
    {l:"Top five risks: risk · likelihood · impact · early signal · mitigation owner",r:5}]}]},

 {name:"Assembly Playbook", phase:"Phase 3 · Select and assemble",
  intro:"Components, not religions. One spine, maximum three sources, and an explicit list of what you will NOT use.",
  sections:[
   {h:"The binding constraint", fields:[
    {l:"The weakest dimension from the diagnosis, and the evidence", hint:"The constraint dictates the opening moves.", r:2}]},
   {h:"The spine", fields:[
    {l:"Spine framework and why", hint:"Usually Kotter's arc (momentum problem) or ADKAR tracking (adoption problem).", r:2}]},
   {h:"Grafted components", fields:[
    {l:"Component 1: framework · which part exactly · why here",r:2},
    {l:"Component 2 (optional): framework · part · why",r:2}]},
   {h:"Deliberately not used", fields:[
    {l:"What we will NOT deploy, and why", hint:"Framework maximalism is the classic phase-3 mistake. Write the restraint down.", r:2}]},
   {h:"Wave logic and governance", fields:[
    {l:"Wave sequence outline: who first, why them, what proves what",r:3},
    {l:"Playbook owner · governance cadence · decision rights",r:2}]}]},

 {name:"Wave Execution Plan", phase:"Phase 4 · Apply in waves",
  intro:"Momentum before coverage. The pilot proves, the wins fuel, the governance protects.",
  sections:[
   {h:"Pilot", fields:[
    {l:"Pilot population and the credibility rationale", hint:"Credible-but-friendly. Not the enthusiasts: nobody believes their success.", r:2}]},
   {h:"Engineered quick wins", fields:[
    {l:"Win 1: what · visible by when · owner",r:1},
    {l:"Win 2: what · when · owner",r:1},
    {l:"Win 3: what · when · owner",r:1}]},
   {h:"Communication architecture", fields:[
    {l:"Audiences · messages · senders · channels · rhythm", hint:"Business reasons from executives; personal impact from direct managers. Sender credibility beats message polish.", r:4}]},
   {h:"Resistance log (live document)", fields:[
    {l:"Entries: source · root-cause hypothesis · response · owner · status", hint:"Resistance is data about what the diagnosis missed. Scheduled work, not firefighting.", r:5}]},
   {h:"Governance", fields:[
    {l:"Cadence · attendees · standing agenda · escalation path",r:3}]}]},

 {name:"Anchoring & Measurement Plan", phase:"Phase 5 · Anchor and measure",
  intro:"Make it survive your departure. A consultant who creates dependency has failed.",
  sections:[
   {h:"The three honest metrics", fields:[
    {l:"Adoption: definition · measure · target · source", hint:"Are they doing it? Logins are not adoption.", r:2},
    {l:"Proficiency: definition · measure · target", hint:"Are they doing it well, in real conditions?", r:2},
    {l:"Sustainability: definition · measure · target", hint:"Still doing it at month six, unprompted?", r:2}]},
   {h:"Systems audit", fields:[
    {l:"What still rewards the old way (incentives, targets, promotion criteria, tolerated exceptions)", hint:"This list, not the posters, is the anchoring roadmap.", r:4}]},
   {h:"Rituals and artifacts", fields:[
    {l:"To retire (with an actual ending) · to create",r:3}]},
   {h:"Capability transfer", fields:[
    {l:"Internal relays: names · what they take over · training plan · handover date",r:3}]},
   {h:"Re-measurement", fields:[
    {l:"M+3 and M+6 re-measure plan · exit criteria for the engagement",r:2}]}]}
];
