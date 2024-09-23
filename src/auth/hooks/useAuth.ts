import { useDispatch, useSelector } from 'react-redux';
import { startRegisterUserWithEmail } from '../store/thunks.ts';
import { UnknownAction } from '@reduxjs/toolkit';
import { UserWithEmail } from '../../core/user/domain/UserWithEmail.ts';
import { clearRegisterError } from '../store/authSlice.ts';

export const useAuth = () => {
  const dispatch = useDispatch();
  const authSelector = useSelector((state: any) => state.auth);

  const registerUserWithEmail = (user: UserWithEmail) => {
    dispatch(startRegisterUserWithEmail(user) as unknown as UnknownAction);
  };

  const resetRegisterError = () => {
    dispatch(clearRegisterError());
  }

  return {
    registerUserWithEmail,
    resetRegisterError,
    authSelector,
  }
}