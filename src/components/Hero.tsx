import Image from 'next/image';
import React from 'react';

import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <div className="relative z-10 border-t-[20px] border-blue-800 sm:border-t-[8px]">
      <div className="absolute inset-x-0 bottom-0" />
      <div className="mx-auto">
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              objectFit="cover"
              layout="fill"
              className="h-full w-full"
              src="/landing-banner.jpg"
              alt=""
            />
          </div>
          <div className="relative -mt-4 px-4 py-16 sm:px-6 sm:py-[6.1rem] lg:px-8">
            <h1 className="text-center text-3xl font-semibold leading-7 tracking-tight text-white lg:text-3xl lg:leading-9">
              <span className="mx-auto block max-w-[45rem]">
                Providing independent research, analysis, and resources to
                facilitate informed policy decisions and
              </span>
              <span> administration of services</span>
            </h1>

            <div className="mx-auto px-6 pt-7 sm:flex sm:max-w-none sm:justify-center">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
