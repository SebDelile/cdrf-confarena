import { FactionType } from '@/constants/factions';

type PropTypes = {
  option: FactionType;
};

export const FactionRenderer = ({ option }: PropTypes) => {
  return <div>{option.name}</div>;
};
