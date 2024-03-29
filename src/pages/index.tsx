import { ChevronUpIcon } from '@heroicons/react/outline';

import CalendarEvents from '@/components/CalandarEvents';
import Features from '@/components/Features';
import FeatureList from '@/components/Features/FeatureList';
import Hero from '@/components/Hero';
import PopoverMenu from '@/components/PopoverMenu';
import RecentUpdates from '@/components/RecentUpdates';
import Services from '@/components/Services';
import Footer from '@/layouts/Footer';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const features = [
  {
    name: 'Data & Research',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: '/icons/Data-Research-Icon.svg',
  },
  {
    name: 'Geography & Mapping',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: '/icons/Geography-Icon.svg',
  },
  {
    name: 'Programs & Services',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: '/icons/Programs-Icon.svg',
  },
  {
    name: 'Legislative Fiscal Impacts',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: '/icons/Legislative-Icon.svg',
  },
];

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Home Page | South Carolina Revenue and Fiscal Affairs Office"
          description="South Carolina Revenue and Fiscal Affairs Office"
        />
      }
    >
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <PopoverMenu />
          <main>
            <Hero />

            <div className="bg-gray-300">
              <div className="block sm:hidden">
                <FeatureList features={features} />
              </div>
              <div className="hidden px-6 sm:block">
                <Features features={features} />
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 xs:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl text-blue-800">
                <Services />
                <div className="py-10 lg:py-24">
                  <div className="mx-auto lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-24">
                    <div className="pb-12 lg:col-span-6 lg:pb-0">
                      <RecentUpdates />
                    </div>
                    <div className="lg:col-span-6">
                      <CalendarEvents />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex cursor-pointer items-center justify-end py-8 sm:p-6 sm:pb-6">
                Back to Top
                <ChevronUpIcon className="ml-3 h-8 w-8 rounded-full bg-blue-600 bg-opacity-80 p-1 text-white group-hover:bg-gray-500" />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Main>
  );
};

export default Index;
