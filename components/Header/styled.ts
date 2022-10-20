import styled from 'styled-components';
import { colors, media } from '../../styles/variables';

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7.5px 20px 7.5px 12px;

  @media ${media.tablet} {
    padding: 9.5px 30px 9.5px 36px;
  }

  @media ${media.pc} {
    padding: 7.5px 20px 7.5px 12px;
  }
`;

export const Logo = styled.a`
  width: 58px;
  height: 38px;

  @media ${media.tablet} {
    height: 52px;
    width: 80px;
  }

  @media ${media.pc} {
    height: 68px;
  }
`;

export const Img = styled.img`
  position: relative;
  z-index: 5;
  width: 58px;
  height: 38px;

  @media ${media.tablet} {
    height: 52px;
    width: 80px;
  }

  @media ${media.pc} {
    height: 68px;
  }
`;

export const Burger = styled.div`
  width: 36px;
  height: 24px;
  padding-bottom: 10px;
  &::before,
  &::after {
    height: 3px;
  }

  &.active {
    &::after {
      top: 11px;
    }

    &::before {
      top: 11px;
    }
  }

  @media ${media.tablet} {
    position: relative;
    display: block;
    width: 50px;
    height: 30px;
    padding-bottom: 20px;
    border: none;
    background: none;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    z-index: 15;

    &:focus {
      outline: none;
    }

    &::before,
    &::after {
      content: ' ';
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: $pink;
      border-radius: 2px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.3s ease-in-out;
    }
    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }

    &.active {
      &::before,
      &::after {
        background-color: $black;
        top: 13px;
      }

      &::before {
        transform: rotate(135deg);
      }

      &::after {
        transform: rotate(-135deg);
      }
    }
  }

  @media ${media.pc} {
    display: none;
  }
`;

export const Bar = styled.span`
  height: 3px;
  top: calc(50% - 1.5px);

  @media ${media.tablet} {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: $pink;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
    top: calc(50% - 2px);

    &.active {
      opacity: 0;
      left: -60px;
    }
  }
`;
