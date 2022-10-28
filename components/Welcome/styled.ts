import styled from 'styled-components';
import { colors, media } from '../../styles/variables';

export const Container = styled.section`
  /* max-width: 296px; */
  display: flex;
  flex-direction: column;
  font-weight: normal;
  padding: 104px 12px 0px 12px;
  margin: 0 auto 46px;

  @media ${media.tablet} {
    margin: auto;
    max-width: 696px;
    flex-direction: row;
    justify-content: center;
    padding: 107px 36px 0px 36px;
    margin-bottom: 95px;
    column-gap: 40px;
  }

  @media ${media.pc} {
    max-width: 1215px;
    margin: 0 auto 120px;
    column-gap: 71px;
    padding: 182px 36px 0px 85px;
  }
`;

export const Left = styled.div`
  margin-bottom: 40px;

  @media ${media.tablet} {
    padding-top: 25px;
    margin: 0;
  }

  @media ${media.pc} {
    padding-top: 68px;
  }
`;

export const H1 = styled.h1`
  font-size: 40px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 40px;

  @media ${media.pc} {
    font-size: 70px;
    font-weight: bold;
    line-height: 75px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 60px;
  }
`;

export const H3 = styled.h3`
  color: ${colors.pink};
  text-transform: uppercase;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media ${media.tablet} {
    margin-bottom: 30px;
  }

  @media ${media.pc} {
    font-family: Helvetica;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 40px;
  }
`;

export const P = styled.p`
  color: ${colors.black};
  font-style: italic;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  @media ${media.pc} {
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media ${media.tablet} {
    padding: 0;
    width: 100%;
    height: auto;
    min-width: 320px;
    min-height: 320px;
  }

  @media ${media.pc} {
    width: 574px;
    height: 574px;
  }
`;

export const Right = styled.div``;
