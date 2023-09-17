import { ProfileType } from '@/constants/profiles';
import { formatCapacities } from '@/utils';
import { ListboxOption } from './ListboxOption';

type PropTypes = {
  value: ProfileType;
};

export const ProfileRenderer = ({ value }: PropTypes) => {
  const { name, caracs, capacities } = value;
  return (
    <ListboxOption value={value}>
      <div className="flex flex-col items-stretch">
        <div className="font-semibold pr-2">{`${name} : `}</div>
        <div className="grid grid-cols-9 grid-rows-2 justify-stretch items-center py-2 pl-2">
          {Object.entries(caracs)
            .filter((carac) => carac[1] !== null)
            .map((carac, i) =>
              carac.map((value, j) => (
                <div
                  key={value}
                  className={`border-black border-opacity-20 border-r-2 text-center ${
                    j % 2 ? 'row-start-2' : 'row-start-1'
                  } ${i === 0 ? 'border-l-2' : ''}`}
                >
                  {value}
                </div>
              )),
            )}
        </div>
        <div className="pl-2">{formatCapacities(capacities)}</div>
      </div>
    </ListboxOption>
  );
};
