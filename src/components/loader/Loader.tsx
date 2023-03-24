import { FC } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { primaryColor } from '../../constants/styleVariables';
import { LoaderStyled } from './Loader.styled';

interface IProps {
  isShow: boolean;
}
const Loader: FC<IProps> = ({ isShow }) => {
  if (!isShow) return null;

  return (
    <LoaderStyled>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color={primaryColor}
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </LoaderStyled>
  );
};

export default Loader;
