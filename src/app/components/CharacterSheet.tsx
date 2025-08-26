import { CARACS, CLASSES, CharacterProfileType } from '@/constants';
import { FormType } from '@/constants/formStructure';

import { useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { applyProfileModifiers, formatCapacities } from '@/utils';
import { CharacterCard } from './CharacterCard';

export const CharacterSheet = () => {
  const [championName, setChampionName] = useState('');
  const currentForm = useWatch() as FormType;
  const characterProfile = useMemo(() => {
    const { faction, classe, localStuff, ...equipments } = currentForm;
    if (!classe || !faction) return null;
    const profile: CharacterProfileType = {
      ...classe,
      faction,
      localStuff,
      specialEffects: [],
      remoteWeapon: null,
      magicSkills: null,
      god: null,
      cost: localStuff.reduce((acc, cur) => acc + cur.cost, 0),
    };

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
        const { caracModifs, capacities, specialEffect, cost, remoteWeapon } = equipment;
        // if (remoteWeapon) profile.remoteWeapon = remoteWeapon;
        applyProfileModifiers(profile, cost, caracModifs, capacities, specialEffect);
      }
    });

    // set remote weapon profile
    if (equipments.shooterStuff)
      profile.remoteWeapon = `${equipments.shooterStuff.name}: ${equipments.shooterStuff.remoteWeapon}`;

    // handle COU for Scary ones
    if (profile.caracs[CARACS.PEU] !== null) {
      profile.caracs[CARACS.COU] = Math.max(profile.caracs[CARACS.COU]!, profile.caracs[CARACS.PEU]!);
    }

    // TODO: handle magic/god
    // TODO: clean duplicates
    // TODO: handle capacity enhancement (enchainement, cible)

    return profile;
  }, [currentForm]);

  if (!characterProfile) return null;

  const {
    caracs: { MOU, INI, ATT, FOR, DEF, RES, COU, PEU, DIS, TIR, POU, FOI },
    remoteWeapon,
    capacities,
    specialEffects,
    localStuff,
    cost,
  } = characterProfile;

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
