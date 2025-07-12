import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "authUser",
  initialState: null,
  reducers: {
    setAuthUser: (state, action) => {
      return action.payload;
    },
    removeAuthUser: () => {
      return null;
    }
  }
});

export const { setAuthUser, removeAuthUser } = userSlice.actions;
export default userSlice.reducer;
