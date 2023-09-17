'use client';
import { useForm } from 'react-hook-form';
import { formDefault } from '@/constants';
import { CharacterForm } from './components/CharacterForm';

export default function Home() {
  const { control, watch } = useForm({
    defaultValues: formDefault,
  });

  return (
    <main className="flex h-full min-h-screen flex-col items-center p-24">
      <CharacterForm control={control} watch={watch} />
    </main>
  );
}
