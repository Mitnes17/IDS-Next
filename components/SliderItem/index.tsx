import { useEffect, useState } from 'react';
import { data, dataBtn } from './mockData';
import { SliderTextItem } from '../SliderTextItem/index';
import { SliderImgItem } from '../SliderImgItem/index';
import { useWidth } from '../../hooks/useWidth';
import { SliderBtn } from '../SliderBtn/index';
import * as S from './styled';

export const SliderItem = () => {
  const state = useWidth(768);
  const [slide, setSlide] = useState(0);

  return (
    <S.SliderItem>
      {data
        .filter((item, index) => index < 2)
        .map(
          ({ id, src, h2, h3, h4, p, href }) =>
            state && (
              <S.SliderWrap key={id}>
                <SliderBtn
                  text={dataBtn[id].text}
                  key={dataBtn[id].id}
                />
                <SliderTextItem
                  key={id}
                  src={src}
                  h2={h2}
                  h3={h3}
                  h4={h4}
                  p={p}
                  href={href}
                />
              </S.SliderWrap>
            )
        )}
      <S.BtnWrap>
        {!state &&
          dataBtn.map(({ id, text }) => (
            <SliderBtn
              onClick={() => setSlide(id)}
              text={text}
              key={id}
              className={id === slide ? 'isActive' : ''}
            />
          ))}
      </S.BtnWrap>

      {!state &&
        data.map(
          ({ id, src, h2, h3, h4, p, href, img, $borderColor }) =>
            slide === id && (
              <S.SliderWrap key={id}>
                <SliderTextItem
                  src={src}
                  h2={h2}
                  h3={h3}
                  h4={h4}
                  p={p}
                  href={href}
                  img={img}
                />
                <SliderImgItem
                  img={img}
                  $borderColor={$borderColor}
                />
              </S.SliderWrap>
            )
        )}
    </S.SliderItem>
  );
};
