import { FC } from 'react';
import { ButtonType, IButtonProps } from './types';
import { ButtonStyled } from './Button.styled';

const Button: FC<IButtonProps> = (props) => {
  const {
    buttonClassName,
    buttonStyle = ButtonType.primary,
    buttonWidth = '100%',
    onClick,
    children,
    disabled,
    buttonType = 'button',
  } = props;

  return (
    <ButtonStyled
      className={buttonClassName}
      {...{ buttonStyle, buttonWidth, onClick, disabled, buttonType }}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
