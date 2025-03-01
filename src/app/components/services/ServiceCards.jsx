"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServiceCards({ title, services }) {
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(titleRef.current,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }
    ).fromTo(cardsRef.current,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      },
      "-=0.4"
    );

    return () => {
      tl.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section className="bg-[#0d2538] text-white py-12 px-6 md:px-16 text-center overflow-hidden">
      <h2 
        ref={titleRef}
        className="text-3xl md:text-4xl font-bold mb-8 md:px-32 opacity-0"
      >
        {title}
      </h2>

      <div className="flex flex-col flex-wrap md:flex-row xl:justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="bg-[#D9D9D9] text-gray-900 transition-all detail text-start px-3 pr-12 py-1 md:py-3 rounded-[25px] shadow-lg w-full md:w-[409px] h-[150px] opacity-0"
          >
            <h3 className="text-lg mt-1 md:mt-4 font-bold text-[#F25525]">{service.heading}</h3>
            <p className="text-sm font-light">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
