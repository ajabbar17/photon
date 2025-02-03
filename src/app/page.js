
import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";
import MarqueeSection from "./components/Marquee";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import ServiceCarousel from "./components/Alt3";


export default function Home() {
  
  return (
    <div className="bg-[#0a2540]">
      <Navbar />
      <HeroSection />
     <Welcome />
     <ServiceCarousel />
     <MarqueeSection />
     <Footer />
   
    </div>
  );
}
