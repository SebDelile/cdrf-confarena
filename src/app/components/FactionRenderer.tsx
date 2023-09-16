import { JOIN_ELEMENT } from '@/constants';
import { FactionType } from '@/constants/factions';
import { formatCapacities, formatCaracModifiers } from '@/utils';

type PropTypes = {
  option: FactionType;
};

export const FactionRenderer = ({ option }: PropTypes) => {
  const { name, profileModifs } = option;
  return (
    <div className="flex flex-col items-stretch">
      <div className="font-semibold pr-2">{`${name} : `}</div>
      {profileModifs.map(({ classe, caracModifs, capacities, cost }) => (
        <div
          key={classe}
          className="flex justify-between items-center pl-2 py-1 border-black border-opacity-20 border-b-2 last:border-b-0"
        >
          <div>
            <span className="font-semibold pr-2">{`${classe} : `}</span>
            <span>
              {[formatCaracModifiers(caracModifs), formatCapacities(capacities)].filter(Boolean).join(JOIN_ELEMENT)}
            </span>
          </div>
          <div className="min-w-6 text-center">{cost}</div>
        </div>
      ))}
    </div>
  );
};
