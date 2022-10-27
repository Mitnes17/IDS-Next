import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import { ReadMore } from '../ReadMore/ReadMore';
import Fishing from '../../public/img/fishing.png';

export const Voldemort = () => {
  return (
    <S.Section>
      <S.Container>
        <S.Blue />
        <S.Main>
          <S.Voldemort>
            <S.Figure>
              <S.ImageWrap>
                <Image
                  layout='responsive'
                  src={Fishing}
                  alt='fishing'
                />
              </S.ImageWrap>
            </S.Figure>
            <S.Text>
              <S.TextWrap>
                <S.H3>Lord Voldemort</S.H3>
                <S.H4>
                  Vice-President for Knowledge Management and Sustainable Development Activities
                </S.H4>
                <S.H4>lordVoldemort@example.com</S.H4>
              </S.TextWrap>
            </S.Text>
          </S.Voldemort>
          <S.FishText>
            <S.FishH2>IDS’s Message</S.FishH2>
            <S.FishH3>
              Knowledge management has always been intertwined with the work of Insomniac Design
              Study (IDS).
            </S.FishH3>
            <S.FishP>
              Sed aliquet eleifend dapibus. Aliquam erat volutpat. Aliquam erat volutpat. Curabitur
              ante lorem, vehicula ut lacinia cursus, posuere nec turpis. Praesent bibendum turpis
              ut leo porttitor, sit amet tempor turpis convallis. Nullam nec pharetra turpis, sed
              elementum arcu. Nullam venenatis sit amet justo id euismod. Nulla dictum ligula
              commodo venenatis luctus. Duis at enim suscipit, luctus nunc eu, varius lacus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Mauris eu lacus congue, lacinia leo non, facilisis tortor. Nam ultricies enim
              at dolor porta, at malesuada lorem luctus.
            </S.FishP>
          </S.FishText>
        </S.Main>
        <S.Red />
      </S.Container>
      <ReadMore
        text={
          'Duis at enim suscipit, luctus nunc eu, varius lacus. Pellentesque habitant morbistique senectus et netus et malesuada fames ac turpis egestas. Mauris eu lacuscongue'
        }
        textHide={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea, amet ipsum velit deserunt quidem sunt esse eius maxime cumque vero commodi, minima asperiores id et facere. Asperiores nisi, ab doloribus ut laboriosam neque possimus? Facere porro nobis blanditiis saepe explicabo voluptates quam ea!'
        }
      />
    </S.Section>
  );
};
