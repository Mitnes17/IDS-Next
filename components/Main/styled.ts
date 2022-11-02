import styled from 'styled-components';
import { Props } from './Main';

export const Main = styled.main<Props>`
  transition: 0.3s;
  padding-top: ${({ $padding }) => $padding}px;
`;
