import React from "react";
import Image from "next/image";

function Hero({ image, paragraph1, paragraph2 }) {
  return (
    <>
      <div className="mb-20 w-screen">
        <Image
          src={`/images/siteImages/${image}`}
          alt="Placeholder"
          height={1000}
          width={2000}
          layout="responsive"
        />
      </div>
      <div className="container w-10/12 mx-auto  sm:w-8/12 md:w-7/12 lg:w-5/12">
        <div>
          <p className="text-gray-500 font-light tracking-wider mb-6">
            {paragraph1}
          </p>
          <p className="text-gray-500 font-light tracking-wider mb-20">
            {paragraph2}
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
