
import Image from "next/image";
import Grid from "./components/Grid";
import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";
import MarqueeSection from "./components/Marquee";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import Alt1 from "./components/Alt1";
import Alt2 from "./components/Alt2";


export default function Home() {
  return (
    <div className="bg-[#0a2540]">
      <Navbar />
      <HeroSection />
     <Welcome />
      <Carousel />
     <MarqueeSection />
     <Footer />
     {/* <Alt1 /> */}
     <Alt2 />
    {/* <Grid /> */}
    </div>
  );
}
