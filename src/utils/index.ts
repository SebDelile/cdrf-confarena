import { CARACS, JOIN_ELEMENT } from '@/constants';
import { RestrictionType } from '@/constants/equipments';

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
