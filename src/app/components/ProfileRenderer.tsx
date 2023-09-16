import { ProfileType } from '@/constants/profiles';
import { formatCapacities } from '@/utils';
import { Fragment } from 'react';

type PropTypes = {
  option: ProfileType;
};

export const ProfileRenderer = ({ option }: PropTypes) => {
  const { name, caracs, capacities } = option;
  return (
    <div className="flex flex-col items-stretch">
      <div className="font-semibold pr-2">{`${name} : `}</div>
      <div className="grid grid-cols-9 grid-rows-2 justify-stretch items-center py-2 pl-2">
        {Object.entries(caracs)
          .filter((carac) => carac[1] !== null)
          .map((carac, i) =>
            carac.map((value, j) => (
              <div
                key={value}
                className={`border-black border-opacity-20 border-r-2 text-center row-start-${(j % 2) + 1} ${
                  i === 0 ? 'border-l-2' : ''
                }`}
              >
                {value}
              </div>
            )),
          )}
      </div>
      <div className="pl-2">{formatCapacities(capacities)}</div>
    </div>
  );
};
