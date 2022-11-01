import styled from 'styled-components';
import { media, colors } from '../../styles/variables';

export const SliderTextItem = styled.div`
  padding: 0 0 50px 0;

  @media (${media.tablet}) {
    max-width: 296px;
    padding: 0;
    animation: opacity 0.5s linear;

    @keyframes opacity {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }

  @media (${media.pc}) {
    max-width: 440px;
  }
`;

export const H2 = styled.h2`
  font-family: Mercury Text G2;
  font-size: 28px;
  font-style: italic;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;

  @media (${media.pc}) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const H3 = styled.h3`
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 15px;

  @media (${media.tablet}) {
    margin-bottom: 20px;
  }

  @media (${media.pc}) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const H4 = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  font-style: bold;
  text-align: left;

  @media (${media.pc}) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 40px;

  @media (${media.pc}) {
    font-family: Helvetica;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const SvgWrap = styled.figure`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;

  @media (${media.tablet}) {
    margin-bottom: 26px;
  }

  @media (${media.pc}) {
    width: 90px;
    height: 90px;
  }
`;
