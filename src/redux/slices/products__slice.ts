import axios from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";


type FetchProductsArgs = Record<string,string>

type Product = {
  id: string;
  title: string;
  sizes: Array<number>;
  price: number;
  category:number,
  imageUrl: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'

}

interface ProductsSliceState {
  items: Array<Product>;
  status: Status;
}


export const fetchProducts = createAsyncThunk<Product[],FetchProductsArgs>(
  "pizza/fetchProductStatus",
  async (params) => {
    const { category,currentPage } = params;
    const res = await axios.get(
      `https://6440292eb9e6d064be09816e.mockapi.io/shop?page=${currentPage}&limit=9&${category}`
    );
    return res.data;
  }
);

const initialState:ProductsSliceState = {
  items: [],
  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setProducts(state, action:PayloadAction<Product[]>) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const productsSelector = (state: RootState) => state.products;

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
