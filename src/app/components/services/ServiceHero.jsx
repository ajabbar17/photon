"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ServiceHero({ title, span, title2, imageUrl }) {
  const titleRef = useRef(null);
  const spanRef = useRef(null);
  const title2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // First animation - title
    tl.fromTo(
      titleRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Conditional animation for span
    if (span) {
      tl.fromTo(
        spanRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }

    // Last animation - title2
    tl.fromTo(
      title2Ref.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    return () => tl.kill();
  }, [span]); // Add span to dependency array

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        priority: true ,
        loading: "eager"
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="overflow-hidden">
        <h1 className="relative text-white text-4xl md:text-7xl heading font-normal text-center px-4">
          <span ref={titleRef} className="block opacity-0">
            {title}
          </span>
          <div className="flex justify-center items-center gap-2">
            {span && (
              <span ref={spanRef} className="text-[#F13232] inline-block opacity-0">
                {span}
              </span>
            )}
            <span ref={title2Ref} className="inline-block opacity-0">
              {title2}
            </span>
          </div>
        </h1>
      </div>
    </section>
  );
}
