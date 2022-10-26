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
      background-color: ${colors.gray};
      width: 100%;
      height: 489px;
      z-index: -2;
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
  /* max-width: 308px; */
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 50px 0px 50px 12px;

  @media (${media.tablet}) {
    flex-direction: row;
    padding-top: 0px;
    padding-left: 36px;
    padding-right: 36px;
    padding-bottom: 0px;
    margin-bottom: 40px;
    align-items: flex-start;
    max-width: 696px;
  }

  @media (${media.pc}) {
    margin-top: 71px;
    max-width: 1214px;
    padding-right: 36px;
    padding-left: 85px;
  }
`;

export const Left = styled.div`
  background-color: ${colors.deepBlue};
  flex: 1;
  color: ${colors.white};
  padding: 50px 20px 86px 20px;

  @media (${media.tablet}) {
    padding: 70px 40px 257px 40px;
    flex: 1;
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

  @media (${media.tablet}) {
  }

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
  color: ${colors.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding: 50px 20px;
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
