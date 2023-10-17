import { CARACS } from '..';
import { EquipmentType, EQUIPMENT_RESTRICTIONS } from '.';

const { MOU, ATT, FOR, DEF, RES } = CARACS;
const { bigSize } = EQUIPMENT_RESTRICTIONS;

export const warriorStuff: EquipmentType[] = [
  {
    name: 'Botte secrète',
    caracModifs: [],
    capacities: ['Bretteur'],
    cost: 2,
  },
  {
    name: 'Entraînement intense',
    caracModifs: [
      [FOR, 1],
      [RES, 1],
    ],
    capacities: [],
    cost: 3,
  },
  {
    name: "Nerfs d'acier",
    caracModifs: [
      [ATT, 1],
      [DEF, 1],
    ],
    capacities: ['Juste'],
    cost: 6,
  },
  {
    name: 'Collier de dents',
    caracModifs: [[FOR, 1]],
    capacities: ['Féroce'],
    cost: 6,
  },
  {
    name: 'Elixir de sauvagerie',
    caracModifs: [],
    capacities: ['Tueur né'],
    cost: 10,
  },
  {
    name: 'Haut gradé',
    caracModifs: [],
    capacities: ['Aguerri'],
    cost: 15,
  },
  {
    name: 'Monture',
    caracModifs: [
      [MOU, 7.5],
      [RES, 1],
    ],
    capacities: ['Destrier', 'Grande taille'],
    cost: 18,
    restrictions: [[bigSize, false]],
  },
];
