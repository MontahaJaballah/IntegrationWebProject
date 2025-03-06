import React from "react";

import asian_doctor from "../images/asian_doctor.png";

export default function YourDaily() {
    return (
        <div className="bg-bg-white">
            <div className="p-6 flex flex-col md:flex-row">
                {/* Left side content */}
                <div className="md:w-1/2 text-center mb-6 md:mb-0">
                    <h2 className="text-4xl font-bold text-custom-brown mb-6 leading-tight">
                        Your daily  calorie needs!
                        <br />

                    </h2>
                    <div className="text-gray-800 space-y-1 text-center">
                        <p className="font-medium">The calorie number represents the amount of</p>
                        <p>energy a food or drink provides when consumed. It is a unit of measurement used</p>
                        <p>to quantify the energy stored in </p>
                        <p className="font-medium">macronutrients</p>
                    </div>
                    <div className="mt-10 flex items-center justify-center space-x-6">

                        <button className="flex items-center text-gray-800 hover:text-rose-800 transition-colors">
                            Show more →
                        </button>
                    </div>

                    {/* Right side image */}

                </div>

                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={asian_doctor}
                        alt="Chef with ramen bowl"
                        className="max-h-80 object-contain"
                    />
                </div>
            </div>
        </div>
    )
}
