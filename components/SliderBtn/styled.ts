import styled from 'styled-components';
import { media, colors } from '../../styles/variables';

export const Button = styled.button`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: none;
  background-color: ${colors.pink};
  transition: 0.5s;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media (${media.tablet}) {
    background-color: ${colors.white};

    &.isActive {
      background-color: ${colors.pink};
      transition: 0.5s;
    }
  }

  @media (${media.pc}) {
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  position: relative;
  row-gap: 25px;
  cursor: pointer;
  margin-bottom: 55px;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 40px;
    background: linear-gradient(to right, #f8f8f817 9%, #fcfcfc 100%);
  }

  @media (${media.tablet}) {
    margin: 0;
    &::after {
      display: none;
    }

    flex-direction: column;
    z-index: 2;
  }

  @media (${media.pc}) {
  }
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;

  @media (${media.tablet}) {
    font-style: italic;
  }

  @media (${media.pc}) {
    font-size: 18px;
  }
`;
