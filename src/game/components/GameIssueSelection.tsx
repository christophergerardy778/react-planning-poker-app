import { useGame } from '../hooks/useGame.ts';
import { GameIssueNotSelected } from './GameIssueNotSelected.tsx';
import { GameIssueSelected } from './GameIssueSelected.tsx';

export const GameIssueSelection = () => {
  const { gameSelector } = useGame();

  if (!gameSelector.game?.selectedIssueId) {
    return <GameIssueNotSelected />;
  }

  return <GameIssueSelected />;
}