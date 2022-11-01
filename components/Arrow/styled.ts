import styled from 'styled-components';
import { colors, media } from '../../styles/variables';
import { StyleProps } from '../Arrow/Arrow.d';

export const Arrow = styled.i<StyleProps>`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 10px;
  height: 10px;
  margin-left: 40px;
  color: ${({ $color }) => ($color ? $color : colors.black)};
  border-width: 3px 3px 0 0;
  border-style: solid;
  transform: rotate(45deg);

  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    right: 0;
    top: -2.5px;
    width: 30px;
    height: 3px;
    box-shadow: inset 0 0 0 32px;
    transform: rotate(-45deg);
    transform-origin: right top;
  }

  &::after {
    content: '';
    box-sizing: border-box;
  }
`;
