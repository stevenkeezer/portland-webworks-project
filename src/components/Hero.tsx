import React from 'react';

import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <div className="relative z-10 border-t-[20px] border-blue-800 sm:border-t-[8px]">
      <div className="absolute inset-x-0 bottom-0" />
      <div className="mx-auto">
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="/landing-banner.jpg"
              alt=""
            />
          </div>
          <div className="relative -mt-4 py-8 px-4 xs:py-16 sm:px-10 sm:py-[6.1rem] lg:px-8">
            <h1 className="text-center font-roboto text-[1.5rem] font-medium leading-7 tracking-normal text-white xs:leading-7 sm:text-[1.85rem]  sm:leading-10 lg:text-[1.9rem]">
              <span className="mx-auto block max-w-[45rem] sm:px-16 md:px-0">
                Providing independent research, analysis, and resources to
                facilitate informed policy decisions
              </span>
              <span>and administration of services</span>
            </h1>

            <div className="mx-auto pt-7 xs:px-2 sm:flex sm:justify-center sm:px-10 md:max-w-none md:px-24">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
