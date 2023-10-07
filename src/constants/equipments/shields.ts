import { CARACS } from '..';
import { EquipmentType } from '.';

const { INI, FOR, DEF, RES } = CARACS;

export const shields: EquipmentType[] = [
  {
    name: 'Ecu',
    caracModifs: [[DEF, 1]],
    capacities: [],
    cost: 1,
  },
  {
    name: 'Bouclier de bois',
    caracModifs: [[RES, 1]],
    capacities: [],
    cost: 1,
  },
  {
    name: 'Bouclier de fer',
    caracModifs: [
      [DEF, 1],
      [RES, 2],
    ],
    capacities: [],
    cost: 4,
  },
  {
    name: 'Pavois',
    caracModifs: [
      [DEF, 1],
      [RES, 1],
    ],
    capacities: ['Cible/+1'],
    cost: 4,
  },
  {
    name: 'Gantelet à lame intégrée',
    caracModifs: [[FOR, 1]],
    capacities: ['Ambidextre'],
    cost: 6,
  },
  {
    name: 'Main gauche',
    caracModifs: [
      [INI, 1],
      [DEF, 1],
    ],
    capacities: ['Membre supplémentaire'],
    cost: 3,
  },
  {
    name: 'Gantelet en acier',
    caracModifs: [[RES, 1]],
    capacities: ['Contre-attaque'],
    cost: 4,
  },
  {
    name: 'Rondache',
    caracModifs: [[INI, 1]],
    capacities: ['Parade'],
    cost: 6,
  },
];
