import { collection } from 'firebase/firestore';
import { firestore } from './firebase.ts';

export const userCollection = collection(firestore, 'users');
export const gameCollection = collection(firestore, 'games');
export const gameIssueCollection = collection(firestore, 'gameIssues');
export const gameVotesCollection = collection(firestore, 'gameVotes');