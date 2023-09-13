import { SelectMenuOptionType } from '@/constants';
import { EquipmentType } from '@/constants/equipments';
import { FactionType } from '@/constants/factions';
import { ProfileType } from '@/constants/profiles';

export const isFactionType = (arg: SelectMenuOptionType): arg is FactionType => arg.hasOwnProperty('alliance');
export const isProfileType = (arg: SelectMenuOptionType): arg is ProfileType => arg.hasOwnProperty('classe');
export const isEquipmentType = (arg: SelectMenuOptionType): arg is EquipmentType => arg.hasOwnProperty('caracModifs');
