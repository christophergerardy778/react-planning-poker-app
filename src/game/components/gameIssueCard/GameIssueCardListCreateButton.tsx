import { Btn } from '../../../main/components/Btn.tsx';
import { CreateGameIssue } from '../CreateGameIssue.tsx';
import { useGame } from '../../hooks/useGame.ts';
import { useTranslation } from 'react-i18next';

type Props = {
  visible: boolean;
}

export const GameIssueCardListCreateButton = (props: Props) => {
  const { toggleGameIssueForm } = useGame();
  const { t } = useTranslation(["game"]);

  const showGameIssueForm = () => {
    toggleGameIssueForm(true);
  }

  if (props.visible) {
    return (<CreateGameIssue />);
  }

  return (
    <Btn
      outline
      onClick={showGameIssueForm}
      className={
        'w-full border-blue-500 text-blue-500 flex items-center justify-center gap-x-1 uppercase'
      }
    >
      <p className="material-symbols-outlined text-blue-500">add</p>
      { t('add_new_issue') }
    </Btn>
  );
}