import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

import Navbar from '@/layouts/Navbar';

import { features, menu } from '../consts';
import SearchBar from '../SearchBar';
import MenuItem from './MenuItem';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PopoverMenu() {
  return (
    <Popover className="relative z-50">
      {({ open }) => (
        <>
          <div className="relative bg-white">
            <div className="mx-auto flex">
              <Popover.Button
                className={classNames(
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-blue-600 px-[.6rem] focus:ring-white focus:ring-2 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                )}
              >
                {open ? (
                  <div className="mx-auto flex flex-col text-[.5rem] font-bold uppercase tracking-widest text-white sm:text-[.6rem]">
                    <XIcon
                      className="-mb-1 block h-8 w-8 text-white sm:h-12 sm:w-12"
                      aria-hidden="true"
                    />
                    <span>Close</span>
                  </div>
                ) : (
                  <div className="mx-auto flex flex-col text-[.5rem] font-bold uppercase tracking-widest text-white sm:text-[.6rem]">
                    <MenuIcon
                      className="-mb-1 block h-8 w-8 sm:h-12 sm:w-12"
                      aria-hidden="true"
                    />
                    <span>Menu</span>
                  </div>
                )}
              </Popover.Button>
              <Navbar />
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute inset-x-0 z-10 w-full border-b-8 border-blue-800">
              <div className="relative mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                <nav
                  className="grid gap-y-10 bg-gray-200 py-2 px-0 sm:grid-cols-1 lg:py-5 lg:px-8"
                  aria-labelledby="solutions-heading"
                >
                  <div>
                    <div className="sm:hidden">
                      <SearchBar className="focus:ring-blue-500" />
                    </div>
                    <ul
                      role="list"
                      className="mx-auto divide-y divide-gray-500 text-center"
                    >
                      {menu.map((item) => (
                        <li
                          key={item.name}
                          className="flow-root py-3 hover:underline sm:px-0"
                        >
                          <a
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3 text-base font-bold text-gray-900 no-underline transition duration-150 ease-in-out sm:justify-center"
                          >
                            <span className="ml-4">{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
                <div className="w-full bg-white md:col-span-1 lg:col-span-4 lg:px-8 xl:pl-9">
                  <MenuItem features={features} />
                  <div className="hidden bg-white py-7 lg:block">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                      <dl className="lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                        {features.map((feature) => (
                          <div key={feature.name}>
                            <dt>
                              <p className="mt-5 font-bold uppercase leading-6 text-blue-800">
                                {feature.name}
                              </p>
                              <div className="mb-3 mt-2 h-[3px] w-12 bg-yellow-400"></div>
                            </dt>
                            <dd className="mt-4 space-y-3 pb-6 text-base sm:pb-0">
                              {feature.description}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
