import { FC } from 'react';
import { CartWrapper } from './Cart.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../button/Button';
import { ButtonType } from '../button/types';
import { schema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { ICartFormProps, IInputsValidation } from './types';

const CartForm: FC<ICartFormProps> = ({ closeModal, fetchData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputsValidation>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IInputsValidation> = (data) => {
    fetchData(data);
  };

  return (
    <CartWrapper>
      <h3>Add new product</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Name" {...register('name')} />
          <input type="number" placeholder="Price" {...register('price')} />
          <input type="number" placeholder="Count" {...register('count')} />
        </div>
        <textarea placeholder="Description" {...register('description')} />
        {Object.values(errors).map((error, index) => (
          <p key={index}>{error.message}</p>
        ))}
        <div>
          <Button
            buttonWidth={110}
            buttonStyle={ButtonType.danger}
            onClick={closeModal}>
            Cancel
          </Button>
          <Button buttonWidth={110} buttonType="submit">
            Submit
          </Button>
        </div>
      </form>
    </CartWrapper>
  );
};

export default CartForm;
