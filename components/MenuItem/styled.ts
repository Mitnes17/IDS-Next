import styled from 'styled-components';
import { colors, media } from '../../styles/variables';
import { StyleProps } from './MenuItem';

export const Item = styled.a<StyleProps>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  padding: 50px 30px 0px 12px;
  align-self: flex-start;
  text-align: left;
  color: ${({ $color }) => ($color ? $color : colors.black)};
  text-transform: uppercase;

  &:first-child {
    padding: 30px 30px 0px 12px;
  }

  &:hover {
    transition: 0.4s;
    color: ${colors.pink};
  }

  @media (${media.tablet}) {
    padding: 90px 50px 0px 36px;

    &:first-child {
      padding: 50px 50px 0px 36px;
    }
  }
  @media (${media.pc}) {
    &:first-child {
      padding: 0;
    }

    padding: 0;
  } ;
`;
