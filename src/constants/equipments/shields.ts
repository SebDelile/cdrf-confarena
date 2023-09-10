import { CARACS } from '..';
import { EquipmentType } from '.';

const { FOR, DEF, RES } = CARACS;

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
    caracModifs: [[RES, 2]],
    capacities: [],
    cost: 3,
  },
  {
    name: 'Pavois',
    caracModifs: [
      [DEF, 1],
      [RES, 1],
    ],
    capacities: [],
    cost: 3,
  },
  {
    name: 'Gantelet à lame intégrée',
    caracModifs: [[FOR, 1]],
    capacities: ['Ambidextre'],
    cost: 6,
  },
  {
    name: 'Main gauche',
    caracModifs: [[DEF, 1]],
    capacities: ['Membre supplémentaire'],
    cost: 2,
  },
  {
    name: 'Gantelet en acier',
    caracModifs: [[RES, 1]],
    capacities: ['Contre-attaque'],
    cost: 4,
  },
  {
    name: 'Rondache',
    caracModifs: [],
    capacities: ['Parade', 'cible/+1'],
    cost: 6,
  },
];
