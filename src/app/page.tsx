'use client';
import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { CharacterForm } from './components/CharacterForm';
import { checkformIntegrity } from '@/utils/checkformIntegrity';
import { CharacterSheet } from './components/CharacterSheet';
import { setQueryParamFromForm, getFormFromQueryParam } from '@/utils/formQueryParamConverter';
import { useSearchParams } from 'next/navigation';

const SEARCH_PARAM_KEY = 'profile';
const version = process.env.NEXT_PUBLIC_APP_VERSION;

export default function Home() {
  const searchParams = useSearchParams();
  const methods = useForm({
    defaultValues: getFormFromQueryParam(searchParams.get(SEARCH_PARAM_KEY), searchParams.get('v')),
  });
  const { watch, setValue } = methods;
  const currentForm = watch();

  useEffect(() => {
    // console.log(currentForm);
    // next's app router doesn't allow shallow update for now, see https://github.com/vercel/next.js/discussions/48110
    history.replaceState(null, '', `/?v=${version}&${SEARCH_PARAM_KEY}=${setQueryParamFromForm(currentForm)}`);
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
