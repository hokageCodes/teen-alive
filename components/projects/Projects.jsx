import Image from 'next/image';
import Img1 from '../../assets/proj1.png';
import Img2 from '../../assets/proj2.png';
import Img3 from '../../assets/proj3.png';

export default function Home() {
  return (
    <div className="bg-white py-16 px-4 md:px-8">
      {/* Title Section */}
      <div className="max-w-2xl text-left ml-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide uppercase text-black">
          Projects We Have Done
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-4">
          Creating a Place Where Children with Special Needs Can Thrive
        </h1>
      </div>

      {/* Card Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {/* Card 1 */}
        <div className="relative text-white rounded-lg overflow-hidden shadow-lg w-full">
          <Image
            src={Img1}
            alt="Mission Smile 1k"
            layout="responsive"
            width={411}
            height={421}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4 sm:p-6 flex flex-col justify-end">
            <div className="max-w-[315px]">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">Outdoor Charity</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
            <button className="mt-4 bg-white text-black py-2 px-4 md:py-3 md:px-6 rounded-lg text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative text-white rounded-lg overflow-hidden shadow-lg w-full">
          <Image
            src={Img2}
            alt="Weekly Excursions"
            layout="responsive"
            width={411}
            height={421}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4 sm:p-6 flex flex-col justify-end">
            <div className="max-w-[315px]">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">Weekly Excursions</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
            <button className="mt-4 bg-white text-black py-2 px-4 md:py-3 md:px-6 rounded-lg text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative text-white rounded-lg overflow-hidden shadow-lg w-full">
          <Image
            src={Img3}
            alt="Monthly Public Awareness"
            layout="responsive"
            width={411}
            height={421}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4 sm:p-6 flex flex-col justify-end">
            <div className="max-w-[315px]">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">Monthly Public Awareness</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
            <button className="mt-4 bg-white text-black py-2 px-4 md:py-3 md:px-6 rounded-lg text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
