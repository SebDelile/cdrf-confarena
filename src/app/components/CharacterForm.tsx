import { Controller, Control, UseFormWatch, useWatch } from 'react-hook-form';
import { SelectMenu } from './SelectMenu';
import { profiles } from '@/constants/profiles';
import { factions } from '@/constants/factions';
import { oneHandWeapons } from '@/constants/equipments/oneHandWeapons';
import { twoHandsWeapons } from '@/constants/equipments/twoHandsWeapons';
import { shields } from '@/constants/equipments/shields';
import { body } from '@/constants/equipments/body';
import { head } from '@/constants/equipments/head';
import { foot } from '@/constants/equipments/foot';
import { accessories } from '@/constants/equipments/accessories';
import { warriorStuff } from '@/constants/equipments/warriorStuff';
import { shooterStuff } from '@/constants/equipments/shooterStuff';
import { magicianStuff } from '@/constants/equipments/magicianStuff';
import { priestStuff } from '@/constants/equipments/priestStuff';
import { CLASSES, SELECT_MENU_TYPE } from '@/constants';
import { FormType, formFieldToOptions } from '@/constants/formStructure';

const { warrior, shooter, magician, priest, warriorShooter, warriorMagician, warriorPriest } = CLASSES;

export const CharacterForm = () => {
  const currentForm = useWatch() as FormType;
  return (
    <form className="w-full h-full flex flex-col gap-3 overflow-auto">
      <Controller
        name="classe"
        render={({ field }) => (
          <SelectMenu {...field} label="Classe" options={profiles} selectType={SELECT_MENU_TYPE.PROFILE} />
        )}
      />
      <Controller
        name="faction"
        render={({ field }) => (
          <SelectMenu {...field} label="Peuple" options={factions} selectType={SELECT_MENU_TYPE.FACTION} />
        )}
      />
      <Controller
        name="localStuff"
        render={({ field }) => (
          <SelectMenu
            {...field}
            label="Options de peuple"
            options={currentForm.faction?.localStuff ?? []}
            selectType={SELECT_MENU_TYPE.LOCAL_STUFF}
            multiple
          />
        )}
      />
      {currentForm.faction?.name === 'Cité franche de Cadwallon' && (
        <Controller
          name="cadweBonusStuff"
          render={({ field }) => (
            <SelectMenu
              {...field}
              label="Equipement supplémentaire"
              options={currentForm.localStuff[0]?.options ? formFieldToOptions[currentForm.localStuff[0].options] : []}
              selectType={SELECT_MENU_TYPE.EQUIPMENT}
            />
          )}
        />
      )}
      <Controller
        name="oneHandWeapon1"
        render={({ field }) => (
          <SelectMenu
            {...field}
            label="Arme à une main 1"
            options={currentForm.twoHandsWeapon ? [] : oneHandWeapons}
            selectType={SELECT_MENU_TYPE.EQUIPMENT}
          />
        )}
      />
      <Controller
        name="oneHandWeapon2"
        render={({ field }) => (
          <SelectMenu
            {...field}
            label="Arme à une main 2"
            options={currentForm.twoHandsWeapon || currentForm.shield ? [] : oneHandWeapons}
            selectType={SELECT_MENU_TYPE.EQUIPMENT}
          />
        )}
      />
      <Controller
        name="twoHandsWeapon"
        render={({ field }) => (
          <SelectMenu
            {...field}
            label="Arme à deux mains"
            options={
              currentForm.oneHandWeapon1 || currentForm.oneHandWeapon2 || currentForm.shield ? [] : twoHandsWeapons
            }
            selectType={SELECT_MENU_TYPE.EQUIPMENT}
          />
        )}
      />
      <Controller
        name="shield"
        render={({ field }) => (
          <SelectMenu
            {...field}
            label="Bouclier"
            options={currentForm.twoHandsWeapon || currentForm.oneHandWeapon2 ? [] : shields}
            selectType={SELECT_MENU_TYPE.EQUIPMENT}
          />
        )}
      />
      <Controller
        name="head"
        render={({ field }) => (
          <SelectMenu {...field} label="Tête" options={head} selectType={SELECT_MENU_TYPE.EQUIPMENT} />
        )}
      />
      <Controller
        name="body"
        render={({ field }) => (
          <SelectMenu {...field} label="Corps" options={body} selectType={SELECT_MENU_TYPE.EQUIPMENT} />
        )}
      />
      <Controller
        name="foot"
        render={({ field }) => (
          <SelectMenu {...field} label="Pieds" options={foot} selectType={SELECT_MENU_TYPE.EQUIPMENT} />
        )}
      />
      <Controller
        name="accessory1"
        render={({ field }) => (
          <SelectMenu {...field} label="Accessoire 1" options={accessories} selectType={SELECT_MENU_TYPE.EQUIPMENT} />
        )}
      />
      <Controller
        name="accessory2"
        render={({ field }) => (
          <SelectMenu {...field} label="Accessoire 2" options={accessories} selectType={SELECT_MENU_TYPE.EQUIPMENT} />
        )}
      />
      {currentForm.classe?.name === warrior && (
        <Controller
          name="warriorStuff"
          render={({ field }) => (
            <SelectMenu
              {...field}
              label="Equipement de guerrier"
              options={warriorStuff}
              selectType={SELECT_MENU_TYPE.EQUIPMENT}
            />
          )}
        />
      )}
      {(currentForm.classe?.name === shooter || currentForm.classe?.name === warriorShooter) && (
        <Controller
          name="shooterStuff"
          render={({ field }) => (
            <SelectMenu
              {...field}
              label="Equipement de tireur"
              options={shooterStuff}
              selectType={SELECT_MENU_TYPE.EQUIPMENT}
            />
          )}
        />
      )}
      {(currentForm.classe?.name === magician || currentForm.classe?.name === warriorMagician) && (
        <Controller
          name="magicianStuff"
          render={({ field }) => (
            <SelectMenu
              {...field}
              label="Equipement de magicien"
              options={magicianStuff}
              selectType={SELECT_MENU_TYPE.EQUIPMENT}
            />
          )}
        />
      )}
      {(currentForm.classe?.name === priest || currentForm.classe?.name === warriorPriest) && (
        <Controller
          name="priestStuff"
          render={({ field }) => (
            <SelectMenu
              {...field}
              label="Equipement de Fidèle"
              options={priestStuff}
              selectType={SELECT_MENU_TYPE.EQUIPMENT}
            />
          )}
        />
      )}
    </form>
  );
};
