import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import { Header } from '../components/Header/index';
import { Welcome } from '../components/Welcome/index';
import { Footer } from '../components/Footer/index';
import { Knowledge } from '../components/Knowledge/index';
import { Moon } from '../components/Moon/index';
import { CircleBlock } from '../components/CircleBlock/index';
import { Voldemort } from '../components/Voldemort/index';
import { Slider } from '../components/Slider/index';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Welcome />
        <Knowledge />
        <Moon />
        <CircleBlock />
        <Voldemort />
        <Slider />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
