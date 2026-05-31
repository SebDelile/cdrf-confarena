import { ALLIANCES, ALLIANCES_MAP, CARACS, JOIN_ELEMENT } from '@/constants';
import { EQUIPMENT_RESTRICTIONS, RestrictionType } from '@/constants/equipments';
import { formFieldsSequence } from '@/constants/formStructure';

export const formatCaracModifiers = (caracmodifiers: [CARACS, number][]) =>
  caracmodifiers
    .map(([carac, modifier]) => `${carac}${modifier > 0 ? '+' : '−'}${Math.abs(modifier)}`)
    .join(JOIN_ELEMENT);

export const formatCapacities = (capacities: string[]) => capacities.join(JOIN_ELEMENT);

// splice in reservedTo and forbiddento parts
// display the list of items or the categroy if no list
export const formatRestrictionExplanations = (restrictions: RestrictionType[]) =>
  restrictions
    .reduce(
      (acc, restriction) => {
        if (restriction[1]) acc[0].push(restriction);
        else acc[1].push(restriction);
        return acc;
      },
      [[], []] as [reservedto: RestrictionType[], forbiddentTo: RestrictionType[]],
    )
    .map((restrictionType, index) =>
      restrictionType.length
        ? `${index ? 'Interdit à: ' : 'Réservé à: '} ${restrictionType
            .map(
              (restriction) =>
                restriction[2]
                  ?.map((rest) =>
                    restriction[0] === EQUIPMENT_RESTRICTIONS.alliance ? ALLIANCES_MAP[rest as ALLIANCES] : rest,
                  )
                  .join(', ') ?? restriction[0],
            )
            .join(JOIN_ELEMENT)}`
        : '',
    )
    .join('\n');

export const binToAlphaNum = (bin: string): string => BigInt('0b' + bin).toString(36);

export const alphaNumToBin = (alphaNum: string): string =>
  Array.from(alphaNum)
    .reduce((acc, cur) => acc * BigInt(36) + BigInt(parseInt(cur, 36)), BigInt(0))
    .toString(2)
    .padStart(formFieldsSequence.length * 5, '0');
