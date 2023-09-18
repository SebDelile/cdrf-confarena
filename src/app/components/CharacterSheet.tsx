import { CARACS, CLASSES, CharacterProfileType, FormType } from '@/constants';
import { useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import { applyProfileModifiers, formatCapacities } from '@/utils';

export const CharacterSheet = () => {
  const currentForm = useWatch() as FormType;
  const characterProfile = useMemo(() => {
    const { faction, classe, localStuff, ...equipments } = currentForm;
    if (!classe) return null;
    const profile: CharacterProfileType = {
      ...classe,
      factionName: faction?.name ?? null,
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
        if (remoteWeapon) profile.remoteWeapon = remoteWeapon;
        applyProfileModifiers(profile, cost, caracModifs, capacities, specialEffect);
      }
    });

    //handle COU for Scary ones
    if (profile.caracs[CARACS.PEU] !== null) {
      profile.caracs[CARACS.COU] = Math.max(profile.caracs[CARACS.COU]!, profile.caracs[CARACS.PEU]!);
    }

    // clean duplicates
    // handle capacity enhancement (enchainement, cible)

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
      <div className="font-semibold">Resultat</div>
      <div>{`${MOU} · ${INI} · ${ATT}/${FOR} · ${DEF}/${RES} · ${PEU ? -PEU : COU}/${DIS}`}</div>
      {TIR && <div>{`Tir: ${TIR} · ${remoteWeapon}`}</div>}
      {POU && <div>{`Pouvoir: ${POU}`}</div>}
      {FOI && <div>{`Foi: ${FOI}`}</div>}
      <div>{`Compétences: ${capacities.length ? formatCapacities(capacities) : '-'}`}</div>
      <div>{`Capacité spéciale: ${specialEffects.length ? formatCapacities(specialEffects) : '-'}`}</div>
      <div>
        {`Equipements de faction: ${localStuff.length ? formatCapacities(localStuff.map((stuff) => stuff.name)) : '-'}`}
      </div>
      <div className="font-semibold">{`Coût total: ${cost}/50`}</div>
    </div>
  );
};
