import styled from 'styled-components';
import { media, colors } from '../../styles/variables';
import imageUrl from '../../public/img/space-back.png';
import { StyleProps } from './SliderImgItem';

export const SliderImgBlock = styled.div<StyleProps>`
  @media (${media.tablet}) {
    border-bottom: 6px solid;
    border-color: ${({ $borderColor }) => $borderColor};
    margin-right: 36px;
  }
  @media (${media.pc}) {
    border-width: 7px;
  }
`;

export const Container = styled.div`
  @media (${media.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 280px;
    height: 312px;
    background-image: url(${imageUrl.src});
  }
  @media (${media.pc}) {
    width: 540px;
    height: 525px;
  }
`;

export const ImageWrap = styled.figure`
  @media (${media.tablet}) {
    position: absolute;
    width: 335px;
    height: 188px;
    z-index: 3;
    width: 335px;

    padding-top: 10px;
    z-index: 2;
    background: #e1e3e8;
    border-radius: 3px;

    &::after {
      content: '';
      position: absolute;
      top: 2%;
      left: 6%;
      width: 2px;
      height: 2px;
      background: blue;
      transform: rotate(90deg);
      background-color: #fbb316;
      border-radius: 50%;
      z-index: 2;
      box-shadow: 0 0 0 2px #fbb316, 0 11px 0 2px ${colors.darkOrange},
        0 -11px 0 2px ${colors.green};
    }

    img {
      object-fit: cover;
      animation: opacity 1s linear;

      @keyframes opacity {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }
    }
  }

  @media (${media.pc}) {
    padding-top: 20px;
    background: #e1e3e8;
    border-radius: 6px;
    width: 691px;
    height: 389px;

    &::after {
      width: 5px;
      height: 5px;
      box-shadow: 0 0 0 2px #fbb316, 0 15px 0 2px ${colors.darkOrange},
        0 -15px 0 2px ${colors.green};
    }
  }
`;
