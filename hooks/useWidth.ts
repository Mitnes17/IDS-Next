import { useEffect, useState } from 'react';

export const useWidth = (breakPoint: number) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const resize = () => {
      setState(window.innerWidth < breakPoint);
    };

    window.addEventListener('resize', resize);

    resize();

    return () => window.removeEventListener('resize', resize);
  }, [breakPoint]);

  return state;
};
