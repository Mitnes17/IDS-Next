import styled from 'styled-components';
import { colors, media } from '../../styles/variables';

export const Section = styled.div`
  @media (${media.tablet}) {
  }
  @media (${media.pc}) {
    position: relative;
    padding-right: 50px;
    margin-bottom: 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (${media.tablet}) {
    margin-bottom: 40px;
  }

  @media (${media.pc}) {
    max-width: 1314px;
    margin: auto;
    justify-content: end;
    padding-left: 40px;
  }
`;

export const Main = styled.div`
  padding: 20px 0px;
  background: linear-gradient(to right, ${colors.cyanGray} 50%, ${colors.white} 50%);

  @media (${media.tablet}) {
    max-width: 696px;
    margin: auto;
    background: none;
    display: flex;
    flex-direction: row;
    padding: 0px 36px 40px 36px;

    justify-content: end;
    position: relative;

    &::before {
      content: ' ';
      position: absolute;
      left: -500px;
      align-self: center;
      z-index: -1;
      height: 80%;
      width: 100%;
      background-color: ${colors.cyanGray};
    }
  }

  @media (${media.pc}) {
    margin-bottom: 100px;
    max-width: 1360px;
    padding: 0;
  }
`;

export const TextBlock = styled.div`
  padding: 50px 12px;
  background-color: ${colors.darkOrange};
  color: ${colors.white};

  @media (${media.tablet}) {
    align-self: center;
    padding: 60px 60px 60px 60px;
    margin-right: -313px;
    z-index: 10;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    flex: 1;
  }

  @media (${media.pc}) {
    padding: 100px 100px 100px 100px;
    margin-right: -301px;
    flex: 1;
  }
`;
export const H2 = styled.h2`
  font-size: 30px;
  font-style: italic;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  padding-bottom: 20px;

  @media (${media.tablet}) {
  }

  @media (${media.pc}) {
    font-style: normal;
    font-family: Helvetica;
    font-size: 50px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const Wrap = styled.div`
  @media (${media.tablet}) {
  }
  @media (${media.pc}) {
  }
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;

  @media (${media.tablet}) {
  }

  @media (${media.pc}) {
    min-width: 540px;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: auto;

  @media (${media.tablet}) {
    position: relative;
    width: 542px;
    height: 553px;
  }

  @media (${media.pc}) {
    width: 895px;
    height: 759px;
  }
`;

export const LearnMore = styled.div`
  margin-bottom: 50px;

  @media (${media.tablet}) {
    max-width: 676px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 65px;
    column-gap: 55px;
  }

  @media (${media.pc}) {
    max-width: 1214px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    column-gap: 281px;
    padding-left: 0;
  }
`;

export const About = styled.p`
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin: 30px 12px 40px 12px;

  @media (${media.tablet}) {
    margin: 0;
    /* flex: 2; */
    max-width: 400px;
  }

  @media (${media.pc}) {
    font-family: Helvetica;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0px;
    text-align: left;
    max-width: 640px;
    font-style: normal;
  }
`;

export const ButtonWrap = styled.div`
  margin: 0 0 0 12px;

  @media (${media.tablet}) {
  }
`;
