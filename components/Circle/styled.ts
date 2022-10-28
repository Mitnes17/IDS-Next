import styled from 'styled-components';
import { colors, media } from '../../styles/variables';
import { StyleProps } from './Circle.d';

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, ${colors.white} 50%, ${colors.grayCircle} 50%);

  @media (${media.tablet}) {
    display: flex;
    align-items: center;
    background: linear-gradient(to left, ${colors.white} 50%, ${colors.grayCircle} 50%);
  }

  @media (${media.pc}) {
    margin-right: 0px;
  }
`;

export const Grand = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 285px;
  height: 285px;
  border: 1.5px solid ${({ $color }) => ($color ? $color : colors.pink)};
  border-radius: 50%;
  transition: border-color 0.5s linear;

  @media (${media.pc}) {
    width: 480px;
    height: 480px;
  }
`;

export const Small = styled.div``;

export const Rotate = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  border-radius: 50%;
  animation: rotate 60s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const Dot = styled.div<StyleProps>`
  position: absolute;
  width: 8px;
  height: 8px;
  top: -101px;
  left: calc(50% - 8px);
  margin: 0;
  border: 4px solid ${({ $color }) => ($color ? $color : colors.pink)};
  border-radius: 50%;
  background-color: ${colors.white};
  transition: border-color 0.5s linear;

  @media (${media.pc}) {
    width: 15px;
    height: 15px;
    top: -203px;
    border-width: 6px;
  }
`;

export const Wrap = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 155px;
  height: 155px;
  background-color: white;
  border: 1px solid ${({ $color }) => ($color ? $color : colors.pink)};
  border-radius: 50%;
  transition: border-color 0.5s linear;
  @media (${media.tablet}) {
  }

  @media (${media.pc}) {
    justify-content: center;
    width: 250px;
    height: 250px;
  }
`;

export const Figure = styled.figure<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49px;
  height: 49px;
  margin-top: 38px;
  background-color: ${({ $color }) => ($color ? $color : colors.pink)};
  border-radius: 50%;
  transition: background-color 0.5s linear;

  @media (${media.pc}) {
    width: 80px;
    height: 80px;
  }
`;

export const ImageWrap = styled.figure`
  width: 25px;
  height: 25px;

  @media (${media.pc}) {
    width: 42px;
    height: 38px;
  }
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (${media.tablet}) {
  }
  @media (${media.pc}) {
  }
`;

export const Text = styled.h6`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: center;
`;

export const Count = styled.h6`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: center;
`;
