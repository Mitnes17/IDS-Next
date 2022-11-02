import { FC } from 'react';
import Image from 'next/image';
import { Props } from './SliderImgItem.d';
import { useWidth } from '../../hooks/useWidth';
import * as S from './styled';

export const SliderImgItem: FC<Props> = ({ img }) => {
  const state = useWidth(1680);

  return (
    <S.SliderImgBlock>
      <S.Container>
        <S.ImageWrap>
          <Image
            alt=''
            src={img}
            width={state ? 335 : 691}
            height={state ? 188 : 389}
          />
        </S.ImageWrap>
      </S.Container>
    </S.SliderImgBlock>
  );
};
