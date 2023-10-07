import { CARACS } from '..';
import { EquipmentType } from '.';

const { INI, ATT, FOR, DEF } = CARACS;

export const oneHandWeapons: EquipmentType[] = [
  { name: 'Cimeterre', caracModifs: [[INI, 1]], capacities: [], cost: 1 },
  { name: 'Morgenstern', caracModifs: [[ATT, 1]], capacities: [], cost: 1 },
  { name: 'Hache', caracModifs: [[FOR, 1]], capacities: [], cost: 1 },
  { name: 'Marteau', caracModifs: [[FOR, 2]], capacities: [], cost: 3 },
  {
    name: 'Epée',
    caracModifs: [
      [INI, 1],
      [ATT, 1],
      [DEF, 1],
    ],
    capacities: [],
    cost: 5,
  },
  {
    name: 'Machette',
    caracModifs: [[FOR, 1]],
    capacities: ['Epée-hache'],
    cost: 3,
  },
  {
    name: 'Braquemard',
    caracModifs: [
      [ATT, 1],
      [FOR, 1],
    ],
    capacities: [],
    cost: 3,
  },
  { name: 'Rapière', caracModifs: [[ATT, 1]], capacities: ['Feinte'], cost: 3 },
  {
    name: 'Fleuret',
    caracModifs: [[INI, 1]],
    capacities: ['Bretteur'],
    cost: 3,
  },
  { name: 'Masse', caracModifs: [[FOR, 1]], capacities: ['Brutal'], cost: 4 },
  {
    name: 'Lame divine',
    caracModifs: [],
    capacities: ['Arme Sacrée/Combat'],
    cost: 6,
  },
  {
    name: 'Dague',
    caracModifs: [[INI, 1]],
    capacities: ['Assassin'],
    cost: 6,
  },
  {
    name: 'Fléau',
    caracModifs: [[FOR, 2]],
    capacities: ['Volte/2'],
    cost: 5,
  },
  {
    name: 'Sabre',
    caracModifs: [
      [INI, 1],
      [ATT, 1],
    ],
    capacities: ['Fine lame'],
    cost: 7,
  },
  {
    name: 'Lance',
    caracModifs: [[ATT, 1]],
    capacities: ['FOR en charge/4'],
    cost: 4,
  },
  {
    name: 'Glaive',
    caracModifs: [[ATT, 1]],
    capacities: ['Furie guerrière'],
    cost: 6,
  },
];
