import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';

export default function MenuItem({ features }: { features: any }) {
  return (
    <div className="block w-full lg:hidden">
      <div className="mx-auto w-full divide-y divide-gray-500 rounded-2xl bg-white">
        {features.map((feature: any) => (
          <Disclosure key={feature.name} as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg pl-4 text-left text-sm font-medium sm:px-0">
                  <span className="text-base font-bold uppercase tracking-wider text-blue-800 hover:underline">
                    {feature.name}
                  </span>
                  <div className="bg-blue-500 p-4">
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-white bg-blue-500`}
                    />
                  </div>
                </Disclosure.Button>

                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel
                    static
                    className="bg-yellow-100 bg-opacity-75 py-3 px-4  text-sm text-gray-500"
                  >
                    {feature.description}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
