import { ContainerModule } from 'inversify';
import { GameIssueRepository } from '../../domain/GameIssueRepository.ts';
import { gameIssueTypes } from './GameIssueTypes.ts';
import {
  GameIssueFirebaseRepository
} from '../persistence/GameIssueFirebaseRepository.ts';
import { CreateIssueGame } from '../../app/CreateIssueGame.ts';
import { GetIssuesByGameId } from '../../app/GetIssuesByGameId.ts';
import { AddTagToGameIssue } from '../../app/AddTagToGameIssue.ts';
import { RemoveTagToGameIssue } from '../../app/RemoveTagToGameIssue.ts';
import { DeleteGameIssue } from '../../app/DeleteGameIssue.ts';

export const gameIssueContainer = new ContainerModule((bind) => {
  bind<GameIssueRepository>(gameIssueTypes.gameIssueRepository).to(
    GameIssueFirebaseRepository
  );

  bind<CreateIssueGame>(gameIssueTypes.createIssueGame).to(
    CreateIssueGame
  );

  bind<GetIssuesByGameId>(gameIssueTypes.getIssuesByGameId).to(
    GetIssuesByGameId
  );

  bind<AddTagToGameIssue>(gameIssueTypes.addTagToGameIssue).to(
    AddTagToGameIssue
  );

  bind<RemoveTagToGameIssue>(gameIssueTypes.removeTagToGameIssue).to(
    RemoveTagToGameIssue,
  );

  bind<DeleteGameIssue>(gameIssueTypes.deleteGameIssue).to(
    DeleteGameIssue,
  );
});
