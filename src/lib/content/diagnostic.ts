/* AUTO-EXTRACTED from the vanilla build. */
// @ts-nocheck
export const DIAG_DIMS = {
 spon:{name:"Sponsorship", short:"Will leadership carry this when it gets hard?"},
 cap:{name:"Capacity to absorb", short:"Is there room for this change on top of everything else?"},
 cult:{name:"Cultural openness", short:"Is it safe here to try, fail and challenge?"},
 hist:{name:"Change history", short:"What did past changes leave behind?"},
 clar:{name:"Clarity of the ask", short:"Does anyone know what success looks like?"}
};

export const DIAG_Q = [
 {dim:"spon", text:"When this change hits its first serious obstacle, what will the executive sponsor most likely do?",
  opts:[
   {t:"Visibly defend it, in words and in budget", s:3},
   {t:"Support it, but delegate the hard conversations", s:2},
   {t:"Stay quiet and wait to see how it plays out", s:1},
   {t:"Honestly, we don't have a clear sponsor", s:0, flag:"nospon"}]},
 {dim:"spon", text:"In the last month, how often did the sponsor mention this change without being prompted?",
  opts:[
   {t:"Regularly, in different forums, with consistent messages", s:3},
   {t:"A few times, mostly in meetings about the project itself", s:2},
   {t:"Once or twice, when asked directly", s:1},
   {t:"Never, or only in the launch announcement", s:0}]},
 {dim:"spon", text:"If defending this change costs the sponsor political capital with a powerful peer, what happens?",
  opts:[
   {t:"They spend the capital; they've done it before", s:3},
   {t:"They defend it, but look for a compromise quickly", s:2},
   {t:"The change quietly gets rescoped", s:1, flag:"softspon"},
   {t:"The change gets sacrificed", s:0, flag:"softspon"}]},
 {dim:"cap", text:"How many significant changes has this same population absorbed in the last 24 months?",
  opts:[
   {t:"None or one; there is genuine bandwidth", s:3},
   {t:"Two or three, reasonably digested", s:2},
   {t:"Several, and people mention fatigue", s:1, flag:"fatigue"},
   {t:"A continuous stream; 'change fatigue' is said out loud", s:0, flag:"fatigue"}]},
 {dim:"cap", text:"If you asked the affected managers for 10% of their week for this change, what would they honestly say?",
  opts:[
   {t:"Feasible; priorities would be adjusted to make room", s:3},
   {t:"Yes, but something else visibly slips", s:2},
   {t:"They would say yes and not do it", s:1},
   {t:"Openly impossible without dropping a committed deliverable", s:0}]},
 {dim:"cult", text:"Last time someone visibly challenged how things are done here, what happened to them?",
  opts:[
   {t:"They were heard; the challenge changed something", s:3},
   {t:"Politely listened to, then business as usual", s:2},
   {t:"Labeled 'difficult'; people noticed", s:1, flag:"unsafe"},
   {t:"It damaged their standing or career", s:0, flag:"unsafe"}]},
 {dim:"cult", text:"When something fails in this organization, what is usually the first move?",
  opts:[
   {t:"Understand what happened; failures are discussable", s:3},
   {t:"Fix it quietly and move on", s:2},
   {t:"Find who is responsible", s:1},
   {t:"Hide it as long as possible", s:0, flag:"unsafe"}]},
 {dim:"hist", text:"The last comparable change in this organization is remembered as...",
  opts:[
   {t:"A success people still reference positively", s:3},
   {t:"Mixed: it landed, at a cost", s:2},
   {t:"Something we don't really talk about", s:1, flag:"scar"},
   {t:"It was never actually finished", s:0, flag:"scar"}]},
 {dim:"hist", text:"What happened to the promises made during the last big change ('no job losses', 'more autonomy', 'better tools')?",
  opts:[
   {t:"Largely kept; leadership credibility is intact", s:3},
   {t:"Partially kept; people are lucid but not bitter", s:2},
   {t:"Quietly forgotten; people remember", s:1, flag:"scar"},
   {t:"Broken; 'they always say that' is a common phrase", s:0, flag:"scar"}]},
 {dim:"hist", text:"If this change is announced tomorrow, what will the 15-year veterans say at the coffee machine?",
  opts:[
   {t:"'This one might actually be different, and here's why'", s:3},
   {t:"'Let's see if they follow through this time'", s:2},
   {t:"'We've survived these before; keep your head down'", s:1},
   {t:"'Give it six months, it will die like the others'", s:0, flag:"scar"}]},
 {dim:"clar", text:"If you asked three affected managers, separately, to describe the intended outcome of this change, you would get...",
  opts:[
   {t:"Three consistent answers", s:3},
   {t:"The same theme, different details", s:2},
   {t:"Three genuinely different answers", s:1, flag:"fog"},
   {t:"Three variations of 'I'm not sure'", s:0, flag:"fog"}]},
 {dim:"clar", text:"Is the change currently defined as an outcome or as a deliverable?",
  opts:[
   {t:"An observable outcome ('reps log deals unprompted by Q3')", s:3},
   {t:"Mostly an outcome, with some deliverable language", s:2},
   {t:"A deliverable ('the CRM is deployed')", s:1},
   {t:"A slogan ('become more agile')", s:0, flag:"fog"}]}
];

