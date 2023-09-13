'use client';
import { useState } from 'react';

import { FactionType, factions } from '@/constants/factions';
import { SelectMenu } from './components/SelectMenu';

export default function Home() {
  const [selectedFaction, setSelectedFaction] = useState<FactionType | null>(null);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <SelectMenu
        label="peuple"
        options={factions}
        selectedValue={selectedFaction}
        onChange={(newValue) => setSelectedFaction(newValue as FactionType)}
      />
    </main>
  );
}
