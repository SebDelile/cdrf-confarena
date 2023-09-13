import { CARACS, JOIN_ELEMENT } from '@/constants';

export const formatCaracModifiers = (caracmodifiers: [CARACS, number][]) =>
  caracmodifiers
    .map(([carac, modifier]) => `${carac}${modifier > 0 ? '+' : '−'}${Math.abs(modifier)}`)
    .join(JOIN_ELEMENT);

export const formatCapacities = (capacities: string[]) => capacities.join(JOIN_ELEMENT);
