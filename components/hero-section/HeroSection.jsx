"use client";
import React from "react";

// components/Hero.js
export default function Hero() {
    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale')" }} // Placeholder image
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text Content */}
            <div
                className="absolute text-white px-4 md:px-8 lg:px-16 top-[15%] left-[5%] md:top-[20%] md:left-[10%] lg:top-[25%] lg:left-[15%] max-w-full"
                style={{
                    width: "90%",
                    maxWidth: "640px",
                    height: "auto",
                    maxHeight: "330px",
                    gap: "0px",
                    opacity: "1", // Assuming opacity is intended to be visible
                }}
            >
                <h1
                    className="font-bold text-3xl md:text-4xl lg:text-5xl"
                    style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "700",
                        lineHeight: "1.2",
                        textAlign: "left",
                    }}
                >
                    Inclusive care for children with special needs
                </h1>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-6">
                    <button
                        className="bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition py-3 px-6 text-sm md:text-base"
                        style={{
                            width: "148px",
                            height: "51px",
                            padding: "12px 16px",
                            gap: "10px",
                            borderRadius: "4px",
                            opacity: "1",
                            fontSize: "14px"
                        }}
                    >
                        What we do
                    </button>

                    <button
                        className="flex items-center text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-black transition py-3 px-6 text-sm md:text-base"
                        style={{
                            width: "148px",
                            height: "51px",
                            padding: "12px 16px",
                            gap: "10px",
                            borderRadius: "4px",
                            opacity: "1",
                            fontSize: "14px"
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.25-11.458a.75.75 0 011.06.674v4.884a.75.75 0 01-1.22.557l-3.219-2.442a.75.75 0 010-1.228l3.22-2.445a.75.75 0 01.16-.11z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>Play Video</span>
                    </button>
                </div>
            </div>

            {/* Footer Info */}
            <div className="absolute bottom-4 w-full flex flex-col md:flex-row items-center justify-between px-4 text-sm text-gray-200">
                <span className="text-left md:ml-[30px] lg:ml-[60px]">230 children under our care</span>
                <hr className="flex-1 mx-4 border-gray-300" />
                <span className="text-right md:mr-[30px] lg:mr-[60px]">58 donations collected</span>
            </div>
        </section>
    );
}
