import { useWatch } from 'react-hook-form';
import { JOIN_ELEMENT } from '@/constants';
import { EquipmentType } from '@/constants/equipments';
import { formatCapacities, formatCaracModifiers, formatRestrictionExplanations } from '@/utils';
import { getIsRestricted } from '@/utils/getIsRestricted';
import { ListboxOption } from './ListboxOption';

type PropTypes = {
  value: EquipmentType;
};

export const EquipmentRenderer = ({ value }: PropTypes) => {
  const { name, caracModifs, capacities, specialEffect, cost, remoteWeapon, restrictions } = value;
  const [classe, faction] = useWatch({ name: ['classe', 'faction'] });
  const isDisabled = getIsRestricted(restrictions, classe?.name, faction);
  const title = isDisabled ? formatRestrictionExplanations(restrictions) : undefined;

  return (
    <ListboxOption value={value} disabled={isDisabled} title={title}>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold pr-2">{`${name} : `}</span>
          <span>
            {[remoteWeapon, formatCaracModifiers(caracModifs), formatCapacities(capacities), specialEffect]
              .filter(Boolean)
              .join(JOIN_ELEMENT)}
          </span>
        </div>
        <div className="min-w-6 text-center">{cost}</div>
      </div>
    </ListboxOption>
  );
};
