import { GameChip } from '../../pages/GameChip.tsx';
import { GameIssueCardAddTag } from './GameIssueCardAddTag.tsx';
import { useState } from 'react';

type Props = {
  tags: string[];
};

export const GameIssueCardTagList = (props: Props) => {
  const [showAddTagForm, setShowAddTagForm] = useState(false);

  return (
    <div className={'flex flex-col gap-2'}>
      <div className={'flex flex-wrap gap-2'}>
        {props.tags.map((tag, index) => (
          <GameChip key={`${tag}_${index}`} clearable>
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
        onCancel={() => setShowAddTagForm(false)}
      />}
    </div>
  );
};
