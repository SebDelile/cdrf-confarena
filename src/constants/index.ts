import { EquipmentType } from './equipments';
import { FactionType, LocalStuffType } from './factions';
import { ProfileType } from './profiles';

export const JOIN_ELEMENT = ' · ';

export type selectOptionStringType = { name: string };
export type SelectMenuOptionType = FactionType | EquipmentType | ProfileType | LocalStuffType | selectOptionStringType;
export enum SELECT_MENU_TYPE {
  FACTION = 'FACTION',
  EQUIPMENT = 'EQUIPMENT',
  PROFILE = 'PROFILE',
  LOCAL_STUFF = 'LOCAL_STUFF',
  STRINGS = 'STRINGS',
}

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
  voieLumiere = 'LUM',
  meandresTenebres = 'TEN',
  cheminDestin = 'DES',
  autresAlliances = 'CAD',
}
export enum ALLIANCES_FORMATTED {
  voieLumiere = 'Voies de la lumières',
  meandresTenebres = 'Méandres des Ténèbres',
  cheminDestin = 'Chemins du Destin',
  autresAlliances = 'Autres Alliances',
}

export const ALLIANCES_MAP: Record<ALLIANCES, ALLIANCES_FORMATTED> = {
  [ALLIANCES.voieLumiere]: ALLIANCES_FORMATTED.voieLumiere,
  [ALLIANCES.meandresTenebres]: ALLIANCES_FORMATTED.meandresTenebres,
  [ALLIANCES.cheminDestin]: ALLIANCES_FORMATTED.cheminDestin,
  [ALLIANCES.autresAlliances]: ALLIANCES_FORMATTED.autresAlliances,
};

export enum PEUPLES {
  acheron = 'acheron',
  behemoth = 'behemoth',
  branokor = 'branokor',
  cadwallon = 'cadwallon',
  cynwall = 'cynwall',
  daikinee = 'daikinee',
  devoreur = 'devoreur',
  dirz = 'dirz',
  drune = 'drune',
  gobelin = 'gobelin',
  griffon = 'griffon',
  lion = 'lion',
  midnor = 'midnor',
  ophidien = 'ophidien',
  sessair = 'sessair',
  tirnabor = 'tirnabor',
  wolfen = 'wolfen',
}

export enum GEMMES {
  lumiere = 'Lumière',
  tenebres = 'Ténèbres',
  air = 'Air',
  eau = 'Eau',
  feu = 'Feu',
  terre = 'Terre',
}

export const DEFAULT_GEMME_GRIMOIRE: Record<
  'firstElement' | 'secondElement' | 'firstGrimoire' | 'secondGrimoire' | 'espritDe',
  { name: string } | null
> = {
  firstElement: null,
  secondElement: null,
  firstGrimoire: null,
  secondGrimoire: null,
  espritDe: null,
};

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
  faction: FactionType | null;
  localStuff: LocalStuffType[];
  specialEffects: string[];
  remoteWeapon: string | null;
  magicSkills: [GEMMES[], string[]] | null;
  god: string | null;
  cost: number;
};
