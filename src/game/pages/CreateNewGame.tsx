import { CreateNewGameForm } from '../components/CreateNewGameForm.tsx';
import { useTranslation } from 'react-i18next';

export const CreateNewGame = () => {
  const { t } = useTranslation(['create_new_game'])

  return (
    <div className={'container mx-auto px-4 flex items-center min-h-[90vh]'}>
      <div className={'max-w-[500px] mx-auto flex flex-col gap-y-6'}>
        <div className={'flex flex-col gap-y-2'}>
          <h1 className={'text-center text-3xl leading-relaxed'}>
            { t('create_new_game') }
          </h1>

          <p className={'text-sm text-center text-gray-500'}>
            { t('form_description') }
          </p>
        </div>

        <CreateNewGameForm />
      </div>
    </div>
  );
}