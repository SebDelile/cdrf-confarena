'use client';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { CharacterProfileType } from '@/constants';
import {
  CAPACITIES_FONT_PROPS,
  CAPACITIES_TEXT_PROPS,
  CARD_USABLE_WIDTH,
  EQUIPMENTS_FONT_PROPS,
  EQUIPMENTS_TEXT_PROPS,
  SPECIAL_EFFECTS_FONT_PROPS,
  SPECIAL_EFFECTS_TEXT_PROPS,
} from '@/constants/card';
import { splitTextMultiLine } from '@/utils/splitTextMultiLines';

type PropTypes = Pick<CharacterProfileType, 'remoteWeapon' | 'capacities' | 'specialEffects' | 'localStuff'>;

const CharacterCardTextInner = ({ remoteWeapon, capacities, specialEffects, localStuff }: PropTypes) => {
  const splittedEquipments = useMemo(() => {
    const rawEquipements = [remoteWeapon, ...localStuff.map((stuff) => stuff.name)].filter(Boolean).join(', ');
    return splitTextMultiLine(rawEquipements, CARD_USABLE_WIDTH, EQUIPMENTS_FONT_PROPS);
  }, [remoteWeapon, localStuff]);

  const splittedCapacities = useMemo(() => {
    const rawCapacities = capacities.join(', ');
    return splitTextMultiLine(rawCapacities, CARD_USABLE_WIDTH, CAPACITIES_FONT_PROPS);
  }, [capacities]);

  const yCapacities = useMemo(
    () =>
      EQUIPMENTS_TEXT_PROPS.y +
      splittedEquipments.length * parseInt(EQUIPMENTS_FONT_PROPS.fontSize) +
      (splittedEquipments.length ? 4 : 0),
    [splittedEquipments],
  );

  return (
    <>
      {remoteWeapon || localStuff ? (
        <text {...EQUIPMENTS_TEXT_PROPS} {...EQUIPMENTS_FONT_PROPS}>
          {splittedEquipments.map((line, index) => (
            <tspan key={index} x={EQUIPMENTS_TEXT_PROPS.x} dy={index === 0 ? '0' : '1em'}>
              {line}
            </tspan>
          ))}
        </text>
      ) : null}
      {capacities ? (
        <text {...CAPACITIES_TEXT_PROPS} {...CAPACITIES_FONT_PROPS} y={yCapacities}>
          {splittedCapacities.map((line, index) => (
            <tspan key={index} x={CAPACITIES_TEXT_PROPS.x} dy={index === 0 ? '0' : '1em'}>
              {line}
            </tspan>
          ))}
        </text>
      ) : null}
      {specialEffects ? (
        <text {...SPECIAL_EFFECTS_TEXT_PROPS} {...SPECIAL_EFFECTS_FONT_PROPS}>
          {specialEffects.join(', ')}
        </text>
      ) : null}
    </>
  );
};

// client side only
export const CharacterCardText = dynamic(() => Promise.resolve(CharacterCardTextInner), { ssr: false });
