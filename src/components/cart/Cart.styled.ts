import styled from 'styled-components';
import { blackColor } from '../../constants/styleVariables';

export const CartWrapper = styled.div`
  h3 {
    margin: 0 0 15px 0;
    font-size: 18px;
  }

  textarea,
  input {
    border: 1px solid ${blackColor};
  }

  input {
    width: 30%;
  }

  textarea {
    width: 100%;
    resize: vertical;
    margin: 15px 0 15px 0;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
