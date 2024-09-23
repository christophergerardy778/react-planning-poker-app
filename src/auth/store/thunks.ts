import { UserWithEmail } from '../../core/user/domain/UserWithEmail.ts';
import { container } from '../../core/container.ts';
import { CreateUserWithEmail } from '../../core/user/app/CreateUserWithEmail.ts';
import { userTypes } from '../../core/user/infrastructure/di/UserTypes.ts';
import { Dispatch } from '@reduxjs/toolkit';
import { clearRegisterError, setUser, showRegisterError } from './authSlice.ts';

export const startRegisterUserWithEmail = (user: UserWithEmail) => async (dispatch: Dispatch) => {
  try {
    dispatch(clearRegisterError());

    const createUserWithEmail = container.get<CreateUserWithEmail>(
      userTypes.createUserWithEmail
    );

    const newUser = await createUserWithEmail.run(user);

    dispatch(setUser(newUser));
  } catch (e: any) {
    dispatch(showRegisterError(e.message));
  }
}
