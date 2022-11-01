import styled from 'styled-components';
import { colors, media } from '../../styles/variables';

export const Section = styled.section`
  margin-top: 35px;

  @media (${media.tablet}) {
    position: relative;
    margin: 70px 0px 70px 0px;
    margin-top: 70px;
  }

  @media (${media.pc}) {
    position: relative;
    margin-top: 120px;
    margin-bottom: 100px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 50px;

  @media (${media.tablet}) {
    flex-direction: row;
    margin: auto;
    max-width: 696px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 70%;
      z-index: -2;
      background: ${colors.grayCircle};
    }
  }

  @media (${media.pc}) {
    max-width: 1218px;
    margin: auto;
    padding-left: 110px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      z-index: -2;
      background: ${colors.grayCircle};
    }
  }
`;

export const Text = styled.div`
  padding: 55px 12px;
  background-color: ${colors.grayCircle};

  @media (${media.tablet}) {
    padding: 70px 84px 70px 0px;
  }

  @media (${media.pc}) {
    max-width: 440px;
    padding: 171px 190px 171px 0px;
  }
`;

export const H2 = styled.h2`
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;
  @media (${media.tablet}) {
  }
  @media (${media.pc}) {
    font-size: 50px;
    line-height: 60px;
  }
`;

export const P = styled.p`
  font-family: Mercury Text G2;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 40px;

  @media (${media.pc}) {
    font-size: 18px;
    font-style: normal;
    line-height: 27px;
  }
`;

export const LinkWrap = styled.div`
  margin-top: 40px;
`;
