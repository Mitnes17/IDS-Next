import next from 'next';
import * as Styles from './styled';

export const Header = () => {
  return (
    <Styles.Container>
      <Styles.Logo>
        <Styles.Img />
      </Styles.Logo>
      <Styles.Burger>
        <Styles.Bar></Styles.Bar>
      </Styles.Burger>
      {/* <Styles.Navigation></Styles.Navigation>
      <Styles.Button></Styles.Button> */}
    </Styles.Container>
  );
};
