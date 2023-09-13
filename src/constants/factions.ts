import { CLASSES, CARACS, ALLIANCES, GEMMES, SelectMenuOptionType } from '.';

const { all, shooter, magician, priest } = CLASSES;
const { MOU, INI, FOR, RES, COU, PEU, DIS, TIR, POU, FOI } = CARACS;
const { voieLumiere, meandresTenebres, cheminDestin, autresAlliances } = ALLIANCES;
const { lumiere, tenebres, air, eau, feu, terre } = GEMMES;

export type profileModifType = {
  classe: CLASSES;
  caracModifs: [CARACS, number][];
  capacities: string[];
  cost: number;
};
export type FactionType = {
  name: string;
  alliance: ALLIANCES;
  grimoire: string[];
  baseElements: string[];
  forbidenElements: string[];
  litany: string;
  profileModifs: profileModifType[];
  options: [string, number][];
};

export const factions: FactionType[] = [
  {
    name: 'Alchimiste de Dirz',
    alliance: meandresTenebres,
    grimoire: ['Technomancie', 'Biopsie'],
    baseElements: [tenebres],
    forbidenElements: [air, lumiere],
    litany: 'Arh-Tolth',
    profileModifs: [{ classe: all, caracModifs: [], capacities: ['Mutagène/2'], cost: 6 }],
    options: [],
  },
  {
    name: 'Alliance Ophidienne (serpent)',
    alliance: meandresTenebres,
    grimoire: ['Typhonisme', 'Enskëm'],
    baseElements: [tenebres],
    forbidenElements: [lumiere],
    litany: 'Vortiris',
    profileModifs: [
      {
        classe: all,
        caracModifs: [
          [MOU, 2.5],
          [INI, 1],
          [PEU, 2],
        ],
        capacities: ['Conscience', 'Toxique/3', 'Grande taille'],
        cost: 20,
      },
      { classe: shooter, caracModifs: [[TIR, 1]], capacities: [], cost: 4 },
      { classe: magician, caracModifs: [[POU, 1]], capacities: [], cost: 7 },
    ],
    options: [],
  },
  {
    name: 'Alliance Ophidienne (humain)',
    alliance: meandresTenebres,
    grimoire: ['Typhonisme', 'Enskëm'],
    baseElements: [tenebres],
    forbidenElements: [lumiere],
    litany: 'Vortiris',
    profileModifs: [
      {
        classe: all,
        caracModifs: [[DIS, -1]],
        capacities: ['Toxique/0', 'Possédé'],
        cost: 6,
      },
    ],
    options: [],
  },
  {
    name: 'Cité franche de Cadwallon',
    alliance: autresAlliances,
    grimoire: ['Cartomancie', 'Noire'],
    baseElements: [tenebres, lumiere, air, eau, feu, terre],
    forbidenElements: [],
    litany: 'Désir',
    profileModifs: [
      {
        classe: all,
        caracModifs: [],
        capacities: [],
        cost: 0,
      },
    ],
    options: [['Equipement supplémentaire', 2]],
  },
  {
    name: 'Dévoreurs de Vile-Tis (wolfen)',
    alliance: meandresTenebres,
    grimoire: ['Hurlements', 'Tourments'],
    baseElements: [eau],
    forbidenElements: [terre],
    litany: 'Vile-Tis',
    profileModifs: [
      {
        classe: all,
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
    options: [
      ['1 chaîne au choix', 1],
      ['Toutes les chaines', 3],
    ],
  },
  {
    name: 'Dévoreurs de Vile-Tis (demi-elfe)',
    alliance: meandresTenebres,
    grimoire: ['Hurlements', 'Tourments'],
    baseElements: [eau],
    forbidenElements: [terre],
    litany: 'Vile-Tis',
    profileModifs: [
      {
        classe: all,
        caracModifs: [
          [MOU, 2.5],
          [DIS, -2],
        ],
        capacities: ['Ambidextre'],
        cost: 4,
      },
    ],
    options: [
      ['1 chaîne au choix', 1],
      ['Toutes les chaines', 3],
    ],
  },
  {
    name: 'Elfes Cynwälls',
    alliance: voieLumiere,
    grimoire: ['Solaris', 'Chronomancie'],
    baseElements: [lumiere],
    forbidenElements: [tenebres],
    litany: 'Noësis',
    profileModifs: [
      {
        classe: all,
        caracModifs: [
          [MOU, 2.5],
          [COU, 1],
          [DIS, 1],
        ],
        capacities: ['Concentration/2 (INI/ATT/DEF/COU)'],
        cost: 10,
      },
      { classe: shooter, caracModifs: [[TIR, 1]], capacities: [], cost: 4 },
    ],
    options: [
      ['Arme Héliante', 1],
      ['Armure Héliante', 1],
      ['Arme de tir Héliante', 1],
      ['Mécanisme Héliante', 1],
    ],
  },
  {
    name: 'Elfes Daikinee',
    alliance: cheminDestin,
    grimoire: ['Féérie', 'Symbiose'],
    baseElements: [eau],
    forbidenElements: [feu, tenebres],
    litany: 'Earhë',
    profileModifs: [
      {
        classe: all,
        caracModifs: [
          [MOU, 2.5],
          [DIS, -2],
        ],
        capacities: ['Régénération/5'],
        cost: 4,
      },
      { classe: shooter, caracModifs: [[TIR, 1]], capacities: [], cost: 4 },
    ],
    options: [
      ['Arme Symbiotique', 1],
      ['Armure Symbiotique', 1],
      ['Arme de tir Symbiotique', 1],
    ],
  },
  {
    name: 'Gobelins de No-Dan-Kar',
    alliance: cheminDestin,
    grimoire: ['Sorcellerie', 'Mutations'],
    baseElements: [air],
    forbidenElements: [],
    litany: 'Rat',
    profileModifs: [
      {
        classe: all,
        caracModifs: [
          [INI, 1],
          [FOR, -1],
          [RES, -1],
          [COU, -2],
        ],
        capacities: ['Instinct de survie/6', 'Petite taille'],
        cost: -1,
      },
      { classe: magician, caracModifs: [[POU, 1]], capacities: [], cost: 5 },
      { classe: priest, caracModifs: [[FOI, 1]], capacities: [], cost: 5 },
    ],
    options: [
      ['Carburateur', 0],
      ['Arme à Naphthe (FOR+1d6)', 3],
      ['Arme de tir à Naphthe (FORTIR+1d6)', 5],
    ],
  },
  {
    name: "Griffons d'Akkylannie",
    alliance: voieLumiere,
    grimoire: ['Théurgie', 'Rédemption', 'Exorcisme'],
    baseElements: [feu],
    forbidenElements: [tenebres],
    litany: 'Merin',
    profileModifs: [
      {
        classe: all,
        caracModifs: [
          [FOR, -1],
          [RES, 1],
          [DIS, 2],
        ],
        capacities: ['Fanatisme'],
        cost: 6,
      },
      {
        classe: priest,
        caracModifs: [[FOI, 1]],
        capacities: ['Illuminé'],
        cost: 6,
      },
    ],
    options: [
      ['Lame de Jugement', 1],
      ['Armure bénie', 1],
    ],
  },
  {
    name: 'Keltois du clan des Drunes (humain)',
    alliance: meandresTenebres,
    grimoire: ['Shamanisme', 'Supplices'],
    baseElements: [tenebres, air, eau, feu, terre],
    forbidenElements: [lumiere],
    litany: 'Cernunnos',
    profileModifs: [
      {
        classe: all,
        caracModifs: [[DIS, -1]],
        capacities: ['Acharné'],
        cost: 4,
      },
      {
        classe: priest,
        caracModifs: [[FOI, 1]],
        capacities: ['Illuminé'],
        cost: 5,
      },
    ],
    options: [],
  },
  {
    name: 'Keltois du clan des Drunes (Formor)',
    alliance: meandresTenebres,
    grimoire: ['Typhonisme', 'Cabale'],
    baseElements: [tenebres],
    forbidenElements: [lumiere],
    litany: 'Cernunnos',
    profileModifs: [
      {
        classe: all,
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
    options: [
      ['Arme Formor', 1],
      ['Armure Formor', 1],
      ['Talisman Formor', 1],
    ],
  },
  {
    name: 'Keltois du clan des Sesairs',
    alliance: voieLumiere,
    grimoire: ['Shamanisme', 'Druidisme'],
    baseElements: [air, eau, feu, terre],
    forbidenElements: [lumiere, tenebres],
    litany: 'Dannu',
    profileModifs: [
      {
        classe: all,
        caracModifs: [
          [INI, 1],
          [RES, -1],
          [DIS, -1],
        ],
        capacities: ['Furie guerrière'],
        cost: 4,
      },
    ],
    options: [],
  },
  {
    name: "Lions d'Alahan",
    alliance: voieLumiere,
    grimoire: ['hermétisme', 'Circæus'],
    baseElements: [lumiere],
    forbidenElements: [tenebres],
    litany: 'Aïrn',
    profileModifs: [
      {
        classe: all,
        caracModifs: [[COU, 1]],
        capacities: ['Bravoure'],
        cost: 3,
      },
      {
        classe: magician,
        caracModifs: [[POU, 2]],
        capacities: [],
        cost: 13,
      },
    ],
    options: [],
  },
  {
    name: "Morts-vivants d'Achéron (mort-vivant)",
    alliance: meandresTenebres,
    grimoire: ['Nécromancie', 'Circæus'],
    baseElements: [tenebres],
    forbidenElements: [lumiere, eau],
    litany: 'Salaüel',
    profileModifs: [
      {
        classe: all,
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
        classe: magician,
        caracModifs: [[POU, 1]],
        capacities: ['Invocateur/2'],
        cost: 7,
      },
    ],
    options: [
      ['Arme Noire', 1],
      ['Armure Noire', 1],
      ['Arme de tirNoire', 1],
    ],
  },
  {
    name: "Morts-vivants d'Achéron (vivant)",
    alliance: meandresTenebres,
    grimoire: ['Nécromancie', 'Circæus'],
    baseElements: [tenebres],
    forbidenElements: [lumiere, eau],
    litany: 'Salaüel',
    profileModifs: [
      {
        classe: all,
        caracModifs: [[PEU, 1]],
        capacities: ['Résolution/1'],
        cost: 4,
      },
      {
        classe: magician,
        caracModifs: [[POU, 1]],
        capacities: ['Invocateur/2'],
        cost: 7,
      },
    ],
    options: [
      ['Arme Noire', 1],
      ['Armure Noire', 1],
      ['Arme de tirNoire', 1],
    ],
  },
  {
    name: 'Nains de Mid-Nor',
    alliance: meandresTenebres,
    grimoire: ['Chtonienne', 'Corruption'],
    baseElements: [tenebres],
    forbidenElements: [lumiere, air],
    litany: 'Mid-Nor',
    profileModifs: [
      {
        classe: all,
        caracModifs: [
          [MOU, -2.5],
          [PEU, 1],
        ],
        capacities: ['Possédé', 'Petite taille'],
        cost: 3,
      },
      {
        classe: priest,
        caracModifs: [[FOI, 1]],
        capacities: ['Invocateur/2'],
        cost: 7,
      },
    ],
    options: [],
  },
  {
    name: 'Nains de Tir-Nâ-Bor',
    alliance: voieLumiere,
    grimoire: ['Tellurique', 'Forge', 'Lithomancie'],
    baseElements: [terre],
    forbidenElements: [tenebres],
    litany: 'Odnir',
    profileModifs: [
      {
        classe: all,
        caracModifs: [
          [MOU, -2.5],
          [INI, -2],
          [DIS, 2],
        ],
        capacities: ['Dur à cuir', 'Petite taille'],
        cost: 4,
      },
    ],
    options: [
      ['Chaudière', 0],
      ['Arme à Vapeur (FOR+1d6)', 3],
      ['Arme de tir à Vapeur (FORTIR+1d6)', 5],
    ],
  },
  {
    name: 'Orques du Bran-ô-Kor',
    alliance: cheminDestin,
    grimoire: ['Magie instinctive'],
    baseElements: [],
    forbidenElements: [tenebres, lumiere, air, eau, feu, terre],
    litany: 'Chacal',
    profileModifs: [
      {
        classe: all,
        caracModifs: [[FOR, 1]],
        capacities: ['Brute épaisse'],
        cost: 4,
      },
    ],
    options: [
      ['Carburateur', 0],
      ['Arme à Naphthe (FOR+1d6)', 3],
      ['Arme de tir à Naphthe (FORTIR+1d6)', 5],
    ],
  },
  {
    name: 'Orques du Béhémoth',
    alliance: cheminDestin,
    grimoire: ['Magie instinctive'],
    baseElements: [],
    forbidenElements: [tenebres, lumiere, air, eau, feu, terre],
    litany: 'Elokani',
    profileModifs: [
      {
        classe: all,
        caracModifs: [[FOR, 1]],
        capacities: ['Brute épaisse', 'Endurance'],
        cost: 6,
      },
    ],
    options: [],
  },
  {
    name: "Wolfen d'Yllia",
    alliance: cheminDestin,
    grimoire: ['Murmures', 'Lamentations'],
    baseElements: [eau],
    forbidenElements: [tenebres, lumiere],
    litany: 'Yllia',
    profileModifs: [
      {
        classe: all,
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
    options: [],
  },
];
