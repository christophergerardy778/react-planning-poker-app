import {
  GameSystemVoteType,
  gameVoteTypes,
} from '../../core/game/domain/GameVoteTypes.ts';
import { GameVotingCard } from './GameVotingCard.tsx';
import { GameVotingSystem } from '../../core/game/domain/GameVotingSystem.ts';

type Props = {
  voteSystem?: GameSystemVoteType | GameVotingSystem;
}

export const GameVotingCards = (props: Props) => {
  const { voteSystem = GameSystemVoteType.FIBONACCI } = props;

  return (
    <div className={'flex flex-col gap-y-6 pb-8'}>
      <h2 className={'text-center font-semibold text-gray-700'}>
        Chose your card
      </h2>

      <div className={'flex justify-between gap-x-4'}>
        {
          gameVoteTypes[voteSystem].map((vote) => (
            <GameVotingCard>
              { vote }
            </GameVotingCard>
          ))
        }
      </div>
    </div>
  );
}