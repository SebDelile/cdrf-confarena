'use client';
import { useEffect, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { CharacterForm } from './components/CharacterForm';
import { checkformIntegrity } from '@/utils/checkformIntegrity';
import { CharacterSheet } from './components/CharacterSheet';
import { setQueryParamFromForm, getFormFromQueryParam } from '@/utils/formQueryParamConverter';
import { useSearchParams } from 'next/navigation';
import { formDefault } from '@/constants/formStructure';

const version = process.env.NEXT_PUBLIC_APP_VERSION ?? '0.0';

export default function Home() {
  const searchParams = useSearchParams();
  const queryProfile = searchParams.get('p') ?? '';
  const queryVersion = searchParams.get('v') ?? '';
  const initialProfile = useMemo(() => getFormFromQueryParam(queryProfile), [queryProfile]);
  const methods = useForm({
    defaultValues: initialProfile,
  });
  const { watch, setValue, reset } = methods;

  useEffect(() => {
    // last digit of version is ignored on purpose, to allow patching without invalidating all saved links
    const [curMajor, curMinor] = version?.split('.');
    const [queryMajor, queryMinor] = queryVersion?.split('.');
    if (!queryVersion.match(/\d+\.\d+\.\d+/) || curMajor !== queryMajor || curMinor !== queryMinor) {
      reset(formDefault);
    }
  }, [queryVersion, reset]);

  const currentForm = watch();
  useEffect(() => {
    // console.log(currentForm);
    // next's app router doesn't allow shallow update for now, see https://github.com/vercel/next.js/discussions/48110
    history.replaceState(null, '', `/?v=${version}&p=${setQueryParamFromForm(currentForm)}`);
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
