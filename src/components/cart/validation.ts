import * as yup from 'yup';

export const schema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required().min(0),
    count: yup.number().required().min(0),
  })
  .required();
