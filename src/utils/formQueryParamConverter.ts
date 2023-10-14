import { FormType, formDefault, formFieldToOptions, formFieldsSequence } from '@/constants/formStructure';
import { alphaNumToBin, binToAlphaNum } from '.';

const NO_SELECTION_INDEX = 31;

export const getFormFromQueryParam = (queryParam: string): FormType => {
  // deep copy
  const form = { ...formDefault, localStuff: [...formDefault.localStuff] };
  if (!queryParam) return formDefault;
  const binaryQueryParam = alphaNumToBin(queryParam);
  // each form entry is stored on 5-bits
  let localStuffBinary = '';
  formFieldsSequence.forEach((field, index) => {
    if (field === 'localStuff') {
      localStuffBinary = binaryQueryParam.slice(index * 5, (index + 1) * 5);
    } else {
      const optionIndex = parseInt(binaryQueryParam.slice(index * 5, (index + 1) * 5), 2);
      // 2^5 means no selection
      if (optionIndex !== NO_SELECTION_INDEX) {
        // @ts-ignore as the field are the same, the type of the field as well (TS doesn't narrow by itself)
        form[field] = formFieldToOptions[field][optionIndex];
      }
    }
  });

  // local stuff depends on faction, so it has to be computed after
  Array.from(localStuffBinary).forEach((entry, index) => {
    if (entry === '1') {
      const checkedLocalStuff = form.faction?.localStuff[index];
      if (checkedLocalStuff) form.localStuff.push(checkedLocalStuff);
    }
  });
  return form;
};

export const setQueryParamFromForm = (form: FormType): string => {
  // each field as a 5-bits binary
  const binaryQueryParam = formFieldsSequence
    .map((field) => {
      if (field === 'localStuff') {
        const factionLocalStuff = form.faction?.localStuff ?? [];
        // warning, this binary string is read from left to right (1st digit = 1st element in array)
        return factionLocalStuff
          .map((stuff) => Number(form.localStuff.some(({ name }) => stuff.name === name)))
          .join('')
          .padEnd(5, '0');
      } else {
        const selectedOption = form[field];
        if (selectedOption) {
          const selectedOptionIndex =
            formFieldToOptions[field].findIndex(({ name }) => name === selectedOption.name) ?? NO_SELECTION_INDEX;
          return selectedOptionIndex.toString(2).padStart(5, '0');
        } else return NO_SELECTION_INDEX.toString(2);
      }
    })
    .join('');

  return binToAlphaNum(binaryQueryParam);
};
