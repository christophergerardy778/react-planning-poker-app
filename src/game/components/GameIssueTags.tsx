import { GameIssueTag } from './GameIssueTag.tsx';

type Props = {
  tags: string[];
}

export const GameIssueTags = (props: Props) => {
  return (
    <div className={'w-full flex gap-x-2 flex-wrap'}>
      {
        props.tags.map(tag => (
          <GameIssueTag text={ tag } />
        ))
      }
    </div>
  )
}