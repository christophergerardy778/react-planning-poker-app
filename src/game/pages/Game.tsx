import { useGame } from '../hooks/useGame.ts';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
    <div className={'container mx-auto px-4'}>
      { gameSelector.loading && <h1>Loading</h1> }

      { gameSelector.gameError.visible && <h1> { t(gameSelector.gameError.error) } </h1> }

      <h1>
        { gameSelector.game?.name }
      </h1>

      <h3>
        { gameSelector.game?.voting_system }
      </h3>
    </div>
  )
}