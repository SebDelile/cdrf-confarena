import { CARACS, CLASSES } from '..';
import { EquipmentType, equipementRestrictions } from '.';

const { shooter } = CLASSES;
const { MOU, DIS } = CARACS;
const { classe } = equipementRestrictions;

export const foot: EquipmentType[] = [
  {
    name: 'Chaussures de paille',
    caracModifs: [],
    capacities: ['Réorientation'],
    cost: 1,
  },
  {
    name: "Chaussures en cuir d'Auroch",
    caracModifs: [[MOU, 2.5]],
    capacities: [],
    cost: 3,
  },
  {
    name: 'Bottes de sept lieux',
    caracModifs: [],
    capacities: ['Rapidité', 'Immnité/terrain encombré'],
    cost: 7,
  },
  {
    name: 'Bottes de ranger',
    caracModifs: [],
    capacities: ['Harcèlement'],
    cost: 4,
    reservedTo: [[classe, shooter]],
  },
  {
    name: 'Sabots de démon',
    caracModifs: [[MOU, 2.5]],
    capacities: ['Implaccable/2'],
    cost: 7,
  },
  {
    name: 'Sandales de maître',
    caracModifs: [[DIS, 1]],
    capacities: ['Pugnacité'],
    cost: 6,
  },
  {
    name: 'Souliers elfiques',
    caracModifs: [],
    capacities: ['Bond', 'Réflexes'],
    cost: 5,
  },
  {
    name: 'Chaussons de fée',
    caracModifs: [],
    capacities: ['Vol/MOU+5'],
    cost: 12,
  },
];
