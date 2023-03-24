import { FC, useEffect } from 'react';
import { ProductListWrapper } from './ProductList.styled';
import ProductsItem from './Item';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  fetchProduct,
  updateSelectedElements,
} from '../../redux/productList/types';

const ProductsList: FC = () => {
  const products = useAppSelector((state) => state.productList.list);
  const { selectedElement } = useAppSelector((state) => state.productList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const onChangeSelected = (id: number) => (): void => {
    dispatch(updateSelectedElements(id));
  };

  return (
    <ProductListWrapper>
      <thead>
        <tr>
          <th style={{ width: '5%' }}>#</th>
          <th style={{ width: '15%' }}>Name</th>
          <th style={{ width: '70%' }}>Description</th>
          <th style={{ width: '5%' }}>Price</th>
          <th style={{ width: '5%' }}>Count</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ id, ...rest }) => (
          <ProductsItem
            key={id}
            product={rest}
            selected={selectedElement[id]}
            onChange={onChangeSelected(id)}
          />
        ))}
      </tbody>
    </ProductListWrapper>
  );
};

export default ProductsList;
