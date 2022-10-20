import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header/Header';
import styles from '../styles/Home.module.css';
import { Welcome } from '../components/Welcome/Welcome';

const Home: NextPage = () => {
  return (
    <div>
      <Header></Header>
      <Welcome></Welcome>
    </div>
  );
};

export default Home;
