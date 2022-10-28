import styled from 'styled-components';
import { colors, media } from '../../styles/variables';
import { StyleProps } from './Footer.d';

export const Footer = styled.footer`
  color: ${colors.white};
  background-color: ${colors.deepBlue};
`;

export const Container = styled.div`
  margin: auto;
  padding: 50px 12px;

  @media (${media.tablet}) {
    max-width: 696px;
    padding: 70px 36px;
  }

  @media (${media.pc}) {
    display: flex;
    max-width: 1110px;
    column-gap: 125px;
    padding: 120px 0px;
    margin: auto;
  }
`;

export const Left = styled.div`
  margin-bottom: 64px;

  @media (${media.pc}) {
    margin-bottom: 0px;
  }
`;

export const Right = styled.div`
  @media (${media.pc}) {
    flex: 0 0 350px;
  }
`;

export const AboutL = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;

  @media (${media.tablet}) {
    margin-bottom: 18px;
  }

  @media (${media.pc}) {
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const AboutR = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 35px;

  @media (${media.tablet}) {
    margin-bottom: 44px;
  }

  @media (${media.pc}) {
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const TextL = styled.p<StyleProps>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.13px;
  text-align: left;
  margin-bottom: 40px;

  @media (${media.tablet}) {
    margin-bottom: 54px;
  }

  @media (${media.pc}) {
    margin-bottom: 80px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 1.13px;
    text-align: left;
  }
`;

export const TextR = styled.p<StyleProps>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.13px;
  text-align: left;
  margin-bottom: 65px;

  @media (${media.pc}) {
    margin-bottom: 100px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 1.13px;
    text-align: left;
  }
`;

export const H3 = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.13px;
  text-align: left;

  @media (${media.pc}) {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 1.1px;
  }
`;
