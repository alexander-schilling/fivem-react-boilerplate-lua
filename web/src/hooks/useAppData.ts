import { useAppDispatch } from '../app/hooks';
import { useNuiEvent } from './useNuiEvent';

import { setToken } from '../store/auth';

/**
 * This hook is used to listen for NUI events and dispatch them to the Redux store.
 */
const useAppData = () => {
  const dispatch = useAppDispatch();

  useNuiEvent('setToken', (token) => {
    dispatch(setToken(token));
  });
};

export default useAppData;
