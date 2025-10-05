export interface CultureInfo {
  id: string;
  nom: string;
  categorie: 'vivrieres' | 'maraicheres' | 'fruitieres';
  conditions: string;
  miseEnPlace: string;
  entretiens: string;
  maladies: string;
  recolte: string;
  valorisation: string;
}

export const cultures: CultureInfo[] = [
  // Cultures vivrières principales
  {
    id: 'manioc',
    nom: 'Manioc',
    categorie: 'vivrieres',
    conditions: 'Sol bien drainé, température entre 25-29°C. Pluviométrie de 1000-1500mm/an. Tolère les sols pauvres et acides (pH 4,5-7).',
    miseEnPlace: 'Plantation de boutures de 20-25cm, espacées de 1m x 1m. Période idéale: début de saison des pluies. Profondeur de plantation: 5-10cm en position oblique.',
    entretiens: 'Désherbage régulier les 3 premiers mois. Buttage après 2-3 mois. Pas de besoin important en engrais. Surveillance des ravageurs.',
    maladies: 'Mosaïque du manioc, striure brune, bactériose, acariens verts. Prévention: utiliser des boutures saines, rotation des cultures.',
    recolte: '8-12 mois après plantation pour consommation, 18-24 mois pour transformation. Récolte progressive selon les besoins.',
    valorisation: 'Consommation fraîche, farine (gari, fufu), tapioca, amidon industriel, alimentation animale. Conservation: séchage, transformation.'
  },
  {
    id: 'mais',
    nom: 'Maïs',
    categorie: 'vivrieres',
    conditions: 'Sol profond, bien drainé, riche en matière organique. Température optimale 20-30°C. Pluviométrie 500-800mm bien répartie.',
    miseEnPlace: 'Semis direct en poquets, 2-3 graines par poquet. Écartement: 75-80cm entre lignes, 25-40cm sur la ligne. Densité: 50 000-60 000 plants/ha.',
    entretiens: 'Démariage à 2-3 semaines (1 plant/poquet). Désherbage précoce. Fumure: NPK au semis, urée en couverture. Irrigation si nécessaire.',
    maladies: 'Striure du maïs, charbon, rouille, foreurs de tiges, légionnaire d\'automne. Traitement préventif et curatif avec pesticides homologués.',
    recolte: '90-120 jours après semis selon variété. Maïs grain: séchage à 14% d\'humidité. Maïs doux: épis laiteux-pâteux.',
    valorisation: 'Grain sec (farine, semoule), maïs frais, fourrage, alimentation animale. Transformation industrielle (amidon, huile).'
  },
  {
    id: 'riz',
    nom: 'Riz',
    categorie: 'vivrieres',
    conditions: 'Riz irrigué: eau permanente. Riz pluvial: 1200-1500mm. Sol argileux pour irrigué, sol bien drainé pour pluvial. Température 20-35°C.',
    miseEnPlace: 'Semis direct ou repiquage. Écartement: 20x20cm (irrigué), 25x25cm (pluvial). Dose de semis: 80-100kg/ha. Préparation du sol: labour et hersage.',
    entretiens: 'Gestion de l\'eau (lame d\'eau 5-10cm). Désherbage précoce. Fertilisation: NPK + urée en couverture. Contrôle des adventices.',
    maladies: 'Pyriculariose, helminthosporiose, panachure jaune, foreuse des tiges. Utilisation de variétés résistantes et traitements phytosanitaires.',
    recolte: '120-150 jours. Grain à 20-25% humidité. Récolte manuelle ou mécanique. Séchage immédiat après récolte.',
    valorisation: 'Riz blanc, riz étuvé, farine de riz, brisures pour alimentation animale. Stockage en sacs ou silos.'
  },
  {
    id: 'banane-plantain',
    nom: 'Banane plantain',
    categorie: 'vivrieres',
    conditions: 'Sol profond, riche en matière organique, bien drainé. Pluviométrie 1200-2000mm. Température 20-30°C. pH 5,5-7.',
    miseEnPlace: 'Rejets de 1,5-2kg, 2-3m x 2-3m. Trou de 40x40x40cm. Matière organique + engrais au fond. Plantation début des pluies.',
    entretiens: 'Œilletonnage (garder 1 rejet/pied). Tuteurage si nécessaire. Fumure organique + NPK. Paillage. Désherbage régulier.',
    maladies: 'Cercosporiose noire, charançon, nématodes. Traitement: fongicides, nématicides, utilisation de rejets sains.',
    recolte: '9-12 mois après plantation. Régimes verts à 3/4 pleins. Coupe du pseudo-tronc après récolte. Production continue avec rejets.',
    valorisation: 'Consommation fraîche (bouillie, frite, braisée), farine, chips. Régimes pour marchés locaux et export.'
  },
  {
    id: 'millet',
    nom: 'Millet',
    categorie: 'vivrieres',
    conditions: 'Résistant à la sécheresse. Sol sablonneux bien drainé. Pluviométrie 300-600mm. Température 25-35°C. Adapté zones sahéliennes.',
    miseEnPlace: 'Semis en ligne ou à la volée. Écartement: 40-50cm entre lignes, 20-30cm sur ligne. Dose: 6-8kg/ha. Profondeur 3-5cm.',
    entretiens: 'Démariage à 15-20 jours. Sarclage 2-3 fois. Fumure modérée (NPK + fumier). Buttage avant montaison.',
    maladies: 'Mildiou, charbon, foreurs de tiges, oiseaux granivores. Protection: traitement de semences, variétés résistantes.',
    recolte: '90-120 jours. Épis mûrs et secs. Coupe manuelle, séchage, battage. Vannage pour nettoyer les grains.',
    valorisation: 'Grains (bouillie, couscous, bière locale), farine, fourrage. Conservation en greniers traditionnels.'
  },
  {
    id: 'sorgho',
    nom: 'Sorgho',
    categorie: 'vivrieres',
    conditions: 'Résiste à la sécheresse. Sol argileux à sablonneux. Pluviométrie 400-800mm. Température 25-35°C. pH 5,5-8.',
    miseEnPlace: 'Semis en poquets, 3-4 graines. Écartement: 60-80cm x 20-40cm. Dose: 8-10kg/ha. Semis début saison des pluies.',
    entretiens: 'Démariage à 2 plants/poquet. Sarclage binage 2-3 fois. Fumure: NPK + matière organique. Buttage avant épiaison.',
    maladies: 'Charbon, anthracnose, moisissures, foreurs, oiseaux. Traitement semences, variétés résistantes, effarouchement oiseaux.',
    recolte: '100-140 jours. Panicules mûres et sèches. Coupe, séchage au soleil, battage, vannage.',
    valorisation: 'Grain (bouillie, couscous, pain), bière traditionnelle, fourrage, balais (tiges). Stockage en greniers.'
  },
  {
    id: 'arachide',
    nom: 'Arachide',
    categorie: 'vivrieres',
    conditions: 'Sol léger, sablonneux, bien drainé. Pluviométrie 500-1000mm. Température 25-30°C. pH 6-7. Éviter sols calcaires.',
    miseEnPlace: 'Semis direct de graines décortiquées. Écartement: 40-50cm x 15-20cm. Dose: 80-100kg/ha. Inoculation Rhizobium recommandée.',
    entretiens: 'Sarclage buttage 2-3 fois. Gypse (200-400kg/ha) à la floraison. Pas d\'excès d\'azote. Surveillance maladies foliaires.',
    maladies: 'Rosette, cercosporiose, rouille, termites, vers blancs. Traitement: fongicides, rotation, variétés résistantes.',
    recolte: '90-120 jours. Feuilles jaunissent. Arrachage manuel, séchage 7-10 jours, battage, tri.',
    valorisation: 'Huile alimentaire, beurre d\'arachide, tourteau (aliment bétail), consommation directe (grillée).'
  },
  {
    id: 'coton',
    nom: 'Coton',
    categorie: 'vivrieres',
    conditions: 'Sol profond, fertile, bien drainé. Pluviométrie 600-1200mm bien répartie. Température 20-30°C. pH 5,5-8.',
    miseEnPlace: 'Semis en poquets, 3-4 graines. Écartement: 80cm x 40cm. Dose: 15-20kg/ha. Labour profond, fumure de fond (NPK).',
    entretiens: 'Démariage à 2 plants/poquet. Sarclage 2-3 fois. Traitements insecticides réguliers. Urée en couverture.',
    maladies: 'Chenilles (carpocapse, spodoptera), jassides, acariens, fusariose. Programme de traitement phytosanitaire strict.',
    recolte: '150-180 jours. Capsules ouvertes et sèches. 2-3 passages de récolte. Égrenage mécanique ou manuel.',
    valorisation: 'Fibre textile (industrie), huile de graines, tourteau (aliment bétail), coques (combustible).'
  },
  {
    id: 'palmier-huile',
    nom: 'Palmier à huile',
    categorie: 'vivrieres',
    conditions: 'Sol profond, riche. Pluviométrie 1800-2500mm bien répartie. Température 24-28°C. Humidité élevée. pH 4-7.',
    miseEnPlace: 'Plants pré-germés de pépinière. Écartement: 9m x 9m (143 pieds/ha). Trou 60x60x60cm, compost + engrais.',
    entretiens: 'Élagage feuilles sèches. Cercle de propreté. Fumure NPK + Mg régulière. Contrôle ravageurs (charançons).',
    maladies: 'Fusariose, pourriture du cœur, charançons, chenilles défoliatrices. Traitement préventif, drainage adéquat.',
    recolte: 'Production dès 3 ans, optimale à 8-25 ans. Récolte régimes mûrs tous les 10-15 jours. 12-25 tonnes régimes/ha/an.',
    valorisation: 'Huile de palme (cuisine, industrie), huile de palmiste, tourteaux, vin de palme. Transformation artisanale ou industrielle.'
  },

  // Cultures maraîchères et fruitières
  {
    id: 'tomate',
    nom: 'Tomate',
    categorie: 'maraicheres',
    conditions: 'Sol riche, bien drainé. Température 20-25°C. Besoin en eau régulier mais drainage nécessaire. pH 6-7.',
    miseEnPlace: 'Pépinière puis repiquage à 30 jours. Écartement: 80cm x 50cm. Tuteurage obligatoire pour variétés à croissance indéterminée.',
    entretiens: 'Arrosage régulier (au pied). Paillage. Tuteurage et taille des gourmands. Fumure NPK + matière organique.',
    maladies: 'Mildiou, fusariose, flétrissement bactérien, nématodes, mouches blanches. Rotation, variétés résistantes, traitements.',
    recolte: '3-4 mois après repiquage. Fruits fermes, colorés. Récolte progressive tous les 2-3 jours.',
    valorisation: 'Consommation fraîche, concentré, sauce, tomates séchées. Conservation: fraîche (courte durée), transformée.'
  },
  {
    id: 'oignon',
    nom: 'Oignon',
    categorie: 'maraicheres',
    conditions: 'Sol meuble, riche en matière organique, bien drainé. Température 13-25°C. Photopériode importante. pH 6-7.',
    miseEnPlace: 'Semis en pépinière puis repiquage ou semis direct. Écartement: 15-20cm x 10cm. Densité élevée.',
    entretiens: 'Arrosage régulier jusqu\'à grossissement. Arrêt arrosage 2 semaines avant récolte. Désherbage soigneux. Fumure complète.',
    maladies: 'Mildiou, fusariose, thrips, mouche de l\'oignon. Rotation 3-4 ans, traitements fongicides, insecticides.',
    recolte: '4-5 mois. Fanes se couchent naturellement. Arrachage, séchage au soleil 1-2 semaines, conservation en lieu sec.',
    valorisation: 'Consommation fraîche, oignon séché. Bonne conservation (plusieurs mois). Transformation: poudre, déshydraté.'
  },
  {
    id: 'carotte',
    nom: 'Carotte',
    categorie: 'maraicheres',
    conditions: 'Sol profond, meuble, sablonneux. Pas de cailloux. Température 15-20°C. Arrosage régulier. pH 6-7.',
    miseEnPlace: 'Semis direct en ligne. Écartement: 20-25cm entre lignes, 5cm sur ligne. Graines fines, semis superficiel.',
    entretiens: 'Éclaircissage à 5cm. Binage délicat. Arrosage régulier et constant. Fumure: éviter fumier frais (déformation racines).',
    maladies: 'Alternariose, mouche de la carotte, nématodes. Rotation, voile anti-insectes, variétés résistantes.',
    recolte: '3-4 mois. Diamètre optimal atteint. Arrachage manuel ou mécanique. Conservation en cave fraîche ou chambre froide.',
    valorisation: 'Consommation fraîche, jus, carotte râpée, cuisson. Conservation: fraîche (courte), transformation (jus, purée).'
  },
  {
    id: 'chou',
    nom: 'Chou',
    categorie: 'maraicheres',
    conditions: 'Sol riche, profond, humide. Température fraîche 15-20°C. Besoin en eau élevé. pH 6-7.',
    miseEnPlace: 'Pépinière puis repiquage à 4-5 semaines. Écartement: 50-60cm x 40-50cm selon variété. Sol bien préparé.',
    entretiens: 'Arrosage abondant et régulier. Buttage. Fumure riche (NPK + matière organique). Surveillance insectes.',
    maladies: 'Hernie, mildiou, piéride, pucerons, altises. Rotation longue, variétés résistantes, traitements biologiques ou chimiques.',
    recolte: '2-3 mois après repiquage. Pommes fermes et compactes. Coupe au ras du sol.',
    valorisation: 'Consommation fraîche, choucroute, chou cuit. Conservation: chambre froide, fermentation (choucroute).'
  },
  {
    id: 'aubergine-africaine',
    nom: 'Aubergine africaine',
    categorie: 'maraicheres',
    conditions: 'Sol riche, bien drainé. Température chaude 25-30°C. Résiste mieux à la chaleur que l\'aubergine européenne. pH 5,5-7.',
    miseEnPlace: 'Pépinière puis repiquage. Écartement: 80cm x 60cm. Tuteurage pour certaines variétés.',
    entretiens: 'Arrosage régulier mais modéré. Paillage. Fumure complète NPK. Taille des branches basses.',
    maladies: 'Flétrissement bactérien, acariens, pucerons. Rotation, variétés locales résistantes, traitements préventifs.',
    recolte: '3-4 mois. Récolte progressive des fruits à maturité. Fruits fermes, brillants.',
    valorisation: 'Consommation fraîche en sauce, grillée. Feuilles aussi consommées. Courte conservation fraîche.'
  },
  {
    id: 'gombo',
    nom: 'Gombo',
    categorie: 'maraicheres',
    conditions: 'Sol fertile, bien drainé. Température chaude 25-35°C. Résiste à la sécheresse. pH 6-7.',
    miseEnPlace: 'Semis direct en poquet, 2-3 graines. Écartement: 60-80cm x 40cm. Trempage graines 24h avant semis.',
    entretiens: 'Démariage à 1 plant/poquet. Sarclage binage. Fumure complète. Arrosage en période sèche.',
    maladies: 'Jaunisse, nématodes, pucerons, chenilles. Rotation, traitements biologiques, variétés résistantes.',
    recolte: '2-3 mois. Récolte tous les 2-3 jours. Fruits jeunes, tendres (8-12cm). Production échelonnée.',
    valorisation: 'Consommation fraîche en sauce, gombo séché. Séchage pour conservation. Feuilles aussi comestibles.'
  },
  {
    id: 'piment',
    nom: 'Piment',
    categorie: 'maraicheres',
    conditions: 'Sol riche, bien drainé. Température 20-30°C. Besoin en eau régulier. pH 6-7.',
    miseEnPlace: 'Pépinière puis repiquage à 6-8 semaines. Écartement: 60cm x 40cm. Tuteurage si nécessaire.',
    entretiens: 'Arrosage régulier au pied. Paillage. Fumure NPK + matière organique. Taille des gourmands basaux.',
    maladies: 'Anthracnose, flétrissement, pucerons, acariens. Rotation, variétés résistantes, traitements phytosanitaires.',
    recolte: '3-4 mois. Récolte progressive selon utilisation (vert ou rouge mûr). Production longue durée.',
    valorisation: 'Frais, séché, poudre, conserves. Très bonne conservation séché. Transformation en pâte, huile piquante.'
  },
  {
    id: 'amarante',
    nom: 'Amarante',
    categorie: 'maraicheres',
    conditions: 'Sol fertile. Température chaude 25-30°C. Croissance rapide. Résiste à la chaleur. pH 6-7.',
    miseEnPlace: 'Semis direct à la volée ou en ligne. Écartement: 20-30cm entre lignes. Semis léger, graines très fines.',
    entretiens: 'Éclaircissage. Arrosage régulier. Fumure azotée pour feuillage. Récolte de feuilles stimule repousse.',
    maladies: 'Peu de maladies. Limaces, pucerons parfois. Culture facile et rustique.',
    recolte: '4-6 semaines. Coupe des jeunes feuilles. Plusieurs coupes possibles. Récolte progressive.',
    valorisation: 'Feuilles consommées cuites (sauce, légume). Graines comestibles. Fraîches ou séchées.'
  },
  {
    id: 'pasteque',
    nom: 'Pastèque',
    categorie: 'fruitieres',
    conditions: 'Sol léger, sablonneux, bien drainé. Température 25-30°C. Pluviométrie modérée 400-600mm. pH 6-7.',
    miseEnPlace: 'Semis en poquet, 3-4 graines. Écartement: 2-3m x 2-3m. Fumure organique abondante au trou.',
    entretiens: 'Démariage à 2 plants/poquet. Paillage. Arrosage régulier jusqu\'à fructification. Taille des tiges secondaires.',
    maladies: 'Fusariose, anthracnose, pucerons, mouches des fruits. Rotation, variétés résistantes, traitements préventifs.',
    recolte: '3-4 mois. Son creux au tapotement. Vrille sèche. Coupe avec pédoncule. Manipulation délicate.',
    valorisation: 'Consommation fraîche, jus. Conservation limitée (1-2 semaines). Transport délicat.'
  },
  {
    id: 'melon',
    nom: 'Melon',
    categorie: 'fruitieres',
    conditions: 'Sol riche, bien drainé. Température 20-30°C. Besoin en eau important mais drainage nécessaire. pH 6-7.',
    miseEnPlace: 'Semis en poquet ou repiquage. Écartement: 1-1,5m x 1m. Matière organique au trou de plantation.',
    entretiens: 'Paillage plastique recommandé. Arrosage au pied. Taille pour limiter nombre de fruits (qualité). Fumure complète.',
    maladies: 'Mildiou, fusariose, pucerons, mouches blanches. Rotation, traitements fongicides et insecticides.',
    recolte: '3-4 mois. Parfum caractéristique, pétiole se détache facilement. Récolte progressive.',
    valorisation: 'Consommation fraîche, jus. Conservation courte (quelques jours). Qualité gustative prioritaire.'
  },
  {
    id: 'concombre',
    nom: 'Concombre',
    categorie: 'maraicheres',
    conditions: 'Sol riche, humifère, bien drainé. Température 18-25°C. Besoin en eau élevé. pH 6-7.',
    miseEnPlace: 'Semis direct ou repiquage. Écartement: 1m x 50cm. Tuteurage ou culture au sol (paillage).',
    entretiens: 'Arrosage abondant et régulier. Paillage. Fumure riche. Taille des tiges secondaires si palissage.',
    maladies: 'Mildiou, oïdium, anthracnose, pucerons. Rotation, variétés résistantes, traitements préventifs.',
    recolte: '2-3 mois. Récolte tous les 2-3 jours. Fruits fermes, bien formés, avant jaunissement.',
    valorisation: 'Consommation fraîche, cornichons (petits fruits), conservation vinaigre. Courte durée fraîche.'
  },
  {
    id: 'salade',
    nom: 'Salade',
    categorie: 'maraicheres',
    conditions: 'Sol meuble, riche. Température fraîche 15-20°C. Arrosage régulier. pH 6-7.',
    miseEnPlace: 'Semis en pépinière puis repiquage ou semis direct. Écartement: 25-30cm x 25cm. Plantation superficielle.',
    entretiens: 'Arrosage régulier et fréquent. Binage léger. Fumure azotée modérée. Ombrage en saison chaude.',
    maladies: 'Mildiou, pourriture, pucerons, limaces. Rotation, drainage, variétés résistantes, protection contre limaces.',
    recolte: '6-8 semaines. Pomme bien formée. Coupe au ras du sol. Récolte matinale pour fraîcheur.',
    valorisation: 'Consommation fraîche immédiate. Très courte conservation. Circuits courts privilégiés.'
  },
  {
    id: 'poivron',
    nom: 'Poivron',
    categorie: 'maraicheres',
    conditions: 'Sol riche, profond, bien drainé. Température 20-28°C. Besoin en eau régulier. pH 6-7.',
    miseEnPlace: 'Pépinière puis repiquage à 8-10 semaines. Écartement: 60-80cm x 40-50cm. Tuteurage recommandé.',
    entretiens: 'Arrosage régulier au pied. Paillage. Fumure complète NPK + matière organique. Taille gourmands basaux.',
    maladies: 'Anthracnose, flétrissement bactérien, pucerons, acariens. Rotation, variétés résistantes, traitements.',
    recolte: '3-5 mois. Fruits verts ou colorés selon utilisation. Coupe avec pétiole. Production échelonnée.',
    valorisation: 'Consommation fraîche, farci, conserves. Conservation moyenne chambre froide. Transformation possible.'
  },
  {
    id: 'courge',
    nom: 'Courge',
    categorie: 'maraicheres',
    conditions: 'Sol riche, profond. Température 20-30°C. Besoin en eau important. pH 6-7.',
    miseEnPlace: 'Semis en poquet, 2-3 graines. Écartement: 1,5-2m x 1,5-2m. Matière organique abondante.',
    entretiens: 'Démariage. Paillage. Arrosage régulier surtout au grossissement. Fumure organique. Peu de taille nécessaire.',
    maladies: 'Oïdium, mildiou, mouches des fruits. Rotation, variétés résistantes, traitements fongicides.',
    recolte: '3-4 mois. Peau dure, pédoncule sec. Laisser sur pied pour durcissement. Conservation longue durée.',
    valorisation: 'Consommation fraîche, purée, conserves. Excellente conservation (plusieurs mois) en lieu sec.'
  },
  {
    id: 'corette',
    nom: 'Corète (jute)',
    categorie: 'maraicheres',
    conditions: 'Sol fertile, humide. Température chaude 25-35°C. Croissance rapide. Résiste chaleur et humidité. pH 6-7.',
    miseEnPlace: 'Semis direct en ligne ou à la volée. Écartement: 20-30cm entre lignes. Densité élevée.',
    entretiens: 'Arrosage régulier. Fumure azotée. Éclaircissage si nécessaire. Culture facile et rapide.',
    maladies: 'Peu sensible. Robuste. Parfois pucerons. Culture traditionnelle africaine.',
    recolte: '6-8 semaines. Coupe des jeunes feuilles tendres. Plusieurs coupes successives possibles.',
    valorisation: 'Feuilles consommées en sauce (gombo végétal). Fibres des tiges pour cordage. Séchage des feuilles.'
  },
  {
    id: 'bissap',
    nom: 'Bissap (hibiscus)',
    categorie: 'fruitieres',
    conditions: 'Sol bien drainé. Température 25-35°C. Résiste à la sécheresse. Pluviométrie 500-1000mm. pH 5,5-7.',
    miseEnPlace: 'Semis direct en poquet, 2-3 graines. Écartement: 80cm x 80cm. Début saison des pluies.',
    entretiens: 'Démariage à 1 plant/poquet. Sarclage binage. Fumure modérée. Résiste bien à la sécheresse.',
    maladies: 'Peu de maladies. Nématodes, chenilles parfois. Culture rustique et facile.',
    recolte: '4-6 mois. Récolte des calices rouges après chute des pétales. Séchage immédiat au soleil.',
    valorisation: 'Boisson (jus de bissap), confiture, colorant alimentaire. Feuilles comestibles. Excellente conservation séché.'
  },
  {
    id: 'fraise',
    nom: 'Fraise',
    categorie: 'fruitieres',
    conditions: 'Sol riche, bien drainé. Température fraîche 15-25°C. Besoin en eau régulier. pH 5,5-6,5. Altitude élevée en zone tropicale.',
    miseEnPlace: 'Plants (stolons) espacés de 30cm x 30cm. Paillage plastique ou paille. Plantation sur billons.',
    entretiens: 'Arrosage régulier (goutte à goutte idéal). Suppression stolons. Fumure complète. Renouvellement tous les 2-3 ans.',
    maladies: 'Botrytis, oïdium, anthracnose, acariens. Paillage, aération, traitements fongicides, variétés résistantes.',
    recolte: '3-4 mois après plantation. Récolte quotidienne ou tous les 2 jours. Fruits mûrs, rouges, fermes.',
    valorisation: 'Consommation fraîche, confiture, congélation. Très courte conservation fraîche. Circuits courts essentiels.'
  },
  {
    id: 'ananas',
    nom: 'Ananas',
    categorie: 'fruitieres',
    conditions: 'Sol léger, bien drainé. Pluviométrie 1000-1500mm. Température 20-30°C. pH 4,5-6,5. Pas d\'eau stagnante.',
    miseEnPlace: 'Rejets ou couronnes. Écartement: 60-90cm x 30-40cm (rangs doubles). Haute densité (50 000-60 000 plants/ha).',
    entretiens: 'Désherbage régulier. Fumure azotée régulière. Forçage floral par carbure (cultures intensives). Drainage important.',
    maladies: 'Fusariose, cochenilles, nématodes. Utilisation de rejets sains, rotation, traitements nématicides.',
    recolte: '15-18 mois. Fruit coloré, odeur sucrée. Coupe avec quelques cm de tige. Une seule récolte par plant (ou 2e rejet).',
    valorisation: 'Consommation fraîche, jus, conserves, fruits séchés. Export possible. Conservation moyenne.'
  },
  {
    id: 'mangue',
    nom: 'Mangue',
    categorie: 'fruitieres',
    conditions: 'Sol profond, bien drainé. Pluviométrie 1000-2000mm avec saison sèche. Température 24-30°C. pH 5,5-7,5.',
    miseEnPlace: 'Plants greffés. Écartement: 10m x 10m. Trou 80x80x80cm. Matière organique + engrais. Tuteurage.',
    entretiens: 'Taille de formation. Élagage sanitaire. Fumure NPK annuelle. Irrigation en saison sèche si possible.',
    maladies: 'Anthracnose, mouche des fruits, cochenilles. Traitements phytosanitaires, ensachage fruits, variétés résistantes.',
    recolte: 'Production dès 3-5 ans. Récolte selon variété (saison). Fruits mûrs ou pré-mûrs. Manipulation délicate.',
    valorisation: 'Consommation fraîche, jus, séchage, conserves, export. Conservation variable selon variété.'
  },
  {
    id: 'papaye',
    nom: 'Papaye',
    categorie: 'fruitieres',
    conditions: 'Sol riche, profond, bien drainé. Pluviométrie 1200-2000mm. Température 22-28°C. pH 6-7. Pas d\'eau stagnante.',
    miseEnPlace: 'Semis ou plants. Écartement: 2-3m x 2-3m. Trou avec compost. Plantation début saison pluies. Sexage des plants.',
    entretiens: 'Arrosage régulier. Fumure organique + NPK. Suppression plants mâles (garder 1 pour 10 femelles). Drainage.',
    maladies: 'Viroses (papaya ring spot), anthracnose, mouches des fruits. Variétés résistantes, ensachage, traitements.',
    recolte: 'Production dès 9-12 mois. Récolte progressive. Fruits colorés, légèrement tendres. Production sur 3-4 ans.',
    valorisation: 'Consommation fraîche, jus, fruits verts en légume, papaïne (enzyme). Conservation courte fraîche.'
  }
];

export const categoriesNoms = {
  vivrieres: 'Cultures Vivrières',
  maraicheres: 'Cultures Maraîchères',
  fruitieres: 'Cultures Fruitières'
};
