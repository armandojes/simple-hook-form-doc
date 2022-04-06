import { FC, useEffect } from 'react';

const ScrollRestoration: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollRestoration;
