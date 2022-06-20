import { services } from './consts';

export default function Services() {
  return (
    <div className="pt-10">
      <h2>Popular Services and Links</h2>
      <div className="mb-3 mt-2 h-2 w-full bg-blue-800" />

      <div className="grid grid-cols-1 gap-10 gap-y-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={(service.email, index)}
            className="relative flex items-center space-x-3 bg-white"
          >
            <a
              tabIndex={0}
              href="#"
              className="text-lg font-bold text-blue-500 ring-blue-500 focus:outline-none focus:ring-2"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              <p tabIndex={-1}>{service.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
