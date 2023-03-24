import { FC } from 'react';
import Modal from 'react-modal';
import { useAppSelector } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { createProduct, setIsOpenModal } from '../../redux/productList/types';
import CartForm from './Form';
import { IInputsValidation } from './types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ModalWindowCart: FC = () => {
  const { isOpenModal } = useAppSelector((state) => state.productList);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(setIsOpenModal(false));
  };

  const onCreateNewProduct = (query: IInputsValidation): void => {
    dispatch(createProduct(query));
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal">
      <CartForm closeModal={onCloseModal} fetchData={onCreateNewProduct} />
    </Modal>
  );
};

export default ModalWindowCart;
