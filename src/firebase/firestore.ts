import { collection } from 'firebase/firestore';
import { firestore } from './firebase.ts';

export const userCollection = collection(firestore, 'users');