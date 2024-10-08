import { useGame } from '../hooks/useGame.ts';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Btn } from '../../main/components/Btn.tsx';
import { GameVotingCards } from '../components/GameVotingCards.tsx';
import { GameIssueSelected } from '../components/GameIssueSelected.tsx';
import { AppCard } from '../../main/components/AppCard.tsx';
import { GameChip } from './GameChip.tsx';

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
              {gameSelector.game?.name}
            </h1>

            <GameIssueSelected
              issue={
                'Error si cantidad minima definida es mayor a la cantidad de personas en traslado'
              }
            />

            <div
              className={'flex w-full h-full justify-center items-center'}
            ></div>

            <GameVotingCards
              voteSystem={gameSelector.game?.voting_system}
            />
          </div>
        </div>

        <div className={'col-start-10 col-end-13 flex flex-col gap-y-4'}>
          <div
            className={'flex flex-col gap-y-4 max-h-[750px] overflow-y-scroll'}
          >
            <AppCard>
              <div className={'flex flex-col gap-y-4'}>
                <div className={'flex justify-between items-center'}>
                  <GameChip>Pending</GameChip>

                  <span className="material-symbols-outlined text-sm cursor-pointer">
                    more_vert
                  </span>
                </div>

                <p className={'text-sm'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  facilis inventore mollitia nemo possimus saepe sint voluptas
                  voluptate.
                </p>

                <hr />

                <div className={'flex gap-x-2'}>
                  <GameChip>Bug</GameChip>

                  <GameChip>Feature</GameChip>

                  <GameChip
                    className={'!border-gray-300 text-gray-700 cursor-pointer'}
                  >
                    <div className={'flex gap-x-1'}>
                      <p className="material-symbols-outlined text-xs text-gray-700">
                        add
                      </p>
                      Tag
                    </div>
                  </GameChip>
                </div>

                <GameChip
                  className={
                    'flex justify-center items-center border-gray-800 cursor-pointer'
                  }
                >
                  <span className="material-symbols-outlined text-xs mr-1">
                    play_arrow
                  </span>
                  START VOTING
                </GameChip>
              </div>
            </AppCard>

            <AppCard>
              <div className={'flex flex-col gap-y-4'}>
                <div className={'flex justify-between items-center'}>
                  <GameChip>Pending</GameChip>

                  <span className="material-symbols-outlined text-sm cursor-pointer">
                    more_vert
                  </span>
                </div>

                <p className={'text-sm'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  facilis inventore mollitia nemo possimus saepe sint voluptas
                  voluptate.
                </p>

                <hr />

                <div className={'flex gap-x-2'}>
                  <GameChip>Bug</GameChip>

                  <GameChip>Feature</GameChip>

                  <GameChip
                    className={'!border-gray-300 text-gray-700 cursor-pointer'}
                  >
                    <div className={'flex gap-x-1'}>
                      <p className="material-symbols-outlined text-xs text-gray-700">
                        add
                      </p>
                      Tag
                    </div>
                  </GameChip>
                </div>

                <GameChip
                  className={
                    'flex justify-center items-center border-gray-800 cursor-pointer'
                  }
                >
                  <span className="material-symbols-outlined text-xs mr-1">
                    play_arrow
                  </span>
                  START VOTING
                </GameChip>
              </div>
            </AppCard>

            <AppCard>
              <div className={'flex flex-col gap-y-4'}>
                <div className={'flex justify-between items-center'}>
                  <GameChip>Pending</GameChip>

                  <span className="material-symbols-outlined text-sm cursor-pointer">
                    more_vert
                  </span>
                </div>

                <p className={'text-sm'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  facilis inventore mollitia nemo possimus saepe sint voluptas
                  voluptate.
                </p>

                <hr />

                <div className={'flex gap-x-2'}>
                  <GameChip>Bug</GameChip>

                  <GameChip>Feature</GameChip>

                  <GameChip
                    className={'!border-gray-300 text-gray-700 cursor-pointer'}
                  >
                    <div className={'flex gap-x-1'}>
                      <p className="material-symbols-outlined text-xs text-gray-700">
                        add
                      </p>
                      Tag
                    </div>
                  </GameChip>
                </div>

                <GameChip
                  className={
                    'flex justify-center items-center border-gray-800 cursor-pointer'
                  }
                >
                  <span className="material-symbols-outlined text-xs mr-1">
                    play_arrow
                  </span>
                  START VOTING
                </GameChip>
              </div>
            </AppCard>

            <AppCard>
              <div className={'flex flex-col gap-y-4'}>
                <div className={'flex justify-between items-center'}>
                  <GameChip>Pending</GameChip>

                  <span className="material-symbols-outlined text-sm cursor-pointer">
                    more_vert
                  </span>
                </div>

                <p className={'text-sm'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  facilis inventore mollitia nemo possimus saepe sint voluptas
                  voluptate.
                </p>

                <hr />

                <div className={'flex gap-x-2'}>
                  <GameChip>Bug</GameChip>

                  <GameChip>Feature</GameChip>

                  <GameChip
                    className={'!border-gray-300 text-gray-700 cursor-pointer'}
                  >
                    <div className={'flex gap-x-1'}>
                      <p className="material-symbols-outlined text-xs text-gray-700">
                        add
                      </p>
                      Tag
                    </div>
                  </GameChip>
                </div>

                <GameChip
                  className={
                    'flex justify-center items-center border-gray-800 cursor-pointer'
                  }
                >
                  <span className="material-symbols-outlined text-xs mr-1">
                    play_arrow
                  </span>
                  START VOTING
                </GameChip>
              </div>
            </AppCard>
          </div>

          <Btn outline className={'w-full border-blue-500 text-blue-500 flex items-center justify-center gap-x-1'}>
            <p className="material-symbols-outlined text-blue-500">
              add
            </p>

            ADD NEW ISSUE
          </Btn>
        </div>
      </div>
    </div>
  );
}