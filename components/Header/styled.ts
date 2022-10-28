import styled from 'styled-components';
import { colors, media } from '../../styles/variables';

export const Header = styled.header`
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray};
  transition: 0.3s;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1680px;
  padding: 20.5px 60px 20.5px 47px;
  margin: auto;

  @media (max-width: 1679px) {
    position: relative;
    padding: 9.5px 30px 9.5px 36px;
  }

  @media (max-width: 767px) {
    padding: 7.5px 20px 7.5px 12px;
  }
`;

export const Logo = styled.a`
  height: 68px;

  @media (max-width: 1679px) {
    height: 52px;
    width: 80px;
  }

  @media (max-width: 767px) {
    width: 58px;
    height: 38px;
  }
`;

export const Bar = styled.span`
  position: absolute;
  top: calc(50% - 1.5px);
  left: 0;
  width: 30px;
  height: 3px;
  background: ${colors.pink};
  border-radius: 2px;
  opacity: 1;
  transition: 0.3s ease-in-out;
  pointer-events: auto;

  @media (${media.tablet}) {
    display: block;
    top: calc(50% - 2px);
    left: 0;
    width: 100%;
    height: 4px;
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
  }

  @media (${media.pc}) {
    opacity: 0;
    pointer-events: none;
  }
`;

export const Burger = styled.div`
  display: none;

  @media (max-width: 1679px) {
    display: block;
    position: absolute;
    top: 23px;
    right: 36px;
    width: 40px;
    height: 15px;
    z-index: 15;
    padding-bottom: 10px;
    border: none;
    background: none;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &::before,
    &::after {
      content: ' ';
    }

    &::before,
    &::after {
      display: block;
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      opacity: 1;
      background: ${colors.pink};
      border-radius: 2px;
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
        background-color: ${colors.black};
        top: 11px;
      }

      &::before {
        transform: rotate(135deg);
      }

      &::after {
        transform: rotate(-135deg);
      }

      ${Bar} {
        opacity: 0;
        left: -60%;
      }
    }
  }

  @media (max-width: 767px) {
    top: 19px;
    right: 20px;
    width: 30px;
    height: 12px;
    padding-bottom: 5px;

    &::before,
    &::after {
      height: 3px;
    }

    &.active {
      &::after {
        top: 7px;
      }

      &::before {
        top: 7px;
      }

      ${Bar} {
        opacity: 0;
        left: -60%;
      }
    }
  }
`;

export const MenuList = styled.nav`
  text-transform: uppercase;

  @media (max-width: 1679px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 90px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 50px;
    font-size: 26px;
  }

  @media (min-width: 1680px) {
    display: flex;
    align-items: center;
    column-gap: 120px;
    margin-right: 190px;
    text-align: center;
  }
`;

export const NavWrap = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: 54px;
  background-color: white;
  transition: 0.5s;

  &.active {
    right: 0;
    transition: 0.5s;
  }
  @media (${media.tablet}) {
    margin-top: 72px;
  }

  @media (${media.pc}) {
    display: flex;
    justify-content: end;
    position: static;
    height: auto;
    align-items: center;
    margin-top: 0;
    background-color: none;
  }
`;

export const Button = styled.div`
  margin-left: 12px;

  @media (${media.tablet}) {
    margin-left: 36px;
  }
  @media (${media.pc}) {
    margin-left: 0;
  }
`;
