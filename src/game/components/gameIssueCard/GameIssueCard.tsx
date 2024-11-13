import { GameChip } from '../../pages/GameChip.tsx';
import { AppCard } from '../../../main/components/AppCard.tsx';
import { GameIssueState } from '../../../core/game/domain/GameIssueState.ts';
import { GameIssueCardTagList } from './GameIssueCardTagList.tsx';
import { GameIssue } from '../../../core/gameIssue/domain/GameIssue.ts';
import { useGame } from '../../hooks/useGame.ts';
import { useTranslation } from 'react-i18next';
import { useIssueOnVoting } from '../../hooks/useIssueOnVoting.ts';

type Props = {
  id: GameIssue['id'];
  description: string;
  state: GameIssueState;
  tags: string[];
};

export const GameIssueCard = (props: Props) => {
  const { t } = useTranslation(["game"]);
  const { isIssueOnVoting } = useIssueOnVoting(props.id);
  const {
    isGameOwner,
    gameSelector,
    deleteGameIssue,
    selectIssueToVoteInGame,
  } = useGame();

  const selectIssueToVote = () => {
    selectIssueToVoteInGame({
      issueId: props.id,
      gameId: gameSelector.game!.id,
    });
  }

  return (
    <AppCard>
      <div className={'flex flex-col gap-y-4'}>
        <div className={'flex justify-between items-center'}>
          <GameChip>{t(props.state)}</GameChip>

          {!isIssueOnVoting && isGameOwner && (
            <button
              onClick={() => deleteGameIssue(props.id)}
              className="material-symbols-outlined text-red-500 cursor-pointer"
            >
              delete
            </button>
          )}
        </div>

        <p className={'text-sm'}>{props.description}</p>

        <hr />

        <GameIssueCardTagList id={props.id} tags={props.tags} />

        {!isIssueOnVoting && isGameOwner && (
          <GameChip
            onClick={selectIssueToVote}
            className={
              'flex justify-center items-center border-gray-800 cursor-pointer uppercase'
            }
          >
            <span className="material-symbols-outlined text-xs mr-1">
              play_arrow
            </span>
            {t('start_voting')}
          </GameChip>
        )}
      </div>
    </AppCard>
  );
}
