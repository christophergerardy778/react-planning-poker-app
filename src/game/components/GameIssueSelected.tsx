import { GameIssueTags } from './GameIssueTags.tsx';

type Props = {
  issue: string;
}

export const GameIssueSelected = (props: Props) => {
  const tags = ['Frontend', 'Backend', 'Feature'];

  return (
    <div
      className={
        'border border-gray-300 rounded-lg p-4 w-full flex flex-col gap-y-3'
      }
    >
      <h3 className={'text-blue-500 font-bold'}>
        Voting
      </h3>

      <span className={'text-sm'}>
        { props.issue }
      </span>

      <GameIssueTags
        tags={ tags }
      />
    </div>
  );
};
