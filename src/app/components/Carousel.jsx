"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

const Carousel = () => {
  const cards = [
    {
      title: 'SOLAR ENERGY SOLUTIONS',
      description: 'Embrace a sustainable future with our photovoltaic solar energy systems...',
    },
    {
      title: 'HEATING, VENTILATION, AND AIR CONDITIONING (HVAC)',
      description: "Maintain optimal comfort and efficiency with PER's expert HVAC solutions...",
    },
    {
      title: 'ELEVATORS AND ESCALATORS',
      description: 'Whether for commercial or residential projects, our reliable transportation systems...',
    },
    {
      title: 'OTHER SERVICES',
      description: 'Explore a range of additional services tailored to meet your unique requirements...',
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="w-full"
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            className="bg-blue-600 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between max-w-sm"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
              <p>{card.description}</p>
            </div>
            <button className="mt-6 py-2 px-4 bg-white text-blue-600 font-semibold rounded-lg flex items-center justify-center">
              Learn More <span className="ml-2">→</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
