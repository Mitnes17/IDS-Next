import styled from 'styled-components';
import { media, colors } from '../../styles/variables';

export const Section = styled.section`
  text-align: left;
  padding: 0 12px;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;

  @media (${media.tablet}) {
    max-width: 570px;
    margin: auto;
  }

  @media (${media.pc}) {
    max-width: 860px;
    padding: 0;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    text-align: left;
    font-style: normal;
  }
`;

export const TogglerWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (${media.tablet}) {
    flex-direction: row;
    column-gap: 35px;
  }

  @media (${media.pc}) {
    font-family: Helvetica;
    column-gap: 50px;
  }
`;

export const Toggler = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${colors.orange};
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 1px);
    width: 16px;
    height: 2px;
    border-radius: 1.25px;
    transition: 0.3s;
    background: ${colors.white};
  }

  &::after {
    left: calc(50% - 8px);
    transition: 0.3s ease-in-out;
    transform: rotate(90deg);
  }

  &::before {
    left: calc(50% - 8px);
    transition: 0.3s ease-in-out;
  }

  &.active {
    &::after {
      transform: rotate(180deg);
    }
  }

  @media (${media.tablet}) {
    width: 36px;
    height: 36px;

    &::after,
    &::before {
      top: calc(50% - 1px);
      width: 18px;
      height: 2px;
    }

    &::after {
      left: calc(50% - 9px);
    }

    &::before {
      left: calc(50% - 9px);
    }
  }

  @media (${media.pc}) {
    width: 50px;
    height: 50px;

    &::after,
    &::before {
      width: 26px;
      height: 4px;
      top: calc(50% - 2px);
    }

    &::after {
      left: calc(50% - 13px);
    }

    &::before {
      left: calc(50% - 13px);
    }
  }
`;

export const P = styled.p`
  @media (${media.tablet}) {
    flex: 1;
  }
`;

export const HiddenPar = styled.div`
  display: none;

  &.active {
    display: block;
  }

  @media (${media.tablet}) {
    padding-left: 70px;
  }

  @media (${media.pc}) {
    margin: auto;
    padding-left: 100px;
    font-family: Helvetica;
  }
`;

export const Hide = styled.div`
  opacity: 1;
  transition: 0.7s;

  &.active {
    transition: 0.7s;
    opacity: 0;
  }
`;
