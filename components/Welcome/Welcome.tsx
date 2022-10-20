import next from 'next';
import * as Styles from './styled';
import welcomeImg from '../../public/img/4000_4_08.png';
import Image from 'next/image';

export const Welcome = () => {
  return (
    <Styles.Container>
      <Styles.Left>
        <Styles.H1>Welcome to the insert some lorem copy here</Styles.H1>
        <Styles.H3>Vision, Learning, Collaboration.</Styles.H3>
        <Styles.P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Styles.P>
      </Styles.Left>
      <Styles.Right>
        <Styles.ImgWrap>
          <Image
            src={welcomeImg}
            alt=''
            priority
          />
        </Styles.ImgWrap>
      </Styles.Right>
    </Styles.Container>
  );
};
