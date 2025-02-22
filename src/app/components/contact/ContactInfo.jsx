"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactInfo({
  imageUrl,
  title,
  description,
  span,
  spandetail,
}) {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(imageRef.current,
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    ).fromTo(contentRef.current,
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
      tl.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  const handleEmailClick = () => {
    window.location.href = "/contact-form";
  };

  return (
    <section className="bg-[#0d2538] text-white py-16 px-6 md:px-10 flex flex-col md:flex-row items-center justify-center gap-10 overflow-hidden">
      {/* Image Section */}
      <div ref={imageRef} className="opacity-0">
        <Image
          src={imageUrl}
          width={567}
          height={646}
          alt="Solar Panels"
          className=""
        />
      </div>

      {/* Text Section */}
      <div ref={contentRef} className="w-full text-white md:w-1/2 opacity-0">
        <h2 className="text-3xl md:text-5xl leading-10 source font-bold mb-4">
          {title}
        </h2>
        <div className="md:pr-20">
          <p className="text-xl detail font-light leading-relaxed">{description}</p>
        <p className="font-medium text-xl detail">{span}<span className="font-light">{spandetail}</span></p>

        </div>
        <button 
          onClick={handleEmailClick}
          className="mt-8 px-3 py-3 w-[187px] source h-[47px] bg-[#f25525] text-white text-base font-normal rounded-3xl hover:bg-[#C6370C] transition"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}
