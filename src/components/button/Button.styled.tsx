import styled from 'styled-components';
import { ButtonType, IButtonProps } from './types';
import {
  primaryColor,
  whiteColor,
  dangerColor,
  lightGrayColor,
} from '../../constants/styleVariables';

export const ButtonStyled = styled.button<
  Required<Pick<IButtonProps, 'buttonWidth' | 'buttonStyle'>>
>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: ${(props) =>
    isNaN(+props.buttonWidth) ? props.buttonWidth : props.buttonWidth + 'px'};
  color: ${whiteColor};
  background-color: ${(props) =>
    props.buttonStyle === ButtonType.primary ? primaryColor : dangerColor};
  border: 1px solid
    ${(props) =>
      props.buttonStyle === ButtonType.primary ? primaryColor : dangerColor};
  height: 44px;

  &:disabled {
    background-color: ${lightGrayColor};
    border: 1px solid ${lightGrayColor};
  }
`;
