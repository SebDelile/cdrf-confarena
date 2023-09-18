import { CLASSES, CARACS, ALLIANCES, GEMMES } from '.';

const { all, shooter, warriorShooter, magician, warriorMagician, priest, warriorPriest } = CLASSES;
const { MOU, INI, FOR, RES, COU, PEU, DIS, TIR, POU, FOI } = CARACS;
const { voieLumiere, meandresTenebres, cheminDestin, autresAlliances } = ALLIANCES;
const { lumiere, tenebres, air, eau, feu, terre } = GEMMES;

export type profileModifType = {
  classes: CLASSES[];
  caracModifs: [CARACS, number][];
  capacities: string[];
  cost: number;
};
export type LocalStuffType = { name: string; cost: number };
export type FactionType = {
  name: string;
  alliance: ALLIANCES;
  grimoire: string[];
  baseElements: GEMMES[];
  forbiddenElements: GEMMES[];
  litany: string;
  profileModifs: profileModifType[];
  localStuff: LocalStuffType[];
};

export const factions: FactionType[] = [
  {
    name: 'Alchimiste de Dirz',
    alliance: meandresTenebres,
    grimoire: ['Technomancie', 'Biopsie'],
    baseElements: [tenebres],
    forbiddenElements: [air, lumiere],
    litany: 'Arh-Tolth',
    profileModifs: [{ classes: [all], caracModifs: [], capacities: ['Mutagène/2'], cost: 6 }],
    localStuff: [],
  },
  {
    name: 'Alliance Ophidienne (serpent)',
    alliance: meandresTenebres,
    grimoire: ['Typhonisme', 'Enskëm'],
    baseElements: [tenebres],
    forbiddenElements: [lumiere],
    litany: 'Vortiris',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [MOU, 2.5],
          [INI, 1],
          [PEU, 2],
        ],
        capacities: ['Conscience', 'Toxique/3', 'Grande taille'],
        cost: 20,
      },
      { classes: [shooter, warriorShooter], caracModifs: [[TIR, 1]], capacities: [], cost: 4 },
      { classes: [magician, warriorMagician], caracModifs: [[POU, 1]], capacities: [], cost: 7 },
    ],
    localStuff: [],
  },
  {
    name: 'Alliance Ophidienne (humain)',
    alliance: meandresTenebres,
    grimoire: ['Typhonisme', 'Enskëm'],
    baseElements: [tenebres],
    forbiddenElements: [lumiere],
    litany: 'Vortiris',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [[DIS, -1]],
        capacities: ['Toxique/0', 'Possédé'],
        cost: 6,
      },
    ],
    localStuff: [],
  },
  {
    name: 'Cité franche de Cadwallon',
    alliance: autresAlliances,
    grimoire: ['Cartomancie', 'Noire'],
    baseElements: [tenebres, lumiere, air, eau, feu, terre],
    forbiddenElements: [],
    litany: 'Désir',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [],
        capacities: [],
        cost: 0,
      },
    ],
    localStuff: [{ name: 'Equipement supplémentaire', cost: 2 }],
  },
  {
    name: 'Dévoreurs de Vile-Tis (wolfen)',
    alliance: meandresTenebres,
    grimoire: ['Hurlements', 'Tourments'],
    baseElements: [eau],
    forbiddenElements: [terre],
    litany: 'Vile-Tis',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [MOU, 5],
          [RES, 1],
          [PEU, 2],
          [DIS, -3],
        ],
        capacities: ['Tueur né', 'Grande taille'],
        cost: 19,
      },
    ],
    localStuff: [
      { name: '1 chaîne au choix', cost: 1 },
      { name: 'Toutes les chaines', cost: 3 },
    ],
  },
  {
    name: 'Dévoreurs de Vile-Tis (demi-elfe)',
    alliance: meandresTenebres,
    grimoire: ['Hurlements', 'Tourments'],
    baseElements: [eau],
    forbiddenElements: [terre],
    litany: 'Vile-Tis',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [MOU, 2.5],
          [DIS, -2],
        ],
        capacities: ['Ambidextre'],
        cost: 4,
      },
    ],
    localStuff: [
      { name: '1 chaîne au choix', cost: 1 },
      { name: 'Toutes les chaines', cost: 3 },
    ],
  },
  {
    name: 'Elfes Cynwälls',
    alliance: voieLumiere,
    grimoire: ['Solaris', 'Chronomancie'],
    baseElements: [lumiere],
    forbiddenElements: [tenebres],
    litany: 'Noësis',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [MOU, 2.5],
          [COU, 1],
          [DIS, 1],
        ],
        capacities: ['Concentration/2 (INI/ATT/DEF/COU)'],
        cost: 10,
      },
      { classes: [shooter, warriorShooter], caracModifs: [[TIR, 1]], capacities: [], cost: 4 },
    ],
    localStuff: [
      { name: 'Arme Héliante', cost: 1 },
      { name: 'Armure Héliante', cost: 1 },
      { name: 'Arme de tir Héliante', cost: 1 },
      { name: 'Mécanisme Héliante', cost: 1 },
    ],
  },
  {
    name: 'Elfes Daikinee',
    alliance: cheminDestin,
    grimoire: ['Féérie', 'Symbiose'],
    baseElements: [eau],
    forbiddenElements: [feu, tenebres],
    litany: 'Earhë',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [MOU, 2.5],
          [DIS, -2],
        ],
        capacities: ['Régénération/5'],
        cost: 4,
      },
      { classes: [shooter, warriorShooter], caracModifs: [[TIR, 1]], capacities: [], cost: 4 },
    ],
    localStuff: [
      { name: 'Arme Symbiotique', cost: 1 },
      { name: 'Armure Symbiotique', cost: 1 },
      { name: 'Arme de tir Symbiotique', cost: 1 },
    ],
  },
  {
    name: 'Gobelins de No-Dan-Kar',
    alliance: cheminDestin,
    grimoire: ['Sorcellerie', 'Mutations'],
    baseElements: [air],
    forbiddenElements: [],
    litany: 'Rat',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [INI, 1],
          [FOR, -1],
          [RES, -1],
          [COU, -2],
        ],
        capacities: ['Instinct de survie/6', 'Petite taille'],
        cost: -1,
      },
      { classes: [magician, warriorMagician], caracModifs: [[POU, 1]], capacities: [], cost: 5 },
      { classes: [priest, warriorPriest], caracModifs: [[FOI, 1]], capacities: [], cost: 5 },
    ],
    localStuff: [
      { name: 'Carburateur', cost: 0 },
      { name: 'Arme à Naphthe (FOR+1d6)', cost: 3 },
      { name: 'Arme de tir à Naphthe (FORTIR+1d6)', cost: 5 },
    ],
  },
  {
    name: "Griffons d'Akkylannie",
    alliance: voieLumiere,
    grimoire: ['Théurgie', 'Rédemption', 'Exorcisme'],
    baseElements: [feu],
    forbiddenElements: [tenebres],
    litany: 'Merin',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [FOR, -1],
          [RES, 1],
          [DIS, 2],
        ],
        capacities: ['Fanatisme'],
        cost: 6,
      },
      {
        classes: [priest, warriorPriest],
        caracModifs: [[FOI, 1]],
        capacities: ['Illuminé'],
        cost: 6,
      },
    ],
    localStuff: [
      { name: 'Lame de Jugement', cost: 1 },
      { name: 'Armure bénie', cost: 1 },
    ],
  },
  {
    name: 'Keltois du clan des Drunes (humain)',
    alliance: meandresTenebres,
    grimoire: ['Shamanisme', 'Supplices'],
    baseElements: [tenebres, air, eau, feu, terre],
    forbiddenElements: [lumiere],
    litany: 'Cernunnos',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [[DIS, -1]],
        capacities: ['Acharné'],
        cost: 4,
      },
      {
        classes: [priest, warriorPriest],
        caracModifs: [[FOI, 1]],
        capacities: ['Illuminé'],
        cost: 5,
      },
    ],
    localStuff: [],
  },
  {
    name: 'Keltois du clan des Drunes (Formor)',
    alliance: meandresTenebres,
    grimoire: ['Typhonisme', 'Cabale'],
    baseElements: [tenebres],
    forbiddenElements: [lumiere],
    litany: 'Cernunnos',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [MOU, 2.5],
          [FOR, 1],
          [PEU, 2],
          [DIS, -1],
        ],
        capacities: ['Régénération/5'],
        cost: 11,
      },
    ],
    localStuff: [
      { name: 'Arme Formor', cost: 1 },
      { name: 'Armure Formor', cost: 1 },
      { name: 'Talisman Formor', cost: 1 },
    ],
  },
  {
    name: 'Keltois du clan des Sesairs',
    alliance: voieLumiere,
    grimoire: ['Shamanisme', 'Druidisme'],
    baseElements: [air, eau, feu, terre],
    forbiddenElements: [lumiere, tenebres],
    litany: 'Dannu',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [INI, 1],
          [RES, -1],
          [DIS, -1],
        ],
        capacities: ['Furie guerrière'],
        cost: 4,
      },
    ],
    localStuff: [],
  },
  {
    name: "Lions d'Alahan",
    alliance: voieLumiere,
    grimoire: ['hermétisme', 'Circæus'],
    baseElements: [lumiere],
    forbiddenElements: [tenebres],
    litany: 'Aïrn',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [[COU, 1]],
        capacities: ['Bravoure'],
        cost: 3,
      },
      {
        classes: [magician, warriorMagician],
        caracModifs: [[POU, 2]],
        capacities: [],
        cost: 13,
      },
    ],
    localStuff: [],
  },
  {
    name: "Morts-vivants d'Achéron (mort-vivant)",
    alliance: meandresTenebres,
    grimoire: ['Nécromancie', 'Circæus'],
    baseElements: [tenebres],
    forbiddenElements: [lumiere, eau],
    litany: 'Salaüel',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [MOU, -2.5],
          [INI, -1],
          [PEU, 3],
          [DIS, -4],
        ],
        capacities: ['Mort-vivant'],
        cost: 0,
      },
      {
        classes: [magician, warriorMagician],
        caracModifs: [[POU, 1]],
        capacities: ['Invocateur/2'],
        cost: 7,
      },
    ],
    localStuff: [
      { name: 'Arme Noire', cost: 1 },
      { name: 'Armure Noire', cost: 1 },
      { name: 'Arme de tirNoire', cost: 1 },
    ],
  },
  {
    name: "Morts-vivants d'Achéron (vivant)",
    alliance: meandresTenebres,
    grimoire: ['Nécromancie', 'Circæus'],
    baseElements: [tenebres],
    forbiddenElements: [lumiere, eau],
    litany: 'Salaüel',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [[PEU, 1]],
        capacities: ['Résolution/1'],
        cost: 4,
      },
      {
        classes: [magician, warriorMagician],
        caracModifs: [[POU, 1]],
        capacities: ['Invocateur/2'],
        cost: 7,
      },
    ],
    localStuff: [
      { name: 'Arme Noire', cost: 1 },
      { name: 'Armure Noire', cost: 1 },
      { name: 'Arme de tirNoire', cost: 1 },
    ],
  },
  {
    name: 'Nains de Mid-Nor',
    alliance: meandresTenebres,
    grimoire: ['Chtonienne', 'Corruption'],
    baseElements: [tenebres],
    forbiddenElements: [lumiere, air],
    litany: 'Mid-Nor',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [MOU, -2.5],
          [PEU, 1],
        ],
        capacities: ['Possédé', 'Petite taille'],
        cost: 3,
      },
      {
        classes: [priest, warriorPriest],
        caracModifs: [[FOI, 1]],
        capacities: ['Invocateur/2'],
        cost: 7,
      },
    ],
    localStuff: [],
  },
  {
    name: 'Nains de Tir-Nâ-Bor',
    alliance: voieLumiere,
    grimoire: ['Tellurique', 'Forge', 'Lithomancie'],
    baseElements: [terre],
    forbiddenElements: [tenebres],
    litany: 'Odnir',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [MOU, -2.5],
          [INI, -2],
          [DIS, 2],
        ],
        capacities: ['Dur à cuir', 'Petite taille'],
        cost: 4,
      },
    ],
    localStuff: [
      { name: 'Chaudière', cost: 0 },
      { name: 'Arme à Vapeur (FOR+1d6)', cost: 3 },
      { name: 'Arme de tir à Vapeur (FORTIR+1d6)', cost: 5 },
    ],
  },
  {
    name: 'Orques du Bran-ô-Kor',
    alliance: cheminDestin,
    grimoire: ['Magie instinctive'],
    baseElements: [],
    forbiddenElements: [tenebres, lumiere, air, eau, feu, terre],
    litany: 'Chacal',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [[FOR, 1]],
        capacities: ['Brute épaisse'],
        cost: 4,
      },
    ],
    localStuff: [
      { name: 'Carburateur', cost: 0 },
      { name: 'Arme à Naphthe (FOR+1d6)', cost: 3 },
      { name: 'Arme de tir à Naphthe (FORTIR+1d6)', cost: 5 },
    ],
  },
  {
    name: 'Orques du Béhémoth',
    alliance: cheminDestin,
    grimoire: ['Magie instinctive'],
    baseElements: [],
    forbiddenElements: [tenebres, lumiere, air, eau, feu, terre],
    litany: 'Elokani',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [[FOR, 1]],
        capacities: ['Brute épaisse', 'Endurance'],
        cost: 6,
      },
    ],
    localStuff: [],
  },
  {
    name: "Wolfen d'Yllia",
    alliance: cheminDestin,
    grimoire: ['Murmures', 'Lamentations'],
    baseElements: [eau],
    forbiddenElements: [tenebres, lumiere],
    litany: 'Yllia',
    profileModifs: [
      {
        classes: [all],
        caracModifs: [
          [MOU, 5],
          [FOR, 2],
          [RES, -1],
          [PEU, 2],
          [DIS, -2],
        ],
        capacities: ['Tueur né', 'Grande taille'],
        cost: 20,
      },
    ],
    localStuff: [
      { name: 'Arme de Lune', cost: 1 },
      { name: 'Armure de Lune', cost: 1 },
    ],
  },
];
