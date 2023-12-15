import { useAppSelector } from "../app/hooks";

const useAppStates = () => {
  const state = useAppSelector((state) => state);
  const token = state.auth.token;

  return { token };
};

export default useAppStates;
