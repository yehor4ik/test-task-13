import { IProductResponse } from '../../services/types';
import { createAction } from '@reduxjs/toolkit';
import { IInputsValidation } from '../../components/cart/types';

const UPDATE_PRODUCT_LIST = 'UPDATE_PRODUCT_LIST';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_IS_OPEN_MODAL = 'SET_IS_OPEN_MODAL';
const FETCH_PRODUCT = 'FETCH_PRODUCT';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const SET_SELECTED_ELEMENT = 'SET_SELECTED_ELEMENT';
const UPDATE_SELECTED_ELEMENT = 'UPDATE_SELECTED_ELEMENT';
const DELETE_PRODUCTS = 'DELETE_PRODUCTS';

export const updateProductList =
  createAction<IProductResponse[]>(UPDATE_PRODUCT_LIST);
export const setIsLoading = createAction<boolean>(SET_IS_LOADING);
export const setIsOpenModal = createAction<boolean>(SET_IS_OPEN_MODAL);
export const setSelectedElements =
  createAction<ISelectedElementPayload>(SET_SELECTED_ELEMENT);
export const updateSelectedElements = createAction<number>(
  UPDATE_SELECTED_ELEMENT,
);
export const fetchProduct = createAction(FETCH_PRODUCT);
export const deleteProduct = createAction(DELETE_PRODUCTS);
export const createProduct = createAction<IInputsValidation>(CREATE_PRODUCT);

export interface IState {
  list: IProductResponse[];
  isLoading: boolean;
  isOpenModal: boolean;
  selectedElement: Record<number, boolean>;
}

export interface ISelectedElementPayload {
  products: IProductResponse[];
  value: boolean;
}
