import { LocalStuffType } from '@/constants/factions';

type PropTypes = {
  value: LocalStuffType;
};

export const LocalStuffRenderer = ({ value }: PropTypes) => {
  const { name, cost } = value;
  return (
    <div className="flex justify-between items-center">
      <div>{name}</div>
      <div className="min-w-6 text-center">{cost}</div>
    </div>
  );
};
