import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { withApollo } from '../hooks/withApollo'
import { ssrGetLaunches, PageGetLaunchesComp } from '../generated/page'
import styles from '../styles/Home.module.css'
import Nav from './Nav'
import Launches from './Launches'
import Logo from './Logo'

const Main: PageGetLaunchesComp = (props) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="SpaceX Explorer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={styles.main}>
          <Launches data={props?.data} />
        </main>

        <footer className={styles.footer}>
          <Logo />
        </footer>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetLaunches.getServerPage({
    variables: {
      limit: 18,
      offset: 0,
      find: { mission_name: '' }
    },
  }, ctx);
}

export default withApollo(ssrGetLaunches.withPage((arg) => {
  return { 
    variables: {
      limit: 18,
      offset: 0,
      find: { mission_name: '' }
    },
  }
})(Main))
