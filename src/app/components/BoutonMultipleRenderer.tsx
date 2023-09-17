import { JOIN_ELEMENT, SelectMenuOptionType } from '@/constants';
import { hasCostKey } from '@/utils/typeGuards';

type PropTypes = {
  values: SelectMenuOptionType[];
};

export const BoutonMultipleRenderer = ({ values }: PropTypes) => {
  return (
    <div className="flex justify-between items-center">
      <div>{values.map(({ name }) => name).join(JOIN_ELEMENT)}</div>
      <div className="min-w-6 text-center">
        {hasCostKey(values) &&
          values.every(({ cost }) => cost !== undefined) &&
          values.reduce((acc, { cost }) => acc + cost, 0)}
      </div>
    </div>
  );
};
