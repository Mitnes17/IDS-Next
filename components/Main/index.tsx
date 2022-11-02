import { FC } from 'react';
import { Props } from '../Main/Main.d';
import { Welcome } from '../Welcome/index';
import { Knowledge } from '../Knowledge/index';
import { Moon } from '../Moon/index';
import { CircleBlock } from '../CircleBlock/index';
import { Voldemort } from '../Voldemort/index';
import { Slider } from '../Slider/index';
import * as S from './styled';

export const Main: FC<Props> = ({ $padding }) => {
  return (
    <S.Main $padding={$padding}>
      <Welcome />
      <Knowledge />
      <Voldemort />
      <Slider />
      <CircleBlock />
      <Moon />
    </S.Main>
  );
};
