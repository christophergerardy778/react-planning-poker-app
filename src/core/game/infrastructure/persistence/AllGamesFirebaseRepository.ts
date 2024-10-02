import { AllGamesRepository } from '../../domain/AllGamesRepository.ts';
import { Game } from '../../domain/Game.ts';
import { injectable } from 'inversify';
import { addDoc } from 'firebase/firestore';
import { gameCollection } from '../../../../firebase/firestore.ts';
import { CreateNewGame } from '../../domain/CreateNewGame.ts';

@injectable()
export class AllGamesFirebaseRepository implements AllGamesRepository {
  async create(game: CreateNewGame): Promise<Game> {
    const gameDocRef = await addDoc(
      gameCollection,
      game,
    );

    return {
      id: gameDocRef.id,
      ...game,
    };
  }
}