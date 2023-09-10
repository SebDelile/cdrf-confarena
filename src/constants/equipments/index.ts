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

export { accessories } from './accessories';
export { body } from './body';
export { faithStuff } from './faithStuff';
export { foot } from './foot';
export { head } from './head';
export { magicStuff } from './magicStuff';
export { oneHandWeapons } from './oneHandWeapons';
export { remoteWeapons } from './remoteWeapon';
export { shields } from './shields';
export { twoHandsWeapons } from './twoHandsWeapons';
