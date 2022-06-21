import { ChevronRightIcon } from '@heroicons/react/solid';

export default function FeatureList({ features }: { features: any[] }) {
  return (
    <div className="grid grid-cols-1 gap-2 p-4 py-6 xs:p-6 sm:grid-cols-2">
      {features.map((feature, index) => (
        <div
          tabIndex={0}
          key={feature.name + index}
          className="relative flex cursor-pointer items-center space-x-3 border-2 border-white bg-white px-6 py-3 shadow-sm hover:border-blue-700 active:ring-2"
        >
          <div className="shrink-0">
            <img className="h-10 w-10" src={feature.imageUrl} alt="" />
          </div>
          <div className="min-w-0 flex-1 pl-3">
            <a
              tabIndex={-1}
              href="#"
              className="uppercase no-underline focus:outline-none"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-blue-800 xs:text-sm">
                {feature.name}
              </p>
            </a>
          </div>
          <ChevronRightIcon className="h-6 w-6 text-blue-600" />
        </div>
      ))}
    </div>
  );
}
