import React, { FC } from 'react';
import * as S from './styled';
import { colors, media } from '../../styles/variables';
import { Props } from './Arrow';

export const Arrow: FC<Props> = ({ $color }) => {
  return <S.Arrow $color={$color}></S.Arrow>;
};
