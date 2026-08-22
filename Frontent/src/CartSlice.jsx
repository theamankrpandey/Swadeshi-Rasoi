import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Mycart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      var found = false;
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == actions.payload.id) {
          state.cart[i].Quantity++;
          found = true;
        }
      }
      if (found == false) {
        state.cart.push(actions.payload);
      }
      console.log(state.cart);
    },
    quanInc: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == actions.payload.id) {
          state.cart[i].Quantity++;
        }
      }
    },
    quanDec: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == actions.payload.id) {
          if (state.cart[i].Quantity > 1) {
            state.cart[i].Quantity--;
          }
        }
      }
    },
  },
});
export const { addToCart, quanInc, quanDec } = CartSlice.actions;
export default CartSlice.reducer;
