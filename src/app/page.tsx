'use client';
import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { formDefault } from '@/constants';
import { CharacterForm } from './components/CharacterForm';
import { checkformIntegrity } from '@/utils/checkformIntegrity';

export default function Home() {
  const methods = useForm({
    defaultValues: formDefault,
  });
  const { watch, setValue } = methods;
  const currentForm = watch();

  useEffect(() => {
    console.log(currentForm);
    checkformIntegrity(currentForm, setValue);
  }, [currentForm, setValue]);

  return (
    <main className="flex h-full min-h-screen flex-col items-center p-24">
      <FormProvider {...methods}>
        <CharacterForm />
      </FormProvider>
    </main>
  );
}
