import { CLASSES, CARACS } from '@/constants';
import { EQUIPMENT_RESTRICTIONS, RestrictionType } from '@/constants/equipments';
import { FactionType } from '@/constants/factions';
const { classe: classeRestriction, bigSize, scaryOne, alliance } = EQUIPMENT_RESTRICTIONS;
const { PEU } = CARACS;

export const getIsRestricted = (
  restrictions: RestrictionType[] | undefined,
  classeName: CLASSES | undefined,
  faction: FactionType | null,
): restrictions is RestrictionType[] => {
  return (
    restrictions?.some(([type, isAllowed, list]) => {
      switch (type) {
        case classeRestriction:
          return classeName && list?.includes(classeName) !== isAllowed;
        case scaryOne:
          return faction && faction.profileModifs[0].caracModifs.some(([carac]) => carac === PEU) !== isAllowed;
        case bigSize:
          return faction && faction.profileModifs[0].capacities.includes('Grande taille') !== isAllowed;
        case alliance:
          return faction && list?.includes(faction.alliance) !== isAllowed;
      }
    }) ?? false
  );
};
