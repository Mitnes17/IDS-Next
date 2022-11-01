import React, { FC } from 'react';
import { Props } from './LinkArrow';
import { Arrow } from '../Arrow/index';
import Link from 'next/link';
import * as S from './styled';

export const LinkArrow: FC<Props> = ({ $color, href, text, $textColor }) => {
  return (
    <Link href={href}>
      <S.Link $color={$textColor}>
        {text}
        <Arrow $color={$color} />
      </S.Link>
    </Link>
  );
};
