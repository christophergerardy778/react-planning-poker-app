import './Game.css';
import { useGame } from '../../hooks/useGame.ts';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GameVotingCards } from '../../components/gameVotingCard/GameVotingCards.tsx';
import { GameIssueCardList } from '../../components/gameIssueCard/gameIssueCardList/GameIssueCardList.tsx';
import { GameIssueSelection } from '../../components/GameIssueSelection.tsx';

export const Game = () => {
  const params = useParams();
  const {
    gameSelector,
    findGameById,
    getGameIssuesByGameId,
    getAllIssueVotes
  } = useGame();

  useEffect(() => {
    if (!gameSelector.game) {
      findGameById(params.id!);
      getGameIssuesByGameId(params.id!);
    }
  }, [params.id]);

  useEffect(() => {
    if (gameSelector.game?.selectedIssueId) {
      getAllIssueVotes(gameSelector.game.selectedIssueId)
    }
  }, [gameSelector.game]);

  return (
    <div className={'container mx-auto px-4 game-height-wrapper'}>
      <div className={'grid grid-cols-12 gap-x-8 game-height-wrapper'}>
        <div className={'col-start-1 col-end-4'}>
          <h1 className={'text-2xl font-semibold'}>
            Participantes
          </h1>
        </div>

        <div className={'col-start-4 col-end-10'}>
          <div className={'flex flex-col h-full justify-between'}>
            <h1 className={'text-4xl font-semibold mb-7'}>
              {gameSelector.game?.name}
            </h1>

            <GameIssueSelection />

            <div
              className={'flex w-full h-full justify-center items-center'}
            ></div>

            <GameVotingCards
              visible={!!gameSelector.game?.selectedIssueId}
              voteSystem={gameSelector.game?.voting_system}
            />
          </div>
        </div>

        <div className={'col-start-10 col-end-13'}>
          <GameIssueCardList />
        </div>
      </div>
    </div>
  );
}