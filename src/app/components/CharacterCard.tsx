import { useMemo, useRef } from 'react';

import { ALLIANCES, CharacterProfileType } from '@/constants';
import {
  ARMY_ICON_PROPS,
  CARD_DIMENSIONS,
  MOU_ICON_PROPS,
  INI_ICON_PROPS,
  ATT_ICON_PROPS,
  DEF_ICON_PROPS,
  COU_ICON_PROPS,
  SPE_ICON_PROPS,
  MOU_TEXT_PROPS,
  INI_TEXT_PROPS,
  ATT_TEXT_PROPS,
  ATT_SEPARATOR_PROPS,
  FOR_TEXT_PROPS,
  DEF_TEXT_PROPS,
  DEF_SEPARATOR_PROPS,
  RES_TEXT_PROPS,
  COU_TEXT_PROPS,
  COU_SEPARATOR_PROPS,
  DIS_TEXT_PROPS,
  SPE_TEXT_PROPS,
  NAME_TEXT_PROPS,
  CLASS_TEXT_PROPS,
} from '@/constants/card';
import { goudyFont } from '@/utils/fonts';
import { CharacterCardText } from './CharacterCardText';
import { SvgTextHalo } from '@/utils/SvgTextHalo';

type PropTypes = {
  characterProfile: CharacterProfileType;
  championName: string;
};

export const CharacterCard = ({ characterProfile, championName }: PropTypes) => {
  const {
    name,
    caracs: { MOU, INI, ATT, FOR, DEF, RES, COU, PEU, DIS, TIR, POU, FOI },
    remoteWeapon,
    capacities,
    specialEffects,
    localStuff,
    faction,
  } = characterProfile;
  const svgNode = useRef<SVGSVGElement | null>(null);

  const hrefs = useMemo(() => {
    if (!faction) return {};
    const { alliance, peuple } = faction;
    return {
      armyIcon: `/icones-peuples/${peuple}.png`,
      cardBackground: `/fonds-carte/fond${alliance}.jpg`,
      mouIcon: `/icones-caracs/${alliance}/MOU.png`,
      iniIcon: `/icones-caracs/${alliance}/INI.png`,
      attIcon: `/icones-caracs/${alliance}/ATT.png`,
      defIcon: `/icones-caracs/${alliance}/DEF.png`,
      couIcon: `/icones-caracs/${alliance}/${PEU ? 'PEU' : 'COU'}.png`,
      tirIcon: `/icones-caracs/${alliance}/TIR.png`,
      pouIcon: `/icones-caracs/${alliance}/POU.png`,
      foiIcon: `/icones-caracs/${alliance}/FOI.png`,
    };
  }, [faction, PEU]);

  return (
    <svg
      ref={svgNode}
      {...CARD_DIMENSIONS}
      style={{
        fontFamily: goudyFont.style.fontFamily,
        fill: faction?.alliance === ALLIANCES.meandresTenebres ? 'white' : 'black',
      }}
    >
      <SvgTextHalo />
      <image x={0} y={0} {...CARD_DIMENSIONS} href={hrefs.cardBackground} />
      <text {...NAME_TEXT_PROPS} filter="url(#halo)">
        {championName.toUpperCase()}
      </text>
      <text {...CLASS_TEXT_PROPS}>{name}</text>
      <image {...ARMY_ICON_PROPS} href={hrefs.armyIcon} />
      <image {...MOU_ICON_PROPS} href={hrefs.mouIcon} />
      <text {...MOU_TEXT_PROPS}>{String(MOU).replace('.', ',')}</text>
      <image {...INI_ICON_PROPS} href={hrefs.iniIcon} />
      <text {...INI_TEXT_PROPS}>{INI}</text>
      <image {...ATT_ICON_PROPS} href={hrefs.attIcon} />
      <text {...ATT_TEXT_PROPS}>{ATT}</text>
      <circle {...ATT_SEPARATOR_PROPS} />
      <text {...FOR_TEXT_PROPS}>{FOR}</text>
      <text {...DEF_TEXT_PROPS}>{DEF}</text>
      <circle {...DEF_SEPARATOR_PROPS} />
      <text {...RES_TEXT_PROPS}>{RES}</text>
      <text {...COU_TEXT_PROPS}>{PEU || COU}</text>
      <circle {...COU_SEPARATOR_PROPS} />
      <text {...DIS_TEXT_PROPS}>{DIS}</text>
      <image {...DEF_ICON_PROPS} href={hrefs.defIcon} />
      <image {...COU_ICON_PROPS} href={hrefs.couIcon} />
      {TIR ? <image {...SPE_ICON_PROPS} href={hrefs.tirIcon} /> : null}
      {POU ? <image {...SPE_ICON_PROPS} href={hrefs.pouIcon} /> : null}
      {FOI ? <image {...SPE_ICON_PROPS} href={hrefs.foiIcon} /> : null}
      {TIR || POU || FOI ? <text {...SPE_TEXT_PROPS}>{TIR || POU || FOI}</text> : null}
      <CharacterCardText
        remoteWeapon={remoteWeapon}
        capacities={capacities}
        specialEffects={specialEffects}
        localStuff={localStuff}
      />
    </svg>
  );
};
