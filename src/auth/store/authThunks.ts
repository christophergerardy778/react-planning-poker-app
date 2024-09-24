import { UserWithEmail } from '../../core/user/domain/UserWithEmail.ts';
import { container } from '../../core/container.ts';
import { CreateUserWithEmail } from '../../core/user/app/CreateUserWithEmail.ts';
import { userTypes } from '../../core/user/infrastructure/di/UserTypes.ts';
import { Dispatch } from '@reduxjs/toolkit';
import {
  clearRegisterError,
  setLoading,
  setUser,
  showRegisterError,
} from './authSlice.ts';
import { NavigateFunction } from 'react-router-dom';

export const startRegisterUserWithEmail = (user: UserWithEmail, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(clearRegisterError());

    const createUserWithEmail = container.get<CreateUserWithEmail>(
      userTypes.createUserWithEmail
    );

    const newUser = await createUserWithEmail.run(user);

    dispatch(setUser(newUser));

    navigate('/app', { replace: true })
  } catch (e: any) {
    dispatch(showRegisterError(e.message));
  } finally {
    dispatch(setLoading(false));
  }
};
