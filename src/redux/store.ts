import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import productList from './productList/productListReducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    productList,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;

export type IRootState = ReturnType<typeof store.getState>;
export type IDispatch = typeof store.dispatch;

export const useAppDispatch: () => IDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
