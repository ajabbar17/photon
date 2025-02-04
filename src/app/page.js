
import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";
import MarqueeSection from "./components/Marquee";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import ServiceCarousel from "./components/Alt3";
import Alt1 from "./components/Alt1";
import Image from "next/image";
import Alt4 from "./components/Alt4";


export default function Home() {
  
  return (
    <div className="bg-[#0d2538] relative">
      <Navbar />
      <Image src="/heroimg.png"
          width={1920}
          height={1080}
          className='absolute top-0  z-40 left-0 '
        alt="hero" />
      <HeroSection />
     <Welcome />
     {/* <ServiceCarousel /> */}
     <Alt4 />
     <MarqueeSection />
     <Footer />
     {/* <Alt1 /> */}
   
    </div>
  );
}
