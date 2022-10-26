import next from 'next';
import * as S from './styled';
import welcomeImg from '../../public/img/4000_4_08.png';
import Image from 'next/image';

export const Welcome = () => {
  return (
    <S.Container>
      <S.Left>
        <S.H1>Welcome to the insert some lorem copy here</S.H1>
        <S.H3>Vision, Learning, Collaboration.</S.H3>
        <S.P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</S.P>
      </S.Left>
      <S.Right>
        <S.ImgWrap>
          <Image
            src={welcomeImg}
            alt=''
            priority
          />
        </S.ImgWrap>
      </S.Right>
    </S.Container>
  );
};
