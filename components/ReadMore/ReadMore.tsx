import { useState, FC } from 'react';
import * as S from './styled';
import { Props } from './ReadMore.d';

export const ReadMore: FC<Props> = ({ text, textHide }) => {
  const [toggle, setToggle] = useState('');

  const toggler = (e: object) => {
    if (toggle == 'active') {
      setToggle('');
      setTimeout(() => setSmooth(toggle), 1);
    } else {
      setToggle('active');
      setTimeout(() => setSmooth(toggle), 1);
    }
  };

  const [smooth, setSmooth] = useState('');

  return (
    <S.Section>
      <S.TogglerWrap>
        <S.Toggler
          onClick={toggler}
          className={toggle}
        />
        <S.P>{text}</S.P>
      </S.TogglerWrap>
      <S.HiddenPar className={toggle}>
        <S.Hide className={smooth}>
          <S.P>{textHide}</S.P>
          <S.P>{textHide}</S.P>
          <S.P>{textHide}</S.P>
        </S.Hide>
      </S.HiddenPar>
    </S.Section>
  );
};
