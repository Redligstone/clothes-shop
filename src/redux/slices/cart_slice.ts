import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getCartFromLS } from "../getCartFromLC";

export type CartItem = {
  id:number,
  title:string,
  price:number,
  imageUrl:string,
  category?:number,
  size: number,
  count:number,
  color:number,
}

interface CartSliceState {
  totalPrice:number,
  totalCount:number,
  items:CartItem[],
}

const cartData = getCartFromLS()

const initialState:CartSliceState = {
  totalPrice: cartData.totalPrice,
  totalCount: cartData.totalCount,
  items: cartData.items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id && obj.size === action.payload.size && obj.color === action.payload.color);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);

      state.totalCount = state.items.reduce((sum, obj) => {
        return  obj.count + sum;
      }, 0);

    },
    minusItem(state, action:PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id && obj.size === action.payload.size && obj.color === action.payload.color);

      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return  obj.count + sum;
      }, 0);
    },
    removeProduct(state, action: PayloadAction<CartItem>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id || obj.size !== action.payload.size || obj.color !== action.payload.color);

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return  obj.count + sum;
      }, 0);
    },
    clearProducts(state) {
      state.items = [];
      state.totalPrice = 0
      state.totalCount = 0
    },
  },
});

export const cartSelector = (state:RootState) => state.cart;
export const cartItemByIdSelector = (id:string) => (state:RootState) => state.cart.items.find(obj => obj.id === id);

export const { addProduct, removeProduct, clearProducts,minusItem } = cartSlice.actions;

export default cartSlice.reducer;
