import { FC } from 'react';
import Link from 'next/link';
import { Props } from './Button';
import * as S from './styled';

export const Button: FC<Props> = ({ href, text }) => {
  return (
    <Link {...{ href }}>
      <S.Link>{text}</S.Link>
    </Link>
  );
};
