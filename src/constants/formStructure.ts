import { EquipmentType } from './equipments';
import { FactionType, LocalStuffType, factions } from './factions';
import { ProfileType, profiles } from './profiles';
import { oneHandWeapons } from './equipments/oneHandWeapons';
import { twoHandsWeapons } from './equipments/twoHandsWeapons';
import { shields } from './equipments/shields';
import { head } from './equipments/head';
import { body } from './equipments/body';
import { foot } from './equipments/foot';
import { accessories } from './equipments/accessories';
import { warriorStuff } from './equipments/warriorStuff';
import { shooterStuff } from './equipments/shooterStuff';
import { magicianStuff } from './equipments/magicianStuff';
import { priestStuff } from './equipments/priestStuff';

export const formDefault = {
  classe: null as ProfileType | null,
  faction: null as FactionType | null,
  localStuff: [] as LocalStuffType[],
  oneHandWeapon1: null as EquipmentType | null,
  oneHandWeapon2: null as EquipmentType | null,
  twoHandsWeapon: null as EquipmentType | null,
  shield: null as EquipmentType | null,
  head: null as EquipmentType | null,
  body: null as EquipmentType | null,
  foot: null as EquipmentType | null,
  accessory1: null as EquipmentType | null,
  accessory2: null as EquipmentType | null,
  warriorStuff: null as EquipmentType | null,
  shooterStuff: null as EquipmentType | null,
  magicianStuff: null as EquipmentType | null,
  priestStuff: null as EquipmentType | null,
};

export type FormType = typeof formDefault;

export const formFieldsSequence = Object.keys(formDefault).sort() as [keyof FormType];

export const formFieldToOptions = {
  classe: profiles,
  faction: factions,
  localStuff: [],
  oneHandWeapon1: oneHandWeapons,
  oneHandWeapon2: oneHandWeapons,
  twoHandsWeapon: twoHandsWeapons,
  shield: shields,
  head: head,
  body: body,
  foot: foot,
  accessory1: accessories,
  accessory2: accessories,
  warriorStuff: warriorStuff,
  shooterStuff: shooterStuff,
  magicianStuff: magicianStuff,
  priestStuff: priestStuff,
};
