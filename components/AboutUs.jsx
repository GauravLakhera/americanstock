import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="flex flex-col w-11/12 md:w-9/12 mx-auto md:flex-row items-center gap-10">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/21.jpg"
            alt="ASMI Logo"
            width={400}
            height={400}
            className="w-full max-w-[30rem] object-contain rounded-2xl"
          />
          <h2 className="text-center mt-4 font-semibold text-xl text-gray-700">
            ABSOLUTE STOCK MARKET INSTITUTE
          </h2>
        </div>

        {/* Right - Content */}
        <div className="max-w-2xl text-gray-700">
          <h3 className="text-green-900 text-sm font-bold uppercase mb-2">About Us</h3>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Welcome to ABSOLUTE Stock Market Institute
          </h1>
          <p className="mb-6">
            At ABSOLUTE Institute, we are dedicated to empowering individuals with the knowledge
            and skills needed to excel in the stock market. Founded with a vision to democratize
            financial education, our institute has become a leading destination for aspiring
            traders, investors, and financial professionals.
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-800 mb-6">
            <div>➤ Skilled Instructors</div>
            <div>➤ Online Classes</div>
            <div>➤ International Certificate</div>
            <div>➤ Flexible Learning</div>
          </div>

          <button className="bg-green-950 hover:bg-green-800 text-white px-6 py-2 rounded-md text-sm font-medium">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
