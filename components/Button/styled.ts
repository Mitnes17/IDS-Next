import styled from 'styled-components';
import { colors, media } from '../../styles/variables';
import { Props } from './Button.d';

export const Link = styled.a`
  display: inline-block;
  font-size: 14px;
  padding: 14px 27px 13px 24px;
  text-align: left;
  align-self: flex-start;
  color: ${colors.white};
  background-color: ${colors.pink};
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;
  line-height: 21px;

  &:hover {
    transition: 0.4s;
    color: ${colors.black};
  }

  @media (${media.pc}) {
    font-size: 16px;
    line-height: 24px;
    padding: 12px 26px;
  }
`;
