export enum ButtonType {
  primary = 'primary',
  danger = 'danger',
}

export interface IButtonProps {
  onClick?: () => void;
  buttonClassName?: string;
  buttonWidth?: number | string;
  buttonStyle?: ButtonType;
  buttonType?: 'submit' | 'reset' | 'button';
  children: string;
  disabled?: boolean;
}
