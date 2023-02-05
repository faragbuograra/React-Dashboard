import { createSlice } from "@reduxjs/toolkit";
import { Color } from "../Theme/Color";

const initialStateValue = { main: Color.Primary, Hover: Color.Hover, active: Color.active,BackGround:Color.BackGround,mood:Color.mood ,text:Color.text };

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    ChangeColor: (state, action) => {
      state.value = action.payload;
    },


  },
});

export const {  ChangeColor } = themeSlice.actions;

export default themeSlice.reducer;