import { ContainerModule } from 'inversify';
import { gameTypes } from './GameTypes.ts';
import { AllGamesFirebaseRepository } from '../persistence/AllGamesFirebaseRepository.ts';
import { AllGamesRepository } from '../../domain/AllGamesRepository.ts';
import { CreateGame } from '../../app/CreateGame.ts';
import { FindGameById } from '../../app/FindGameById.ts';

export const gameContainer = new ContainerModule((bind) => {
  bind<AllGamesRepository>(gameTypes.allGamesRepository).to(
    AllGamesFirebaseRepository
  );

  bind<CreateGame>(gameTypes.createGame).to(
    CreateGame,
  );

  bind<FindGameById>(gameTypes.findGameById).to(
    FindGameById
  );
});
