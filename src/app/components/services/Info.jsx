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

  const formatWithBoldAbbreviations = (text) => {
    // Pattern to match words in parentheses or all-caps words
    const abbreviationPattern = /\(([^)]+)\)|\b[A-Z]{2,}\b/g;
    
    return text.split(abbreviationPattern).map((part, index) => {
      if (part && part.match(/^[A-Z]{2,}$/) || (index % 2 === 1)) {
        return <strong key={index}>({part})</strong>;
      }
      return part;
    });
  };

  return (
    <section className="bg-[#0d2538] text-white py-16 px-6 md:px-10 flex flex-col md:flex-row xl:justify-center items-center gap-10 overflow-hidden">
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
            
            <ul className="list-disc pl-5">
              {span.map((item, index) => (
                <li key={index} className="font-light detail">
                  {formatWithBoldAbbreviations(item)}
                </li>
              ))}
            </ul>
          </h1>
}
        </div>
      </div>
    </section>
  );
}
