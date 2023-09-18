'use client';
import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { formDefault } from '@/constants';
import { CharacterForm } from './components/CharacterForm';
import { checkformIntegrity } from '@/utils/checkformIntegrity';
import { CharacterSheet } from './components/CharacterSheet';

export default function Home() {
  const methods = useForm({
    defaultValues: formDefault,
  });
  const { watch, setValue } = methods;
  const currentForm = watch();

  useEffect(() => {
    //console.log(currentForm);
    checkformIntegrity(currentForm, setValue);
  }, [currentForm, setValue]);

  return (
    <main className="grid grid-cols-2 h-full min-h-screen justify-items-stretch items-start gap-4 p-12">
      <FormProvider {...methods}>
        <CharacterForm />
        <CharacterSheet />
      </FormProvider>
    </main>
  );
}
