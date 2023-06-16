import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalAmount: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.totalAmount += action.payload.price;
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      console.log(existingCartItem);
      if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.amount += action.payload.price;
      } else {
        state.items.push(action.payload);
      }
    },
    addOneItem(state, action) {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload
      );
      state.totalAmount += existingCartItem.price;
      existingCartItem.quantity++;
      existingCartItem.amount += existingCartItem.price;
    },
    removeOneItem(state, action) {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingCartItem.quantity > 1) {
        state.totalAmount -= existingCartItem.price;
        existingCartItem.quantity--;
        existingCartItem.amount -= existingCartItem.price;
      } else {
        state.totalAmount -= existingCartItem.price;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    showCartToggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;
export default store;
