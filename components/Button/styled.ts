import styled from 'styled-components';
import { colors, media } from '../../styles/variables';
import { Props } from './Button.d';

export const Link = styled.a`
  display: inline-block;
  text-align: left;
  align-self: flex-start;
  color: ${colors.white};
  background-color: ${colors.pink};
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;
  line-height: 21px;
  padding: 14px 27px 13px 24px;
  font-size: 14px;
  /* margin: 50px 0px 0px 30px; */

  &:hover {
    transition: 0.4s;
    color: ${colors.black};
  }

  @media (${media.tablet}) {
    /* margin-top: 90px;
    margin-left: 50px;
    margin-bottom: 100px; */
  }

  @media (${media.pc}) {
    padding: 12px 26px;
    font-size: 16px;
    line-height: 24px;
  }
`;
