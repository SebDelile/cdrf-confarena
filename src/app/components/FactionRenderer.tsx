import { JOIN_ELEMENT } from '@/constants';
import { FactionType } from '@/constants/factions';
import { formatCapacities, formatCaracModifiers } from '@/utils';

type PropTypes = {
  value: FactionType;
};

export const FactionRenderer = ({ value }: PropTypes) => {
  const { name, profileModifs, localStuff } = value;
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
              {Boolean(caracModifs.length + capacities.length)
                ? [formatCaracModifiers(caracModifs), formatCapacities(capacities)].filter(Boolean).join(JOIN_ELEMENT)
                : 'Aucun modificateur'}
            </span>
          </div>
          <div className="min-w-6 text-center">{cost}</div>
        </div>
      ))}
      {Boolean(localStuff.length) && (
        <div className="flex justify-between items-center pl-2 py-1 border-black border-opacity-20 border-b-2 last:border-b-0">
          <div>
            <span className="font-semibold pr-2">{'Options:'}</span>
            <span>{localStuff.map(({ name: localStuffName, cost }) => `${localStuffName} (${cost})`).join(', ')}</span>
          </div>
        </div>
      )}
    </div>
  );
};
