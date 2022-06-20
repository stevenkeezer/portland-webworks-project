import React from 'react';

const footerNavigation = {
  solutions: [
    { name: 'Privacy Statement', href: '#' },
    { name: 'FOIA', href: '#' },
    { name: 'Disclosures and Reporting', href: '#' },
    { name: 'Report Fraud', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  company: [
    {
      name: 'Main Office',
      href: '#',
      street: '1000 Assembly St, Rembert Dennis Building, Suite 421',
      city: 'Columbia',
      state: 'SC',
      zip: '29201',
    },
    {
      name: 'Geodetic survery section',
      href: '#',
      street: '5 Geoglogy Rd',
      city: 'Columbia',
      state: 'SC',
      zip: '29201',
    },
    {
      name: 'Health and demographics division',
      href: '#',
      street: '1000 Assembly St, Rembert Dennis Building, Suite 421',
      city: 'Columbia',
      state: 'SC',
      zip: '29201',
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-blue-800 pb-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="xs:px-6 mx-auto w-full px-4 pt-12 sm:px-6 lg:px-24 lg:pt-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="text-xl font-bold text-white xl:col-span-1">
            <div className="flex flex-col -space-y-1">
              <span>South Carolina</span>
              <span>Revenue and Fiscal Affairs Office</span>
            </div>
            <img
              className="mt-6 h-32"
              src="/rfa-logo-transparent.png"
              alt="Company name"
            />
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-1 lg:gap-8">
              <div>
                <ul role="list" className="space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li tabIndex={0} key={item.name}>
                      <a
                        tabIndex={-1}
                        href={item.href}
                        className="text-base text-white no-underline hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <ul role="list" className="space-y-4 text-white">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name} className="space-y-1">
                      <div className="text-sm font-bold uppercase text-gray-500 no-underline">
                        {item.name}
                      </div>
                      <div
                        tabIndex={0}
                        className="cursor-pointer hover:underline"
                      >
                        <span className="xl:whitespace-nowrap">
                          {item.street}
                        </span>
                        <div>
                          {item.city}, {item.state} {item.zip}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
