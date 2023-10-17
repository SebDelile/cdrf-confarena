import { CARACS, CLASSES } from '..';
import { EquipmentType, EQUIPMENT_RESTRICTIONS } from '.';

const { shooter, warriorShooter } = CLASSES;
const { MOU, INI, DIS } = CARACS;
const { classe } = EQUIPMENT_RESTRICTIONS;

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
    name: 'Bottes de ranger',
    caracModifs: [],
    capacities: ['Harcèlement'],
    cost: 4,
    restrictions: [[classe, true, [shooter, warriorShooter]]],
  },
  {
    name: 'Sandales de maître',
    caracModifs: [[DIS, 1]],
    capacities: ['Pugnacité'],
    cost: 6,
  },
  {
    name: 'Souliers elfiques',
    caracModifs: [[MOU, 2.5]],
    capacities: ['Bond'],
    cost: 6,
  },
  {
    name: 'Sabots de démon',
    caracModifs: [[MOU, 2.5]],
    capacities: ['Implaccable/2'],
    cost: 7,
  },
  {
    name: 'Bottes de sept lieux',
    caracModifs: [[INI, 1]],
    capacities: ['Rapidité'],
    cost: 7,
  },
  {
    name: 'Chaussons de fée',
    caracModifs: [],
    capacities: ['Vol/MOU+5'],
    cost: 12,
  },
];
