import {
  GameSystemVoteType,
  gameVoteTypes,
} from '../../../core/game/domain/GameVoteTypes.ts';
import { GameVotingCard } from './GameVotingCard.tsx';
import { GameVotingSystem } from '../../../core/game/domain/GameVotingSystem.ts';
import { useGame } from '../../hooks/useGame.ts';
import { useAuth } from '../../../auth/hooks/useAuth.ts';

type Props = {
  visible?: boolean
  voteSystem?: GameSystemVoteType | GameVotingSystem;
}

export const GameVotingCards = (props: Props) => {
  const { authSelector } = useAuth();
  const { gameSelector, voteForIssue } = useGame();
  const { voteSystem = GameSystemVoteType.FIBONACCI } = props;

  const voteIssue = (vote: string | number) => {
    voteForIssue({
      vote,
      userId: authSelector.user.id,
      issueId: gameSelector.game!.selectedIssueId!
    })
  }

  if (!props.visible) {
    return null;
  }

  return (
    <div className={'flex flex-col gap-y-6 pb-8'}>
      <h2 className={'text-center font-semibold text-gray-700'}>
        Chose your card
      </h2>

      <div className={'flex justify-between gap-x-4'}>
        {
          gameVoteTypes[voteSystem].map((vote, index) => (
            <GameVotingCard
              key={`${vote}_${index}`}
              onClick={() => voteIssue(vote)}
            >
              { vote }
            </GameVotingCard>
          ))
        }
      </div>
    </div>
  );
}