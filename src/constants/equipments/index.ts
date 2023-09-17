import { ALLIANCES, CARACS, CLASSES } from '..';

export type RestrictionType =
  | [EQUIPMENT_RESTRICTIONS, boolean]
  | [EQUIPMENT_RESTRICTIONS, boolean, (CLASSES | ALLIANCES)[]];

export type EquipmentType = {
  name: string;
  caracModifs: [CARACS, number][];
  capacities: string[];
  cost: number;
  restrictions?: RestrictionType[];
  specialEffect?: string;
};

export enum EQUIPMENT_RESTRICTIONS {
  classe = 'classe',
  bigSize = 'bigSize',
  scaryOne = 'scaryOne',
  alliance = 'alliance',
}
