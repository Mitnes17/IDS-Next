import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import * as S from './styled';
import { Button } from '../Button/Button';
import MoonImgTablet from '../../public/img/Bitmap768.png';
import MoonImg from '../../public/img/Bitmap.png';

export const Moon = () => {
  const ref = useRef(null);
  const [tablet, setTablet] = useState(false);

  //image condition render
  useEffect(() => {
    let resize = () => {
      if (ref.current != null) {
        const width = document.body.getBoundingClientRect().width;

        width > 767 && width < 1680 ? setTablet(true) : setTablet(false);
      }
    };

    resize();

    const resizeEvent = () => {
      resize();
    };

    window.addEventListener('resize', resizeEvent);
  }, [ref]);

  return (
    <S.Section ref={ref}>
      <S.Container>
        <S.Main>
          <S.TextBlock>
            <S.H2>The IDS</S.H2>
            <S.Wrap>
              <S.P>
                Donec tristique dolor non lectus tincidunt, a lacinia libero suscipit. Quisque
                ultrices ex lectus, non lobortis nibh volutpat at. Vivamus auctor urna at nulla
                vulputate ultricies. Aliquam dictum est elit, a imperdiet ante sollicitudin et.
                Suspendisse accumsan non mauris vitae cursus. Nullam posuere dignissim arcu, quis
                dictum quam tempus eget. Sed scelerisque tortor eu hendrerit aliquam. Nullam maximus
                auctor vulputate. Maecenas in finibus metus.
              </S.P>
            </S.Wrap>
          </S.TextBlock>
          <S.ImageWrap>
            <Image
              src={tablet ? MoonImgTablet : MoonImg}
              alt=''
              layout={!tablet ? 'intrinsic' : 'fill'}
              // layout='fill'
            />
          </S.ImageWrap>
        </S.Main>
        <S.LearnMore>
          <S.About>
            To learn even more about IDS’s knowledge solutions, check out IDS’s TED-x style talks
            and podcasts.
          </S.About>
          <S.ButtonWrap>
            <Button
              href='#'
              text={'View podcasts'}
            />
          </S.ButtonWrap>
        </S.LearnMore>
      </S.Container>
    </S.Section>
  );
};
