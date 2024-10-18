import { AllGamesRepository } from '../../domain/AllGamesRepository.ts';
import { Game } from '../../domain/Game.ts';
import { injectable } from 'inversify';
import { addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { gameCollection } from '../../../../firebase/firestore.ts';
import { CreateNewGame } from '../../domain/CreateNewGame.ts';
import { firestore } from '../../../../firebase/firebase.ts';
import { SelectIssueIdToGame } from '../../domain/SelectIssueIdToGame.ts';

@injectable()
export class AllGamesFirebaseRepository implements AllGamesRepository {
  private readonly COLLECTION_NAME = 'games';

  async create(game: CreateNewGame): Promise<Game> {
    const gameDocRef = await addDoc(gameCollection, game);

    return {
      id: gameDocRef.id,
      ...game,
    };
  }

  async findGameById(gameId: Game['id']): Promise<Game | null> {
    const gameDocReference = doc(firestore, this.COLLECTION_NAME, gameId);

    const docSnap = await getDoc(gameDocReference);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();

    return {
      id: docSnap.id,
      name: data.name,
      user_id: data.user_id,
      voting_system: data.voting_system,
      selectedIssueId: data.selectedIssueId,
    };
  }

  async selectIssueToVote(payload: SelectIssueIdToGame): Promise<void> {
    const gameDocReference = doc(firestore, this.COLLECTION_NAME, payload.gameId);
    const docSnap = await getDoc(gameDocReference);

    await updateDoc(gameDocReference, {
      ...docSnap.data(),
      selectedIssueId: payload.issueId,
    });
  }
}