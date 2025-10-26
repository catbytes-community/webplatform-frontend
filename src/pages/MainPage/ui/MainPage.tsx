import Navbar from '../../../shared/ui/Navbar/Navbar';
import AboutUsLP from '../../AboutUsSectionForLandingPage/AboutUsLP';
import { HomeSection } from '../../HomeSection/ui/HomeSection';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <HomeSection />
        <AboutUsLP />
      </div>
    </>
  );
};
