import { FC } from 'react';
import { IProductResponse } from '../../services/types';

interface IProps {
  product: Omit<IProductResponse, 'id'>;
  selected: boolean;
  onChange: () => void;
}
const ProductsItem: FC<IProps> = ({ product, selected, onChange }) => {
  const { name, price, count, description } = product;
  return (
    <tr>
      <td>
        <input type="checkbox" checked={selected} onChange={onChange} />
      </td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{count}</td>
    </tr>
  );
};

export default ProductsItem;
