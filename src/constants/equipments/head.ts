import { CARACS, ALLIANCES, CLASSES } from '..';
import { EquipmentType, EQUIPMENT_RESTRICTIONS } from '.';

const { magician, warriorMagician } = CLASSES;
const { FOR, RES, COU, PEU, DIS } = CARACS;
const { voieLumiere, meandresTenebres, cheminDestin } = ALLIANCES;
const { classe, scaryOne, alliance } = EQUIPMENT_RESTRICTIONS;

export const head: EquipmentType[] = [
  {
    name: 'Coiffe flamboyante',
    caracModifs: [[COU, 1]],
    capacities: [],
    cost: 1,
  },
  {
    name: 'Casque à plumet',
    caracModifs: [
      [COU, 1],
      [DIS, 1],
    ],
    capacities: [],
    cost: 4,
  },
  {
    name: 'Troisième œil',
    caracModifs: [],
    capacities: ['Conscience', 'Focus'],
    cost: 10,
    restrictions: [[classe, true, [magician, warriorMagician]]],
  },
  {
    name: 'Heaume de prescience',
    caracModifs: [],
    capacities: ['Conscience', 'Esquive'],
    cost: 7,
    restrictions: [[classe, false, [magician, warriorMagician]]],
  },
  {
    name: 'Courone de stratège',
    caracModifs: [],
    capacities: ['Rigueur', 'Stratège'],
    cost: 5,
  },
  {
    name: 'Couronne de laurier',
    caracModifs: [[DIS, 1]],
    capacities: ['Autorité'],
    cost: 4,
  },
  {
    name: "Masque d'horreur",
    caracModifs: [
      [FOR, 1],
      [RES, 1],
    ],
    capacities: ['Abominable'],
    cost: 7,
    restrictions: [
      [scaryOne, true],
      [alliance, true, [meandresTenebres]],
    ],
  },
  {
    name: 'Casque complet',
    caracModifs: [[RES, 1]],
    capacities: ['Bravoure'],
    cost: 3,
  },
  {
    name: 'Cornes de damnation',
    caracModifs: [
      [FOR, 1],
      [PEU, 1],
    ],
    capacities: [],
    cost: 4,
    restrictions: [[scaryOne, true]],
  },
  {
    name: 'Visière vif-acier',
    caracModifs: [],
    capacities: ['Réflexes', 'Vivacité'],
    cost: 4,
  },
  {
    name: 'Peinture de guerre',
    caracModifs: [],
    capacities: ['Fanatisme', 'Instinct de survie/5'],
    cost: 4,
    restrictions: [[alliance, true, [cheminDestin]]],
  },
  {
    name: 'Tiare de lumière',
    caracModifs: [[DIS, 1]],
    capacities: ['Hypérien/9'],
    cost: 4,
    restrictions: [[alliance, true, [voieLumiere]]],
  },
];
