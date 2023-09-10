import { CARACS } from '..';
import { EquipmentType } from '.';

const { ATT, FOR, DEF } = CARACS;

export const twoHandsWeapons: EquipmentType[] = [
  {
    name: 'Masse à deux mains',
    caracModifs: [[FOR, 3]],
    capacities: ['Brute épaisse'],
    cost: 8,
  },
  {
    name: 'Hache à deux mains',
    caracModifs: [
      [FOR, 5],
      [DEF, -1],
    ],
    capacities: [],
    cost: 10,
  },
  {
    name: 'Hallebarde',
    caracModifs: [
      [ATT, 2],
      [FOR, 1],
    ],
    capacities: ['Esquive'],
    cost: 8,
  },
  {
    name: 'Vouge',
    caracModifs: [
      [ATT, 1],
      [DEF, 1],
    ],
    capacities: ['Réflexes'],
    cost: 6,
  },
  {
    name: 'Faux',
    caracModifs: [
      [ATT, 1],
      [FOR, 2],
    ],
    capacities: ['Volte/0'],
    cost: 7,
  },
  {
    name: 'Epée à deux mains',
    caracModifs: [[FOR, 2]],
    capacities: ['Charge bestiale'],
    cost: 7,
  },
  {
    name: 'Claymmore',
    caracModifs: [
      [ATT, 1],
      [FOR, 1],
    ],
    capacities: ['Coup de maître/3'],
    cost: 6,
  },
];
