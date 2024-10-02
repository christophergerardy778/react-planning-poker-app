import { TextField } from '../../main/components/TextField.tsx';
import { InputRadio } from '../../main/components/InputRadio.tsx';
import { Btn } from '../../main/components/Btn.tsx';
import { useFormik } from 'formik';
import {
  createNewGameValidationSchema
} from '../validation/CreateNewGameValidationSchema.ts';
import { useTranslation } from 'react-i18next';
import { useFormikError } from '../../main/hooks/useFormikError.ts';
import { CreateGamePayload, useGame } from '../hooks/useGame.ts';

export const CreateNewGameForm = () => {
  const { t } = useTranslation(['create_new_game']);
  const { showErrorOnTouch } = useFormikError();
  const { createGame, gameSelector } = useGame();

  const formik = useFormik<CreateGamePayload>({
    validationSchema: createNewGameValidationSchema,

    initialValues: {
      name: '',
      voting_system: 'fibonacci',
    },

    onSubmit(values) {
      createGame(values);
    },
  });

  const { values, handleChange, setFieldValue, handleSubmit } = formik;

  const setVotingSystem = (value: string) => {
    setFieldValue('voting_system', value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={'flex flex-col gap-y-6'}
    >
      <TextField
        name={'name'}
        label={t('game_name')}
        value={values.name}
        onChange={handleChange}
        error={showErrorOnTouch(formik, 'name')}
        disabled={gameSelector.loading}
      />

      <InputRadio
        label={'Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89)'}
        value={'fibonacci'}
        checked={values.voting_system === 'fibonacci'}
        onChange={handleChange}
        name={'voting_system'}
        onClick={() => setVotingSystem('fibonacci')}
        disabled={gameSelector.loading}
      />

      <InputRadio
        label={'Short Fibonacci (0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100)'}
        value={'short_fibonacci'}
        checked={values.voting_system === 'short_fibonacci'}
        onChange={handleChange}
        name={'voting_system'}
        onClick={() => setVotingSystem('short_fibonacci')}
        disabled={gameSelector.loading}
      />

      <InputRadio
        label={'T-Shirt (XXS, XS, S, M, L, XL, XXL)'}
        value={'t_shirt'}
        checked={values.voting_system === 't_shirt'}
        onChange={handleChange}
        name={'voting_system'}
        onClick={() => setVotingSystem('t_shirt')}
        disabled={gameSelector.loading}
      />

      <InputRadio
        label={'T-Shirt & Numbers (S, M, L, XL, 1, 2, 3, 4, 5)'}
        value={'t_shirt_numbers'}
        checked={values.voting_system === 't_shirt_numbers'}
        onChange={handleChange}
        name={'voting_system'}
        onClick={() => setVotingSystem('t_shirt_numbers')}
        disabled={gameSelector.loading}
      />

      <Btn
        type={'submit'}
        className={'ripple-bg-blue-500 text-white w-full'}
        disabled={gameSelector.loading}
      >
        { t('create_game') }
      </Btn>
    </form>
  )
}