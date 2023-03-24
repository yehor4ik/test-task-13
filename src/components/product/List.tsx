import { FC } from 'react';
import { ProductListWrapper } from './ProductList.styled';

const ProductList: FC = () => {
  return (
    <ProductListWrapper>
      {[1, 2, 3].map((el) => {
        return;
      })}
    </ProductListWrapper>
  );
};

export default ProductList;
