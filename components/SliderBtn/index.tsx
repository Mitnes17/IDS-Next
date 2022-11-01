import { FC } from 'react';
import { Props } from './SliderBtn.d';
import * as S from './styled';

export const SliderBtn: FC<Props> = ({ text, onClick, className }) => {
  return (
    <S.Container onClick={onClick}>
      <S.Button className={className}></S.Button>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};
