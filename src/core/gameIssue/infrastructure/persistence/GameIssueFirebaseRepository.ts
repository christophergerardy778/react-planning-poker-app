import { CreateGameIssue } from '../../domain/CreateGameIssue.ts';
import { GameIssueRepository } from '../../domain/GameIssueRepository.ts';
import { injectable } from 'inversify';
import { addDoc, getDocs, query, where } from 'firebase/firestore';
import { gameIssueCollection } from '../../../../firebase/firestore.ts';
import { GameIssue } from '../../domain/GameIssue.ts';

@injectable()
export class GameIssueFirebaseRepository implements GameIssueRepository {
  async create(issue: CreateGameIssue): Promise<GameIssue> {
    const gameIssueRef = await addDoc(gameIssueCollection, issue);

    return {
      ...issue,
      id: gameIssueRef.id,
    };
  }

  async findAllById(id: string): Promise<GameIssue[]> {
    const findAllByIdQuery = query(
      gameIssueCollection,
      where('gameId', '==', id),
    );

    const gameIssueDocs: GameIssue[] = [];

    const querySnapshot = await getDocs(
      findAllByIdQuery
    );

    querySnapshot.forEach((doc) => {
      gameIssueDocs.push({
        ...doc.data() as GameIssue,
        id: doc.id,
      });
    });

    return gameIssueDocs;
  }
}