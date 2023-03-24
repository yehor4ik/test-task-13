import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState } from './types';
import { IProductResponse } from '../../services/types';

const initialState: IState = {
  list: [],
  isLoading: false,
  isOpenModal: false,
};

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    updateProductList(state, action: PayloadAction<IProductResponse[]>) {
      return {
        ...state,
        list: action.payload,
      };
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setIsOpenModal(state, action: PayloadAction<boolean>) {
      state.isOpenModal = action.payload;
    },
  },
});

export const { updateProductList, setIsLoading, setIsOpenModal } =
  productListSlice.actions;
export default productListSlice.reducer;
