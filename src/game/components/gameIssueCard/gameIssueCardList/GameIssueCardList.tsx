import './GameIssueCardList.css';
import { GameIssueCard } from '../GameIssueCard.tsx';
import { useGame } from '../../../hooks/useGame.ts';
import {
  GameIssueCardListCreateButton
} from '../GameIssueCardListCreateButton.tsx';

export const GameIssueCardList = () => {
  const { gameSelector } = useGame();

  return (
    <div className={'flex flex-col game-issue-card-list-wrapper'}>
      <div className={'flex flex-col gap-y-4 overflow-y-auto '}>
        {gameSelector.gameIssues.map((gameIssue) => (
          <GameIssueCard
            key={gameIssue.id}
            description={gameIssue.description}
            state={gameIssue.state}
            tags={gameIssue.tags}
          />
        ))}
      </div>

      <div className={'mb-8 mt-5'}>
        <GameIssueCardListCreateButton
          visible={gameSelector.isCreatingGameIssueVisible}
        />
      </div>
    </div>
  );
}