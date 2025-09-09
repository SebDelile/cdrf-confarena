import { forwardRef, ForwardedRef, Fragment } from 'react';
import { SELECT_MENU_TYPE, SelectMenuOptionType, selectOptionStringType } from '@/constants';
import { Listbox, Portal } from '@headlessui/react';
import { EquipmentRenderer } from './EquipmentRenderer';
import { ProfileRenderer } from './ProfileRenderer';
import { FactionRenderer } from './FactionRenderer';
import { LocalStuffRenderer } from './LocalStuffRenderer';
import { ButtonMultipleRenderer } from './ButtonMultipleRenderer';
import { ListboxOption } from './ListboxOption';
import { ButtonSingleRenderer } from './ButtonSingleRenderer';
import { EquipmentType } from '@/constants/equipments';
import { FactionType, LocalStuffType } from '@/constants/factions';
import { ProfileType } from '@/constants/profiles';

type PropTypes = {
  options: SelectMenuOptionType[];
  value: SelectMenuOptionType | SelectMenuOptionType[] | null;
  onChange: (newValue: SelectMenuOptionType | SelectMenuOptionType[]) => void;
  label: string;
  selectType: SELECT_MENU_TYPE;
  multiple?: boolean;
};

const optionRenderer = (value: SelectMenuOptionType, selectType: SELECT_MENU_TYPE) => {
  switch (selectType) {
    case SELECT_MENU_TYPE.EQUIPMENT:
      return <EquipmentRenderer value={value as EquipmentType} />;
    case SELECT_MENU_TYPE.PROFILE:
      return <ProfileRenderer value={value as ProfileType} />;
    case SELECT_MENU_TYPE.FACTION:
      return <FactionRenderer value={value as FactionType} />;
    case SELECT_MENU_TYPE.LOCAL_STUFF:
      return <LocalStuffRenderer value={value as LocalStuffType} />;
    case SELECT_MENU_TYPE.STRINGS:
      return <ListboxOption value={value as selectOptionStringType}>{value.name}</ListboxOption>;
    default:
      return null;
  }
};

const boutonRenderer = (
  selectedValue: SelectMenuOptionType | SelectMenuOptionType[] | null,
  selectType: SELECT_MENU_TYPE,
  multiple: boolean,
) => {
  if (!selectedValue || (multiple && !(selectedValue as SelectMenuOptionType[]).length)) return 'Choisir une valeur';
  if (multiple) return <ButtonMultipleRenderer values={selectedValue as SelectMenuOptionType[]} />;
  if (selectType === SELECT_MENU_TYPE.EQUIPMENT) return <ButtonSingleRenderer value={selectedValue as EquipmentType} />;
  if ([SELECT_MENU_TYPE.PROFILE, SELECT_MENU_TYPE.FACTION, SELECT_MENU_TYPE.STRINGS].includes(selectType))
    return <span className="font-semibold">{(selectedValue as SelectMenuOptionType).name}</span>;
  return null;
};

export const SelectMenu = forwardRef(function SelectMenu(
  { options, value, onChange, label, selectType, multiple = false }: PropTypes,
  ref: ForwardedRef<HTMLElement | null>,
) {
  return (
    <Listbox ref={ref} by="name" value={value} onChange={onChange} multiple={multiple} disabled={!options.length}>
      {({ open }) => (
        <div className="form-container relative">
          <Listbox.Label className="pl-2">{label}</Listbox.Label>
          <Listbox.Button className="form-input">
            {options.length ? boutonRenderer(value, selectType, multiple) : 'Indisponible'}
          </Listbox.Button>
          {open && (
            <Portal>
              <div className="z-50 fixed inset-0 flex justify-center items-center p-10 bg-gray-600 bg-opacity-60">
                <div className="mx-32 w-full max-h-full overflow-auto bg-white border border-black">
                  <Listbox.Options static className="w-full">
                    {!multiple && <ListboxOption value={null}>Réinitialiser</ListboxOption>}
                    {options.map((option) => (
                      <Fragment key={option.name}>{optionRenderer(option, selectType)}</Fragment>
                    ))}
                  </Listbox.Options>
                </div>
              </div>
            </Portal>
          )}
        </div>
      )}
    </Listbox>
  );
});
