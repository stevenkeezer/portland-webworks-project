import {
  ClockIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from '@heroicons/react/outline';

import { events } from './consts';

export default function CalendarEvents() {
  return (
    <div className="pw-events">
      <h3>Calendar of Events</h3>
      <div className="my-4 h-[.2rem] w-12 bg-yellow-400"></div>
      <ul role="list" className="pb-4 pt-5 sm:pt-7">
        {events.map((event, index) => (
          <li key={event.name + index} className="pb-2">
            <div className="flex gap-x-5">
              <div className="flex h-[4.5rem] w-16  shrink-0 flex-col items-center justify-center -space-y-2 bg-yellow-400 font-bold text-white">
                <div>Nov</div>
                <div className="text-2xl">25</div>
              </div>

              <div className="-mt-1 border-b pb-5 sm:col-span-2">
                <div className="">
                  {event.badge}
                  <div className="space-y-1 py-1 text-lg font-semibold leading-6">
                    <h4>{event.name}</h4>
                  </div>
                  <ul role="list" className="flex flex-col space-y-2">
                    <li className="flex items-center">
                      <ClockIcon className="mt-1 h-4 w-4 text-yellow-400" />
                      <span>{event.time}</span>
                    </li>
                    <li>
                      <LocationMarkerIcon className="mt-1 h-4 w-4 text-yellow-400" />
                      <span>{event.location}</span>
                    </li>
                    <li
                      tabIndex={0}
                      className="cursor-pointer text-blue-500 underline"
                    >
                      <PhoneIcon className="mt-1 h-4 w-4 text-yellow-400" />
                      <span>{event.phone}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button type="submit" className="pw-btn ring-blue-600">
        View All Events
      </button>
    </div>
  );
}
