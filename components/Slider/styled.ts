import styled from 'styled-components';
import { media, colors } from '../../styles/variables';

export const Slider = styled.section`
  padding: 50px 12px 0px;
  background: ${colors.nudeBlue};
  color: ${colors.white};

  @media (${media.tablet}) {
    padding: 70px 36px;
  }

  @media (${media.pc}) {
    padding: 120px 36px 130px 36px;
  }
`;

export const Main = styled.div`
  @media (${media.tablet}) {
    display: flex;
    justify-content: space-between;
    max-width: 696px;
    margin: 0px auto 70px;
    column-gap: 64px;
  }

  @media (${media.pc}) {
    margin: 0 auto 35px;
    max-width: 1110px;
  }
`;

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 40px;

  @media (${media.tablet}) {
    flex: 5;
  }

  @media (${media.pc}) {
    max-width: 343px;
    flex: auto;
    font-family: Helvetica;
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const Text = styled.div`
  @media (${media.tablet}) {
    flex: 6;
  }

  @media (${media.pc}) {
    flex: auto;
    max-width: 540px;
  }
`;

export const H3 = styled.h3`
  font-family: Mercury Text G2;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 40px;

  @media (${media.pc}) {
    font-family: Mercury Text G2;
    font-size: 22px;
    font-style: italic;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const P = styled.p`
  font-family: Ideal Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 50px;

  @media (${media.pc}) {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0px;
    text-align: left;
  }
`;
