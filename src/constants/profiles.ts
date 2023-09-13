import { CARACS, CLASSES, SelectMenuOptionType } from '.';

const { warrior, shooter, magician, priest, warriorShooter, warriorMagician, warriorPriest } = CLASSES;
const { MOU, INI, ATT, FOR, DEF, RES, COU, PEU, DIS, TIR, POU, FOI } = CARACS;

export type ProfileType = {
  name: string;
  classe: CLASSES;
  caracs: { [carac in CARACS]: number | null };
  capacities: string[];
};

export const profiles: ProfileType[] = [
  {
    name: 'Guerrier',
    classe: warrior,
    caracs: {
      [MOU]: 10,
      [INI]: 4,
      [ATT]: 5,
      [FOR]: 7,
      [DEF]: 5,
      [RES]: 7,
      [COU]: 5,
      [PEU]: null,
      [DIS]: 4,
      [TIR]: null,
      [POU]: null,
      [FOI]: null,
    },
    capacities: ['Enchainement/2', 'Contre-attaque', 'Coup de maître/0'],
  },
  {
    name: 'Tireur',
    classe: shooter,
    caracs: {
      [MOU]: 10,
      [INI]: 4,
      [ATT]: 3,
      [FOR]: 5,
      [DEF]: 3,
      [RES]: 6,
      [COU]: 5,
      [PEU]: null,
      [DIS]: 4,
      [TIR]: 4,
      [POU]: null,
      [FOI]: null,
    },
    capacities: ['Enchainement/1', 'Rechargement rapide/1', 'Visée'],
  },
  {
    name: 'Magicien',
    classe: magician,
    caracs: {
      [MOU]: 10,
      [INI]: 4,
      [ATT]: 3,
      [FOR]: 5,
      [DEF]: 3,
      [RES]: 6,
      [COU]: 5,
      [PEU]: null,
      [DIS]: 4,
      [TIR]: null,
      [POU]: 4,
      [FOI]: null,
    },
    capacities: ['Enchainement/1', "Initié d'un Elément/un Grimoire", 'Maîtrise des Arcane'],
  },
  {
    name: 'Fidèle',
    classe: priest,
    caracs: {
      [MOU]: 10,
      [INI]: 4,
      [ATT]: 3,
      [FOR]: 5,
      [DEF]: 3,
      [RES]: 6,
      [COU]: 5,
      [PEU]: null,
      [DIS]: 4,
      [TIR]: null,
      [POU]: null,
      [FOI]: 4,
    },
    capacities: ['Enchainement/1', 'Dévot de son Dieu/infini', 'Iconoclaste'],
  },
  {
    name: 'Guerrier-tireur',
    classe: warriorShooter,
    caracs: {
      [MOU]: 10,
      [INI]: 4,
      [ATT]: 4,
      [FOR]: 6,
      [DEF]: 4,
      [RES]: 6,
      [COU]: 5,
      [PEU]: null,
      [DIS]: 4,
      [TIR]: 3,
      [POU]: null,
      [FOI]: null,
    },
    capacities: ['Enchainement/2', 'Contre-attaque', 'Coup de maître/0'],
  },
  {
    name: 'Guerrier-mage',
    classe: warriorMagician,
    caracs: {
      [MOU]: 10,
      [INI]: 4,
      [ATT]: 4,
      [FOR]: 6,
      [DEF]: 4,
      [RES]: 6,
      [COU]: 5,
      [PEU]: null,
      [DIS]: 4,
      [TIR]: null,
      [POU]: 3,
      [FOI]: null,
    },
    capacities: [
      'Enchainement/2',
      'Contre-attaque',
      'Coup de maître/0',
      "Initié d'un Elément/un Grimoire",
      'Guerier-mage',
    ],
  },
  {
    name: 'Moine-guerrier',
    classe: warriorPriest,
    caracs: {
      [MOU]: 10,
      [INI]: 4,
      [ATT]: 4,
      [FOR]: 6,
      [DEF]: 4,
      [RES]: 6,
      [COU]: 5,
      [PEU]: null,
      [DIS]: 4,
      [TIR]: null,
      [POU]: null,
      [FOI]: 3,
    },
    capacities: [
      'Enchainement/2',
      'Contre-attaque',
      'Coup de maître/0',
      'Dévot de son Dieu/infini',
      'Iconoclaste',
      'Moine-guerier',
    ],
  },
];
