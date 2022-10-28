import React, { FC } from 'react';
import * as S from './styled';
import { Arrow } from '../Arrow/index';
import { colors } from '../../styles/variables';
import { LinkArrow } from '../LinkArrow/index';

export const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.Left>
          <S.AboutL>About IDB Knowledge Advisory Services Center</S.AboutL>
          <S.TextL>
            Sed aliquet eleifend dapibus. Aliquam erat volutpat. Aliquam erat volutpat. Curabitur
            ante lorem, vehicula ut lacinia cursus, posuere nec turpis. Praesent bibendum turpis ut
            leo porttitor, sit amet tempor turpis convallis. Nullam nec pharetra turpis, sed
            elementum arcu. Nullam venenatis sit amet justo id euismod. Nulla dictum ligula commodo
            venenatis luctus. Duis at enim suscipit, luctus nunc eu, varius lacus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris
            eu lacus congue, lacinia leo non, facilisis tortor. Nam ultricies enim at dolor porta,
            at malesuada lorem luctus. Maecenas id porttitor magna. Suspendisse aliquet semper
            nulla, in aliquam elit auctor quis. Vestibulum vel turpis nibh.
          </S.TextL>
          <LinkArrow
            href={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrVrUv8l7CqNP5VT7kHf13i3ZrKvGYRfR9-C2xOVpVQ&s'
            }
            text={'Contact us'}
            $color={colors.white}
            $textColor={colors.white}
          />
        </S.Left>
        <S.Right>
          <S.AboutR>About IDB</S.AboutR>
          <S.TextR>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus nulla, mollis ac
            facilisis id, auctor sed justo. Sed ut consectetur massa. Fusce tristique semper justo,
            ac porta tortor consectetur a. Ut ullamcorper vel eros non efficitur. Fusce eu tortor
            ipsum. Suspendisse varius interdum dapibus. Suspendisse potenti.
          </S.TextR>
          <S.H3>&#169; 2021 Insomniac Design Study</S.H3>
          <S.H3>Website created by Insomniac Design, Inc.</S.H3>
        </S.Right>
      </S.Container>
    </S.Footer>
  );
};
