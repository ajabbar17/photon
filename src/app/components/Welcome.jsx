export default function Welcome() {
    return (
      <section className="bg-[#0a2540]  flex justify-start items-start text-white py-20 px-6 md:px-12">
        <div className="   w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to Photon Engineering Realm,
          </h1>
          <p className="mt-4 text-lg  text-gray-300">
            Where innovation and expertise come together to redefine engineering
            excellence. From harnessing solar power to ensuring safety and comfort
            in your spaces, we provide sustainable and reliable solutions tailored
            to your needs.
          </p>
          <button className="mt-8 px-6 py-3 bg-[#ff6a3d] text-white text-base font-medium rounded-3xl hover:bg-[#C6370C] transition">
            Explore Our Services
          </button>
        </div>
      </section>
    );
  }
  