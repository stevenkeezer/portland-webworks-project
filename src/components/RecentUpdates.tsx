import { updates } from './consts';

export default function RecentUpdates() {
  return (
    <div>
      <h3>Recent Updates</h3>
      <div className="my-4 h-[.2rem] w-12 bg-yellow-400"></div>
      <ul role="list" className="pb-6 sm:pt-2">
        {updates.map((update, index) => (
          <li key={update.id + index} className="relative bg-white py-3">
            <div className="flex justify-between space-x-3">
              <div className="min-w-0 flex-1">
                <a
                  tabIndex={0}
                  href="#"
                  className="block text-lg font-bold text-blue-500 ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  {update.sender}
                </a>
                <p className="text-sm text-gray-700">{update.subject}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-600">Published:</span>{' '}
                {update.time}
              </p>
              {update.badge}
            </div>
          </li>
        ))}
      </ul>

      <button type="submit" className="pw-btn ring-blue-600">
        View More
      </button>
    </div>
  );
}
