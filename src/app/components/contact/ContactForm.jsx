"use client";
import {  MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const objectToSubmit = {
      ...formData,
      access_key: "bb1403d8-9a4e-4edd-8e59-2cb2714b41d9",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(objectToSubmit),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="min-h-screen bg-[#0d2538] py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl 3xl:max-w-screen mt-20 md:mt-10 xl:mt-0 mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 3xl:w-[86%] pt-4 sm:pt-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl 3xl:text-7xl heading font-bold text-white mb-2 sm:mb-3">
              Let&apos;s Talk About Everything!
            </h2>
            <p className="text-gray-300 detail text-base sm:text-lg md:text-xl 3xl:text-2xl mb-4 sm:mb-6 px-4 sm:px-0">
              Hello there! If you&apos;d like to ask us something, you can get
              in touch with us here. We&apos;d love to address any and all
              concerns you may have.
            </p>

            <div className="space-y-2 tracking-wider text-gray-300">
              <h3 className="text-xl sm:text-2xl 3xl:text-3xl font-semibold heading text-white">
                Head Office
              </h3>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="flex items-center detail">
                  <MapPin className="mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base 3xl:text-xl">
                    47-A, Agrics Town, Raiwind Road, Lahore
                  </span>
                </p>
                <p className="flex items-center detail">
                  <Phone size={24} className="text-white mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base 3xl:text-xl">03000320737</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[30%] mt-8 lg:mt-20 px-4 sm:px-0">
            <div className="rounded-3xl border border-[#ffffff64] bg-[#112b41] p-4 sm:p-6 max-w-md mx-auto lg:max-w-none">
              <form className="space-y-4 detail" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-white text-sm font-medium mb-1">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-1 border-b border-gray-300 bg-transparent text-white focus:border-green-500 focus:outline-none text-sm sm:text-base"
                    placeholder="How should we address you?"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-1 border-b border-gray-300 bg-transparent text-white focus:border-green-500 focus:outline-none text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-1 border-b border-gray-300 bg-transparent text-white focus:border-green-500 focus:outline-none text-sm sm:text-base"
                    placeholder="Your best email address?"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-1">
                    Subject*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-1 border-b border-gray-300 bg-transparent text-white focus:border-green-500 focus:outline-none text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-1">
                    Your Message*
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-0 py-1 border-b border-gray-300 bg-transparent text-white focus:border-green-500 focus:outline-none resize-none text-sm sm:text-base"
                    placeholder="What would you like to say?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-4 bg-[#f25525] heading hover:bg-[#C6370C] text-white font-medium rounded-md transition-colors duration-200 flex items-center justify-center text-sm sm:text-base"
                >
                  Send Your Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
