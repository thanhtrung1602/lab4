import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const sp = action.payload;
      const index = state.cart.findIndex((s) => s.id === sp.id);
      if (index === -1) {
        sp.soluong = 1;
        state.cart.push(sp);
      } else {
        state.cart[index].soluong++;
      }
      console.log("Da them sp. So sp=", state.cart.length);
    },
    editProduct: (state, action) => {
      const id = action.payload[0];
      const so_luong = action.payload[1];
      const index = state.cart.findIndex((s) => s.id === id);
      if (index !== -1) state.cart[index].soluong = Number(so_luong);
      console.log("da sua san pham", action);
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      const index = state.cart.findIndex((s) => s.id === id);
      if (index !== -1) state.cart.splice(index, 1);
    },
    removeAllProduct: (state) => {
      state.cart = [];
    },
  },
});

export const { addProduct, editProduct, removeProduct, removeAllProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
