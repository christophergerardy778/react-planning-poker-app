import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../store/authSlice.ts';

export const useAuth = () => {
  const dispatch = useDispatch();
  const useAuthSelector = useSelector((state: any) => state.auth);

  const login = () => {
    dispatch(setToken(''));
  };

  return {
    login,
    useAuthSelector,
  }
}