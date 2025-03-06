import React from "react";

import tunisangirl from "../images/tunisian girl.png";
import badge2 from "../images/badge 2.jpg";
import badge3 from "../images/badge 3.png";
import badge from "../images/badge.png";

export default function MyProfile() {
    return (
        <div className="bg-[#804C3B] min-h-[50vh] p-8 flex flex-col items-center justify-start w-full">


            {/* Title */}
            <h1 className="text-[#F8D568] text-3xl font-bold mb-6">My Profile</h1>

            <div className="flex flex-col md:flex-row gap-6 max-w-3xl w-full">
                {/* Profile Section - Left Column */}
                <div className="bg-white border border-custom-yellow rounded-competition p-6 flex-1 shadow-md flex flex-col items-center w-[300px] h-[250px]">
                    <img
                        src={tunisangirl}
                        alt="Profile"
                        className="w-24 h-24 object-cover rounded-full mb-3 shadow-md"
                    />
                    <div className="w-full text-center">
                        <p className="text-gray-800 font-medium">
                            <span className="font-bold">name : </span>Sarra tounsi
                        </p>
                        <p className="text-gray-800 font-medium mt-1">
                            <span className="font-bold">adresse : </span>Sarra tounsi@gmail.com
                        </p>
                        <div className="mt-3">
                            <button className="bg-white border border-custom-brown text-custom-brown px-4 py-1 rounded-competition text-sm hover:bg-red-600 transition ">
                                Change
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Level, Points and Badges */}
                <div className="flex flex-col gap-4 flex-1">
                    {/* Level & Points */}
                    <div className="bg-white border border-custom-yellow rounded-competition p-4 shadow-md w-[300px] h-[110px] flex flex-col justify-center ">
                        <p className="text-gray-800 font-medium flex items-center">
                            <span className="font-bold">your level : </span>
                            <span className="text-yellow-400 text-xl ml-2">
                                ★★★★<span className="text-gray-300">☆</span>
                            </span>
                        </p>
                        <p className="text-gray-800 font-medium mt-1">
                            <span className="font-bold">points :</span> 256 pts
                        </p>
                    </div>

                    {/* Badges */}
                    <div className="bg-white border border-custom-yellow rounded-competition p-4 shadow-md w-[300px] h-[110px] flex flex-col justify-center mt-auto ">
                        <p className="font-bold mb-auto">your badges :</p>
                        <div className="flex justify-center gap-3">
                            <img src={badge} alt="Badge 1" className="w-10 h-10" />
                            <img src={badge2} alt="Badge 2" className="w-10 h-10" />
                            <img src={badge3} alt="Badge 3" className="w-10 h-10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
