import { GameIssueTags } from './gameIssueTag/GameIssueTags.tsx';
import { useGame } from '../hooks/useGame.ts';
import { useEffect, useState } from 'react';
import { GameIssue } from '../../core/gameIssue/domain/GameIssue.ts';

const initialState: GameIssue = {
  id: '',
  state: 'pending',
  tags: [],
  gameId: '',
  description: '',
};

export const GameIssueSelected = () => {
  const { gameSelector } = useGame();

  const [gameIssue, selectGameIssue] = useState<GameIssue>(initialState);

  useEffect(() => {
    const { game, gameIssues } = gameSelector;

    const gameIssueSelected = gameIssues.find(
      (gameIssue) => gameIssue.id === game!.selectedIssueId
    );

    if (!gameIssueSelected) {
      selectGameIssue(initialState);
    } else {
      selectGameIssue(gameIssueSelected);
    }
  }, [gameSelector.game, gameSelector.gameIssues])

  return (
    <div
      className={
        'border border-gray-300 rounded-lg p-4 w-full flex flex-col gap-y-3'
      }
    >
      <h3 className={'text-blue-500 font-bold'}>Voting</h3>

      <span className={'text-sm'}>
        { gameIssue.description }
      </span>

      {gameIssue.tags.length !== 0 && <hr />}

      <GameIssueTags tags={gameIssue.tags} />
    </div>
  );
};
