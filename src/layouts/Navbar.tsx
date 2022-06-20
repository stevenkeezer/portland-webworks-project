import { Disclosure } from '@headlessui/react';
import Link from 'next/link';

import NavbarSearch from '@/components/NavbarSearch';

const navigation = [
  { name: 'About Us', href: '#', current: false },
  { name: 'Events', href: '#', current: false },
  { name: 'Boards & Committees', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      id="navigation form content"
      aria-label="navigation"
      className="z-50 w-full shadow"
    >
      <div className="mx-auto pr-3">
        <div className="relative flex h-[4.1rem] items-center justify-between transition-all duration-300 md:h-[6.9rem]">
          <div className="flex flex-1  items-center justify-start pt-1 pl-2 transition-all duration-200 sm:items-stretch sm:pt-0 md:pl-5">
            <div tabIndex={0} className="flex shrink-0 items-center">
              <img
                className="block h-[3.2rem] w-auto cursor-pointer transition-all duration-200 hover:opacity-70 focus:border-2 md:h-[5.3rem]"
                src="/rfa-logo.png"
                alt="Workflow"
              />
            </div>
            <div className="flex items-center pl-2 sm:pl-3.5">
              <div className="flex flex-col">
                <div className="font-roboto text-[.65rem] font-bold uppercase leading-3 text-blue-700 transition-all duration-300  md:text-lg md:leading-6">
                  South Carolina
                  <div>Revenue and Fiscal Affairs Office</div>
                </div>
                <div className="pt-0.5 text-[.65rem] italic leading-[.6rem] text-blue-800 sm:pt-0 md:text-sm">
                  <span className="hidden xs:block">
                    Transforming data into solutions for South Carolina
                  </span>
                  <span className="xs:hidden">
                    Transforming data into solutions for SC
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 xl:block">
              <div className="space-x-6 pr-5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'text-white'
                        : 'text-blue-700 hover:bg-gray-700 hover:text-white',
                      'px-3 py-2 rounded-md text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <span
                      tabIndex={0}
                      className="cursor-pointer text-sm uppercase text-blue-800 hover:underline active:text-blue-600"
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <NavbarSearch />
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
