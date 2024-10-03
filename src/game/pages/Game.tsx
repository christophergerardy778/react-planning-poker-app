import { useGame } from '../hooks/useGame.ts';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Btn } from '../../main/components/Btn.tsx';
import { GameVotingCards } from '../components/GameVotingCards.tsx';
import { GameIssueSelected } from '../components/GameIssueSelected.tsx';

export const Game = () => {
  const params = useParams();
  const { t } = useTranslation(['errors']);
  const { gameSelector, findGameById } = useGame();

  useEffect(() => {
    if (!gameSelector.game) {
      findGameById(params.id!)
    }
  }, [params.id]);

  return (
    <div className={'container mx-auto px-4 mt-2'}>
      <div className={'grid grid-cols-12 gap-x-8'}>
        <div className={'col-start-1 col-end-4'}>
          {gameSelector.gameError.visible && (
            <h1> {t(gameSelector.gameError.error)} </h1>
          )}
        </div>

        <div className={'col-start-4 col-end-10 min-h-[90vh]'}>
          <div className={'flex flex-col h-full justify-between'}>
            <h1 className={'text-4xl font-semibold mb-7'}>
              { gameSelector.game?.name }
            </h1>

            <GameIssueSelected
              issue={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ea nesciunt? Alias aperiam, architecto at aut consequatur delectus eos, facere inventore minus nesciunt quasi qui quia, repellat reprehenderit saepe soluta?'}
            />

            <div className={'flex w-full h-full justify-center items-center'}>
            </div>

            <GameVotingCards
              voteSystem={gameSelector.game?.voting_system}
            />
          </div>
        </div>

        <div className={'col-start-10 col-end-13'}>
          <Btn outline className={'w-full'}>
            ADD NEW ISSUE
          </Btn>
        </div>
      </div>
    </div>
  );
}