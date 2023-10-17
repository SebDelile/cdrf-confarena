import { UseFormSetValue } from 'react-hook-form';
import { CLASSES, EQUIPMENT_PARTS } from '@/constants';
import { FormType, formFieldToOptions } from '@/constants/formStructure';
import { getIsRestricted } from './getIsRestricted';

const { warrior, shooter, magician, priest, warriorShooter, warriorMagician, warriorPriest } = CLASSES;

export const checkformIntegrity = (currentForm: FormType, setValue: UseFormSetValue<FormType>): void => {
  const { faction, classe, localStuff, warriorStuff, shooterStuff, magicianStuff, priestStuff, cadweBonusStuff } =
    currentForm;

  // faction <> local stuff
  const availableLocalStuff = localStuff.filter(({ name: stuff }) =>
    (faction?.localStuff ?? []).some(({ name }) => stuff === name),
  );
  if (availableLocalStuff.length !== localStuff.length) {
    setValue('localStuff', availableLocalStuff);
  }
  // specific case localStuff Cadwe is not multiple, keep the last one
  if (faction?.name === 'Cité franche de Cadwallon') {
    if (localStuff?.length > 1) {
      setValue('localStuff', [localStuff.reverse()[0]]);
    }
  }
  // clean the cadwe bonus equipment if no more available
  if (
    cadweBonusStuff &&
    !(
      localStuff?.[0]?.options &&
      formFieldToOptions[localStuff?.[0].options]?.some(({ name }) => cadweBonusStuff.name === name)
    )
  ) {
    setValue('cadweBonusStuff', null);
  }

  // classe <> classe stuff
  if (warriorStuff && !(classe?.name === warrior)) {
    setValue('warriorStuff', null);
  }
  if (shooterStuff && !(classe?.name === shooter || classe?.name === warriorShooter)) {
    setValue('shooterStuff', null);
  }
  if (magicianStuff && !(classe?.name === magician || classe?.name === warriorMagician)) {
    setValue('magicianStuff', null);
  }
  if (priestStuff && !(classe?.name === priest || classe?.name === warriorPriest)) {
    setValue('priestStuff', null);
  }

  // equipments
  Object.values(EQUIPMENT_PARTS).forEach((equipmentpart) => {
    const restrictions = currentForm[equipmentpart]?.restrictions;
    if (getIsRestricted(restrictions, classe?.name, faction)) setValue(equipmentpart, null);
  });
};
