import { FormType, formDefault, formFieldToOptions, formFieldsSequence } from '@/constants/formStructure';
import { alphaNumToBin, binToAlphaNum } from '.';

const NO_SELECTION_INDEX = 31;
const version = process.env.NEXT_PUBLIC_APP_VERSION;

export const getFormFromQueryParam = (queryParam: string | null, v: string | null): FormType => {
  let error = false;
  if (!queryParam || v !== version) return formDefault;
  // deep copy
  const form = { ...formDefault, localStuff: [...formDefault.localStuff] };
  const binaryQueryParam = alphaNumToBin(queryParam);
  let localStuffBinary = '';
  let cadweBonusStuffIndex = NO_SELECTION_INDEX;
  formFieldsSequence.forEach((field, index) => {
    if (field === 'localStuff') {
      // each form entry is stored on 5-bits
      localStuffBinary = binaryQueryParam.slice(index * 5, (index + 1) * 5);
    } else {
      const optionIndex = parseInt(binaryQueryParam.slice(index * 5, (index + 1) * 5), 2);
      if (field === 'cadweBonusStuff') {
        cadweBonusStuffIndex = optionIndex;
      } else {
        // 2^5 means no selection
        if (optionIndex !== NO_SELECTION_INDEX) {
          const selectedOption = formFieldToOptions[field][optionIndex];
          if (selectedOption) {
            // @ts-ignore as the field are the same, the type of the field as well (TS doesn't narrow by itself)
            form[field] = selectedOption;
          } else {
            error = true;
          }
        }
      }
    }
  });

  // local stuff depends on faction, so it has to be computed after
  if (form.faction?.name === 'Cité franche de Cadwallon') {
    // this one is computed differently than other factions
    const localStuffIndex = parseInt(localStuffBinary, 2);
    if (localStuffIndex !== NO_SELECTION_INDEX) {
      form.localStuff = [form.faction.localStuff[localStuffIndex]];
      if (cadweBonusStuffIndex !== NO_SELECTION_INDEX) {
        // @ts-ignore as the field are the same, the type of the field as well (TS doesn't narrow by itself)
        const selectedLocalStuff = formFieldToOptions[form.localStuff[0].options][cadweBonusStuffIndex];
        if (selectedLocalStuff) {
          form.cadweBonusStuff = selectedLocalStuff;
        } else {
          error = true;
        }
      }
    }
  } else {
    Array.from(localStuffBinary).forEach((entry, index) => {
      if (entry === '1') {
        const checkedLocalStuff = form.faction?.localStuff[index];
        if (checkedLocalStuff) {
          form.localStuff.push(checkedLocalStuff);
        } else {
          error = true;
        }
      }
    });
  }

  return error ? formDefault : form;
};

export const setQueryParamFromForm = (form: FormType): string => {
  // each field as a 5-bits binary
  const binaryQueryParam = formFieldsSequence
    .map((field) => {
      if (field === 'localStuff') {
        if (form.faction?.name === 'Cité franche de Cadwallon') {
          if (form.localStuff.length) {
            const selectedLocalStuffIndex = form.faction.localStuff.findIndex(
              ({ name }) => form.localStuff[0].name === name,
            );
            if (selectedLocalStuffIndex !== -1) return selectedLocalStuffIndex.toString(2).padStart(5, '0');
          }
        } else {
          const factionLocalStuff = form.faction?.localStuff ?? [];
          // warning, this binary string is read from left to right (1st digit = 1st element in array)
          return factionLocalStuff
            .map((stuff) => Number(form.localStuff.some(({ name }) => stuff.name === name)))
            .join('')
            .padEnd(5, '0');
        }
      } else {
        const selectedOption = form[field];
        if (selectedOption) {
          const options =
            formFieldToOptions[field === 'cadweBonusStuff' ? form.localStuff[0]?.options ?? field : field];
          const selectedOptionIndex = options.findIndex(({ name }) => name === selectedOption.name);
          if (selectedOptionIndex !== -1) return selectedOptionIndex.toString(2).padStart(5, '0');
        }
      }
      return NO_SELECTION_INDEX.toString(2);
    })
    .join('');

  return binToAlphaNum(binaryQueryParam);
};
