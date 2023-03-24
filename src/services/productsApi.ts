import { IProductResponse } from './types';
import { getMockResponse } from '../utils/getMockResponse';

let ID = 3;

class ProductsApi {
  items: IProductResponse[] = [];

  getAll = async (): Promise<IProductResponse[]> => {
    return await getMockResponse<IProductResponse[]>(this.items);
  };

  delete = async (id: number): Promise<IProductResponse | null> => {
    const deletedProduct = this.items.find((product) => product.id === id);
    this.items = this.items.filter((product) => product.id !== id);

    if (deletedProduct) {
      return getMockResponse<IProductResponse>(deletedProduct);
    }

    return null;
  };

  create = async (
    query: Omit<IProductResponse, 'id'>,
  ): Promise<IProductResponse> => {
    const newProduct: IProductResponse = { id: ++ID, ...query };
    this.items = [...this.items, newProduct];

    return getMockResponse<IProductResponse>(newProduct);
  };
}

export const productApi = new ProductsApi();
