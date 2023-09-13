import { SelectMenuOptionType } from '@/constants';
import { Listbox, Portal } from '@headlessui/react';
import { EquipmentRenderer } from './EquipmentRenderer';
import { ProfileRenderer } from './ProfileRenderer';
import { FactionRenderer } from './FactionRenderer';
import { isEquipmentType, isProfileType, isFactionType } from '@/utils/typeGuards';

type PropTypes = {
  options: SelectMenuOptionType[];
  selectedValue: SelectMenuOptionType | null;
  onChange: (newValue: { name: string }) => void;
  label: string;
  fullDisplayInButton?: boolean;
};

const optionRenderer = (option: SelectMenuOptionType) => {
  if (isEquipmentType(option)) return <EquipmentRenderer option={option} />;
  if (isProfileType(option)) return <ProfileRenderer option={option} />;
  if (isFactionType(option)) return <FactionRenderer option={option} />;
  return null;
};

export const SelectMenu = ({ options, selectedValue, onChange, label, fullDisplayInButton = false }: PropTypes) => (
  <Listbox by="name" value={selectedValue} onChange={onChange}>
    {({ open }) => (
      <div className="form-container relative py-3">
        <Listbox.Label className="pl-2">{label}</Listbox.Label>
        <Listbox.Button className="form-input">
          {selectedValue
            ? fullDisplayInButton
              ? optionRenderer(selectedValue)
              : selectedValue.name
            : 'Choisir une valeur'}
        </Listbox.Button>
        {open && (
          <Portal>
            <div className="z-50 absolute inset-0 flex justify-center items-center p-10 bg-gray-600 bg-opacity-60">
              <div className="mx-32 w-full max-h-full overflow-auto bg-white border border-black">
                <Listbox.Options static className="w-full">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.name}
                      value={option}
                      disabled={undefined}
                      className={({ active, selected }) =>
                        `cursor-pointer px-3 py-1 ${active ? 'bg-blue-400' : ''} ${
                          selected && !active ? 'bg-blue-200' : ''
                        }`
                      }
                    >
                      {optionRenderer(option)}
                    </Listbox.Option>
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
