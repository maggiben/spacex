import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Launches from './components/Launches'
import SearchBar from './components/SearchBar'
import Logo from './components/Logo'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="SpaceX Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar />
      <main className={styles.main}>
        <Launches />
      </main>

      <footer className={styles.footer}>
        <Logo />
      </footer>
    </div>
  )
}

export default Home
