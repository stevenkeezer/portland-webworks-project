import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SearchBar({ className }: { className?: string }) {
  return (
    <form
      action="#"
      method="POST"
      autoComplete="off"
      className="mt-3 flex w-full px-4 pb-2 sm:max-w-2xl sm:px-0 sm:pb-0"
    >
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full px-4 text-base shadow-inner transition-opacity transition-colors duration-300 placeholder:italic placeholder:text-gray-700 focus:border-blue-500 focus:border-opacity-60 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 sm:mr-3 sm:flex-1"
        placeholder="Search rfa.sc.gov"
      />
      <div className="hidden sm:block">
        <button type="submit" className="pw-btn">
          <span className="hidden sm:block">Search</span>
          <SearchIcon className="ml-2.5 h-5 w-5" />
        </button>
      </div>
      <button
        className={classNames(
          className || 'focus:ring-white',
          'block border border-transparent bg-blue-500 py-3 px-5 text-white ring-blue-500 transition-all duration-200 focus:outline-none active:ring-2 sm:hidden'
        )}
      >
        <span className="hidden sm:block">Search</span>
        <SearchIcon className="h-5 w-5 sm:ml-3" />
      </button>
    </form>
  );
}
