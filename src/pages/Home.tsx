import HomeHeader from "../component/HomeHeader.tsx";
import HomeFooter from "../component/HomeFooter.tsx";
import HeroSection from "../component/HeroSection";
import Subject from "../component/Subject";
import SocialSection from "../component/SocialSection";

const Home = () => {
  return (
    <div className="h-[100vh]">
      <HomeHeader />
      <HeroSection />
      <Subject />
      <SocialSection />
      <HomeFooter />
    </div>
  );
};

export default Home;
