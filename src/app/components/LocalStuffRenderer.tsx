import { LocalStuffType } from '@/constants/factions';
import { ListboxOption } from './ListboxOption';

type PropTypes = {
  value: LocalStuffType;
};

export const LocalStuffRenderer = ({ value }: PropTypes) => {
  const { name, cost } = value;
  return (
    <ListboxOption value={value}>
      <div className="flex justify-between items-center">
        <div>{name}</div>
        <div className="min-w-6 text-center">{cost}</div>
      </div>
    </ListboxOption>
  );
};
