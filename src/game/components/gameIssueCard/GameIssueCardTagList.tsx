import { GameChip } from '../../pages/GameChip.tsx';
import { GameIssueCardAddTag } from './GameIssueCardAddTag.tsx';
import { useEffect, useState } from 'react';
import { GameIssue } from '../../../core/gameIssue/domain/GameIssue.ts';
import { useGame } from '../../hooks/useGame.ts';

type Props = {
  id: GameIssue['id'];
  tags: string[];
};

export const GameIssueCardTagList = (props: Props) => {
  const [isIssueOnVoting, setIsIssueOnVoating] = useState(false);
  const [showAddTagForm, setShowAddTagForm] = useState(false);
  const { gameSelector, removeTagToIssue } = useGame();

  const removeTag = (tagName: string) => {
    removeTagToIssue({
      tagName,
      issueId: props.id,
    })
  };

  useEffect(() => {
    const { game, gameIssues } = gameSelector;

    const gameIssueSelected = gameIssues.find(
      (gameIssue) => gameIssue.id === game!.selectedIssueId
    );

    setIsIssueOnVoating(gameIssueSelected !== undefined);
  }, [gameSelector.game, gameSelector.gameIssues]);

  return (
    <div className={'flex flex-col gap-2'}>
      <div className={'flex flex-wrap gap-2'}>
        {props.tags.map((tag, index) => (
          <GameChip
            clearable={!isIssueOnVoting}
            key={`${tag}_${index}`}
            onClear={() => removeTag(tag)}
          >
            {tag}
          </GameChip>
        ))}

        {!showAddTagForm && (
          <GameChip
            onClick={() => setShowAddTagForm(true)}
            className={'!border-gray-300 text-gray-700 cursor-pointer'}
          >
            <div className={'flex gap-x-1'}>
              <p className="material-symbols-outlined text-xs text-gray-700">
                add
              </p>
              Tag
            </div>
          </GameChip>
        )}
      </div>

      {showAddTagForm && <GameIssueCardAddTag
        id={props.id}
        onCancel={() => setShowAddTagForm(false)}
      />}
    </div>
  );
};
