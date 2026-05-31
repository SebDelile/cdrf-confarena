import { goudyFont, caslonAntiqueFont } from '@/utils/fonts';

export const CARD_DIMENSIONS = { width: 375, height: 520, viewBox: '0 0 375 520' };
export const GLOBAL_MARGIN = 16;
export const ARMY_ICON_PROPS = { x: 8, y: GLOBAL_MARGIN, width: 59, height: 59 };
export const NAME_TEXT_PROPS = {
  x: CARD_DIMENSIONS.width - GLOBAL_MARGIN,
  y: GLOBAL_MARGIN,
  fontFamily: caslonAntiqueFont.style.fontFamily,
  fontSize: '25',
  fontWeight: '700',
  textAnchor: 'end',
  dominantBaseline: 'hanging',
  fill: 'white',
};
export const CLASS_TEXT_PROPS = {
  x: CARD_DIMENSIONS.width - GLOBAL_MARGIN,
  y: 44,
  fontFamily: goudyFont.style.fontFamily,
  fontSize: '22',
  fontStyle: 'italic',
  textAnchor: 'end',
  dominantBaseline: 'hanging',
};
export const ICON_CARAC_SIZE = 30;
export const ICON_X_MIDDLE = 37;
export const ICON_X_START = ICON_X_MIDDLE - ICON_CARAC_SIZE / 2;

export const ICON_DOT_SPACER = 5;
export const MOU_ICON_PROPS = { x: ICON_X_START, y: 79, width: ICON_CARAC_SIZE, height: ICON_CARAC_SIZE };
export const INI_ICON_PROPS = { x: ICON_X_START, y: 138, width: ICON_CARAC_SIZE, height: ICON_CARAC_SIZE };
export const ATT_ICON_PROPS = { x: ICON_X_START, y: 197, width: ICON_CARAC_SIZE, height: ICON_CARAC_SIZE };
export const DEF_ICON_PROPS = { x: ICON_X_START, y: 256, width: ICON_CARAC_SIZE, height: ICON_CARAC_SIZE };
export const COU_ICON_PROPS = { x: ICON_X_START, y: 316, width: ICON_CARAC_SIZE, height: ICON_CARAC_SIZE };
export const SPE_ICON_PROPS = {
  x: CARD_DIMENSIONS.width - ICON_X_START - ICON_CARAC_SIZE,
  y: 88,
  width: ICON_CARAC_SIZE,
  height: ICON_CARAC_SIZE,
};

const baseTextCaracProps = { textAnchor: 'middle', dominantBaseline: 'middle', fontSize: 25 };
export const MOU_TEXT_PROPS = { x: ICON_X_MIDDLE, y: 125, ...baseTextCaracProps };
export const INI_TEXT_PROPS = { x: ICON_X_MIDDLE, y: 182, ...baseTextCaracProps };
export const ATT_TEXT_PROPS = { x: ICON_X_MIDDLE - ICON_DOT_SPACER, y: 242, ...baseTextCaracProps, textAnchor: 'end' };
export const ATT_SEPARATOR_PROPS = { cx: ICON_X_MIDDLE, cy: 240, r: 2 };
export const FOR_TEXT_PROPS = {
  x: ICON_X_MIDDLE + ICON_DOT_SPACER,
  y: 242,
  ...baseTextCaracProps,
  textAnchor: 'start',
};
export const DEF_TEXT_PROPS = { x: ICON_X_MIDDLE - ICON_DOT_SPACER, y: 300, ...baseTextCaracProps, textAnchor: 'end' };
export const DEF_SEPARATOR_PROPS = { cx: ICON_X_MIDDLE, cy: 300, r: 2 };
export const RES_TEXT_PROPS = {
  x: ICON_X_MIDDLE + ICON_DOT_SPACER,
  y: 300,
  ...baseTextCaracProps,
  textAnchor: 'start',
};
export const COU_TEXT_PROPS = { x: ICON_X_MIDDLE - ICON_DOT_SPACER, y: 361, ...baseTextCaracProps, textAnchor: 'end' };
export const COU_SEPARATOR_PROPS = { cx: ICON_X_MIDDLE, cy: 361, r: 2 };
export const DIS_TEXT_PROPS = {
  x: ICON_X_MIDDLE + ICON_DOT_SPACER,
  y: 361,
  ...baseTextCaracProps,
  textAnchor: 'start',
};
export const SPE_TEXT_PROPS = { x: CARD_DIMENSIONS.width - ICON_X_MIDDLE, y: 131, ...baseTextCaracProps };

export const CARD_USABLE_WIDTH = CARD_DIMENSIONS.width - 2 * GLOBAL_MARGIN;
export const EQUIPMENTS_TEXT_PROPS = { x: GLOBAL_MARGIN, y: 390 };
export const EQUIPMENTS_FONT_PROPS = { fontFamily: goudyFont.style.fontFamily, fontSize: '18', fontStyle: 'italic' };
export const CAPACITIES_TEXT_PROPS = { x: GLOBAL_MARGIN, y: 390 };
export const CAPACITIES_FONT_PROPS = { fontFamily: goudyFont.style.fontFamily, fontSize: '20' };
export const SPECIAL_EFFECTS_TEXT_PROPS = {
  x: CARD_DIMENSIONS.width - GLOBAL_MARGIN,
  y: CARD_DIMENSIONS.height - GLOBAL_MARGIN,
  textAnchor: 'end',
  dominantBaseline: 'text-bottom',
};
export const SPECIAL_EFFECTS_FONT_PROPS = {
  fontFamily: goudyFont.style.fontFamily,
  fontSize: '20',
  fontWeight: 'bold',
  fontStyle: 'italic',
};
const REFERENCE_TEXT_X = CARD_DIMENSIONS.width - GLOBAL_MARGIN;
export const REFERENCE_TEXT_PROPS = {
  x: REFERENCE_TEXT_X,
  y: 350,
  fontFamily: 'arial',
  fontSize: '12',
  opacity: '0.75',
  transform: `rotate(-90,${REFERENCE_TEXT_X},${350})`,
  dominantBaseline: 'hanging',
  letterSpacing: 0.8,
};
