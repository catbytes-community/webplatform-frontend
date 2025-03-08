import Footer from "../../../shared/ui/Footer/Footer";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import AboutUsLP from "../../AboutUsSectionForLandingPage/AboutUsLP";
import { HomeSection } from "./HomeSection";

export const MainPage = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutUsLP />
    </>
  );
};
