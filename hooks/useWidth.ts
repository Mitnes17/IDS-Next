import { useEffect, useState } from 'react';

export const useWidth = (breakPoint: number) => {
  const [state, setState] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resize = () => {
      setWidth((prev) => window.innerWidth);

      setState((prev) => (width < breakPoint ? true : false));
    };

    window.addEventListener('resize', resize);

    resize();

    return () => window.removeEventListener('resize', resize);
  });

  return state;
};
