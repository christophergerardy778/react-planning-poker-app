import { AllUsersRepository } from '../../domain/AllUsersRepository.ts';
import { User } from '../../domain/User.ts';
import { UserWithEmail } from '../../domain/UserWithEmail.ts';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../../../firebase/firebase.ts';
import { addDoc, getDocs, limit, query, where } from 'firebase/firestore';
import { userCollection } from '../../../../firebase/firestore.ts';
import { injectable } from 'inversify';

@injectable()
export class AllUsersFirebaseRepository implements AllUsersRepository {
  async createUserByEmail(user: UserWithEmail): Promise<User> {
    const userCredentials = await createUserWithEmailAndPassword(
      firebaseAuth,
      user.email,
      user.password
    );

    const token = await userCredentials.user.getIdToken();

    const docRef = await addDoc(userCollection, {
      id: userCredentials.user.uid,
      name: user.name,
      email: user.email,
    });

    return {
      token,
      id: docRef.id,
      email: user.email,
      name: user.name,
    };
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const findUserByEmailQuery = query(
      userCollection,
      where('email', '==', email),
      limit(1)
    );

    const querySnapshot = await getDocs(findUserByEmailQuery);

    if (querySnapshot.size === 0) {
      return null;
    }

    let userFromDb: User = {
      id: '',
      name: '',
      email: '',
    };

    querySnapshot.forEach((user) => {
      userFromDb = user.data() as User;
    });

    return userFromDb;
  }

  async loginByEmailAndPassword(email: string, password: string): Promise<User> {
    const userCredentials = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const userFromFirestore = await this.findUserByEmail(userCredentials.user.email!);
    const userToken = await userCredentials.user.getIdToken()

    return {
      id: userFromFirestore!.id,
      email: userCredentials.user.email!,
      name: userFromFirestore!.name,
      token: userToken,
    }
  }
}
