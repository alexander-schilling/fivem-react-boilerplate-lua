import { useAppSelector } from "../app/hooks";

const useAppStates = () => {
  const state = useAppSelector((state) => state);
  const example = state.example;

  return { example };
};

export default useAppStates;
