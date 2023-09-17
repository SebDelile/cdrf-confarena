import { forwardRef, ForwardedRef, ReactNode } from 'react';
import { SelectMenuOptionType } from '@/constants';
import { Listbox, Portal } from '@headlessui/react';
import { EquipmentRenderer } from './EquipmentRenderer';
import { ProfileRenderer } from './ProfileRenderer';
import { FactionRenderer } from './FactionRenderer';
import { isEquipmentType, isProfileType, isFactionType, isLocalStuffType, isMultiple } from '@/utils/typeGuards';
import { LocalStuffRenderer } from './LocalStuffRenderer';
import { BoutonMultipleRenderer } from './BoutonMultipleRenderer';

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
  if (isMultiple(selectedValue)) return <BoutonMultipleRenderer values={selectedValue} />;
  if (isEquipmentType(selectedValue)) return <EquipmentRenderer value={selectedValue} />;
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
                      <ListboxOption key={option.name} value={option}>
                        {optionRenderer(option)}
                      </ListboxOption>
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

const ListboxOption = ({ children, value }: { children: ReactNode; value: SelectMenuOptionType | null }) => (
  <Listbox.Option
    value={value}
    className={({ active, selected }) =>
      `cursor-pointer px-3 py-3 border-black border-opacity-20 border-b-2 last:border-b-0 ${
        active ? 'bg-blue-400' : ''
      } ${selected && !active ? 'bg-blue-200' : ''}`
    }
  >
    {children}
  </Listbox.Option>
);
