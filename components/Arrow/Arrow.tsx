import React, { FC } from 'react';
import * as S from './styled';
import { colors, media } from '../../styles/variables';
import { StyleProps } from '../Arrow/Arrow.d';

export const Arrow: FC<StyleProps> = ({ $color }) => {
  return <S.Arrow $color={$color}></S.Arrow>;
};
