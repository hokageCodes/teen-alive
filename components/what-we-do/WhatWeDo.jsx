// components/WhatWeDo.js
import Image from 'next/image';
import React from 'react';
import WhatWeDoImg from '../../assets/whatwedo.png';

const WhatWeDo = () => {
    return (
        <section className="bg-[#f8eecf] py-8 lg:py-16 flex flex-col lg:flex-row justify-center items-center px-4 lg:px-24">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Text Side */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                        <hr className="w-8 border-t-4 border-black" />
                        <h3 className="text-lg lg:text-xl font-medium text-black">WHAT WE DO</h3>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                        Some services we provide for our children
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700 mb-6 lg:mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                    {/* Services List */}
                    <div className="space-y-6">
                        {/* Service 1 */}
                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <div className="bg-black p-3 rounded-md w-10 h-10 flex justify-center items-center">
                                <i className="fas fa-home text-white text-base lg:text-lg"></i>
                            </div>
                            <div>
                                <h3 className="text-base lg:text-lg font-semibold text-gray-800">Family support</h3>
                                <p className="text-sm lg:text-base text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                            </div>
                        </div>
                        {/* Service 2 */}
                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <div className="bg-black p-3 rounded-md w-10 h-10 flex justify-center items-center">
                                <i className="fas fa-heart text-white text-base lg:text-lg"></i>
                            </div>
                            <div>
                                <h3 className="text-base lg:text-lg font-semibold text-gray-800">Health benefits</h3>
                                <p className="text-sm lg:text-base text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                            </div>
                        </div>
                        {/* Service 3 */}
                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <div className="bg-black p-3 rounded-md w-10 h-10 flex justify-center items-center">
                                <i className="fas fa-graduation-cap text-white text-base lg:text-lg"></i>
                            </div>
                            <div>
                                <h3 className="text-base lg:text-lg font-semibold text-gray-800">Scholarships</h3>
                                <p className="text-sm lg:text-base text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                            </div>
                        </div>
                        {/* Service 4 */}
                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <div className="bg-black p-3 rounded-md w-10 h-10 flex justify-center items-center">
                                <i className="fas fa-hand-holding-heart text-white text-base lg:text-lg"></i>
                            </div>
                            <div>
                                <h3 className="text-base lg:text-lg font-semibold text-gray-800">Therapy</h3>
                                <p className="text-sm lg:text-base text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Side */}
                <div className="flex justify-center lg:w-1/2">
                    <div className="mt-16 rounded-xl overflow-hidden shadow-lg max-w-full">
                        <Image
                            src={WhatWeDoImg}
                            alt="Child with Headphones"
                            layout="responsive"
                            width={480}
                            height={658}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
