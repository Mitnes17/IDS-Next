import next from 'next';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import * as S from './styled';
import Image from 'next/image';
import Logo from '../../public/img/logo.png';
import { MenuItem } from '../MenuItem';
import { data } from '../MenuItem/mockData';
import { Button } from '../Button/Button';

export const Header = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(false);

  const [height, setHeight] = useState(0);

  const burger = () => {
    setActive((prev) => !prev);
    document.body.classList.toggle('active');
  };

  const keyEvent = (event: any) => {
    if (event.code == 'Escape') {
      setActive((prev) => false);
      document.body.classList.remove('active');
    }
  };

  useEffect(() => document.addEventListener('keydown', keyEvent), []);

  return (
    <S.Header ref={ref}>
      <S.Container>
        <S.Logo href='#'>
          <Image
            src={Logo}
            alt='logo'
          />
        </S.Logo>
        <S.Burger
          onClick={burger}
          className={active ? 'active' : ''}
        >
          <S.Bar></S.Bar>
        </S.Burger>
        <S.NavWrap className={active ? 'active' : ''}>
          <S.MenuList>
            {data.map((item, index) => (
              <MenuItem
                text={data[index].text}
                key={data[index].id}
                href={data[index].href}
              />
            ))}
          </S.MenuList>
          <S.Button>
            <Button
              href='#'
              text='Download pdf'
            />
          </S.Button>
        </S.NavWrap>
      </S.Container>
    </S.Header>
  );
};
