import { CARACS, CLASSES } from '..';
import { EquipmentType, EQUIPMENT_RESTRICTIONS } from '.';

const { MOU, INI, ATT, FOR, DEF, RES } = CARACS;
const { warrior } = CLASSES;
const { classe } = EQUIPMENT_RESTRICTIONS;

export const body: EquipmentType[] = [
  {
    name: 'Armure de cuir',
    caracModifs: [[RES, 1]],
    capacities: [],
    cost: 1,
  },
  {
    name: 'Cote de maille',
    caracModifs: [[RES, 2]],
    capacities: [],
    cost: 3,
  },
  {
    name: 'Epaulière à piques',
    caracModifs: [[RES, 1]],
    capacities: ['Inébranlable'],
    cost: 3,
  },
  {
    name: 'Peau de pierre',
    caracModifs: [],
    capacities: ['Dur à cuir'],
    cost: 4,
  },
  {
    name: "Ceinture de l'écorché",
    caracModifs: [[FOR, 1]],
    capacities: ['Acharné'],
    cost: 5,
  },
  {
    name: 'Veste démoniaque',
    caracModifs: [
      [FOR, 1],
      [RES, 1],
    ],
    capacities: ['Possédé'],
    cost: 6,
  },
  {
    name: 'Cuirasse Divine',
    caracModifs: [],
    capacities: ['Armure sacrée'],
    cost: 6,
  },
  {
    name: "Cape d'invisibilité",
    caracModifs: [[DEF, 1]],
    capacities: ['Eclaireur'],
    cost: 6,
  },
  {
    name: 'Chemise en Mithril',
    caracModifs: [
      [INI, 1],
      [ATT, 1],
      [DEF, 1],
    ],
    capacities: ['Esquive'],
    cost: 7,
  },
  {
    name: 'Armure de plaques',
    caracModifs: [
      [RES, 5],
      [MOU, -2.5],
    ],
    capacities: [],
    cost: 8,
    restrictions: [[classe, true, [warrior]]],
  },
  {
    name: 'Armure ensorcelée',
    caracModifs: [
      [DEF, 1],
      [RES, 1],
    ],
    capacities: ['Immunité/Malus de blessure et sonné'],
    cost: 10,
  },
  {
    name: 'Cape spectrale',
    caracModifs: [],
    capacities: ['Ethéré'],
    cost: 20,
  },
];
