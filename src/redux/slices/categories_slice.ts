import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface CategoriesSliceState {
  categoryId: number,
  currentPage:number,
}

const initialState:CategoriesSliceState = {
  categoryId: 0,
  currentPage:1,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoryId (state,action:PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setCurrentPage (state,action:PayloadAction<number>) {
      state.currentPage = action.payload
    },
  },
});

//просто пример селектора если нужно будет
export const categoriesSelector = (state:RootState) => state.categories


export const { setCategoryId,setCurrentPage } = categoriesSlice.actions;

export default categoriesSlice.reducer;
