import { useDispatch, useSelector } from 'react-redux';
import {
  startLoginUserWithEmail,
  startRegisterUserWithEmail,
} from '../store/authThunks.ts';
import { UnknownAction } from '@reduxjs/toolkit';
import { UserWithEmail } from '../../core/user/domain/UserWithEmail.ts';
import {
  clearLoginError,
  clearRegisterError,
  logout,
  setLoading,
} from '../store/authSlice.ts';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authSelector = useSelector((state: any) => state.auth);

  const isAuthenticated = () => authSelector.user.token !== '';

  const registerUserWithEmail = (user: UserWithEmail) => {
    dispatch(startRegisterUserWithEmail(user, navigate) as unknown as UnknownAction);
  };

  const loginByEmail = (user: { email: string, password: string }) => {
    dispatch(startLoginUserWithEmail(user, navigate) as unknown as UnknownAction);
  };

  const resetRegisterError = () => {
    dispatch(setLoading(false));
    dispatch(clearRegisterError());
  };

  const resetLoginError = () => {
    dispatch(setLoading(false));
    dispatch(clearLoginError());
  };

  const logoutUser = () => {
    dispatch(logout() as unknown as UnknownAction);
    navigate('/login', { replace: true });
  };

  return {
    isAuthenticated,
    registerUserWithEmail,
    loginByEmail,
    resetRegisterError,
    resetLoginError,
    logoutUser,
    authSelector,
  }
}