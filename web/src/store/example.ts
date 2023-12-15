import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  data: string;
}

const configSlice = createSlice({
  name: "example",
  initialState: {
    data: "hello world",
  } as ExampleState,
  reducers: {
    setExampleData: (state: ExampleState, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
});

export const { setExampleData } = configSlice.actions;

export default configSlice.reducer;
