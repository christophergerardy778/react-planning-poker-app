import { useEffect, useState } from 'react';
import { useGame } from './useGame.ts';

export const useIssueOnVoting = (issueId: string) => {
  const { gameSelector } = useGame();
  const [isIssueOnVoting, setIsIssueOnVoting] = useState(false);

  useEffect(() => {
    const { game, gameIssues } = gameSelector;

    const gameIssueSelected = gameIssues.find(
      (gameIssue) => gameIssue.id === game!.selectedIssueId
    );

    setIsIssueOnVoting(gameIssueSelected !== undefined);
  }, [gameSelector.game, gameSelector.gameIssues]);

  return {
    isIssueOnVoting: isIssueOnVoting && issueId === gameSelector.game?.selectedIssueId,
    setIsIssueOnVoting,
  }
}