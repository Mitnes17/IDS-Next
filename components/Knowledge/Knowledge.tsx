import React, { useRef, useEffect, FC } from 'react';
import * as S from './styled';
import { colors } from '../../styles/variables';
import Image from 'next/image';
import knowledgeImg from '../../public/img/seamless.png';

export const Knowledge = () => {
  const ref = useRef<HTMLDivElement>(null);
  const contRef = useRef(null);

  useEffect(() => {
    if (ref.current != null && contRef.current) {
      const height = ref.current.getBoundingClientRect().height;
      const contH = contRef.current;
    }
  }, [ref]);

  return (
    <S.Section ref={contRef}>
      <S.Container>
        <S.Left ref={ref}>
          <S.H3>about</S.H3>
          <S.H2>IDS’s Knowledge Management in Action</S.H2>
        </S.Left>
        <S.Right>
          <S.ImgWrap>
            <Image
              src={knowledgeImg}
              alt=''
            ></Image>
          </S.ImgWrap>
          <S.Text>
            <S.TextContainer>
              <S.P>
                Sed metus ligula, auctor eget sagittis eu, elementum vel est. Nam in dolor bibendum,
                mollis felis eget, ullamcorper odio. Praesent nunc nisi, rutrum mollis cursus vel,
                aliquet a nunc. Sed a varius sapien. Nulla et massa faucibus, pharetra felis at,
                aliquam neque. Maecenas volutpat malesuada erat eu finibus. Proin in magna id massa
                pharetra rutrum eu nec est. Etiam ultrices tortor sapien, placerat ultrices nisl
                viverra non.
              </S.P>
            </S.TextContainer>
          </S.Text>
        </S.Right>
      </S.Container>
    </S.Section>
  );
};
