import { FC } from 'react';
import Button from '../button/Button';
import { HeaderStyled } from './Header.styled';
import { ButtonType } from '../button/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { deleteProduct, setIsOpenModal } from '../../redux/productList/types';

const Header: FC = () => {
  const { selectedElement } = useAppSelector((state) => state.productList);
  const dispatch = useAppDispatch();

  const isDisable = !Object.values(selectedElement).some((el) => el);

  const onOpenModal = () => {
    dispatch(setIsOpenModal(true));
  };

  const onDelete = () => {
    dispatch(deleteProduct());
  };

  return (
    <HeaderStyled>
      <h2>TEST TASK 13</h2>

      <div>
        <Button buttonWidth={110} onClick={onOpenModal}>
          + Add new
        </Button>
        <Button
          buttonWidth={110}
          buttonStyle={ButtonType.danger}
          disabled={isDisable}
          onClick={onDelete}>
          Delete
        </Button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
