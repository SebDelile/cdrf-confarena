import { EquipmentType, EQUIPMENT_RESTRICTIONS } from '.';

const { bigSize } = EQUIPMENT_RESTRICTIONS;

export const shooterStuff: EquipmentType[] = [
  {
    name: 'Pistolet',
    caracModifs: [],
    capacities: ["Tir d'assaut"],
    remoteWeapon: 'FORTIR 6 ∙ portée 10-15-20',
    cost: 0,
  },
  {
    name: 'Arbalète',
    caracModifs: [],
    capacities: [],
    remoteWeapon: 'FORTIR 6 ∙ portée 15-30-45',
    cost: 0,
  },
  {
    name: 'Arc',
    caracModifs: [],
    capacities: [],
    remoteWeapon: 'FORTIR 4 ∙ portée 25-45-65',
    cost: 0,
  },
  {
    name: 'Paire de pistolets',
    caracModifs: [],
    capacities: ['Tir supplémentaire/1'],
    remoteWeapon: 'FORTIR 6 ∙ portée 10-15-20',
    cost: 3,
  },
  {
    name: 'Traits divins',
    caracModifs: [],
    capacities: ['Arme sacrée/Tir'],
    remoteWeapon: 'FORTIR 5 ∙ portée 20-40-60',
    cost: 6,
  },
  {
    name: 'Long fusil',
    caracModifs: [],
    capacities: ['Précision'],
    remoteWeapon: 'FORTIR 6 ∙ portée 30-60-90',
    cost: 6,
  },
  {
    name: 'Baliste',
    caracModifs: [],
    capacities: [],
    remoteWeapon: 'FORTIR 8 ∙ portée 20-40-60',
    cost: 6,
    restrictions: [[bigSize, true]],
  },
];
