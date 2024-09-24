import { useDispatch, useSelector } from 'react-redux';
import { startRegisterUserWithEmail } from '../store/authThunks.ts';
import { UnknownAction } from '@reduxjs/toolkit';
import { UserWithEmail } from '../../core/user/domain/UserWithEmail.ts';
import { clearRegisterError, setLoading } from '../store/authSlice.ts';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authSelector = useSelector((state: any) => state.auth);

  const isAuthenticated = () => authSelector.user.token !== '';

  const registerUserWithEmail = (user: UserWithEmail) => {
    dispatch(startRegisterUserWithEmail(user, navigate) as unknown as UnknownAction);
  };

  const resetRegisterError = () => {
    dispatch(setLoading(false));
    dispatch(clearRegisterError());
  }

  return {
    isAuthenticated,
    registerUserWithEmail,
    resetRegisterError,
    authSelector,
  }
}