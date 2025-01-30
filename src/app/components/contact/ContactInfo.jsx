import Image from "next/image";
import React from "react";

export default function ContactInfo({
  imageUrl,
  title,
  description,
  span,
  spandetail,
}) {
  return (
    <section className="bg-[#0d2538] text-white py-16 px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
      {/* Image Section */}
      <div className="">
        <Image
          src={imageUrl}
          width={567}
          height={646}
          alt="Solar Panels"
          className=""
        />
      </div>

      {/* Text Section */}
      <div className="w-full text-white md:w-1/2">
        <h2 className="text-3xl md:text-5xl leading-10 source font-bold mb-4">
          {title}
        </h2>
        <div className="md:pr-20">
          <p className="text-xl detail font-light leading-relaxed">{description}</p>
        <p className="font-medium text-xl detail">{span}<span className="font-light">{spandetail}</span></p>

        </div>
        <button className="mt-8 px-3 py-3 w-[187px] source h-[47px] bg-[#f25525] text-white text-base font-normal rounded-3xl hover:bg-[#C6370C] transition">
            Get In Touch
          </button>
      </div>
    </section>
  );
}
