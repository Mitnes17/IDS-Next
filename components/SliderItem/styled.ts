import styled from 'styled-components';
import { media, colors } from '../../styles/variables';

export const Wrap = styled.div``;

export const SliderItem = styled.div`
  @media (${media.tablet}) {
    margin: auto;
  }
`;

export const SliderWrap = styled.div`
  @media (${media.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 696px;
    margin: auto;
  }

  @media (${media.pc}) {
    align-items: center;
    justify-content: space-between;
    max-width: 1218px;
    margin: 70px auto 50px;
  }
`;

export const BtnWrap = styled.div`
  @media (${media.tablet}) {
    display: flex;
    justify-content: space-between;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: calc(100% + 70px);
      height: 1px;
      top: 5px;
      left: -35px;
      background: linear-gradient(to right, #f8f8f817 9%, #fcfcfc 100%);
      z-index: 0;
    }
  }

  @media (${media.pc}) {
    max-width: 1320px;
    margin: auto;
  }
`;

export const SWrap = styled.div``;
