import type { NextPage } from 'next';
import { useState } from 'react';
import { Header } from '../components/Header/index';
import { Footer } from '../components/Footer/index';
import { Main } from '../components/Main/index';
import React from 'react';

const Home: NextPage = () => {
  const [height, setHeight] = useState();
  const onPadding = (childHeight: any) => {
    setHeight((height) => childHeight);
  };

  return (
    <div>
      <Header onPadding={onPadding} />
      <Main $padding={height} />
      <Footer />
    </div>
  );
};

export default Home;
