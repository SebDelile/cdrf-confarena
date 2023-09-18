import { ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import { SelectMenuOptionType } from '@/constants';

type PropTypes = {
  children: ReactNode;
  value: SelectMenuOptionType | null;
  disabled?: boolean;
  title?: string;
};

export const ListboxOption = ({ children, value, disabled, title }: PropTypes) => (
  <Listbox.Option
    value={value}
    className={({ active, selected, disabled }) =>
      `px-3 py-3 border-black border-opacity-20 border-b-2 last:border-b-0 ${active ? 'bg-blue-400' : ''} ${
        selected && !active ? 'bg-blue-200' : ''
      } ${disabled ? 'text-black text-opacity-50' : 'cursor-pointer'}`
    }
    disabled={disabled}
    title={title}
  >
    {children}
  </Listbox.Option>
);
