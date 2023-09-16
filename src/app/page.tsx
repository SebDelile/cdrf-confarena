'use client';
import { useState } from 'react';

import { accessories } from '@/constants/equipments/accessories';
import { EquipmentType } from '@/constants/equipments';
import { SelectMenu } from './components/SelectMenu';
import { FactionType, factions } from '@/constants/factions';

export default function Home() {
  const [selectedAccessory, setSelectedAccessory] = useState<EquipmentType | null>(null);
  const [selectedFaction, setSelectedFaction] = useState<FactionType | null>(null);
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
    </main>
  );
}
