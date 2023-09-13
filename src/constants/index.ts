import { EquipmentType } from './equipments';
import { FactionType } from './factions';
import { ProfileType } from './profiles';

export const JOIN_ELEMENT = ' · ';

export type SelectMenuOptionType = FactionType | EquipmentType | ProfileType;

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
