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

export enum EQUIPMENT_PARTS {
  oneHandWeapon1Part = 'oneHandWeapon1',
  oneHandWeapon2Part = 'oneHandWeapon2',
  twoHandsWeaponPart = 'twoHandsWeapon',
  shieldPart = 'shield',
  headPart = 'head',
  bodyPart = 'body',
  footPart = 'foot',
  accessory1Part = 'accessory1',
  accessory2Part = 'accessory2',
  warriorStuffPart = 'warriorStuff',
  shooterStuffPart = 'shooterStuff',
  magicianStuffPart = 'magicianStuff',
  priestStuffPart = 'priestStuff',
  cadweBonusStuff = 'cadweBonusStuff',
}

export type CharacterProfileType = ProfileType & {
  factionName: string | null;
  localStuff: LocalStuffType[];
  specialEffects: string[];
  remoteWeapon: string | null;
  magicSkills: [GEMMES[], string[]] | null;
  god: string | null;
  cost: number;
};
