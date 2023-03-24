import { createReducer } from '@reduxjs/toolkit';
import {
  IState,
  setIsLoading,
  setIsOpenModal,
  setSelectedElements,
  updateProductList,
  updateSelectedElements,
} from './types';

const initialState: IState = {
  list: [],
  isLoading: false,
  isOpenModal: false,
  selectedElement: {},
};

const productListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateProductList, (state, action) => {
      state.list = action.payload;
    })
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setIsOpenModal, (state, action) => {
      state.isOpenModal = action.payload;
    })
    .addCase(setSelectedElements, (state, action) => {
      const { products, value } = action.payload;
      const chunk: Record<number, boolean> = {};
      products.forEach((product) => {
        chunk[product.id] = value;
      });
      state.selectedElement = chunk;
    })
    .addCase(updateSelectedElements, (state, action) => {
      const value =
        state.selectedElement[action.payload] === undefined
          ? false
          : !state.selectedElement[action.payload];
      state.selectedElement = {
        ...state.selectedElement,
        [action.payload]: value,
      };
    });
});

export default productListReducer;
