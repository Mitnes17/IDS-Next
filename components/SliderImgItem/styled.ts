import styled from 'styled-components';
import { media, colors } from '../../styles/variables';

export const SliderImgBlock = styled.div`
  @media (${media.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 312px;
    margin-right: 36px;
  }

  @media (${media.pc}) {
    margin-right: 0;
  }
`;

export const BackgroundImg = styled.figure`
  @media (${media.tablet}) {
    display: flex;
    justify-content: center;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 2px;
      background: blue;
      transform: rotate(90deg);
      background-color: #fbb316;
      border-radius: 50%;
      z-index: 2;
      box-shadow: 0 0 0 2px #fbb316, 0 11px 0 2px ${colors.darkOrange},
        0 -11px 0 2px ${colors.green};
      top: calc(50% - 100px);
      left: -5%;
    }

    &::before {
      content: '';
      position: absolute;
      top: calc(50% - 105px);
      width: 335px;
      height: 188px;
      padding-top: 10px;
      z-index: 2;
      background: #e1e3e8;
      border-radius: 3px;
    }
  }
  @media (${media.pc}) {
    &::before {
      top: calc(10% - 10px);
      width: 691px;
      height: 399px;
      border-radius: 6px;
    }

    &::after {
      width: 5px;
      height: 5px;
      top: 10%;
      left: -8%;
      z-index: 3;
      box-shadow: 0 0 0 2px #fbb316, 0 15px 0 2px ${colors.darkOrange},
        0 -15px 0 2px ${colors.green};
    }
  }
`;

export const ImageWrap = styled.figure`
  @media (${media.tablet}) {
    position: absolute;
    top: calc(50% - 95px);
    width: 335px;
    height: 188px;
    z-index: 3;
    opacity: 1;
    animation: opacity 3s;
    /* animation-delay: 2s; */

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
    width: 691px;
    height: 389px;
    top: -13%;
  }
`;
