import { CreateGameIssue } from '../../domain/CreateGameIssue.ts';
import { GameIssueRepository } from '../../domain/GameIssueRepository.ts';
import { injectable } from 'inversify';
import {
  addDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { gameIssueCollection } from '../../../../firebase/firestore.ts';
import { GameIssue } from '../../domain/GameIssue.ts';
import { CreateGameIssueTag } from '../../domain/CreateGameIssueTag.ts';
import { firestore } from '../../../../firebase/firebase.ts';

@injectable()
export class GameIssueFirebaseRepository implements GameIssueRepository {
  private readonly COLLECTION_NAME = "gameIssues";

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
      where('gameId', '==', id)
    );

    const gameIssueDocs: GameIssue[] = [];

    const querySnapshot = await getDocs(findAllByIdQuery);

    querySnapshot.forEach((doc) => {
      gameIssueDocs.push({
        ...doc.data() as GameIssue,
        id: doc.id,
      });
    });

    return gameIssueDocs;
  }

  async addTag(issueTag: CreateGameIssueTag): Promise<GameIssue> {
    const docRef = doc(firestore, this.COLLECTION_NAME, issueTag.issueId);
    const docSnapshot = await getDoc(docRef);

    const docData = docSnapshot.data() as Omit<GameIssue, 'id'>;
    const tags = [...docData.tags, issueTag.tagName];

    const docsUpdateData = {
      ...docData,
      tags,
    }

    await updateDoc(docRef, docsUpdateData);

    return {
      id: docSnapshot.id,
      ...docsUpdateData,
    };
  }
}