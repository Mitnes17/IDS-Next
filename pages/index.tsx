import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { Header } from '../components/Header/Header';
import { Welcome } from '../components/Welcome/Welcome';
import { Footer } from '../components/Footer/Footer';
import { Knowledge } from '../components/Knowledge/Knowledge';
import { Moon } from '../components/Moon/Moon';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Welcome />
        <Knowledge />
        <Moon />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
