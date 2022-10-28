import { FC, useState, useRef, useEffect } from 'react';
import { SliderBtn } from '../SliderBtn';
import * as S from './styled';
import { data } from './mockData';

export const Slider = () => {
  return (
    <div>
      {data.map((item, index) => (
        <SliderBtn
          key={data[index].id}
          text={data[index].text}
        />
      ))}
    </div>
  );
};
