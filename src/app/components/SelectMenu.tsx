import { forwardRef, ForwardedRef, Fragment } from 'react';
import { SelectMenuOptionType } from '@/constants';
import { Listbox, Portal } from '@headlessui/react';
import { EquipmentRenderer } from './EquipmentRenderer';
import { ProfileRenderer } from './ProfileRenderer';
import { FactionRenderer } from './FactionRenderer';
import { isEquipmentType, isProfileType, isFactionType, isLocalStuffType, isMultiple } from '@/utils/typeGuards';
import { LocalStuffRenderer } from './LocalStuffRenderer';
import { ButtonMultipleRenderer } from './ButtonMultipleRenderer';
import { ListboxOption } from './ListboxOption';
import { ButtonSingleRenderer } from './ButtonSingleRenderer';

type PropTypes = {
  options: SelectMenuOptionType[];
  value: SelectMenuOptionType | SelectMenuOptionType[] | null;
  onChange: (newValue: SelectMenuOptionType | SelectMenuOptionType[]) => void;
  label: string;
  fullDisplayInButton?: boolean;
  multiple?: boolean;
};

const optionRenderer = (value: SelectMenuOptionType) => {
  if (isEquipmentType(value)) return <EquipmentRenderer value={value} />;
  if (isProfileType(value)) return <ProfileRenderer value={value} />;
  if (isFactionType(value)) return <FactionRenderer value={value} />;
  if (isLocalStuffType(value)) return <LocalStuffRenderer value={value} />;
  return null;
};

const boutonRenderer = (selectedValue: SelectMenuOptionType | SelectMenuOptionType[] | null) => {
  if (!selectedValue || (isMultiple(selectedValue) && !selectedValue.length)) return 'Choisir une valeur';
  if (isMultiple(selectedValue)) return <ButtonMultipleRenderer values={selectedValue} />;
  if (isEquipmentType(selectedValue)) return <ButtonSingleRenderer value={selectedValue} />;
  if (isProfileType(selectedValue) || isFactionType(selectedValue))
    return <span className="font-semibold">{selectedValue.name}</span>;
  return null;
};

export const SelectMenu = forwardRef(function SelectMenu(
  { options, value, onChange, label, multiple = false }: PropTypes,
  ref: ForwardedRef<HTMLElement | null>,
) {
  return (
    <Listbox ref={ref} by="name" value={value} onChange={onChange} multiple={multiple} disabled={!options.length}>
      {({ open }) => (
        <div className="form-container relative py-3">
          <Listbox.Label className="pl-2">{label}</Listbox.Label>
          <Listbox.Button className="form-input">
            {options.length ? boutonRenderer(value) : 'Indisponible'}
          </Listbox.Button>
          {open && (
            <Portal>
              <div className="z-50 fixed inset-0 flex justify-center items-center p-10 bg-gray-600 bg-opacity-60">
                <div className="mx-32 w-full max-h-full overflow-auto bg-white border border-black">
                  <Listbox.Options static className="w-full">
                    {!multiple && <ListboxOption value={null}>Réinitialiser</ListboxOption>}
                    {options.map((option) => (
                      <Fragment key={option.name}>{optionRenderer(option)}</Fragment>
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
