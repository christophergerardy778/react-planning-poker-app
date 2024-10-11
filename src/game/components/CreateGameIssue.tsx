import { TextArea } from '../../main/components/TextArea.tsx';
import { Btn } from '../../main/components/Btn.tsx';
import { useFormik } from 'formik';
import {
  createGameIssueValidationSchema
} from '../validation/CreateGameIssueValidationSchema.ts';
import { useGame } from '../hooks/useGame.ts';
import { useFormikError } from '../../main/hooks/useFormikError.ts';

export const CreateGameIssue = () => {
  const { gameSelector, createGameIssue, toggleGameIssueForm } = useGame();
  const { showErrorOnTouch } = useFormikError();

  const hideGameIssueForm = () => {
    toggleGameIssueForm(false);
  }

  const formik = useFormik({
    initialValues: {
      description: '',
    },

    validationSchema: createGameIssueValidationSchema,

    onSubmit: (values) => {
      createGameIssue({
        description: values.description,
        gameId: gameSelector.game!.id,
      });

      formik.resetForm();
      hideGameIssueForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextArea
        label={'Issue description'}
        name={'description'}
        value={formik.values.description}
        onChange={formik.handleChange}
        error={showErrorOnTouch(formik, 'description')}
      />

      <div className={'flex gap-x-2 mt-4'}>
        <Btn
          type={'submit'}
          className={'ripple-bg-blue-500 text-white w-full'}
        >
          Save
        </Btn>

        <Btn
          outline
          onClick={hideGameIssueForm}
          className={'border-blue-500 text-blue-500 w-full'}
        >
          Cancel
        </Btn>
      </div>
    </form>
  );
}