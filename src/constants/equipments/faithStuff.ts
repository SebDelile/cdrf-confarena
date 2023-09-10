import { CARACS } from '..';
import { EquipmentType } from '.';

const { INI, RES, FOI } = CARACS;

export const faithStuff: EquipmentType[] = [
  {
    name: 'Inspiration',
    caracModifs: [[FOI, 1]],
    capacities: [],
    cost: 7,
  },
  {
    name: 'Ferveur ardente',
    caracModifs: [[RES, 1]],
    capacities: ['Thaumaturge'],
    cost: 4,
  },
  {
    name: 'Encens béni',
    caracModifs: [],
    capacities: ['Piété/1'],
    cost: 3,
  },
  {
    name: 'Relique sacrée',
    caracModifs: [[INI, 1]],
    capacities: ['Exalté'],
    cost: 7,
  },
  {
    name: 'Instrument liturgique',
    caracModifs: [],
    capacities: [],
    specialEffect: '+1 FT au déploiement/résurection et à chaque phase mystique',
    cost: 4,
  },
];
