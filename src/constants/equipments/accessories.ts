import { CARACS, CLASSES } from '..';
import { EquipmentType, EQUIPMENT_RESTRICTIONS } from '.';

const { shooter, warriorShooter, magician, warriorMagician, priest, warriorPriest } = CLASSES;
const { INI, ATT, FOR, DEF, RES, COU, DIS, TIR } = CARACS;
const { bigSize, classe } = EQUIPMENT_RESTRICTIONS;

export const accessories: EquipmentType[] = [
  {
    name: 'Médaillon doré',
    caracModifs: [[COU, 1]],
    capacities: [],
    cost: 1,
  },
  {
    name: "Charme d'évasion",
    caracModifs: [],
    capacities: ['Désengagement/4'],
    cost: 2,
  },
  {
    name: "Pierre d'invocation",
    caracModifs: [],
    capacities: ['Invocateur/1'],
    cost: 2,
    restrictions: [[classe, true, [magician, warriorMagician, priest, warriorPriest]]],
  },
  {
    name: 'Parchemin de déni',
    caracModifs: [],
    capacities: ['Négation'],
    cost: 2,
    restrictions: [[classe, true, [magician, warriorMagician, priest, warriorPriest]]],
  },
  {
    name: 'Insigne de victoire',
    caracModifs: [[DIS, 1]],
    capacities: [],
    cost: 3,
  },
  {
    name: 'Tatouages tribaux',
    caracModifs: [
      [ATT, 1],
      [DEF, 1],
    ],
    capacities: [],
    cost: 3,
  },
  {
    name: 'Insigne du temple',
    caracModifs: [],
    capacities: ['Concentration/1 (INI/ATT/DEF/COU)'],
    cost: 3,
  },
  {
    name: 'Fétiche ancien',
    caracModifs: [[INI, 1]],
    capacities: ['Instinct de survie/6'],
    cost: 3,
  },
  {
    name: 'Lunette de visée',
    caracModifs: [],
    capacities: ["Tireur d'élite"],
    cost: 4,
    restrictions: [[classe, true, [shooter, warriorShooter]]],
  },
  {
    name: 'Talisman protecteur',
    caracModifs: [],
    capacities: ['Insensible/5'],
    cost: 4,
  },
  {
    name: 'Pendentif du mirage',
    caracModifs: [],
    capacities: ['Cible/+2'],
    cost: 4,
  },
  {
    name: 'Sérum cicatrisant',
    caracModifs: [],
    capacities: ['Régénération/5'],
    cost: 4,
  },
  {
    name: 'Rune de soin',
    caracModifs: [],
    capacities: ['Soin/5'],
    cost: 4,
  },
  {
    name: 'Rune de volonté',
    caracModifs: [],
    capacities: ['Résolution/2'],
    cost: 4,
  },
  {
    name: 'Bracelets de force',
    caracModifs: [[FOR, 2]],
    capacities: ['Endurance'],
    cost: 5,
  },
  {
    name: 'Oeil de lynx',
    caracModifs: [[TIR, 1]],
    capacities: ['Tir instinctif'],
    cost: 5,
    restrictions: [[classe, true, [shooter, warriorShooter]]],
  },
  {
    name: 'Potion de géant',
    caracModifs: [
      [FOR, 1],
      [RES, 1],
    ],
    capacities: ['Grande taille'],
    cost: 6,
    restrictions: [[bigSize, false]],
  },
  {
    name: 'Fiole alchimique',
    caracModifs: [],
    capacities: ['Mutagène/0'],
    cost: 6,
  },
  {
    name: 'Venin',
    caracModifs: [],
    capacities: ['Toxique/1'],
    cost: 6,
  },

  {
    name: 'Pagne en peau de tigre',
    caracModifs: [
      [ATT, 1],
      [RES, 1],
    ],
    capacities: ['Désespéré'],
    cost: 7,
  },
  {
    name: 'Potion de titan',
    caracModifs: [
      [FOR, 1],
      [RES, 1],
    ],
    capacities: ['Enorme/1'],
    cost: 8,
    restrictions: [[bigSize, true]],
  },
  {
    name: 'Anneau de fortune',
    caracModifs: [],
    capacities: ['Chance'],
    cost: 10,
  },
  {
    name: 'Bénédiction divine',
    caracModifs: [],
    capacities: ['Aimé des Dieux'],
    cost: 25,
  },
];
