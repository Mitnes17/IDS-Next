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
  width: 285px;
  height: 285px;
  border-radius: 50%;
  border: 1.5px solid ${({ $color }) => ($color ? $color : colors.pink)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: border-color 0.5s linear;

  @media (${media.tablet}) {
  }

  @media (${media.pc}) {
    width: 480px;
    height: 480px;
  }
`;

export const Small = styled.div`
  @media (${media.tablet}) {
  }
  @media (${media.pc}) {
  }
`;

export const Rotate = styled.div`
  border-radius: 50%;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  position: absolute;
  width: 100px;
  height: 100px;
  animation: rotate 60s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media (${media.tablet}) {
  }
  @media (${media.pc}) {
  }
`;

export const Dot = styled.div<StyleProps>`
  margin: 0;
  position: absolute;
  top: -101px;
  left: calc(50% - 8px);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 4px solid ${({ $color }) => ($color ? $color : colors.pink)};
  background-color: ${colors.white};
  transition: border-color 0.5s linear;

  @media (${media.tablet}) {
  }

  @media (${media.pc}) {
    width: 15px;
    height: 15px;
    border-width: 6px;
    top: -203px;
  }
`;

export const Wrap = styled.div<StyleProps>`
  width: 155px;
  height: 155px;
  border-radius: 50%;
  border: 1px solid ${({ $color }) => ($color ? $color : colors.pink)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  transition: border-color 0.5s linear;
  background-color: white;
  @media (${media.tablet}) {
  }

  @media (${media.pc}) {
    width: 250px;
    height: 250px;
    justify-content: center;
  }
`;

export const Figure = styled.figure<StyleProps>`
  margin-top: 38px;
  width: 49px;
  height: 49px;
  background-color: ${({ $color }) => ($color ? $color : colors.pink)};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s linear;

  @media (${media.tablet}) {
  }

  @media (${media.pc}) {
    width: 80px;
    height: 80px;
  }
`;

export const ImageWrap = styled.figure`
  width: 25px;
  height: 25px;

  @media (${media.tablet}) {
  }

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

  @media (${media.tablet}) {
  }
  @media (${media.pc}) {
  }
`;

export const Count = styled.h6`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: center;

  @media (${media.tablet}) {
  }
  @media (${media.pc}) {
  }
`;
