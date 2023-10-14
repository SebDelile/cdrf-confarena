import { CARACS } from '..';
import { EquipmentType } from '.';

const { INI, POU } = CARACS;

export const magicianStuff: EquipmentType[] = [
  {
    name: 'Grimoire',
    caracModifs: [],
    capacities: [],
    specialEffect: '2ème grimoire au choix',
    cost: 3,
  },
  {
    name: 'Traité des arcanes',
    caracModifs: [],
    capacities: [],
    specialEffect: '2ème élément au choix',
    cost: 3,
  },
  {
    name: 'Orbe de magie',
    caracModifs: [],
    capacities: ['Récupération/1'],
    cost: 4,
  },
  {
    name: 'Baguette magique',
    caracModifs: [[INI, 1]],
    capacities: ['Esprit de/Elément ou grimoire au choix'],
    cost: 7,
  },
  {
    name: 'Cape du sage',
    caracModifs: [[POU, 1]],
    capacities: [],
    cost: 7,
  },
];
