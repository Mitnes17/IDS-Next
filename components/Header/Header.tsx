import next from 'next';
import * as S from './styled';
import Image from 'next/image';
import Logo from '../../public/img/logo.png';

export const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <Image
          src={Logo}
          alt='logo'
        />
      </S.Logo>
      <S.Burger>
        <S.Bar></S.Bar>
      </S.Burger>
      {/* <S.Navigation></S.Navigation>
      <S.Button></S.Button> */}
    </S.Container>
  );
};
