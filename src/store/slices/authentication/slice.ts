import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { AuthenticationSlice } from "types/redux/authentication";


const initialState: AuthenticationSlice = {
  authToken: "",
  loader: false
}

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload
    }
  }
});

export const AuthenticationSelectors = {
  getAccessToken: (state: RootState) => state.authentication.authToken
}


export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer