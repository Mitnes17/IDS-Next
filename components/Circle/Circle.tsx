import { FC, useEffect, useState, useRef } from 'react';
import * as S from './styled';
import { Props } from './Circle.d';
import Image from 'next/image';
import SvgCenter from '../../public/img/svg/field.svg';

export const Circle: FC<Props> = ({ $color, text, count }) => {
  return (
    <S.Circle>
      <S.Grand {...{ $color }}>
        <S.Small>
          <S.Rotate>
            <S.Dot {...{ $color }}></S.Dot>
          </S.Rotate>
          <S.Wrap {...{ $color }}>
            <S.Figure {...{ $color }}>
              <S.ImageWrap>
                <Image
                  src={SvgCenter}
                  alt='center'
                />
              </S.ImageWrap>
            </S.Figure>
            <S.Caption>
              <S.Text>{text}</S.Text>
              <S.Count>{count}</S.Count>
            </S.Caption>
          </S.Wrap>
        </S.Small>
      </S.Grand>
    </S.Circle>
  );
};
