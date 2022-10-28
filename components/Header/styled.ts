import styled from 'styled-components';
import { colors, media } from '../../styles/variables';

export const Header = styled.header`
  background-color: ${colors.white};
  flex: 1;
  border-bottom: 1px solid ${colors.gray};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  transition: 0.3s;
`;

export const Container = styled.div`
  margin: auto;
  max-width: 1680px;
  display: flex;
  flex-direction: row;
  padding: 20.5px 60px 20.5px 47px;

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
  pointer-events: auto;
  width: 30px;
  height: 3px;
  top: calc(50% - 1.5px);
  left: 0;
  position: absolute;
  background: ${colors.pink};
  border-radius: 2px;
  opacity: 1;
  transition: 0.3s ease-in-out;

  @media (${media.tablet}) {
    display: block;
    height: 4px;
    width: 100%;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
    top: calc(50% - 2px);
  }

  @media (${media.pc}) {
    opacity: 0;
    pointer-events: none;
  }
`;

export const Burger = styled.div`
  display: none;

  @media (max-width: 1679px) {
    position: absolute;
    display: block;
    top: 23px;
    right: 36px;
    width: 40px;
    height: 15px;
    padding-bottom: 10px;
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
    }

    &::before,
    &::after {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: ${colors.pink};
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
    width: 30px;
    height: 12px;
    padding-bottom: 5px;
    right: 20px;
    top: 19px;

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

// export const Nav = styled.div`
//   @media (min-width: 1680px) {
//     flex: 1;
//     display: flex;
//     align-items: center;
//     flex-direction: row;
//     background: none;
//   }

//   @media (max-width: 1679px) {
//     padding-top: 50px;
//     position: fixed;
//     top: 0;
//     right: -100%;
//     width: 100%;
//     height: 100%;
//     background-color: ${colors.white};
//     display: flex;
//     flex-direction: column;
//     font-size: 30px;
//     align-items: left;
//     overflow: auto;
//     transition: right 0.3s ease-in-out;
//     z-index: 1;

//     &.active {
//       right: 0;
//     }

//     &.active::before {
//       content: ' ';
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 72px;
//       background-color: ${colors.white};
//     }
//   }
//   @media (max-width: 767px) {
//     &:before {
//       height: 52px;
//     }
//   }
// `;

export const MenuList = styled.nav`
  text-transform: uppercase;

  @media (max-width: 1679px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 90px;
  }

  @media (max-width: 767px) {
    margin-bottom: 50px;
    font-size: 26px;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  @media (min-width: 1680px) {
    align-items: center;
    display: flex;
    text-align: center;
    column-gap: 120px;
    margin-right: 190px;
  }
`;

export const NavWrap = styled.div`
  position: fixed;
  top: 0;
  overflow: auto;
  margin-top: 54px;
  right: -100%;
  height: 100%;
  width: 100%;
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
    margin-top: 0;
    position: static;
    background-color: none;
    display: flex;
    justify-content: end;
    height: auto;
    align-items: center;
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
