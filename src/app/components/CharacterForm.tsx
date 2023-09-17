import { Controller, Control, UseFormWatch } from 'react-hook-form';
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
import { CLASSES, formDefault } from '@/constants';

const { warrior, shooter, magician, priest, warriorShooter, warriorMagician, warriorPriest } = CLASSES;

type Proptypes = {
  control: Control<typeof formDefault>;
  watch: UseFormWatch<any>;
};

export const CharacterForm = ({ control, watch }: Proptypes) => {
  const currentForm = watch();
  return (
    <form className="w-full h-full overflow-auto">
      <Controller
        name="classe"
        control={control}
        render={({ field }) => <SelectMenu {...field} label="Classe" options={profiles} />}
      />
      <Controller
        name="faction"
        control={control}
        render={({ field }) => <SelectMenu {...field} label="Faction" options={factions} />}
      />
      <Controller
        name="localStuff"
        control={control}
        render={({ field }) => (
          <SelectMenu {...field} label="Options de faction" options={currentForm.faction?.localStuff ?? []} multiple />
        )}
      />
      <Controller
        name="oneHandWeapon1"
        control={control}
        render={({ field }) => (
          <SelectMenu {...field} label="Arme à une main 1" options={currentForm.twoHandsWeapon ? [] : oneHandWeapons} />
        )}
      />
      <Controller
        name="oneHandWeapon2"
        control={control}
        render={({ field }) => (
          <SelectMenu
            {...field}
            label="Arme à une main 2"
            options={currentForm.twoHandsWeapon || currentForm.shield ? [] : oneHandWeapons}
          />
        )}
      />
      <Controller
        name="twoHandsWeapon"
        control={control}
        render={({ field }) => (
          <SelectMenu
            {...field}
            label="Arme à deux mains"
            options={
              currentForm.oneHandWeapon1 || currentForm.oneHandWeapon2 || currentForm.shield ? [] : twoHandsWeapons
            }
          />
        )}
      />
      <Controller
        name="shield"
        control={control}
        render={({ field }) => (
          <SelectMenu
            {...field}
            label="Bouclier"
            options={currentForm.twoHandsWeapon || currentForm.oneHandWeapon2 ? [] : shields}
          />
        )}
      />
      <Controller
        name="head"
        control={control}
        render={({ field }) => <SelectMenu {...field} label="Tête" options={head} />}
      />
      <Controller
        name="body"
        control={control}
        render={({ field }) => <SelectMenu {...field} label="Corps" options={body} />}
      />
      <Controller
        name="foot"
        control={control}
        render={({ field }) => <SelectMenu {...field} label="Pieds" options={foot} />}
      />
      <Controller
        name="oneHandWeapon1"
        control={control}
        render={({ field }) => <SelectMenu {...field} label="Accessoire 1" options={accessories} />}
      />
      <Controller
        name="accessory1"
        control={control}
        render={({ field }) => <SelectMenu {...field} label="Accessoire 1" options={accessories} />}
      />
      <Controller
        name="accessory2"
        control={control}
        render={({ field }) => <SelectMenu {...field} label="Accessoire 1" options={accessories} />}
      />
      {currentForm.classe?.name === warrior && (
        <Controller
          name="warriorStuff"
          control={control}
          render={({ field }) => <SelectMenu {...field} label="Equipement de guerrier" options={warriorStuff} />}
        />
      )}
      {(currentForm.classe?.name === shooter || currentForm.classe?.name === warriorShooter) && (
        <Controller
          name="shooterStuff"
          control={control}
          render={({ field }) => <SelectMenu {...field} label="Equipement de tireur" options={shooterStuff} />}
        />
      )}
      {(currentForm.classe?.name === magician || currentForm.classe?.name === warriorMagician) && (
        <Controller
          name="magicianStuff"
          control={control}
          render={({ field }) => <SelectMenu {...field} label="Equipement de magicien" options={magicianStuff} />}
        />
      )}
      {(currentForm.classe?.name === priest || currentForm.classe?.name === warriorPriest) && (
        <Controller
          name="priestStuff"
          control={control}
          render={({ field }) => <SelectMenu {...field} label="Equipement de Fidèle" options={priestStuff} />}
        />
      )}
    </form>
  );
};
