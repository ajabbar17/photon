
import Image from "next/image";
import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";
import MarqueeSection from "./components/Marquee";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <div className="bg-[#0a2540]">
      <Navbar />
      <HeroSection />
     <Welcome />
     <MarqueeSection />
     <Footer />
   
    </div>
  );
}
