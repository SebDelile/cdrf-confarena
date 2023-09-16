import { CARACS, CLASSES } from '..';
import { EquipmentType, equipementRestrictions } from '.';

const { shooter, magician, priest } = CLASSES;
const { FOR, RES, COU, DIS } = CARACS;
const { taille, classe } = equipementRestrictions;

export const accessories: EquipmentType[] = [
  {
    name: 'Médaillon doré',
    caracModifs: [[COU, 1]],
    capacities: [],
    cost: 1,
  },
  {
    name: 'Insigne de victoire',
    caracModifs: [[DIS, 1]],
    capacities: [],
    cost: 3,
  },
  {
    name: "Charme d'évasion",
    caracModifs: [],
    capacities: ['Désengagement/4', 'Réorientation'],
    cost: 4,
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
    cost: 1,
  },
  {
    name: 'Sérum cicatrisant',
    caracModifs: [],
    capacities: ['Régénration/5'],
    cost: 4,
  },
  {
    name: 'Insigne du temple',
    caracModifs: [],
    capacities: ['Concentration/1 (INI/ATT/DEF/COU)'],
    cost: 3,
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
    name: 'Potion de géant',
    caracModifs: [
      [FOR, 1],
      [RES, 1],
    ],
    capacities: ['Grande taille'],
    cost: 6,
    reservedTo: [
      [taille, 'petite'],
      [taille, 'moyenne'],
    ],
  },
  {
    name: 'Potion de titan',
    caracModifs: [
      [FOR, 1],
      [RES, 1],
    ],
    capacities: ['Enorme/1'],
    cost: 8,
    reservedTo: [[taille, 'grande']],
  },
  {
    name: 'Bénédiction divine',
    caracModifs: [],
    capacities: ['Aimé des Dieux'],
    cost: 25,
  },
  {
    name: 'Anneau de fortune',
    caracModifs: [],
    capacities: ['Chance'],
    cost: 10,
  },
  {
    name: 'Fioles alchimiques',
    caracModifs: [],
    capacities: ['Mutagène/0', 'Toxique/1'],
    cost: 12,
  },
  {
    name: 'Bracelets de force',
    caracModifs: [[FOR, 2]],
    capacities: ['Endurance'],
    cost: 5,
  },
  {
    name: 'Fétiche ancien',
    caracModifs: [],
    capacities: ['Instinct de survie/6'],
    cost: 2,
  },
  {
    name: 'Lunette de visée',
    caracModifs: [],
    capacities: ["Tireur d'élite", 'Tir instinctif'],
    cost: 6,
    reservedTo: [[classe, shooter]],
  },
  {
    name: "Pierre d'invocation",
    caracModifs: [],
    capacities: ['Invocateur/1'],
    cost: 2,
    reservedTo: [
      [classe, magician],
      [classe, priest],
    ],
  },
  {
    name: 'Parchemin de déni',
    caracModifs: [],
    capacities: ['Négation'],
    cost: 2,
    reservedTo: [
      [classe, magician],
      [classe, priest],
    ],
  },
];
