import { useEffect, useState } from 'react';
import { Circle } from '../Circle/index';
import { circle } from './mokData';
import { LinkArrow } from '../LinkArrow/index';
import { colors } from '../../styles/variables';
import * as S from './styled';

export const CircleBlock = () => {
  const [id, setId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setId((id) => id + 1);

      if (id >= 11) setId((id) => 0);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <S.Section>
      <S.Wrap>
        <S.Text>
          <S.H2>Space</S.H2>
          <S.P>
            Aliquam ornare mauris ex, sed tincidunt neque facilisis id. Maecenas vitae ante nec
            massa varius volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Praesent congue orci et nunc ultricies dapibus. Aliquam condimentum porttitor nulla.
            Phasellus suscipit risus sit amet mi interdum faucibus. Quisque egestas lorem ante, id
            eleifend velit mattis nec.
          </S.P>
          <S.LinkWrap>
            <LinkArrow
              href='#'
              text='View all'
              $color={colors.pink}
              $textColor={colors.pink}
            />
          </S.LinkWrap>
        </S.Text>
        <Circle
          $color={circle[id].color}
          text={circle[id].text}
          count={circle[id].count}
        />
      </S.Wrap>
    </S.Section>
  );
};
