import { JOIN_ELEMENT } from '@/constants';
import { EquipmentType } from '@/constants/equipments';
import { formatCapacities, formatCaracModifiers } from '@/utils';

type PropTypes = {
  option: EquipmentType;
};

// TODO: handle forbiddenTo and reservedTo properties

export const EquipmentRenderer = ({ option }: PropTypes) => {
  const { name, caracModifs, capacities, specialEffect, cost } = option;
  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="font-semibold pr-2">{`${name} : `}</span>
        <span>
          {[formatCaracModifiers(caracModifs), formatCapacities(capacities), specialEffect]
            .filter(Boolean)
            .join(JOIN_ELEMENT)}
        </span>
      </div>
      <div className="min-w-6 text-center">{cost}</div>
    </div>
  );
};
