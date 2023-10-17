import { CARACS, CLASSES } from '..';
import { EquipmentType, EQUIPMENT_RESTRICTIONS } from '.';

const { INI, ATT, FOR, DEF } = CARACS;
const { warrior } = CLASSES;
const { classe } = EQUIPMENT_RESTRICTIONS;

export const twoHandsWeapons: EquipmentType[] = [
  {
    name: 'Vouge',
    caracModifs: [
      [INI, 1],
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
    name: 'Masse à deux mains',
    caracModifs: [[FOR, 3]],
    capacities: ['Brute épaisse'],
    cost: 7,
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
    name: 'Claymore',
    caracModifs: [
      [INI, 1],
      [ATT, 1],
      [DEF, 1],
      [FOR, 1],
    ],
    capacities: ['Coup de maître/3'],
    cost: 8,
  },
  {
    name: 'Epée à deux mains',
    caracModifs: [
      [ATT, 1],
      [DEF, 1],
      [FOR, 2],
    ],
    capacities: ['Charge bestiale'],
    cost: 9,
  },
  {
    name: 'Hache à deux mains',
    caracModifs: [
      [FOR, 5],
      [DEF, -1],
    ],
    capacities: [],
    cost: 10,
    restrictions: [[classe, true, [warrior]]],
  },
];
