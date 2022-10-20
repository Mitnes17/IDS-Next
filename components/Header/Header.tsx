import next from 'next';
import * as Styles from './styled';
import Image from 'next/image';
import Logo from '../../public/img/logo.png';

export const Header = () => {
  return (
    <Styles.Container>
      <Styles.Logo>
        <Image
          src={Logo}
          alt='logo'
        />
      </Styles.Logo>
      <Styles.Burger>
        <Styles.Bar></Styles.Bar>
      </Styles.Burger>
      {/* <Styles.Navigation></Styles.Navigation>
      <Styles.Button></Styles.Button> */}
    </Styles.Container>
  );
};
