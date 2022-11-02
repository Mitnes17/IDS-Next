import { FC } from 'react';
import { Props } from './SliderTextItem';
import Image from 'next/image';
import { LinkArrow } from '../LinkArrow';
import { colors } from '../../styles/variables';
import { useWidth } from '../../hooks/useWidth';
import * as S from './styled';

export const SliderTextItem: FC<Props> = ({ h2, h3, h4, p, src, href, img }) => {
  const state = useWidth(768);
  console.log(state);
  return (
    <S.Wrap>
      <S.SliderTextItem>
        <S.SvgWrap>
          <Image
            src={src}
            alt=''
          />
        </S.SvgWrap>
        <S.H2>{h2}</S.H2>
        <S.H3>{h3}</S.H3>
        <S.H4>{h4}</S.H4>
        <S.P>{p}</S.P>
        <LinkArrow
          href={href}
          text='read more'
          $color={colors.white}
          $textColor={colors.white}
        />
      </S.SliderTextItem>
    </S.Wrap>
  );
};
