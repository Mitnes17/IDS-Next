import { FC, useEffect, useState, useRef } from 'react';
import { Props } from './SliderBtn.d';
import * as S from './styled';

export const SliderBtn: FC<Props> = ({ text }) => {
  return (
    <S.Container>
      <S.Button></S.Button>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};
