import * as S from './styles';
import { MdArrowRight, MdArrowForward } from 'react-icons/md';
import { useState } from 'react';

const Button = ({ children, secondary, tertiary }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <S.Button
      secondary={secondary}
      tertiary={tertiary}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      {children} {hover ? <MdArrowForward /> : <MdArrowRight />}
    </S.Button>
  );
};

export default Button;
