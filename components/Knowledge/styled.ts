import styled from 'styled-components';
import { colors, media } from '../../styles/variables';

export const Section = styled.section`
  margin-bottom: 50px;
  background: linear-gradient(to right, ${colors.gray} 50%, ${colors.white} 50%);

  @media (${media.tablet}) {
    background: none;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 489px;
      z-index: -2;
      background-color: ${colors.gray};
    }
  }

  @media (${media.pc}) {
    margin-bottom: 120px;
    &::before {
      height: 540px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px 50px 12px;
  margin: auto;

  @media (${media.tablet}) {
    max-width: 696px;
    flex-direction: row;
    align-items: flex-start;
    padding: 0 36px;
    margin-bottom: 40px;
  }

  @media (${media.pc}) {
    max-width: 1214px;
    margin-top: 71px;
    padding: 0 36px 0 85px;
  }
`;

export const Left = styled.div`
  flex: 1;
  padding: 50px 20px 86px 20px;
  color: ${colors.white};
  background-color: ${colors.deepBlue};

  @media (${media.tablet}) {
    flex: 1;
    padding: 70px 40px 257px 40px;
  }

  @media (${media.pc}) {
    padding: 120px 50px 233px 108.5px;
  }
`;

export const H3 = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding-bottom: 30px;
  text-transform: uppercase;

  @media (${media.pc}) {
    font-size: 18px;
    line-height: 27px;
    padding-bottom: 40px;
  }
`;

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;

  @media (${media.tablet}) {
  }

  @media (${media.pc}) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;

  @media (${media.tablet}) {
    flex: 0;
  }

  @media (${media.pc}) {
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: auto;

  @media (${media.tablet}) {
    width: 388px;
  }

  @media (${media.pc}) {
    width: 769px;
  }
`;

export const Text = styled.div`
  margin-top: -30px;
  z-index: 4;

  @media (${media.tablet}) {
    margin-top: -100px;
  }

  @media (${media.pc}) {
    margin-top: -300px;
  }
`;

export const TextContainer = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  padding: 50px 20px;
  text-align: left;
  color: ${colors.white};
  background-color: ${colors.blue};

  @media (${media.tablet}) {
    padding: 50px;
  }

  @media (${media.pc}) {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0px;
    text-align: left;
    padding: 85px 114px 100px 115px;
  }
`;

export const P = styled.p``;
