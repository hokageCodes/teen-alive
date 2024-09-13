"use client";
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <section className="relative bg-gray-50 py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div className="lg:pr-10">
                    <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">
                        Know About Us
                    </h2>
                    <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
                        We provide a place for children with special needs
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <p className="text-gray-600 mb-8">
                        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                    </p>
                    <a href="#" className="inline-block px-8 py-4 text-white bg-yellow-500 rounded-md font-semibold shadow-md hover:bg-yellow-600 transition-all duration-300">
                        Learn more
                    </a>
                </div>

                {/* Video Section */}
                <div className="border-2 relative w-full h-full flex justify-center lg:justify-end">
                    {!videoLoaded && (
                        <Skeleton className="w-full h-96" />
                    )}
                    <video
                        className={`rounded-xl object-cover w-full h-auto ${!videoLoaded ? 'hidden' : ''}`}
                        onLoadedData={handleVideoLoad}
                        controls
                        poster="https://via.placeholder.com/600x400" // Replace with actual poster image URL
                    >
                        <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" /> {/* Random placeholder video URL */}
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Become a Sponsor Section */}
            <div className="mt-16 text-center">
                <h3 className="text-lg font-semibold text-gray-700 uppercase mb-4">Become a Sponsor</h3>
                <p className="text-gray-600 mb-4">
                    Give, and it will be given to you. A good measure, pressed down, shaken together, and running over, will be poured into your lap. <br /> — Luke 6:38
                </p>
                <button 
                    onClick={toggleModal} 
                    className="inline-block px-8 py-4 text-white bg-blue-500 rounded-md font-semibold shadow-md hover:bg-blue-600 transition-all duration-300">
                    Join Us as a Sponsor
                </button>
            </div>

            {/* Popup Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                        <h3 className="text-xl font-semibold mb-4">Become a Sponsor</h3>
                        <p className="text-gray-600 mb-4">
                            Fill out the form below to express your interest in supporting us. We would love to partner with you!
                        </p>

                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                phone: '',
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string()
                                    .min(2, 'Too Short!')
                                    .required('Name / Organization Name is required'),
                                email: Yup.string()
                                    .email('Invalid email address')
                                    .required('Email is required'),
                                phone: Yup.string()
                                    .matches(/^[0-9]+$/, 'Only numbers are allowed')
                                    .min(10, 'Phone number should be at least 10 digits')
                                    .required('Phone number is required'),
                            })}
                            onSubmit={(values) => {
                                console.log('Sponsor Form Values:', values);
                                // Future implementation: handle form submission (success and error handling)
                            }}
                        >
                            <Form className="space-y-4">
                                <div>
                                    <label className="block text-gray-700">Name / Organization Name</label>
                                    <Field 
                                        name="name" 
                                        className="w-full p-3 border border-gray-300 rounded-md" 
                                        type="text" 
                                        placeholder="Enter your name or organization" 
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Email</label>
                                    <Field 
                                        name="email" 
                                        className="w-full p-3 border border-gray-300 rounded-md" 
                                        type="email" 
                                        placeholder="Enter your email" 
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Phone Number</label>
                                    <Field 
                                        name="phone" 
                                        className="w-full p-3 border border-gray-300 rounded-md" 
                                        type="text" 
                                        placeholder="Enter your phone number" 
                                    />
                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div className="flex justify-between items-center mt-6">
                                    <button 
                                        type="button" 
                                        onClick={toggleModal} 
                                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all duration-300">
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit" 
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300">
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutSection;