export const DIAG_FLAGS = {
 nospon:"No clear sponsor. This is a stop condition: no change should launch without securing sponsorship first. It is the single strongest predictor of failure.",
 softspon:"Sponsorship exists on paper but folds under political pressure. Sponsor alignment and coaching come before any visible launch.",
 fatigue:"Change saturation detected. Sequencing and load management matter more than the change approach itself; consider what to stop or defer first.",
 unsafe:"Low psychological safety. People will comply publicly and resist privately; honest feedback loops must be built before they can be trusted.",
 scar:"Scar tissue from past changes. Skepticism is earned, not irrational. Start with endings work and visible follow-through on small promises before asking for belief.",
 fog:"The ask is not clear enough to succeed. Return to framing: define the observable outcome before any mobilization."
};

export const DIAG_RECO = {
 spon:{title:"Secure sponsorship before anything moves",
  body:"Your weakest point is the one no framework can compensate for. Recommended assembly: Kotter steps 1 and 2 (urgency case + guiding coalition) aimed at the leadership layer itself, paired with direct sponsor coaching. Do not launch broadly until the sponsor test improves.", fw:["kotter"]},
 cap:{title:"Sequence, don't stack",
  body:"The constraint is absorption, not willingness. Recommended assembly: wave-based deployment at Lewin scale (contained scopes, visible refreeze), an explicit stop-or-defer decision on competing initiatives, and quick wins engineered to give energy back rather than consume it.", fw:["lewin"]},
 cult:{title:"Build safety before asking for change",
  body:"In a low-safety culture, launches produce compliance theater. Recommended assembly: Lewin's involvement principle (people support what they help create) as the design rule, small reversible experiments rather than commitments, and the Change Curve as your reading instrument for what people won't say out loud.", fw:["lewin","curve"]},
 hist:{title:"Treat the scar tissue first",
  body:"Your organization remembers. Recommended assembly: Bridges' endings work to honor what past changes cost, the Change Curve to calibrate communication to where people actually are, and a deliberate strategy of small kept promises before any grand vision speech.", fw:["bridges","curve"]},
 clar:{title:"Reframe before you launch",
  body:"Nothing downstream can compensate for a fuzzy ask. Recommended assembly: return to Phase 1 of the method with the Change Definition Canvas; define the observable outcome, the scope, and the change type. Twenty minutes of framing here saves months of drift.", fw:[]}
};

export const DIAG_DIMS_FR = {
 spon:{name:"Portage", short:"La direction tiendra-t-elle quand ce sera dur ?"},
 cap:{name:"Capacité d'absorption", short:"Y a-t-il de la place pour ce changement, en plus du reste ?"},
 cult:{name:"Ouverture culturelle", short:"Est-il sûr ici d'essayer, d'échouer, de contester ?"},
 hist:{name:"Historique du changement", short:"Qu'ont laissé les changements passés ?"},
 clar:{name:"Clarté de la demande", short:"Quelqu'un sait-il à quoi ressemble le succès ?"}
};

