import Image from "next/image";
import React from "react";

export default function Info({
  imageUrl,
  title,
  description,
  title2,
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
      <div className="w-full  md:w-1/2">
        <h2 className="text-3xl md:text-5xl leading-10 source font-bold mb-4">
          {title}
        </h2>
        <div className="pr-20">
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
