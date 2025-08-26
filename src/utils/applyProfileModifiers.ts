import { CARACS, CharacterProfileType } from '@/constants';

export const applyProfileModifiers = (
  profile: CharacterProfileType,
  cost: number,
  caracModifs: [CARACS, number][],
  capacities: string[],
  specialEffects?: string,
): void => {
  if (caracModifs.length) {
    caracModifs.forEach(([carac, modifier]) => {
      const currentCarac = profile.caracs[carac];
      if (currentCarac !== null) profile.caracs[carac] = currentCarac + modifier;
    });
  }
  if (capacities.length) AddCapacities(profile.capacities, capacities);
  if (specialEffects) profile.specialEffects.push(specialEffects);
  profile.cost += cost;
};

export const AddCapacities = (profileCapacities: string[], capacities: string[]) => {
  capacities.forEach((capacity) => {
    const cleanedCapacity = removeCapacityInfoText(capacity);
    const capacityRadix = cleanedCapacity.split('/')[0];
    const existingCapacity = profileCapacities.find((profileCapacity) => profileCapacity.startsWith(capacityRadix));
    if (cleanedCapacity === 'Grande taille') {
      const index = profileCapacities.indexOf('Petite taille');
      if (index === -1) profileCapacities.push(cleanedCapacity);
      else profileCapacities[index] = 'Grande Taille';
      return;
    }
    if (!existingCapacity) return profileCapacities.push(cleanedCapacity);
    const [previousValue, newValue] = [existingCapacity, cleanedCapacity].map((c) =>
      parseInt(c.replace(`${capacityRadix}/`, '')),
    );
    const index = profileCapacities.indexOf(existingCapacity);
    switch (capacityRadix) {
      // ADDING
      case 'Cible':
      case 'Invocateur': {
        profileCapacities[index] = `${capacityRadix}/${previousValue + newValue}`;
        break;
      }
      // KEEP_MIN
      case 'Désengagement':
      case 'Ephémère':
      case 'Insensible':
      case 'Instinct de survie':
      case 'Régénération':
      case 'Soin':
        profileCapacities[index] = `${capacityRadix}/${Math.min(previousValue, newValue)}`;
        break;
      // KEEP_MAX
      case 'Artificier':
      case 'Concentration':
      case 'Coup de maître':
      case 'Cri de guerre':
      case 'Dévotion':
      case 'Enchainement':
      case 'Enorme':
      case 'Hypérien':
      case 'Implacable':
      case 'Infiltration':
      case 'Martyr':
      case 'Mutagène':
      case 'Piété':
      case 'Rechargement rapide':
      case 'Récupération':
      case 'Résolution':
      case 'Tir supplémentaire':
      case 'Toxique':
      case 'Volte':
        profileCapacities[index] = `${capacityRadix}/${Math.max(previousValue, newValue)}`;
        break;
      // DONT_MERGE
      case 'Arme sacrée':
      case 'Immunité':
        profileCapacities.push(cleanedCapacity);
        break;
      // MERGE
      default:
    }
  });
};

const removeCapacityInfoText = (capacity: string) => {
  switch (capacity.split('/')[0]) {
    case 'Concentration':
      return capacity.split(' (')[0]; // remove the associated carac
    case 'Vol':
      return capacity.split('/')[0]; // remove the MOU value (it's set on the card)
    default:
      return capacity;
  }
};
