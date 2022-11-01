import { useState } from 'react';
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
          ({ id, src, h2, h3, h4, p, href, img }) =>
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
              onClick={() => setSlide((prev) => id)}
              text={text}
              key={id}
              className={id === slide ? 'isActive' : ''}
            />
          ))}
      </S.BtnWrap>

      {!state && (
        <S.SliderWrap key={data[slide].id}>
          <SliderTextItem
            // key={data[slide].id}
            src={data[slide].src}
            h2={data[slide].h2}
            h3={data[slide].h3}
            h4={data[slide].h4}
            p={data[slide].p}
            href={data[slide].href}
          />

          <SliderImgItem img={data[slide].img} />
        </S.SliderWrap>
      )}
    </S.SliderItem>
  );
};