export const DIAG_Q_FR = [
 {text:"Quand ce changement rencontrera son premier obstacle sérieux, que fera le sponsor exécutif, le plus probablement ?",
  opts:["Le défendre visiblement, en paroles et en budget","Le soutenir, mais déléguer les conversations difficiles","Rester silencieux et attendre de voir","Honnêtement, nous n'avons pas de sponsor clair"]},
 {text:"Le mois dernier, à quelle fréquence le sponsor a-t-il mentionné ce changement sans y être invité ?",
  opts:["Régulièrement, dans des enceintes variées, avec des messages cohérents","Quelques fois, surtout dans les réunions du projet lui-même","Une ou deux fois, quand on lui a demandé directement","Jamais, ou seulement dans l'annonce de lancement"]},
 {text:"Si défendre ce changement coûte au sponsor du capital politique face à un pair puissant, que se passe-t-il ?",
  opts:["Il dépense le capital ; il l'a déjà fait","Il le défend, mais cherche vite un compromis","Le changement est discrètement re-périmétré","Le changement est sacrifié"]},
 {text:"Combien de changements significatifs cette même population a-t-elle absorbés ces 24 derniers mois ?",
  opts:["Aucun ou un ; il y a une vraie bande passante","Deux ou trois, raisonnablement digérés","Plusieurs, et on parle de fatigue","Un flux continu ; « fatigue du changement » se dit tout haut"]},
 {text:"Si vous demandiez aux managers concernés 10 % de leur semaine pour ce changement, que diraient-ils honnêtement ?",
  opts:["Faisable ; les priorités seraient ajustées","Oui, mais quelque chose d'autre glisse visiblement","Ils diraient oui et ne le feraient pas","Ouvertement impossible sans lâcher un livrable engagé"]},
 {text:"La dernière fois que quelqu'un a visiblement contesté la façon de faire ici, que lui est-il arrivé ?",
  opts:["Il a été entendu ; la contestation a changé quelque chose","Écouté poliment, puis retour à la normale","Étiqueté « difficile » ; les gens l'ont remarqué","Cela a abîmé sa position ou sa carrière"]},
 {text:"Quand quelque chose échoue dans cette organisation, quel est en général le premier réflexe ?",
  opts:["Comprendre ce qui s'est passé ; les échecs se discutent","Réparer discrètement et passer à autre chose","Chercher le responsable","Le cacher aussi longtemps que possible"]},
 {text:"Le dernier changement comparable dans cette organisation est resté dans les mémoires comme...",
  opts:["Un succès encore cité positivement","Mitigé : il a atterri, à un coût","Quelque chose dont on ne parle pas vraiment","Il n'a en fait jamais été terminé"]},
 {text:"Que sont devenues les promesses du dernier grand changement (« pas de suppressions », « plus d'autonomie », « de meilleurs outils ») ?",
  opts:["Largement tenues ; le crédit de la direction est intact","Partiellement tenues ; les gens sont lucides mais pas amers","Discrètement oubliées ; les gens s'en souviennent","Rompues ; « ils disent toujours ça » est une phrase courante"]},
 {text:"Si ce changement est annoncé demain, que diront les vétérans de 15 ans à la machine à café ?",
  opts:["« Celui-là pourrait être différent, et voilà pourquoi »","« Voyons s'ils vont au bout cette fois »","« On en a survécu d'autres ; fais le dos rond »","« Donne-lui six mois, il mourra comme les autres »"]},
 {text:"Si vous demandiez séparément à trois managers concernés de décrire le résultat visé, vous obtiendriez...",
  opts:["Trois réponses cohérentes","Le même thème, des détails différents","Trois réponses réellement différentes","Trois variantes de « je ne suis pas sûr »"]},
 {text:"Le changement est-il aujourd'hui défini comme un résultat ou comme un livrable ?",
  opts:["Un résultat observable (« les commerciaux saisissent leurs affaires sans relance d'ici T3 »)","Surtout un résultat, avec un peu de langage livrable","Un livrable (« le CRM est déployé »)","Un slogan (« devenir plus agile »)"]}
];

export const DIAG_FLAGS_FR = {
 nospon:"Pas de sponsor clair. C'est une condition d'arrêt : aucun changement ne devrait être lancé sans sécuriser d'abord le portage. C'est le prédicteur d'échec le plus puissant.",
 softspon:"Le portage existe sur le papier mais plie sous la pression politique. L'alignement et le coaching du sponsor passent avant tout lancement visible.",
 fatigue:"Saturation de changement détectée. Le séquencement et la gestion de charge comptent plus que l'approche elle-même ; envisager d'abord ce qu'il faut arrêter ou différer.",
 unsafe:"Sécurité psychologique faible. Les gens se conformeront en public et résisteront en privé ; les boucles de retour honnêtes doivent être construites avant de pouvoir être crues.",
 scar:"Des cicatrices de changements passés. Le scepticisme est mérité, pas irrationnel. Commencer par le travail des fins et des petites promesses visiblement tenues avant de demander de la confiance.",
 fog:"La demande n'est pas assez claire pour réussir. Retour au cadrage : définir le résultat observable avant toute mobilisation."
};

export const DIAG_RECO_FR = {
 spon:{title:"Sécuriser le portage avant que rien ne bouge",
  body:"Votre point faible est celui qu'aucun framework ne compense. Assemblage recommandé : Kotter étapes 1 et 2 (dossier d'urgence + coalition directrice) dirigées vers la couche dirigeante elle-même, couplées à un coaching direct du sponsor. Pas de lancement large tant que le test du sponsor ne s'améliore pas."},
 cap:{title:"Séquencer, pas empiler",
  body:"La contrainte est l'absorption, pas la volonté. Assemblage recommandé : déploiement par vagues à l'échelle Lewin (périmètres contenus, recristallisation visible), une décision explicite d'arrêt ou de report des initiatives concurrentes, et des victoires rapides conçues pour rendre de l'énergie plutôt qu'en consommer."},
 cult:{title:"Construire la sécurité avant de demander le changement",
  body:"Dans une culture à faible sécurité, les lancements produisent du théâtre de conformité. Assemblage recommandé : le principe d'implication de Lewin (on soutient ce qu'on a aidé à créer) comme règle de conception, de petites expériences réversibles plutôt que des engagements, et la courbe du changement comme instrument de lecture de ce que les gens ne diront pas tout haut."},
 hist:{title:"Traiter d'abord les cicatrices",
  body:"Votre organisation se souvient. Assemblage recommandé : le travail des fins de Bridges pour honorer ce que les changements passés ont coûté, la courbe du changement pour calibrer la communication là où les gens sont vraiment, et une stratégie délibérée de petites promesses tenues avant tout grand discours de vision."},
 clar:{title:"Recadrer avant de lancer",
  body:"Rien en aval ne compense une demande floue. Assemblage recommandé : retour à la phase 1 de la méthode avec le canevas de définition du changement ; définir le résultat observable, le périmètre et le type de changement. Vingt minutes de cadrage ici épargnent des mois de dérive."}
};
