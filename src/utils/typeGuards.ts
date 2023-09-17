import { SelectMenuOptionType } from '@/constants';
import { EquipmentType } from '@/constants/equipments';
import { FactionType, LocalStuffType } from '@/constants/factions';
import { ProfileType } from '@/constants/profiles';

type WithCost = { cost: number };

export const isFactionType = (arg: SelectMenuOptionType): arg is FactionType => arg.hasOwnProperty('alliance');
export const isProfileType = (arg: SelectMenuOptionType): arg is ProfileType => arg.hasOwnProperty('caracs');
export const isEquipmentType = (arg: SelectMenuOptionType): arg is EquipmentType => arg.hasOwnProperty('caracModifs');
export const isLocalStuffType = (arg: SelectMenuOptionType): arg is LocalStuffType => Object.keys(arg).length === 2;
export const isMultiple = (arg: SelectMenuOptionType | SelectMenuOptionType[] | null): arg is SelectMenuOptionType[] =>
  Array.isArray(arg);
export const hasCostKey = (args: SelectMenuOptionType[]): args is (WithCost & SelectMenuOptionType)[] =>
  args.every((arg) => arg.hasOwnProperty('cost'));
