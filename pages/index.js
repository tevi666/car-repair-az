import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import favicon from '../public/favicon.ico'
import Services from './components/Services'
import Swipers from './components/Swipers'
import Parallax from './components/Parallax'
import Map from './components/Map'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maşın təmiri</title>
        <meta keywords={'Baş leytenant ILQAR ZEYNALOV avtomobil təmiri sexi maşın ustası masin ustasi avto temir bilgeh bilgehde masin ustasi mator xadavoy yag deyisme baki nardaran mastaga azerbaycan qadın küçəsi 167 bilgeh qadin kucesi'} />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <Navbar />
      <Swipers />
      <Services />
      <Parallax />
      <Map />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
