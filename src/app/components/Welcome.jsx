import Image from "next/image";

export default function Welcome() {
    return (
      <section className="bg-[#0d2538] flex md:flex-row flex-col justify-between gap-4 md:gap-0  text-white py-9 md:py-20 px-6 md:px-16">
        <div className=" w-full  md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-5xl mt-20 heading tracking-widest font-bold leading-tight">
            Welcome to Photon
            <br /> Engineering Realm,
          </h1>
          <p className="mt-4 text-lg detail text-white">
            Where innovation and expertise come together to redefine engineering
            excellence. From harnessing solar power to ensuring safety and comfort
            in your spaces, we provide sustainable and reliable solutions tailored
            to your needs.
          </p>
          <button className="mt-8 px-3 py-3 w-[187px] h-[47px] bg-[#f25525] text-white text-base font-normal rounded-3xl hover:bg-[#C6370C] transition">
            Explore Our Services
          </button>
        </div>
        <div>
          <Image  
            src="/welcome.png"
            width={494}
            height={467}
            alt="Welcome to Photon Engineering Realm" 
          />
        </div>
      </section>
    );
  }
  