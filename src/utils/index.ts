import { CARACS, CharacterProfileType, JOIN_ELEMENT } from '@/constants';
import { RestrictionType } from '@/constants/equipments';
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
            .map((restriction) => restriction[2]?.join(', ') ?? restriction[0])
            .join(JOIN_ELEMENT)}`
        : '',
    )
    .join('\n');

export const applyProfileModifiers = (
  profile: CharacterProfileType,
  cost: number,
  caracModifs: [CARACS, number][],
  capacities: string[],
  specialEffect?: string,
): void => {
  if (caracModifs.length) {
    caracModifs.forEach(([carac, modifier]) => {
      const currentCarac = profile.caracs[carac];
      if (currentCarac !== null) profile.caracs[carac] = currentCarac + modifier;
    });
  }
  if (capacities.length) profile.capacities.push(...capacities);
  if (specialEffect) profile.specialEffects.push(specialEffect);
  profile.cost += cost;
};

export const binToAlphaNum = (bin: string): string => BigInt('0b' + bin).toString(36);

export const alphaNumToBin = (alphaNum: string): string =>
  Array.from(alphaNum)
    .reduce((acc, cur) => acc * BigInt(36) + BigInt(parseInt(cur, 36)), BigInt(0))
    .toString(2)
    .padStart(formFieldsSequence.length * 5, '0');
