import { CARACS, CLASSES } from '..';
import { EquipmentType, equipementRestrictions } from '.';

const { MOU, INI, DEF, RES } = CARACS;
const { shooter, magician, priest } = CLASSES;
const { classe } = equipementRestrictions;

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
    name: 'Armure de plaques',
    caracModifs: [
      [RES, 5],
      [MOU, -2.5],
    ],
    capacities: [],
    cost: 8,
    forbiddenTo: [
      [classe, shooter],
      [classe, magician],
      [classe, priest],
    ],
  },
  {
    name: 'Epaulière à piques',
    caracModifs: [[RES, 1]],
    capacities: ['Inébranlable'],
    cost: 3,
  },
  {
    name: "Ceinture de l'écorché",
    caracModifs: [],
    capacities: ['Acharné', 'Désespéré'],
    cost: 8,
  },
  {
    name: 'Cape spectrale',
    caracModifs: [],
    capacities: ['Ethéré'],
    cost: 20,
  },
  {
    name: 'Cuirasse Divine',
    caracModifs: [],
    capacities: ['Armure sacrée'],
    cost: 6,
  },
  {
    name: 'Peau de pierre',
    caracModifs: [],
    capacities: ['Dur à cuir'],
    cost: 4,
  },
  {
    name: "Cape d'invisibilité",
    caracModifs: [],
    capacities: ['Eclaireur', 'Cible/+1'],
    cost: 6,
  },
  {
    name: 'Armure ensorcelée',
    caracModifs: [
      [DEF, 1],
      [RES, 2],
    ],
    capacities: ['Immunité/Malus de blessure et sonné'],
    cost: 11,
  },
  {
    name: 'Chemise en Mithril',
    caracModifs: [
      [INI, 1],
      [DEF, 1],
    ],
    capacities: ['Esquive', 'Réflexes'],
    cost: 7,
  },
];
