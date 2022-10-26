import styled from 'styled-components';
import { colors, media } from '../../styles/variables';
import { StyleProps } from '../Arrow/Arrow.d';

export const Arrow = styled.i<StyleProps>`
  position: relative;
  display: inline-block;
  margin-left: 40px;
  color: ${({ $color }) => ($color ? $color : colors.black)};
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  border-width: 3px 3px 0 0;
  border-style: solid;
  transform: rotate(45deg);

  &::before {
    content: '';
    right: 0;
    top: -2.5px;
    position: absolute;
    height: 3px;
    box-shadow: inset 0 0 0 32px;
    transform: rotate(-45deg);
    width: 30px;
    transform-origin: right top;
    box-sizing: border-box;
  }

  &::after {
    content: '';
    box-sizing: border-box;
  }
`;
