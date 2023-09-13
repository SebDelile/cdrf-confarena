import { CARACS } from '..';

export type EquipmentType = {
  name: string;
  caracModifs: [CARACS, number][];
  capacities: string[];
  cost: number;
  reservedTo?: string[][];
  forbiddenTo?: [equipementRestrictions, string][];
  specialEffect?: string;
};

export enum equipementRestrictions {
  classe = 'classe',
  taille = 'taille',
  carac = 'carac',
  alliance = 'alliance',
}
