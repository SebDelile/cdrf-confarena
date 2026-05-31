import { SelectMenuOptionType } from '@/constants';

type WithCost = { cost: number };

export const hasCostKey = (args: SelectMenuOptionType[]): args is (WithCost & SelectMenuOptionType)[] =>
  args.every((arg) => arg.hasOwnProperty('cost'));
