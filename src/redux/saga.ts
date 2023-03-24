import { call, takeLatest, put, all, spawn, select } from 'redux-saga/effects';
import { productApi } from '../services/productsApi';
import {
  createProduct,
  deleteProduct,
  fetchProduct,
  setIsLoading,
  setIsOpenModal,
  setSelectedElements,
  updateProductList,
  updateSelectedElements,
} from './productList/types';
import { IProductResponse } from '../services/types';

export function* getProductsWorker(): any {
  yield put(setIsLoading(true));

  try {
    const result = yield call(() => productApi.getAll());
    yield put(updateProductList(result));
    yield put(setSelectedElements({ products: result, value: false }));
    yield put(setIsLoading(false));
  } catch (e) {
    console.error(e);
  }
}

export function* createProductWorker(action: any): any {
  const prevList = yield select((state) => state.productList.list);
  yield put(setIsLoading(true));

  try {
    const result = yield call(() => productApi.create(action.payload));
    yield put(updateProductList([...prevList, result]));
    yield put(updateSelectedElements(result.id));
    yield put(setIsOpenModal(false));
  } catch (e) {
    console.error(e);
  }
  yield put(setIsLoading(false));
}

export function* deleteProductWorker(): any {
  const selected = yield select((state) => state.productList.selectedElement);
  const currentList = yield select((state) => state.productList.list);
  yield put(setIsLoading(true));

  try {
    const result = yield all(
      Object.entries(selected).map(([key, value]) => {
        if (!value) return null;
        return call(() => productApi.delete(+key));
      }),
    );
    const resultWithoutNull = result.filter(Boolean);

    const newListProducts = currentList.filter(
      (product: IProductResponse) =>
        !resultWithoutNull.some((el: IProductResponse) => el.id === product.id),
    );

    yield put(updateProductList(newListProducts));
    yield put(setSelectedElements({ products: newListProducts, value: false }));
    yield put(setIsOpenModal(false));
  } catch (e) {
    console.error(e);
  }
  yield put(setIsLoading(false));
}

export function* deleteProductWatcher() {
  yield takeLatest(deleteProduct.type, deleteProductWorker);
}

export function* createProductWatcher() {
  yield takeLatest(createProduct.type, createProductWorker);
}

export function* getProductsWatcher() {
  yield takeLatest(fetchProduct.type, getProductsWorker);
}

export default function* rootSaga() {
  yield all([
    spawn(getProductsWatcher),
    spawn(createProductWatcher),
    spawn(deleteProductWatcher),
  ]);
}
