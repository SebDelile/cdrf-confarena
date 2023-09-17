import { EquipmentType } from './equipments';
import { FactionType, LocalStuffType } from './factions';
import { ProfileType } from './profiles';

export const JOIN_ELEMENT = ' · ';

export type SelectMenuOptionType = FactionType | EquipmentType | ProfileType | LocalStuffType;

export enum CARACS {
  MOU = 'MOU',
  INI = 'INI',
  ATT = 'ATT',
  FOR = 'FOR',
  DEF = 'DEF',
  RES = 'RES',
  COU = 'COU',
  PEU = 'PEU',
  DIS = 'DIS',
  TIR = 'TIR',
  POU = 'POU',
  FOI = 'FOI',
}

export enum CLASSES {
  all = 'Tous',
  warrior = 'Guerrier',
  shooter = 'Tireur',
  magician = 'Magicien',
  priest = 'Fidèle',
  warriorShooter = 'Guerrier-tireur',
  warriorMagician = 'Guerrier-mage',
  warriorPriest = 'Moine-guerrier',
}

export enum ALLIANCES {
  voieLumiere = 'Voies de la lumières',
  meandresTenebres = 'Méandres des Ténèbres',
  cheminDestin = 'Chemins du Destin',
  autresAlliances = 'Autres Alliances',
}

export enum GEMMES {
  lumiere = 'Lumière',
  tenebres = 'Ténèbres',
  air = 'Air',
  eau = 'Eau',
  feu = 'Feu',
  terre = 'Terre',
}

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
