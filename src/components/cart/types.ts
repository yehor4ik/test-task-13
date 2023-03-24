import { IProductResponse } from '../../services/types';

export type IInputsValidation = Omit<IProductResponse, 'id'>;

export interface ICartFormProps {
  closeModal: () => void;
  fetchData: (query: IInputsValidation) => void;
}
