import React, { FC } from 'react';
import * as S from './styled';
import { Props } from './LinkArrow.d';
import { Arrow } from '../Arrow/Arrow';
import Link from 'next/link';

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
