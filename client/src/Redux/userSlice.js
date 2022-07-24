import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    first: "", 
    last: "", 
    street: "",
    apt: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    admin: false, 
    email: "", 
    password: ""
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    logout: (state, initialState) => {
      state.value = initialState
    }
  },
  
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;