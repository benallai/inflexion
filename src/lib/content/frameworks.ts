/* AUTO-EXTRACTED from the vanilla build. */
// @ts-nocheck
export const FAMILIES = [
 {id:"foundational", name:"Foundational", desc:"The load-bearing models of the discipline. Master these first."},
 {id:"diagnosis", name:"Diagnosis & strategy", desc:"Grids for locating what is misaligned before deciding what to change."},
 {id:"behavioral", name:"Human & behavioral", desc:"Where change actually happens: emotions, habits, choices."}
];

export const FW = {

kotter: {
 family:"foundational", name:"Kotter's 8 Steps", tag:"Mobilization",
 glyph:[8,12,16,20,24,28,32,34],
 desc:"The momentum machine for large, top-led transformations.",
 overview:"John Kotter's model treats transformation as a momentum problem: organizations fail not from bad strategy but from insufficient urgency, coalition and reinforcement. Its eight steps form a sequential arc from creating urgency to anchoring new ways in culture. It remains the reference for enterprise-wide, leadership-driven change. One nuance Kotter himself added in Accelerate (2014): the eight steps work less as a strict staircase and more as concurrent accelerators running on a volunteer network alongside the hierarchy. Treat the sequence as a checklist of conditions to satisfy, not a calendar.",
 origin:{creator:"John P. Kotter", when:"1996", where:"Harvard Business School", story:"Published in Leading Change after Kotter studied over 100 transformation efforts and found the same eight errors recurring. The 2014 update (Accelerate) added a dual operating system concept: network alongside hierarchy."},
 principles:["Momentum is the scarce resource, not strategy","Change is led, not managed: 70 to 90% leadership","Sequence matters; skipping steps creates illusion of speed","Short-term wins are fuel, engineered not hoped for","Nothing is done until it is anchored in culture"],
 whenYes:["The change is large-scale and top-led","Momentum and visible sponsorship are the scarce resources","You need a communicable arc the whole organization can follow"],
 whenNo:["The scope is one team; the machinery is overkill (use Lewin)","The bottleneck is individual adoption, not momentum (use ADKAR)","The change is imposed and grief dominates (start with Bridges)"],
 steps:[
  {t:"Create urgency",p:"Make the cost of the status quo visceral: market data, customer voice, honest scenarios. Target: 75% of leadership genuinely convinced."},
  {t:"Build the guiding coalition",p:"Recruit on power, expertise, credibility and leadership, not job titles. Informal leaders included."},
  {t:"Form the vision and strategy",p:"A vision you can say in five minutes and remember in five words."},
  {t:"Communicate for buy-in",p:"Ten times more than feels necessary, through behavior as much as words."},
  {t:"Remove obstacles",p:"Systems, structures and, hardest of all, people who block the vision."},
  {t:"Generate short-term wins",p:"Visible, unambiguous, engineered into the first months by design."},
  {t:"Consolidate and push further",p:"The most violated step: declaring victory too early kills more transformations than resistance does."},
  {t:"Anchor in culture",p:"New behaviors must outlive their champions, wired into hiring, promotion, rituals."}],
 roles:["Executive sponsor: owns urgency and the vision publicly","Guiding coalition: 8 to 15 members mixing power and credibility","Change leaders in each unit: translate the arc locally"],
 deliverables:["Urgency case (data-backed)","Coalition charter","Vision statement + strategy on a page","Communication architecture","Quick-wins plan","Culture anchoring plan"],
 caseStudy:{chip:"Anonymized engagement pattern", h:"Regional bank, 2,400 people, digital-first pivot", p:"Diagnosis showed the classic Kotter case: strategy sound, urgency absent. The branch network was still profitable, so nobody felt the platform burning. Steps 1 to 4 were deployed over four months (customer-defection data made visceral, coalition of 14 including two informal branch leaders), then adoption tracking was handed to an ADKAR spine. The assembly logic in action."},
 pitfalls:[
  {t:"Urgency theater",p:"A kickoff event is not urgency. Urgency is what leaders do when nobody's watching."},
  {t:"Coalition of the convenient",p:"Picking allies instead of the credible. A coalition without skeptics convinces no one."},
  {t:"Declaring victory at the pilot",p:"Step 7 exists because regression is the default. Culture reverts unless consolidated."}],
 related:["adkar","lewin","sevens"],
 attrib:"Kotter's 8-Step Model was developed by John P. Kotter (Harvard Business School). Presented for educational purposes with original commentary; no affiliation implied."
},

adkar: {
 family:"foundational", name:"ADKAR", tag:"Individual adoption",
 glyph:[20,24,28,24,20],
 desc:"Awareness, Desire, Knowledge, Ability, Reinforcement. Change, one person at a time.",
 overview:"ADKAR reframes organizational change as the sum of individual changes: an organization has adopted nothing until its people have. The five elements are sequential building blocks; a person blocked at Desire cannot be helped with more Knowledge. Its power is diagnostic precision: locating exactly where each population is stuck.",
 origin:{creator:"Jeff Hiatt", when:"2003", where:"Prosci (Colorado, USA)", story:"Built from Prosci's benchmarking studies across hundreds of organizations. It became the operational core of the Prosci methodology, the most certified change approach worldwide."},
 principles:["Organizations don't change; people do, one at a time","The five elements are sequential: each requires the previous","Barrier-point diagnosis: find the stuck element, treat that one","Managers, not the project team, are the closest change lever","Reinforcement is a phase, not an afterthought"],
 whenYes:["Adoption of a system, process or behavior is the bottleneck","You need to track change progress population by population","People managers can be mobilized as the relay"],
 whenNo:["The problem is strategic misalignment, not adoption (use 7-S)","Nobody senior owns the change; ADKAR assumes sponsorship exists","You need an organizational mobilization arc (pair with Kotter)"],
 steps:[
  {t:"Awareness",p:"Of the nature of the change and why it is needed. Built by credible senders: business reasons from executives, personal impact from direct managers."},
  {t:"Desire",p:"The personal decision to support and engage. The only element you cannot mandate; built through WIIFM, involvement, and visible sponsorship."},
  {t:"Knowledge",p:"How to change: training, information, examples. Only useful once Desire exists."},
  {t:"Ability",p:"Demonstrated capability in real conditions. Knowledge is not ability; practice, coaching and time make the difference."},
  {t:"Reinforcement",p:"Making it stick: recognition, measurement, incentive alignment, correction of relapses."}],
 roles:["Sponsor: authorizes and legitimizes (Awareness, Desire)","People managers: closest to each individual, in Prosci's five CLARC roles (Communicator, Liaison, Advocate, Resistance manager, Coach)","Change practitioner: instruments the barrier-point diagnosis"],
 deliverables:["ADKAR assessments by population","Barrier-point heat map","Manager enablement kit","Reinforcement plan"],
 caseStudy:{chip:"Anonymized engagement pattern", h:"Insurer, 900 people, core-system migration", p:"Training completion was 96% and adoption was 31%: a textbook Ability/Desire confusion. ADKAR assessments located the barrier at Desire for senior agents (the new system exposed their shortcuts) and at Ability for back-office (no safe practice environment). Two different treatments, one tracking spine; sponsor-reported adoption reached near-universal by month 9."},
 pitfalls:[
  {t:"Treating it as a communications checklist",p:"Sending five emails titled A, D, K, A, R is not ADKAR. Each element is a state to verify in people, not a message to send."},
  {t:"Skipping Desire because it's uncomfortable",p:"Desire is where resistance lives. Teams jump to training because Knowledge feels safer. It never works."},
  {t:"Measuring training instead of ability",p:"Completion rates measure attendance. Ability is demonstrated performance in real conditions."}],
 related:["kotter","bridges","curve"],
 attrib:"ADKAR® is a registered trademark of Prosci Inc. Inflexion is independent and not affiliated with Prosci; the model is presented for educational purposes with original commentary and original assessment materials."
},

lewin: {
 family:"foundational", name:"Lewin's Model", tag:"Foundational",
 glyph:[30,18,30],
 desc:"Unfreeze, change, refreeze. Deceptively simple; still the cleanest model for contained scopes.",
 overview:"The grandfather of change models. Lewin saw organizations as held in equilibrium by opposing forces; change requires destabilizing that equilibrium (unfreeze), moving to a new state (change), then stabilizing it (refreeze). Paired with his Force Field Analysis, it remains unbeatable for clarity on contained, well-defined changes.",
 origin:{creator:"Kurt Lewin", when:"1947", where:"MIT, USA", story:"Lewin, a social psychologist and refugee from Nazi Germany, founded the field itself: 'group dynamics' and 'action research' are his terms. The three-phase model appeared in his final papers; virtually every later framework is an elaboration of it."},
 principles:["Behavior is an equilibrium of driving and restraining forces","Weakening restraining forces beats adding pressure","Change requires destabilization before movement","A change not refrozen will revert","Involve the group: people support what they help create"],
 whenYes:["The scope is contained: a team, a process, a defined practice","You need a model everyone understands in five minutes","A stable end-state genuinely exists to refreeze into"],
 whenNo:["The environment changes continuously; refreezing is a fiction (use agile approaches)","The change is enterprise-wide and political (use Kotter)","Individual adoption tracking is needed at scale (use ADKAR)"],
 steps:[
  {t:"Unfreeze",p:"Run a Force Field Analysis: list driving and restraining forces. Create safety to let go of the current state; challenge the status quo with data and involvement."},
  {t:"Change (move)",p:"Implement with participation. Communicate constantly, provide practice space, expect a temporary performance dip and protect people through it."},
  {t:"Refreeze",p:"Institutionalize: procedures, incentives, celebration, measurement. Without this phase the elastic snaps back."}],
 roles:["Team leader or manager: owns the local equilibrium","Facilitator: runs the force field and involvement work","The group itself: Lewin's central actor"],
 deliverables:["Force Field Analysis","Involvement plan","Stabilization checklist"],
 caseStudy:{chip:"Anonymized engagement pattern", h:"Claims team, 40 people, workflow redesign", p:"A force field session surfaced the real restraining force: the team's informal quality ritual, threatened by the new flow. Redesigning the ritual into the new process (rather than pushing harder on benefits) flipped the equilibrium in three weeks. Kotter would have been a sledgehammer for this walnut."},
 pitfalls:[
  {t:"Forgetting refreeze",p:"The most skipped phase. Three months later the old habits are back and everyone says 'we tried that'."},
  {t:"Adding drivers instead of removing restraints",p:"Lewin's own point: pushing harder raises tension. Removing a restraining force moves the equilibrium at lower cost."},
  {t:"Using it beyond its scale",p:"Three boxes cannot govern a 5,000-person transformation. Respect its scope."}],
 related:["kotter","sevens"],
 attrib:"Kurt Lewin's model and Force Field Analysis are foundational academic works. Presented for educational purposes with original commentary."
},

bridges: {
 family:"foundational", name:"Bridges' Transition Model", tag:"The human side",
 glyph:[14,22,32],
 desc:"Change is an event; transition is psychological. Endings before beginnings.",
 overview:"Bridges' central distinction: change is situational (the new org chart, the new system) while transition is psychological (letting go, crossing the wilderness, beginning again). Organizations manage the change and neglect the transition, then wonder why the new structure is staffed by people still living in the old one. The model's radical move: transitions start with endings.",
 origin:{creator:"William Bridges", when:"1979 / 1991", where:"USA", story:"Bridges, a literature professor turned consultant, published Transitions in 1979 for individuals, then Managing Transitions in 1991 for organizations. His widow Susan Bridges continues the work."},
 principles:["Change is external; transition is internal","Every beginning requires an ending first","The neutral zone is uncomfortable and creative; don't rush it","People let go at different speeds; honor the losses","What is not grieved is carried into the new world"],
 whenYes:["The change is imposed: merger, restructuring, closure, regulation","Grief, identity loss or nostalgia is visibly in the room","A previous change failed for 'inexplicable' emotional reasons"],
 whenNo:["The change is chosen and energizing; endings work would be forced","You need an execution machine; Bridges is a lens, not a project plan (pair it)","Speed genuinely matters more than depth of adoption, and you accept the cost"],
 steps:[
  {t:"Endings: acknowledge the losses",p:"Name specifically what each group loses: competence, relationships, status, identity. Mark the ending, honor the past, let people keep a piece of it."},
  {t:"The neutral zone: manage the wilderness",p:"The in-between where the old is gone and the new isn't real yet. Anxiety rises, productivity dips, and paradoxically creativity peaks. Provide temporary structures, short-term goals, over-communication."},
  {t:"New beginnings: the 4 P's",p:"Purpose, Picture, Plan, Part. People commit to a beginning when they understand why, can see it, know the path, and have a role in it."}],
 roles:["Leaders: model the letting-go publicly","Managers: hold the conversations about loss, one by one","HR / change team: design the transition rituals"],
 deliverables:["Loss analysis by population","Transition monitoring (who is where)","Neutral-zone support plan","4 P's beginnings brief"],
 caseStudy:{chip:"Anonymized engagement pattern", h:"Two merged public directorates, open culture conflict", p:"Eighteen months post-merger, 'process debates' were actually unmourned identity. Endings work (joint sessions honoring each directorate's history, symbolic artifacts kept) unlocked what three procedure workshops could not. Cross-unit staffing became routine within two quarters, sponsor-confirmed."},
 pitfalls:[
  {t:"Selling the beginning before honoring the ending",p:"Enthusiastic vision talk to grieving people reads as contempt. Sequence is everything."},
  {t:"Treating the neutral zone as dead time",p:"Rushing it produces false starts. It is where the real reorientation happens."},
  {t:"One-size grief",p:"The same change is a loss for one group and a liberation for another. Loss analysis must be per population."}],
 related:["curve","adkar"],
 attrib:"The Transition Model was developed by William Bridges (Managing Transitions). Presented for educational purposes with original commentary."
},

sevens: {
 family:"diagnosis", name:"McKinsey 7-S", tag:"Diagnosis",
 glyph:[22,26,20,30,24,28,22],
 desc:"Seven interdependent elements. The grid for locating structural misalignment.",
 overview:"7-S is not a change process; it is a diagnostic grid. Seven elements (Strategy, Structure, Systems, Shared values, Skills, Style, Staff) must align for an organization to perform; change one and the others pull it back unless realigned. Its enduring insight: the soft S's (values, style, skills, staff) beat the hard ones (strategy, structure, systems) in the long run.",
 origin:{creator:"Tom Peters, Robert Waterman, et al.", when:"circa 1980", where:"McKinsey & Company", story:"Developed inside McKinsey and popularized by In Search of Excellence (1982). One of the rare consulting frameworks to survive four decades of scrutiny."},
 principles:["Organizations are systems of seven interdependent elements","Misalignment, not weakness, is the usual disease","Soft S's are harder to change and more decisive","Shared values sit at the center, connecting everything","Diagnosis before prescription, always"],
 whenYes:["Symptoms are diffuse: 'something is off' but nobody agrees what","Post-merger or post-reorganization integration","Before designing any major change: locate what must move"],
 whenNo:["You already know precisely what must change (go execute)","You need a process with steps and timeline; 7-S has none (pair with Kotter or Lewin)","The issue is individual adoption of a specific tool (use ADKAR)"],
 steps:[
  {t:"Map the current state of each S",p:"Strategy, Structure, Systems, Shared values, Skills, Style, Staff: evidence-based, not aspiration-based. Interviews plus artifacts."},
  {t:"Define the target state per S",p:"What must each element look like for the strategy to work?"},
  {t:"Locate the misalignments",p:"The gaps AND the contradictions between elements: a collaboration strategy with individual bonuses is a misalignment, not a communication problem."},
  {t:"Sequence the realignment",p:"Which S moves first, which follow. Hand S's move fast on paper and slow in reality; soft S's the reverse."},
  {t:"Hand off to an execution model",p:"7-S tells you what to change. Kotter, ADKAR or Lewin get it done."}],
 roles:["Diagnostic lead: runs interviews and evidence collection","Leadership team: owns the target-state definition","Analyst: documents contradictions without politics"],
 deliverables:["7-S current-state map","Target-state definition","Misalignment matrix","Realignment sequence"],
 caseStudy:{chip:"Anonymized engagement pattern", h:"Industrial group, post-acquisition drift", p:"Two years after acquiring a competitor, integration 'was done' on paper: structure merged, systems unified. The 7-S scan located the live misalignments: Style (command-and-control meets consensus culture) and Staff (key acquired talent quietly exiting). The realignment plan targeted those two S's; the structural work was already fine and had been absorbing all the attention."},
 pitfalls:[
  {t:"Auditing the hard S's only",p:"Strategy decks and org charts are easy to collect. The soft S's require listening, and they decide the outcome."},
  {t:"Treating it as a one-time snapshot",p:"Alignment decays. Re-scan at each major milestone."},
  {t:"Diagnosis as the deliverable",p:"A beautiful misalignment matrix changes nothing. Budget the execution handoff from day one."}],
 related:["kotter","lewin"],
 attrib:"The 7-S Framework was developed at McKinsey & Company. Presented for educational purposes with original commentary; no affiliation implied."
},

curve: {
 family:"behavioral", name:"The Change Curve", tag:"Resistance dynamics",
 glyph:[30,20,10,16,26,34],
 desc:"From shock to integration: reading where your people are, and meeting them there.",
 overview:"Adapted from Kübler-Ross's grief research, the Change Curve maps the emotional journey through imposed change: shock, denial, frustration, the valley, experimentation, decision, integration. It is not a process to run but a reading instrument: each stage calls for a different leadership response, and the classic management error is sending stage-6 messages to stage-2 people.",
 origin:{creator:"Elisabeth Kübler-Ross (adapted)", when:"1969, adapted from the 1980s onward", where:"originally end-of-life research, Switzerland/USA", story:"Kübler-Ross's five stages of grief (On Death and Dying, 1969) were adapted by change practitioners who recognized the same emotional arc in organizational loss. The adaptation is the field's, not hers; serious use acknowledges both."},
 principles:["Imposed change triggers a grief-like emotional arc","Stages are typical, not universal or strictly linear","Each stage requires a different response: information, empathy, direction, encouragement","The valley is normal; panic reactions to it cause the damage","You cannot skip people past stages; you can accompany them through faster"],
 whenYes:["The change is imposed and represents a loss for identifiable groups","Leaders need a shared language for the emotional weather","Timing communications: what to say when, to whom"],
 whenNo:["The change is welcomed; forcing a grief lens is absurd","You need an execution or tracking machine (pair with ADKAR)","As a labeling device for individuals ('she's in denial'): that's misuse"],
 steps:[
  {t:"Shock and denial: inform",p:"Short, clear, factual, repeated. Big-picture vision speeches bounce off; people can barely hear."},
  {t:"Frustration and anger: listen",p:"Legitimize the emotion without negotiating the change. The worst response is argument; the second worst is hiding."},
  {t:"The valley: hold",p:"Lowest energy, highest doubt. Presence, small structure, patience. This is where leaders who disappear lose their people."},
  {t:"Experimentation: encourage",p:"First tentative engagement with the new. Make trying safe; celebrate attempts, not just successes."},
  {t:"Decision and integration: reinforce",p:"People rebuild competence and identity. Recognition, responsibility, and capturing what was learned."}],
 roles:["Leaders: calibrate the message to the stage","Managers: read their team's position honestly","Change team: instrument the reading (pulse checks, listening sessions)"],
 deliverables:["Emotional pulse mapping by population","Stage-calibrated communication plan","Manager conversation guides"],
 caseStudy:{chip:"Anonymized engagement pattern", h:"Site consolidation, 300 people relocated", p:"Leadership had announced the move with an enthusiastic town hall (stage-6 message) into a stage-1 room, and interpreted the silence as acceptance. Pulse mapping showed 70% between frustration and the valley three months later. Resetting the communication to stage-appropriate (managers listening one-to-one, no vision speeches for six weeks) turned the corner measurably in the next pulse."},
 pitfalls:[
  {t:"Using it to label people",p:"'He's just in denial' turns a reading instrument into a dismissal device. The curve describes; it never diagnoses individuals."},
  {t:"Expecting linearity",p:"People loop, regress, and move at different speeds. The curve is a map, not a schedule."},
  {t:"Vision speeches in the valley",p:"Enthusiasm calibrated to the leader's stage, not the audience's. The most common communication error in imposed change."}],
 related:["bridges","adkar"],
 attrib:"Adapted from the work of Elisabeth Kübler-Ross (On Death and Dying, 1969). The organizational adaptation is presented for educational purposes with original commentary."
}
};

