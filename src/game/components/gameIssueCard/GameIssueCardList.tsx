import './GameIssueCardList.css';
import { GameIssueCard } from './GameIssueCard.tsx';
import { Btn } from '../../../main/components/Btn.tsx';
import { CreateGameIssue } from '../CreateGameIssue.tsx';

export const GameIssueCardList = () => {
  return (
    <div className={'flex flex-col game-issue-card-list-wrapper'}>
      <div className={'flex flex-col gap-y-4 overflow-y-auto '}>
        {
          [1,2,3,4,5].map((item) => (
            <GameIssueCard
              key={item}
              description={'Description short'}
              state={'pending'}
              tags={[]}
            />
          ))
        }
      </div>

      <div className={'mb-8 mt-5'}>
        <CreateGameIssue />

        { false && <Btn
          outline
          className={
            'w-full border-blue-500 text-blue-500 flex items-center justify-center gap-x-1'
          }
        >
          <p className="material-symbols-outlined text-blue-500">add</p>
          ADD NEW ISSUE
        </Btn> }
      </div>
    </div>
  );
}