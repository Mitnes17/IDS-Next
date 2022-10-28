import styled from 'styled-components';
import { media, colors } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
  cursor: pointer;
  @media (${media.tablet}) {
  }
  @media (${media.pc}) {
  }
`;

export const Button = styled.button`
  @media (${media.tablet}) {
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
  }
  @media (${media.pc}) {
  }
`;

export const Text = styled.div`
  @media (${media.tablet}) {
  }
  @media (${media.pc}) {
  }
`;
