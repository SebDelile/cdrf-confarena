import { ALLIANCES, CARACS, CLASSES } from '..';

export type RestrictionType = [
  restrictionType: EQUIPMENT_RESTRICTIONS,
  isAllowed: boolean,
  relatedItems?: (CLASSES | ALLIANCES)[],
];

export type EquipmentType = {
  name: string;
  caracModifs: [CARACS, number][];
  capacities: string[];
  cost: number;
  restrictions?: RestrictionType[];
  specialEffect?: string;
  remoteWeapon?: string;
};

export enum EQUIPMENT_RESTRICTIONS {
  classe = 'Classe',
  bigSize = 'Grande Taille',
  scaryOne = 'Effrayant',
  alliance = 'Alliance',
}
