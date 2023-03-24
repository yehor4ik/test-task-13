import { FC, useMemo } from 'react';
import { useAppSelector } from '../../redux/store';
import { CountLineWrapper } from './CountLine.styled';

const CountLine: FC = () => {
  const { list } = useAppSelector((state) => state.productList);

  const totalPrice = useMemo(
    () => list.reduce((acc, cur) => (acc += cur.price * cur.count), 0),
    [list],
  );

  const text = totalPrice > 0 ? 'List of product' : 'Add new product';

  return (
    <CountLineWrapper>
      <h1>{text}</h1>

      <span>Total price: {totalPrice}</span>
    </CountLineWrapper>
  );
};

export default CountLine;
