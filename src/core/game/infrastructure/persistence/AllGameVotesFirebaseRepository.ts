import { AllGameVotesRepository } from '../../domain/AllGameVotesRepository.ts';
import { CreateGameVote } from '../../domain/CreateGameVote.ts';
import { GameVote } from '../../domain/GameVote.ts';
import {
  addDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { gameVotesCollection } from '../../../../firebase/firestore.ts';
import { FindGameVoteByGameAndId } from '../../domain/FindGameVoteByGameAndId.ts';
import { injectable } from 'inversify';

@injectable()
export class AllGameVotesFirebaseRepository implements AllGameVotesRepository {
  async create(payload: CreateGameVote): Promise<GameVote> {
    const docReference = await addDoc(gameVotesCollection, payload);

    return {
      ...payload,
      id: docReference.id,
      vote: payload.vote.toString(),
    };
  }

  async findByUserAndVoteId(
    payload: FindGameVoteByGameAndId
  ): Promise<GameVote | null> {
    const findQuery = query(
      gameVotesCollection,
      where('issueId', '==', payload.issueId),
      where('userId', '==', payload.userId),
      limit(1)
    );

    const querySnapshot = await getDocs(findQuery);

    if (querySnapshot.size === 0) {
      return null;
    }

    let gameVote: GameVote = {
      id: '',
      vote: '',
      issueId: '',
      userId: '',
    };

    querySnapshot.forEach((voteDoc) => {
      gameVote = { id: voteDoc.id, ...(voteDoc.data() as any) };
    });

    return gameVote;
  }

  async updateVote(payload: CreateGameVote): Promise<GameVote> {
    const findQuery = query(
      gameVotesCollection,
      where('issueId', '==', payload.issueId),
      where('userId', '==', payload.userId),
      limit(1)
    );

    const querySnapshot = await getDocs(findQuery);

    const firstDoc = querySnapshot.docs[0];
    const docReference = firstDoc.ref;
    const docData = firstDoc.data();

    await updateDoc(docReference, {
      ...docData,
      vote: payload.vote.toString(),
    });

    return {
      ...docData as any,
      id: docReference.id,
      vote: payload.vote.toString(),
    }
  }
}
