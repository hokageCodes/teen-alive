import Image from 'next/image';
import BgImage from '../../assets/cont-banner.png'; // Replace with the actual path of your image
import EventsSection from '../event-section/EventSection';

export default function ContributionBanner() {
  return (
    <>
      <div className="relative w-full h-[384px] bg-transparent overflow-hidden">
        <Image
          src={BgImage}
          alt="Children with special needs"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 p-4 md:p-6 lg:p-8">
          <h2 className="text-white text-center text-lg md:text-2xl lg:text-3xl font-bold">
            You can contribute to provide a place for children with special needs!
          </h2>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
              Join as a volunteer
            </button>
            <button className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 rounded">
              Donate
            </button>
          </div>
        </div>
      </div>
      <EventsSection />
    </>
  );
}
