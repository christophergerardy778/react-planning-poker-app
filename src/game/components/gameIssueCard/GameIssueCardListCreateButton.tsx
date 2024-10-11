import { Btn } from '../../../main/components/Btn.tsx';
import { CreateGameIssue } from '../CreateGameIssue.tsx';
import { useGame } from '../../hooks/useGame.ts';

type Props = {
  visible: boolean;
}

export const GameIssueCardListCreateButton = (props: Props) => {
  const { toggleGameIssueForm } = useGame();

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
        'w-full border-blue-500 text-blue-500 flex items-center justify-center gap-x-1'
      }
    >
      <p className="material-symbols-outlined text-blue-500">add</p>
      ADD NEW ISSUE
    </Btn>
  );
}