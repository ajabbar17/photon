"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Welcome() {
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(contentRef.current,
            {
                x: -100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.3,
                ease: "power3.out"
            }
        ).fromTo(imageRef.current,
            {
                x: 100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            },
            "-=0.5"
        );

        return () => {
            if (tl) tl.kill();
        };
    }, []);

    return (
      <section className="bg-[#0d2538] overflow-hidden flex xl:flex-row flex-col justify-between gap-4 xl:gap-0 text-white py-9 md:py-20 px-6 md:px-10 xl:px-16">
        <div 
          ref={contentRef}
          className="w-full  xl:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left opacity-0"
        >
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
            Get Started
          </button>
        </div>
        <div 
          ref={imageRef}
          className="opacity-0"
        >
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
