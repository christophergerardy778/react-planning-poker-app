import { TextField } from '../../main/components/TextField.tsx';
import { InputRadio } from '../../main/components/InputRadio.tsx';
import { Btn } from '../../main/components/Btn.tsx';
import { useFormik } from 'formik';
import {
  createNewGameValidationSchema
} from '../validation/CreateNewGameValidationSchema.ts';
import { useTranslation } from 'react-i18next';
import { useFormikError } from '../../main/hooks/useFormikError.ts';

export const CreateNewGameForm = () => {
  const { t } = useTranslation(['create_new_game']);
  const { showErrorOnTouch } = useFormikError();

  const formik = useFormik({
    validationSchema: createNewGameValidationSchema,

    initialValues: {
      game_name: '',
      voting_system: 'fibonacci',
    },

    onSubmit(values) {
      console.log(values);
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
        name={'game_name'}
        label={t('game_name')}
        value={values.game_name}
        onChange={handleChange}
        error={showErrorOnTouch(formik, 'game_name')}
      />

      <InputRadio
        label={'Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89)'}
        value={'fibonacci'}
        checked={values.voting_system === 'fibonacci'}
        onChange={handleChange}
        name={'voting_system'}
        onClick={() => setVotingSystem('fibonacci')}
      />

      <InputRadio
        label={'Short Fibonacci (0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100)'}
        value={'short_fibonacci'}
        checked={values.voting_system === 'short_fibonacci'}
        onChange={handleChange}
        name={'voting_system'}
        onClick={() => setVotingSystem('short_fibonacci')}
      />

      <InputRadio
        label={'T-Shirt (XXS, XS, S, M, L, XL, XXL)'}
        value={'t_shirt'}
        checked={values.voting_system === 't_shirt'}
        onChange={handleChange}
        name={'voting_system'}
        onClick={() => setVotingSystem('t_shirt')}
      />

      <InputRadio
        label={'T-Shirt & Numbers (S, M, L, XL, 1, 2, 3, 4, 5)'}
        value={'t_shirt_numbers'}
        checked={values.voting_system === 't_shirt_numbers'}
        onChange={handleChange}
        name={'voting_system'}
        onClick={() => setVotingSystem('t_shirt_numbers')}
      />

      <Btn
        type={'submit'}
        className={'ripple-bg-blue-500 text-white w-full'}
      >
        { t('create_game') }
      </Btn>
    </form>
  )
}