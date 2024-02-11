import Loader from "@/components/Loader/Loader";
import Header from "@/components/Header/Header";
import HeaderContent from "@/components/HeaderContent/HeaderContent";
import FeaturedCategories from "@/components/FeaturedCategories/FeaturedCategories";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import StayInTouch from "@/components/StayInTouch/StayInTouch";
import Benefits from "@/components/Benefits/Benefits";
import Footer from "@/components/Footer/Footer";
import HeaderSwiper from "@/components/HeaderContent/HeaderSwiper";

export default function Home() {
  return ( <>
      <Header/>
      {/*<HeaderContent/>*/}
      <HeaderSwiper/>
      <FeaturedCategories/>
      <PopularProducts/>
      <StayInTouch/>
      <Benefits/>
      <Footer/>
      </>
  );
}
