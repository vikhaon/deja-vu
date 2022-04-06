import { useEffect, useState } from 'react';
import Button from '../Button';
import { sliderItems } from '../../data';
import * as S from './styles';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(-1);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > -1 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : -1);
    }
  };

  useEffect(() => {
    const autoplay = () => {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : -1);
    };
    const interval = setInterval(autoplay, 3500);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <S.SliderContainer>
      <S.Arrow direction='left' onClick={() => handleClick('left')}>
        <MdArrowLeft size={24} />
      </S.Arrow>
      <S.Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <S.Slide key={item.id}>
            <S.ImageContainer>
              <S.Image src={item.images.imgLeft} />
              <S.Image src={item.images.imgCenter} />
              <S.Image src={item.images.imgRight} />
            </S.ImageContainer>
            <S.InfoContainer>
              <S.Title>{item.title}</S.Title>
              <S.Description>{item.description}</S.Description>

              <Button>
                <Link to='/products/women'>SHOP NOW</Link>
              </Button>
            </S.InfoContainer>
          </S.Slide>
        ))}
      </S.Wrapper>
      <S.Arrow direction='right' onClick={() => handleClick('right')}>
        <MdArrowRight size={24} />
      </S.Arrow>
    </S.SliderContainer>
  );
};

export default Slider;
