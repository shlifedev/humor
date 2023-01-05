import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  active : false
}
export const menuSlice = createSlice({
  initialState,
  name : 'menu',
  reducers : {
    disable : (state) => { state.active = false },
    enable : (state) => { state.active = true } 
  } 
});

// actions
export const {disable, enable} = menuSlice.actions
export default menuSlice.reducer;
