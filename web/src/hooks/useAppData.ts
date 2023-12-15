import { useAppDispatch } from "../app/hooks";
import { useNuiEvent } from "./useNuiEvent";

import { setExampleData } from "../store/example";

/**
 * This hook is used to listen for NUI events and dispatch them to the Redux store.
 */
const useAppData = () => {
  const dispatch = useAppDispatch();

  useNuiEvent<{ example: string }>("init", (data) => {
    const example = data.example;

    dispatch(setExampleData(example));
  });
};

export default useAppData;
