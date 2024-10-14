import { GameChip } from '../../pages/GameChip.tsx';
import { AppCard } from '../../../main/components/AppCard.tsx';
import { GameIssueState } from '../../../core/game/domain/GameIssueState.ts';
import { GameIssueCardTagList } from './GameIssueCardTagList.tsx';
import { GameIssue } from '../../../core/gameIssue/domain/GameIssue.ts';

type Props = {
  id: GameIssue['id'];
  description: string;
  state: GameIssueState;
  tags: string[];
};

export const GameIssueCard = (props: Props) => {
  return (
    <AppCard>
      <div className={'flex flex-col gap-y-4'}>
        <div className={'flex justify-between items-center'}>
          <GameChip>{props.state}</GameChip>

          <span className="material-symbols-outlined text-base cursor-pointer">
            more_vert
          </span>
        </div>

        <p className={'text-sm'}>
          {props.description}
        </p>

        <hr />

        <GameIssueCardTagList
          id={props.id}
          tags={props.tags}
        />

        <GameChip
          className={'flex justify-center items-center border-gray-800 cursor-pointer'}
        >
          <span className="material-symbols-outlined text-xs mr-1">
            play_arrow
          </span>
          START VOTING
        </GameChip>
      </div>
    </AppCard>
  );
}
