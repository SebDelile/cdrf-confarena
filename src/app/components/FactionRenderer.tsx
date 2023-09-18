import { JOIN_ELEMENT } from '@/constants';
import { FactionType } from '@/constants/factions';
import { formatCapacities, formatCaracModifiers } from '@/utils';
import { ListboxOption } from './ListboxOption';

type PropTypes = {
  value: FactionType;
};

export const FactionRenderer = ({ value }: PropTypes) => {
  const { name, profileModifs, localStuff } = value;
  return (
    <ListboxOption value={value}>
      {' '}
      <div className="flex flex-col items-stretch">
        <div className="font-semibold pr-2">{`${name} : `}</div>
        {profileModifs.map(({ classes, caracModifs, capacities, cost }) => (
          <div
            key={classes.join('')}
            className="flex justify-between items-center pl-2 py-1 border-black border-opacity-20 border-b-2 last:border-b-0"
          >
            <div>
              <span className="font-semibold pr-2">{`${classes.join(JOIN_ELEMENT)} : `}</span>
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
          <div className="flex justify-between items-center pl-2 py-1 border-black border-opacity-20 border-b-2 last:border-b-0 italic text-sm">
            <div>
              <span className="pr-2">{'Options:'}</span>
              <span>
                {localStuff.map(({ name: localStuffName, cost }) => `${localStuffName} (${cost})`).join(', ')}
              </span>
            </div>
          </div>
        )}
      </div>
    </ListboxOption>
  );
};
