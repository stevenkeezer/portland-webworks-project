import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavbarSearch() {
  return (
    <Popover className="relative hidden bg-white lg:block">
      <div className="flex items-center justify-between md:justify-start md:space-x-4">
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    tabIndex={0}
                    role="button"
                    aria-label="navbar-search-btn"
                    title="navbar-search-btn"
                    aria-labelledby="navbar-search-btn"
                    className={classNames(
                      open
                        ? ' bg-blue-500 text-white rounded-b-none'
                        : 'text-gray-500',
                      'group bg-white inline-flex border rounded-[2px] focus:ring-2 focus:ring-blue-600 focus:ring-opacity-40 focus-within:ring-2 ring-white p-2.5 border-blue-500 items-center text-base font-medium hover:text-gray-900'
                    )}
                  >
                    <div>
                      <SearchIcon
                        className={classNames(
                          open ? 'text-white' : 'text-blue-600',
                          'h-5 w-5'
                        )}
                        aria-hidden="true"
                      />
                    </div>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-0"
                    enterTo="opacity-100 translate-y-[.001rem]"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-1"
                    leaveTo="opacity-0 translate-y-0"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 w-[26rem] translate-x-[-24.69rem] px-2 shadow-lg sm:px-0">
                      <div className="overflow-hidden">
                        <div className="relative grid gap-6 bg-blue-500 px-5 py-6 sm:gap-8 sm:p-3">
                          <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">
                              Enter search term
                            </label>
                            <div className="relative w-full pr-3">
                              <input
                                type="text"
                                id="simple-search"
                                className="block w-full border border-white bg-white px-3 py-2 text-sm text-gray-900 "
                                placeholder="Enter search term"
                                required
                              />
                            </div>
                            <button className="pw-btn-stroke">Search</button>
                          </form>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right p-2 transition md:hidden"
        >
          <div className="rounded-lg bg-white shadow-lg ring-1">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
