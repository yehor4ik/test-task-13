import { FC } from 'react';
import Header from './components/header /Header';
import ProductsList from './components/product/List';
import Loader from './components/loader/Loader';
import { useAppSelector } from './redux/store';
import ModalWindowCart from './components/cart/ModalWindow';
import CountLine from './components/count-line/CountLine';

const App: FC = () => {
  const { isLoading } = useAppSelector((state) => state.productList);

  return (
    <main className="container">
      <Header />
      <CountLine />
      <ProductsList />
      <ModalWindowCart />
      <Loader isShow={isLoading} />
    </main>
  );
};

export default App;
