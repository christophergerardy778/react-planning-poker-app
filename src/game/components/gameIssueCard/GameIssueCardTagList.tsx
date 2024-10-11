import { GameChip } from '../../pages/GameChip.tsx';

type Props = {
  tags: string[];
}

export const GameIssueCardTagList = (props: Props) => {
  return (
    <div className={'flex gap-x-2'}>
      {props.tags.map((tag, index) => (
        <GameChip key={`${tag}_${index}`}>
          { tag }
        </GameChip>
      ))}

      <GameChip className={'!border-gray-300 text-gray-700 cursor-pointer'}>
        <div className={'flex gap-x-1'}>
          <p className="material-symbols-outlined text-xs text-gray-700">
            add
          </p>
          Tag
        </div>
      </GameChip>
    </div>
  )
}