import React from 'react';

export default function EventsSection() {
  return (
    <div className="mt-16 px-4 sm:px-10 md:px-[110px] h-auto">
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Our Events</h2>
        <div className="border-t-2 border-gray-300 mt-2 w-24"></div>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* First Event */}
        <div className="flex items-center bg-yellow-400 rounded-lg p-6">
          <div className="flex items-center justify-center w-16 h-16">
            <span className="text-lg font-bold text-gray-900">13<br />APR</span>
          </div>
          <div className="ml-4">
            <p className="text-sm font-semibold text-gray-800 uppercase">Next Events</p>
            <h3 className="text-lg font-bold text-gray-900 mt-1">A day with our wonderful children</h3>
          </div>
          <div className="ml-auto flex items-center justify-center w-10 h-10 bg-white rounded-full">
            <span className="text-xl">→</span>
          </div>
        </div>

        {/* Second Event */}
        <div className="flex items-center bg-yellow-400 rounded-lg p-6">
          <div className="flex items-center justify-center w-16 h-16">
            <span className="text-lg font-bold text-gray-900">25<br />APR</span>
          </div>
          <div className="ml-4">
            <p className="text-sm font-semibold text-gray-800 uppercase">Next Events</p>
            <h3 className="text-lg font-bold text-gray-900 mt-1">Seminar: Caring for children with autism</h3>
          </div>
          <div className="ml-auto flex items-center justify-center w-10 h-10 bg-white rounded-full">
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
