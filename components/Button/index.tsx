import { FC } from 'react';
import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';
import { Props } from './Button';

export const Button: FC<Props> = ({ href, text }) => {
  return (
    <Link {...{ href }}>
      <S.Link>{text}</S.Link>
    </Link>
  );
};
