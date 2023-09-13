import { Listbox, Portal } from '@headlessui/react';

type PropTypes = {
  options: { name: string }[];
  selectedValue: { name: string } | null;
  onChange: (newValue: { name: string }) => void;
  label: string;
};

export const SelectMenu = ({ options, selectedValue, onChange, label }: PropTypes) => {
  return (
    <Listbox by="name" value={selectedValue} onChange={onChange}>
      {({ open }) => (
        <div className="form-container relative py-3">
          <Listbox.Label>{label}</Listbox.Label>
          <Listbox.Button className="form-input">{selectedValue?.name ?? 'Choisir une valeur'}</Listbox.Button>
          {open && (
            <Portal>
              <div className="z-50 absolute inset-0 flex justify-center items-center p-4 bg-gray-600 bg-opacity-60">
                <div className="mx-32 w-full max-h-48 overflow-auto bg-white border border-black p-4">
                  <Listbox.Options static className="w-full">
                    {options.map((option) => (
                      <Listbox.Option
                        key={option.name}
                        value={option}
                        disabled={undefined}
                        className={({ active, selected }) =>
                          `cursor-pointer ${active ? 'bg-blue-400' : ''} ${selected && !active ? 'bg-blue-200' : ''}`
                        }
                      >
                        {option.name}
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
};
