'use client';
import { useState } from 'react';

import { accessories } from '@/constants/equipments/accessories';
import { EquipmentType } from '@/constants/equipments';
import { SelectMenu } from './components/SelectMenu';
import { FactionType, LocalStuffType, factions } from '@/constants/factions';
import { ProfileType, profiles } from '@/constants/profiles';

export default function Home() {
  const [selectedAccessory, setSelectedAccessory] = useState<EquipmentType | null>(null);
  const [selectedFaction, setSelectedFaction] = useState<FactionType | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<ProfileType | null>(null);
  const [selectedLocalStuff, setSelectedLocalStuff] = useState<LocalStuffType[]>([]);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <SelectMenu
        label="Accessoire"
        options={accessories}
        selectedValue={selectedAccessory}
        onChange={(newValue) => setSelectedAccessory(newValue as EquipmentType)}
        fullDisplayInButton
      />
      <SelectMenu
        label="Faction"
        options={factions}
        selectedValue={selectedFaction}
        onChange={(newValue) => setSelectedFaction(newValue as FactionType)}
      />
      <SelectMenu
        label="Classe"
        options={profiles}
        selectedValue={selectedProfile}
        onChange={(newValue) => setSelectedProfile(newValue as ProfileType)}
      />
      <SelectMenu
        label="Options de faction"
        options={selectedFaction?.localStuff ?? []}
        selectedValue={selectedLocalStuff}
        onChange={(newValue) => setSelectedLocalStuff(newValue as LocalStuffType[])}
        multiple
      />
    </main>
  );
}
