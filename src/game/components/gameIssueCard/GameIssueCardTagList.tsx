import { GameChip } from '../../pages/GameChip.tsx';
import { GameIssueCardAddTag } from './GameIssueCardAddTag.tsx';
import { useState } from 'react';
import { GameIssue } from '../../../core/gameIssue/domain/GameIssue.ts';
import { useGame } from '../../hooks/useGame.ts';
import { useIssueOnVoting } from '../../hooks/useIssueOnVoting.ts';

type Props = {
  id: GameIssue['id'];
  tags: string[];
};

export const GameIssueCardTagList = (props: Props) => {
  const { removeTagToIssue } = useGame();
  const { isIssueOnVoting } = useIssueOnVoting(props.id);
  const [ showAddTagForm, setShowAddTagForm ] = useState(false);

  const removeTag = (tagName: string) => {
    removeTagToIssue({
      tagName,
      issueId: props.id,
    })
  };

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

        {!showAddTagForm && !isIssueOnVoting && (
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

      {showAddTagForm && (
        <GameIssueCardAddTag
          id={props.id}
          onCancel={() => setShowAddTagForm(false)}
        />
      )}
    </div>
  );
};
