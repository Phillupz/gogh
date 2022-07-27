import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
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
}

const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    logout: (state) => {
      state.value = initialStateValue
    },
    update: (state, action) => {
      state.value = {...state, product_id: action.payload.product.id}
    },
  },
});

export const { login, logout, update } = userSlice.actions;

export default userSlice.reducer;