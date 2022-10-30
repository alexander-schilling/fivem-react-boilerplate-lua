import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  } as AuthState,
  reducers: {
    setToken: (state: AuthState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
