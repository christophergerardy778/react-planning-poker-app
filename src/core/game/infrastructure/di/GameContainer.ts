import { ContainerModule } from 'inversify';
import { gameTypes } from './GameTypes.ts';
import { AllGamesFirebaseRepository } from '../persistence/AllGamesFirebaseRepository.ts';
import { AllGamesRepository } from '../../domain/AllGamesRepository.ts';
import { CreateGame } from '../../app/create/CreateGame.ts';
import { FindGameById } from '../../app/find/FindGameById.ts';
import { UpdateGameIssueToVote } from '../../app/update/UpdateGameIssueToVote.ts';
import {
  AllGameVotesFirebaseRepository
} from '../persistence/AllGameVotesFirebaseRepository.ts';
import { AllGameVotesRepository } from '../../domain/AllGameVotesRepository.ts';
import { CreateVote } from '../../app/create/CreateVote.ts';
import { FindGameVote } from '../../app/find/FindGameVote.ts';
import { UpsetGameVote } from '../../app/update/UpsetGameVote.ts';
import { UpdateGameVote } from '../../app/update/UpdateGameVote.ts';

export const gameContainer = new ContainerModule((bind) => {
  bind<AllGamesRepository>(gameTypes.allGamesRepository).to(
    AllGamesFirebaseRepository
  );

  bind<CreateGame>(gameTypes.createGame).to(
    CreateGame,
  );

  bind<CreateVote>(gameTypes.createVote).to(
    CreateVote,
  );

  bind<UpsetGameVote>(gameTypes.upsetGameVote).to(
    UpsetGameVote,
  );

  bind<UpdateGameVote>(gameTypes.updateGameVote).to(
    UpdateGameVote
  );

  bind<AllGameVotesRepository>(gameTypes.allGameVotesRepository).to(
    AllGameVotesFirebaseRepository
  );

  bind<FindGameById>(gameTypes.findGameById).to(
    FindGameById
  );

  bind<FindGameVote>(gameTypes.findGameVote).to(
    FindGameVote,
  );

  bind<UpdateGameIssueToVote>(gameTypes.updateGameIssueToVote).to(
    UpdateGameIssueToVote
  );
});
