import styles from "./page.module.css";
import Banner from './components/banner/Banner'
import Link from 'next/link'
import Fixtures from "./components/fixtures/Fixtures"
import News from './components/news/News'
import Gallery from "./components/gallery/Gallery"
import Log from './components/log/Log'
import Footer from './components/footer/Footer'
export default function Home() {
  return (
    <main className={styles.main}>
      <Banner/>
      <Fixtures/>
      <News/>
      <Log/>
      <Gallery/>
      <Footer/>
    </main>
  );
}




