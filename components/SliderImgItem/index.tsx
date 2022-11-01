import { FC } from 'react';
import Image from 'next/image';
import imageUrl from '../../public/img/space-back.png';
import imageUrlsmall from '../../public/img/space-back768.png';
import { Props } from './SliderImgItem.d';
import { useWidth } from '../../hooks/useWidth';
import * as S from './styled';

export const SliderImgItem: FC<Props> = ({ img }) => {
  const state = useWidth(1680);

  return (
    <S.SliderImgBlock>
      <S.BackgroundImg>
        <Image
          alt=''
          src={state ? imageUrlsmall : imageUrl}
        />
      </S.BackgroundImg>

      <S.ImageWrap>
        <Image
          alt=''
          src={img}
          width={state ? 335 : 691}
          height={state ? 188 : 389}
        />
      </S.ImageWrap>
    </S.SliderImgBlock>
  );
};
