"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Info({
  imageUrl,
  title,
  description,
  title2,
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

  return (
    <section className="bg-[#0d2538] text-white py-16 px-6 md:px-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
      {/* Image Section */}
      <div ref={imageRef} className="opacity-0">
        <Image
          src={imageUrl}
          width={567}
          height={646}
          alt="Solar Panels"
        />
      </div>

      {/* Text Section */}
      <div ref={contentRef} className="w-full md:w-1/2 opacity-0">
        <h2 className="text-3xl md:text-5xl leading-10 source font-bold mb-4">
          {title}
        </h2>
        <div className="xl:pr-20">
          <p className="text-xl detail font-light">{description}</p>
          { title2 === undefined ? null :
          <h1 className="text-xl source font-light">
            {title2}
            <br />
            
            <p className="font-medium detail">{span[0]}<span className="font-light">{spandetail[0]}</span></p>
            <p className="font-medium detail">{span[1]}<span className="font-light">{spandetail[1]}</span></p>
            <p className="font-medium detail">{span[2]}<span className="font-light">{spandetail[2]}</span></p>
          </h1>
}
        </div>
      </div>
    </section>
  );
}
