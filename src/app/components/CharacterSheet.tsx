import {
  CARACS,
  CLASSES,
  CharacterProfileType,
  DEFAULT_GEMME_GRIMOIRE,
  GEMMES,
  SELECT_MENU_TYPE,
  SelectMenuOptionType,
} from '@/constants';
import { FormType } from '@/constants/formStructure';

import { useEffect, useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { formatCapacities } from '@/utils';
import { CharacterCard } from './CharacterCard';
import { applyProfileModifiers, formatFaithCapacity, formatMagicCapacities } from '@/utils/applyProfileModifiers';
import { SelectMenu } from './SelectMenu';

export const CharacterSheet = () => {
  const [championName, setChampionName] = useState('');
  const [magicianCapacities, setMagicianCapacities] = useState(DEFAULT_GEMME_GRIMOIRE);
  const currentForm = useWatch() as FormType;

  useEffect(() => {
    setMagicianCapacities(DEFAULT_GEMME_GRIMOIRE);
  }, [currentForm.faction?.name]);
  useEffect(() => {
    setMagicianCapacities((prev) => ({ ...prev, secondElement: null, secondGrimoire: null, espritDe: null }));
  }, [currentForm.magicianStuff?.name]);

  const characterProfile = useMemo(() => {
    const { faction, classe, localStuff, ...equipments } = currentForm;
    if (!classe || !faction) return null;
    const profile: CharacterProfileType = structuredClone({
      ...classe,
      faction,
      localStuff,
      specialEffects: [],
      remoteWeapon: null,
      magicSkills: null,
      god: null,
      cost: localStuff.reduce((acc, cur) => acc + cur.cost, 0),
    });

    // Add the PEU carac for scary one factions
    if (faction?.profileModifs[0].caracModifs.some(([carac]) => carac === CARACS.PEU)) {
      profile.caracs[CARACS.PEU] = profile.caracs[CARACS.COU];
    }

    // set the faction modifier
    if (faction) {
      const { profileModifs } = faction;
      profileModifs.forEach(({ classes, caracModifs, capacities, cost }) => {
        if (classes.some((c) => [CLASSES.all, classe.name].includes(c))) {
          applyProfileModifiers(profile, cost, caracModifs, capacities);
        }
      });
    }

    // set equipment modifiers
    Object.values(equipments).forEach((equipment) => {
      if (equipment) {
        const { caracModifs, capacities, specialEffects, cost, name } = equipment;
        const specialEffectsName = specialEffects ? name : undefined;
        applyProfileModifiers(profile, cost, caracModifs, capacities, specialEffectsName);
      }
    });

    // set remote weapon profile
    if (equipments.shooterStuff)
      profile.remoteWeapon = `${equipments.shooterStuff.name}: ${equipments.shooterStuff.remoteWeapon}`;

    // handle COU for Scary ones
    if (profile.caracs[CARACS.PEU] !== null) {
      profile.caracs[CARACS.COU] = Math.max(profile.caracs[CARACS.COU]!, profile.caracs[CARACS.PEU]!);
    }

    // handle faith
    if (profile.caracs[CARACS.FOI] !== null) {
      formatFaithCapacity(profile);
    }

    // handle magic
    if (profile.caracs[CARACS.POU] !== null) {
      formatMagicCapacities(profile, magicianCapacities);
    }

    return profile;
  }, [currentForm, magicianCapacities]);

  if (!characterProfile) return null;

  const {
    faction,
    caracs: { MOU, INI, ATT, FOR, DEF, RES, COU, PEU, DIS, TIR, POU, FOI },
    remoteWeapon,
    capacities,
    specialEffects,
    localStuff,
    cost,
  } = characterProfile;

  const grimoires = faction?.grimoire.map((grimoire) => ({ name: grimoire })) ?? [];
  const baseElements = faction?.baseElements.map((element) => ({ name: element })) ?? [];
  const allowedElements =
    Object.values(GEMMES)
      .filter((element) => !faction?.forbiddenElements.includes(element))
      .map((element) => ({ name: element })) ?? [];

  const handleUpdateMagicienCapacity = (
    newValue: SelectMenuOptionType | SelectMenuOptionType[],
    key: keyof typeof DEFAULT_GEMME_GRIMOIRE,
  ) => {
    setMagicianCapacities((prev) => ({ ...prev, [key]: newValue as { name: string } | null }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="self-center">
        <CharacterCard characterProfile={characterProfile} championName={championName} />
      </div>
      <label>
        <p>Nom du Champion</p>
        <input
          type="text"
          className="form-input"
          value={championName}
          onChange={(e) => setChampionName(e.target.value)}
        />
      </label>
      {POU !== null ? (
        <>
          <SelectMenu
            options={grimoires}
            value={magicianCapacities.firstGrimoire}
            onChange={(newValue) => handleUpdateMagicienCapacity(newValue, 'firstGrimoire')}
            label="Grimoire"
            selectType={SELECT_MENU_TYPE.STRINGS}
          />
          <SelectMenu
            options={baseElements}
            value={magicianCapacities.firstElement}
            onChange={(newValue) => handleUpdateMagicienCapacity(newValue, 'firstElement')}
            label="Elément"
            selectType={SELECT_MENU_TYPE.STRINGS}
          />
          {currentForm.magicianStuff?.name === 'Grimoire' ? (
            <SelectMenu
              options={grimoires}
              value={magicianCapacities.secondGrimoire}
              onChange={(newValue) => handleUpdateMagicienCapacity(newValue, 'secondGrimoire')}
              label="2ème grimoire"
              selectType={SELECT_MENU_TYPE.STRINGS}
            />
          ) : null}
          {currentForm.magicianStuff?.name === 'Traité des arcanes' ? (
            <SelectMenu
              options={allowedElements}
              value={magicianCapacities.secondElement}
              onChange={(newValue) => handleUpdateMagicienCapacity(newValue, 'secondElement')}
              label="2ème élément"
              selectType={SELECT_MENU_TYPE.STRINGS}
            />
          ) : null}
          {currentForm.magicianStuff?.name === 'Baguette magique' ? (
            <SelectMenu
              options={[...grimoires, ...allowedElements]}
              value={magicianCapacities.espritDe}
              onChange={(newValue) => handleUpdateMagicienCapacity(newValue, 'espritDe')}
              label="Esprit de"
              selectType={SELECT_MENU_TYPE.STRINGS}
            />
          ) : null}
        </>
      ) : null}
      <div>{`${MOU} · ${INI} · ${ATT}/${FOR} · ${DEF}/${RES} · ${PEU ? -PEU : COU}/${DIS}`}</div>
      {TIR && <div>{`Tir: ${TIR} · ${remoteWeapon}`}</div>}
      {POU && <div>{`Pouvoir: ${POU}`}</div>}
      {FOI && <div>{`Foi: ${FOI}`}</div>}
      <div>{`Compétences: ${capacities.length ? formatCapacities(capacities) : '-'}`}</div>
      <div>{`Capacité spéciale: ${specialEffects.length ? formatCapacities(specialEffects) : '-'}`}</div>
      <div>
        {`Equipements de peuple: ${localStuff.length ? formatCapacities(localStuff.map((stuff) => stuff.name)) : '-'}`}
      </div>
      <div className={`font-semibold ${cost > 50 ? 'text-red-500' : ''}`}>{`Coût total: ${cost}/50`}</div>
    </div>
  );
};
