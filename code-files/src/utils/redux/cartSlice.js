import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => state.items.push(action.payload),

    removeItem: (state) => state.items.pop(),

    emptyCart: (state) => state.items.length,
  },
});

export const {addItems, removeItem, emptyCart} = cartSlice.actions;

export default cartSlice.reducer;
