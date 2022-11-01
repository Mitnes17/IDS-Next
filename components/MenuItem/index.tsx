import { FC } from 'react';
import * as S from './styled';
import { Props } from './MenuItem';

export const MenuItem: FC<Props> = ({ $color, text, href }) => {
  return (
    <S.Item
      {...{ $color }}
      {...{ href }}
    >
      {text}
    </S.Item>
  );
};
