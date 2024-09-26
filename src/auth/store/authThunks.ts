import { UserWithEmail } from '../../core/user/domain/UserWithEmail.ts';
import { container } from '../../core/container.ts';
import { CreateUserWithEmail } from '../../core/user/app/CreateUserWithEmail.ts';
import { userTypes } from '../../core/user/infrastructure/di/UserTypes.ts';
import { Dispatch } from '@reduxjs/toolkit';
import {
  setLoading,
  setUser,
  showRegisterError,
  showLoginError,
  clearLoginError,
  clearRegisterError,
} from './authSlice.ts';

import { NavigateFunction } from 'react-router-dom';
import { LoginByEmail } from '../../core/user/app/LoginByEmail.ts';

import {
  UserLoginCredentials
} from '../../core/user/domain/UserLoginCredentials.ts';

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

export const startLoginUserWithEmail = (user: UserLoginCredentials, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(clearLoginError());

    const loginByEmail = container.get<LoginByEmail>(userTypes.loginByEmail);
    const loggedUser = await loginByEmail.run(user.email, user.password);

    dispatch(setUser(loggedUser));

    navigate('/app', { replace: true });
  } catch (e: any) {
    dispatch(showLoginError(e.message));
  } finally {
    dispatch(setLoading(false));
  }
}
