import styled from 'styled-components';
import { grayColor, lightGrayColor } from '../../constants/styleVariables';

export const ProductListWrapper = styled.table`
  width: 100%;

  th {
    border-bottom: 1px solid ${lightGrayColor};
    border-top: 1px solid ${lightGrayColor};
    font-weight: 400;
    font-size: 16px;
    color: ${grayColor};
    text-align: left;
    vertical-align: center;
    padding: 16px;
  }

  tbody {
    width: 100%;
    tr {
      border-bottom: 1px solid ${lightGrayColor};
    }

    td {
      padding: 16px;
      vertical-align: middle;
    }
  }
`;