export const FW_FR = {
kotter:{
 desc:"La machine à élan des grandes transformations portées par la direction.",
 overview:"Le modèle de John Kotter traite la transformation comme un problème d'élan : les organisations échouent rarement par manque de stratégie, mais par déficit d'urgence, de coalition et d'ancrage. Ses huit étapes forment un arc séquentiel, de la création du sentiment d'urgence à l'ancrage culturel. Il reste la référence des changements d'envergure portés par le sommet. Une nuance apportée par Kotter lui-même dans Accelerate (2014) : les huit étapes fonctionnent moins comme un escalier strict que comme des accélérateurs concurrents portés par un réseau de volontaires aux côtés de la hiérarchie. Traiter la séquence comme une liste de conditions à satisfaire, pas comme un calendrier.",
 origin:{creator:"John P. Kotter", when:"1996", where:"Harvard Business School", story:"Publié dans Leading Change après l'étude de plus de 100 transformations où Kotter retrouvait les mêmes huit erreurs. La mise à jour de 2014 (Accelerate) introduit le double système d'exploitation : un réseau agile aux côtés de la hiérarchie."},
 principles:["L'élan est la ressource rare, pas la stratégie","Le changement se conduit, il ne s'administre pas : 70 à 90 % de leadership","La séquence compte ; sauter une étape crée une illusion de vitesse","Les victoires rapides sont un carburant : on les fabrique, on ne les espère pas","Rien n'est acquis tant que ce n'est pas ancré dans la culture"],
 whenYes:["Le changement est d'envergure et porté par la direction","L'élan et le portage visible sont les ressources rares","Il faut un arc lisible que toute l'organisation peut suivre"],
 whenNo:["Le périmètre se limite à une équipe ; la machinerie est disproportionnée (préférer Lewin)","Le goulot est l'adoption individuelle, pas l'élan (préférer ADKAR)","Le changement est subi et le deuil domine (commencer par Bridges)"],
 steps:[
  {t:"Créer l'urgence",p:"Rendre viscéral le coût du statu quo : données marché, voix du client, scénarios honnêtes. Cible : 75 % de la direction réellement convaincue."},
  {t:"Constituer la coalition directrice",p:"Recruter sur le pouvoir, l'expertise, la crédibilité et le leadership, pas sur les titres. Leaders informels inclus."},
  {t:"Formuler la vision et la stratégie",p:"Une vision qui se dit en cinq minutes et se retient en cinq mots."},
  {t:"Communiquer pour l'adhésion",p:"Dix fois plus qu'il ne semble nécessaire, par les comportements autant que par les mots."},
  {t:"Lever les obstacles",p:"Les systèmes, les structures et, le plus dur, les personnes qui bloquent la vision."},
  {t:"Générer des victoires rapides",p:"Visibles, sans ambiguïté, fabriquées dès les premiers mois, à dessein."},
  {t:"Consolider et amplifier",p:"L'étape la plus violée : crier victoire trop tôt tue plus de transformations que la résistance."},
  {t:"Ancrer dans la culture",p:"Les nouveaux comportements doivent survivre à leurs champions : recrutement, promotion, rituels."}],
 roles:["Sponsor exécutif : porte l'urgence et la vision publiquement","Coalition directrice : 8 à 15 membres mêlant pouvoir et crédibilité","Relais du changement dans chaque entité : traduisent l'arc localement"],
 deliverables:["Dossier d'urgence (étayé par les données)","Charte de coalition","Vision + stratégie sur une page","Architecture de communication","Plan de victoires rapides","Plan d'ancrage culturel"],
 caseStudy:{chip:"Schéma de mission anonymisé", h:"Banque régionale, 2 400 personnes, virage digital", p:"Le diagnostic révélait le cas Kotter classique : stratégie saine, urgence absente. Le réseau d'agences restait rentable, personne ne sentait la plateforme brûler. Les étapes 1 à 4 ont été déployées sur quatre mois (données de défection client rendues viscérales, coalition de 14 dont deux leaders informels d'agence), puis le suivi d'adoption confié à une colonne vertébrale ADKAR. La logique d'assemblage en action."},
 pitfalls:[
  {t:"Le théâtre de l'urgence",p:"Un événement de lancement n'est pas de l'urgence. L'urgence, c'est ce que font les dirigeants quand personne ne regarde."},
  {t:"La coalition des complaisants",p:"Choisir des alliés plutôt que des crédibles. Une coalition sans sceptique converti ne convainc personne."},
  {t:"Crier victoire au pilote",p:"L'étape 7 existe parce que la régression est la norme. La culture reprend ses droits si l'on ne consolide pas."}],
 attrib:"Le modèle en 8 étapes a été développé par John P. Kotter (Harvard Business School). Présenté à des fins pédagogiques avec un commentaire original ; aucune affiliation."
},
adkar:{
 desc:"Conscience, Volonté, Savoir, Capacité, Renforcement. Le changement, une personne à la fois.",
 overview:"ADKAR reformule le changement organisationnel comme la somme des changements individuels : une organisation n'a rien adopté tant que ses personnes n'ont pas adopté. Les cinq éléments sont des blocs séquentiels ; une personne bloquée à la Volonté ne sera pas aidée par plus de Savoir. Sa force : la précision diagnostique, localiser exactement où chaque population est bloquée.",
 origin:{creator:"Jeff Hiatt", when:"2003", where:"Prosci (Colorado, États-Unis)", story:"Issu des études de benchmarking de Prosci auprès de centaines d'organisations. Devenu le cœur opérationnel de la méthodologie Prosci, l'approche la plus certifiée au monde."},
 principles:["Les organisations ne changent pas ; les personnes changent, une à une","Les cinq éléments sont séquentiels : chacun exige le précédent","Diagnostic du point de blocage : trouver l'élément bloqué, traiter celui-là","Les managers de proximité, pas l'équipe projet, sont le levier le plus proche","Le renforcement est une phase, pas une arrière-pensée"],
 whenYes:["L'adoption d'un système, d'un processus ou d'un comportement est le goulot","Il faut suivre la progression population par population","Les managers de proximité peuvent être mobilisés comme relais"],
 whenNo:["Le problème est un désalignement stratégique, pas d'adoption (préférer 7-S)","Personne ne porte le changement au sommet ; ADKAR suppose un sponsor","Il faut un arc de mobilisation organisationnelle (coupler avec Kotter)"],
 steps:[
  {t:"Conscience (Awareness)",p:"De la nature du changement et de sa nécessité. Construite par des émetteurs crédibles : les raisons business par la direction, l'impact personnel par le manager direct."},
  {t:"Volonté (Desire)",p:"La décision personnelle de s'engager. Le seul élément qu'on ne peut pas imposer ; se construit par le « qu'est-ce que j'y gagne », l'implication et le portage visible."},
  {t:"Savoir (Knowledge)",p:"Comment changer : formation, information, exemples. Utile seulement quand la Volonté existe."},
  {t:"Capacité (Ability)",p:"La compétence démontrée en conditions réelles. Savoir n'est pas pouvoir ; la pratique, le coaching et le temps font la différence."},
  {t:"Renforcement (Reinforcement)",p:"Faire tenir : reconnaissance, mesure, alignement des incitations, correction des rechutes."}],
 roles:["Sponsor : autorise et légitime (Conscience, Volonté)","Managers de proximité : au plus près de chaque individu, dans les cinq rôles CLARC de Prosci (Communicant, Liaison, Avocat, gestionnaire de Résistance, Coach)","Praticien du changement : instrumente le diagnostic des points de blocage"],
 deliverables:["Évaluations ADKAR par population","Cartographie des points de blocage","Kit d'appui aux managers","Plan de renforcement"],
 caseStudy:{chip:"Schéma de mission anonymisé", h:"Assureur, 900 personnes, migration du système cœur", p:"96 % de formation complétée, 31 % d'adoption : la confusion Capacité/Volonté dans le manuel. Les évaluations ADKAR ont localisé le blocage à la Volonté chez les agents seniors (le nouveau système exposait leurs raccourcis) et à la Capacité au back-office (pas d'environnement d'entraînement). Deux traitements différents, une seule colonne de suivi ; adoption quasi générale au neuvième mois, confirmée par le sponsor."},
 pitfalls:[
  {t:"Le traiter comme une checklist de communication",p:"Envoyer cinq e-mails intitulés A, D, K, A, R n'est pas ADKAR. Chaque élément est un état à vérifier chez les personnes, pas un message à envoyer."},
  {t:"Sauter la Volonté parce qu'elle dérange",p:"C'est là que vit la résistance. Les équipes filent vers la formation parce que le Savoir rassure. Ça ne marche jamais."},
  {t:"Mesurer la formation au lieu de la capacité",p:"Les taux de complétion mesurent la présence. La Capacité, c'est la performance démontrée en conditions réelles."}],
 attrib:"ADKAR® est une marque déposée de Prosci Inc. Inflexion est indépendant et non affilié à Prosci ; le modèle est présenté à des fins pédagogiques avec un commentaire et des supports originaux."
},
lewin:{
 desc:"Décristalliser, changer, recristalliser. Faussement simple ; toujours le plus net pour les périmètres contenus.",
 overview:"Le grand-père des modèles du changement. Pour Lewin, l'organisation tient en équilibre entre des forces opposées ; changer exige de déstabiliser cet équilibre (décristallisation), de se déplacer (changement), puis de stabiliser le nouvel état (recristallisation). Avec son analyse du champ de forces, il reste imbattable en clarté sur les changements bien délimités.",
 origin:{creator:"Kurt Lewin", when:"1947", where:"MIT, États-Unis", story:"Psychosociologue réfugié de l'Allemagne nazie, Lewin a fondé le champ lui-même : « dynamique de groupe » et « recherche-action » sont ses termes. Presque tous les cadres ultérieurs sont des élaborations de son modèle."},
 principles:["Le comportement est un équilibre entre forces motrices et forces de retenue","Affaiblir une retenue vaut mieux qu'ajouter de la pression","Changer exige de déstabiliser avant de déplacer","Un changement non recristallisé revient en arrière","Impliquer le groupe : on soutient ce qu'on a aidé à créer"],
 whenYes:["Le périmètre est contenu : une équipe, un processus, une pratique définie","Il faut un modèle que tout le monde comprend en cinq minutes","Un état final stable existe réellement pour recristalliser"],
 whenNo:["L'environnement change en continu ; la recristallisation est une fiction (approches agiles)","Le changement est global et politique (préférer Kotter)","Il faut suivre l'adoption individuelle à l'échelle (préférer ADKAR)"],
 steps:[
  {t:"Décristalliser",p:"Mener l'analyse du champ de forces : lister forces motrices et forces de retenue. Créer la sécurité pour lâcher l'existant ; interroger le statu quo par les données et l'implication."},
  {t:"Changer (déplacer)",p:"Mettre en œuvre avec participation. Communiquer sans relâche, offrir un espace d'entraînement, anticiper la baisse temporaire de performance et protéger les personnes pendant qu'elle dure."},
  {t:"Recristalliser",p:"Institutionnaliser : procédures, incitations, célébration, mesure. Sans cette phase, l'élastique revient."}],
 roles:["Le manager d'équipe : propriétaire de l'équilibre local","Le facilitateur : anime le champ de forces et l'implication","Le groupe lui-même : l'acteur central chez Lewin"],
 deliverables:["Analyse du champ de forces","Plan d'implication","Checklist de stabilisation"],
 caseStudy:{chip:"Schéma de mission anonymisé", h:"Équipe sinistres, 40 personnes, refonte du flux de travail", p:"Une séance de champ de forces a révélé la vraie force de retenue : le rituel qualité informel de l'équipe, menacé par le nouveau flux. Réintégrer ce rituel dans le nouveau processus, plutôt qu'insister sur les bénéfices, a fait basculer l'équilibre en trois semaines. Kotter aurait été un marteau-pilon pour cette noisette."},
 pitfalls:[
  {t:"Oublier la recristallisation",p:"La phase la plus sautée. Trois mois plus tard, les vieilles habitudes sont revenues et tout le monde dit « on a déjà essayé »."},
  {t:"Ajouter des moteurs au lieu de retirer des freins",p:"Le point de Lewin lui-même : pousser plus fort augmente la tension. Retirer une retenue déplace l'équilibre à moindre coût."},
  {t:"L'utiliser hors de son échelle",p:"Trois cases ne gouvernent pas une transformation de 5 000 personnes. Respecter son périmètre."}],
 attrib:"Le modèle de Kurt Lewin et l'analyse du champ de forces sont des travaux académiques fondateurs. Présentés à des fins pédagogiques avec un commentaire original."
},
bridges:{
 desc:"Le changement est un événement ; la transition est psychologique. Les fins avant les débuts.",
 overview:"La distinction centrale de Bridges : le changement est situationnel (le nouvel organigramme, le nouveau système), la transition est psychologique (lâcher prise, traverser l'entre-deux, recommencer). Les organisations gèrent le changement et négligent la transition, puis s'étonnent que la nouvelle structure soit peuplée de gens qui vivent encore dans l'ancienne. Le geste radical du modèle : toute transition commence par une fin.",
 origin:{creator:"William Bridges", when:"1979 / 1991", where:"États-Unis", story:"Professeur de littérature devenu consultant, Bridges publie Transitions en 1979 pour les individus, puis Managing Transitions en 1991 pour les organisations. Susan Bridges poursuit l'œuvre."},
 principles:["Le changement est externe ; la transition est interne","Tout début exige d'abord une fin","La zone neutre est inconfortable et créative ; ne pas la précipiter","Chacun lâche prise à son rythme ; honorer les pertes","Ce qui n'est pas fait son deuil est emporté dans le nouveau monde"],
 whenYes:["Le changement est subi : fusion, restructuration, fermeture, réglementation","Le deuil, la perte d'identité ou la nostalgie sont visibles dans la pièce","Un changement précédent a échoué pour des raisons émotionnelles « inexplicables »"],
 whenNo:["Le changement est choisi et énergisant ; forcer un travail de deuil serait artificiel","Il faut une machine d'exécution ; Bridges est une grille de lecture, pas un plan projet (coupler)","La vitesse compte réellement plus que la profondeur d'adoption, coût assumé"],
 steps:[
  {t:"Les fins : reconnaître les pertes",p:"Nommer précisément ce que chaque groupe perd : compétence, relations, statut, identité. Marquer la fin, honorer le passé, laisser chacun en garder un morceau."},
  {t:"La zone neutre : gérer la traversée",p:"L'entre-deux où l'ancien a disparu et le nouveau n'est pas encore réel. L'anxiété monte, la productivité baisse et, paradoxalement, la créativité culmine. Offrir des structures temporaires, des objectifs courts, de la sur-communication."},
  {t:"Les nouveaux départs : les 4 P",p:"Purpose, Picture, Plan, Part. On s'engage dans un début quand on comprend le pourquoi, qu'on peut le voir, qu'on connaît le chemin et qu'on y a un rôle."}],
 roles:["Les dirigeants : incarnent publiquement le lâcher-prise","Les managers : mènent les conversations sur la perte, une à une","RH / équipe du changement : conçoivent les rituels de transition"],
 deliverables:["Analyse des pertes par population","Suivi de transition (qui est où)","Plan d'appui en zone neutre","Brief des 4 P"],
 caseStudy:{chip:"Schéma de mission anonymisé", h:"Deux directions publiques fusionnées, conflit de cultures ouvert", p:"Dix-huit mois après la fusion, les « débats de procédure » étaient de l'identité non pleurée. Le travail sur les fins (séances conjointes honorant l'histoire de chaque direction, objets symboliques conservés) a débloqué ce que trois ateliers de procédures n'avaient pas pu. Les affectations croisées sont devenues routinières en deux trimestres, sponsor à l'appui."},
 pitfalls:[
  {t:"Vendre le début avant d'honorer la fin",p:"Un discours de vision enthousiaste devant des gens en deuil sonne comme du mépris. La séquence est tout."},
  {t:"Traiter la zone neutre comme du temps mort",p:"La précipiter produit de faux départs. C'est là que la réorientation réelle se produit."},
  {t:"Le deuil taille unique",p:"Le même changement est une perte pour un groupe et une libération pour un autre. L'analyse des pertes se fait par population."}],
 attrib:"Le modèle de transition a été développé par William Bridges (Managing Transitions). Présenté à des fins pédagogiques avec un commentaire original."
},
sevens:{
 desc:"Sept éléments interdépendants. La grille pour localiser le désalignement structurel.",
 overview:"7-S n'est pas un processus de changement ; c'est une grille de diagnostic. Sept éléments (Stratégie, Structure, Systèmes, Valeurs partagées, Savoir-faire, Style, Staff) doivent s'aligner pour que l'organisation performe ; en changer un sans réaligner les autres, et ils le ramènent en arrière. Son intuition durable : les S « souples » battent les S « durs » sur la longueur.",
 origin:{creator:"Tom Peters, Robert Waterman, et al.", when:"vers 1980", where:"McKinsey & Company", story:"Développé chez McKinsey et popularisé par In Search of Excellence (1982). L'un des rares cadres de conseil à survivre à quarante ans d'examen critique."},
 principles:["Les organisations sont des systèmes de sept éléments interdépendants","Le désalignement, pas la faiblesse, est la maladie ordinaire","Les S souples sont plus durs à changer et plus décisifs","Les valeurs partagées sont au centre et relient tout","Le diagnostic avant la prescription, toujours"],
 whenYes:["Les symptômes sont diffus : « quelque chose cloche » sans accord sur quoi","Intégration post-fusion ou post-réorganisation","Avant toute conception de changement majeur : localiser ce qui doit bouger"],
 whenNo:["On sait déjà précisément quoi changer (exécuter)","Il faut un processus avec étapes et calendrier ; 7-S n'en a pas (coupler avec Kotter ou Lewin)","Le sujet est l'adoption individuelle d'un outil précis (préférer ADKAR)"],
 steps:[
  {t:"Cartographier l'état actuel de chaque S",p:"Stratégie, Structure, Systèmes, Valeurs partagées, Savoir-faire, Style, Staff : sur preuves, pas sur aspirations. Entretiens plus artefacts."},
  {t:"Définir l'état cible par S",p:"À quoi chaque élément doit-il ressembler pour que la stratégie fonctionne ?"},
  {t:"Localiser les désalignements",p:"Les écarts ET les contradictions entre éléments : une stratégie de collaboration avec des primes individuelles est un désalignement, pas un problème de communication."},
  {t:"Séquencer le réalignement",p:"Quel S bouge d'abord, lesquels suivent. Les S durs bougent vite sur le papier et lentement en réalité ; les souples, l'inverse."},
  {t:"Passer le relais à un modèle d'exécution",p:"7-S dit quoi changer. Kotter, ADKAR ou Lewin le font."}],
 roles:["Le pilote du diagnostic : mène entretiens et collecte de preuves","L'équipe de direction : propriétaire de la définition de la cible","L'analyste : documente les contradictions sans politique"],
 deliverables:["Cartographie 7-S de l'existant","Définition de l'état cible","Matrice des désalignements","Séquence de réalignement"],
 caseStudy:{chip:"Schéma de mission anonymisé", h:"Groupe industriel, dérive post-acquisition", p:"Deux ans après le rachat d'un concurrent, l'intégration était « terminée » sur le papier : structure fusionnée, systèmes unifiés. Le scan 7-S a localisé les désalignements vivants : le Style (commandement contre consensus) et le Staff (les talents clés acquis partaient en silence). Le plan a ciblé ces deux S ; le chantier structurel, lui, allait bien et absorbait pourtant toute l'attention."},
 pitfalls:[
  {t:"N'auditer que les S durs",p:"Les slides de stratégie et les organigrammes se collectent facilement. Les S souples exigent d'écouter, et ce sont eux qui décident."},
  {t:"En faire une photo unique",p:"L'alignement se dégrade. Re-scanner à chaque jalon majeur."},
  {t:"Le diagnostic comme livrable final",p:"Une belle matrice de désalignements ne change rien. Budgéter le relais d'exécution dès le premier jour."}],
 attrib:"Le cadre 7-S a été développé chez McKinsey & Company. Présenté à des fins pédagogiques avec un commentaire original ; aucune affiliation."
},
curve:{
 desc:"Du choc à l'intégration : lire où en sont vos équipes, et les y rejoindre.",
 overview:"Adaptée des travaux de Kübler-Ross sur le deuil, la courbe du changement cartographie le trajet émotionnel d'un changement subi : choc, déni, frustration, la vallée, l'expérimentation, la décision, l'intégration. Ce n'est pas un processus à dérouler mais un instrument de lecture : chaque étape appelle une réponse de leadership différente, et l'erreur classique consiste à envoyer des messages d'étape 6 à des gens en étape 2.",
 origin:{creator:"Elisabeth Kübler-Ross (adaptation)", when:"1969, adapté à partir des années 1980", where:"recherche de fin de vie, Suisse/États-Unis", story:"Les cinq étapes du deuil (On Death and Dying, 1969) ont été adaptées par les praticiens du changement qui reconnaissaient le même arc dans la perte organisationnelle. L'adaptation appartient au métier, pas à elle ; un usage sérieux le dit."},
 principles:["Le changement subi déclenche un arc émotionnel proche du deuil","Les étapes sont typiques, ni universelles ni strictement linéaires","Chaque étape appelle une réponse différente : information, empathie, direction, encouragement","La vallée est normale ; ce sont les réactions de panique qui font les dégâts","On ne fait sauter d'étapes à personne ; on peut accompagner la traversée plus vite"],
 whenYes:["Le changement est subi et représente une perte pour des groupes identifiables","Les dirigeants ont besoin d'un langage commun pour la météo émotionnelle","Il faut caler les communications : quoi dire, quand, à qui"],
 whenNo:["Le changement est bienvenu ; imposer une grille de deuil serait absurde","Il faut une machine d'exécution ou de suivi (coupler avec ADKAR)","Comme outil d'étiquetage des individus (« elle est dans le déni ») : c'est un mésusage"],
 steps:[
  {t:"Choc et déni : informer",p:"Court, clair, factuel, répété. Les grands discours de vision rebondissent ; les gens entendent à peine."},
  {t:"Frustration et colère : écouter",p:"Légitimer l'émotion sans renégocier le changement. La pire réponse est l'argumentation ; la deuxième pire, la disparition."},
  {t:"La vallée : tenir",p:"Énergie au plus bas, doute au plus haut. Présence, petite structure, patience. C'est ici que les dirigeants qui s'éclipsent perdent leurs équipes."},
  {t:"L'expérimentation : encourager",p:"Les premiers pas timides vers le nouveau. Rendre l'essai sûr ; célébrer les tentatives, pas seulement les réussites."},
  {t:"Décision et intégration : renforcer",p:"Les personnes reconstruisent compétence et identité. Reconnaissance, responsabilités, capitalisation de l'appris."}],
 roles:["Les dirigeants : calibrent le message à l'étape","Les managers : lisent honnêtement la position de leur équipe","L'équipe du changement : instrumente la lecture (sondages de pouls, séances d'écoute)"],
 deliverables:["Cartographie émotionnelle par population","Plan de communication calibré par étape","Guides de conversation pour managers"],
 caseStudy:{chip:"Schéma de mission anonymisé", h:"Consolidation de sites, 300 personnes déplacées", p:"La direction avait annoncé le déménagement par un town hall enthousiaste (message d'étape 6) dans une salle en étape 1, et interprété le silence comme une acceptation. La cartographie de pouls montrait 70 % entre frustration et vallée trois mois plus tard. Recaler la communication à l'étape (écoute individuelle des managers, zéro discours de vision pendant six semaines) a fait tourner la mesure suivante."},
 pitfalls:[
  {t:"Étiqueter les individus",p:"« Il est juste dans le déni » transforme un instrument de lecture en machine à disqualifier. La courbe décrit ; elle ne diagnostique jamais des personnes."},
  {t:"Attendre de la linéarité",p:"Les gens bouclent, régressent, avancent à des rythmes différents. La courbe est une carte, pas un calendrier."},
  {t:"Les discours de vision dans la vallée",p:"Un enthousiasme calé sur l'étape du dirigeant, pas sur celle de la salle. L'erreur de communication la plus fréquente du changement subi."}],
 attrib:"Adapté des travaux d'Elisabeth Kübler-Ross (On Death and Dying, 1969). L'adaptation organisationnelle est présentée à des fins pédagogiques avec un commentaire original."
}
};
