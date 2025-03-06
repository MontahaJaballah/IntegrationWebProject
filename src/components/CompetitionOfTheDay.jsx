import React from "react";
import chef from "../images/chef.png"
import chef2 from "../images/chef2.png"
import chef3 from "../images/chef3.png"

export default function CompetitionOfTheDay() {
    return (
        <div className="bg-custom-yellow-2">
            <div className="p-6 flex flex-col md:flex-row">
                {/* Left side content */}
                <div className="md:w-1/2 text-center mb-6 md:mb-0">
                    <h2 className="text-4xl font-bold text-custom-brown mb-6 leading-tight">
                        competition of
                        <br />
                        the day !
                    </h2>
                    <div className="text-gray-800 space-y-1 text-center">
                        <p className="font-medium">Ramen Battle Tunisia - 15 Mars 2025</p>
                        <p>Qui fera le meilleur ramen de Tunisie ?</p>
                        <p>Rejoignez la compétition et dégustez !</p>
                        <p className="font-medium">Tunis - 15 Mars 2025</p>
                    </div>
                    <div className="mt-10 flex items-center justify-center space-x-6">
                        <button className="bg-custom-brown text-white px-6 py-3 rounded-competition hover:bg-rose-900 transition-colors font-medium">
                            Apply now
                        </button>
                        <button className="flex items-center text-gray-800 hover:text-rose-800 transition-colors">
                            Show more →
                        </button>
                    </div>
                </div>

                {/* Right side image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={chef}
                        alt="Chef with ramen bowl"
                        className="max-h-80 object-contain"
                    />
                </div>
            </div>

            {/* Chef profiles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {/* Chef 1 */}
                <div className="bg-custom-yellow p-4 rounded-competition border-2 border-rose-800 flex flex-col items-center">
                    <div className="h-48 w-full bg-white flex justify-center items-center mb-3">
                        <img src={chef} alt="Madame Naomi" className="h-40 object-contain" />
                    </div>
                    <p className="font-medium text-center text-gray-800">
                        Madame Naomi chef et jury
                        <br />
                        specialiste en Ramen
                    </p>
                    <div className="mt-4 flex justify-center text-gray-600">
                        <span className="text-2xl">→</span>
                    </div>
                </div>

                {/* Chef 2 */}
                <div className="bg-custom-yellow p-4 rounded-competition border-2 border-rose-800 flex flex-col items-center">
                    <div className="h-48 w-full bg-white flex justify-center items-center mb-3">
                        <img src={chef2} alt="Monsieur Jhon" className="h-40 object-contain" />
                    </div>
                    <p className="font-medium text-center text-gray-800">
                        Monsieur Jhon chef et jury
                        <br />
                        specialiste en Ramen
                    </p>
                    <div className="mt-4 flex justify-center text-gray-600">
                        <span className="text-2xl">→</span>
                    </div>
                </div>

                {/* Chef 3 */}
                <div className="bg-custom-yellow p-4 rounded-competition border-2 border-rose-800 flex flex-col items-center">
                    <div className="h-48 w-full bg-white flex justify-center items-center mb-3">
                        <img src={chef3} alt="Monsieur Toshinori" className="h-40 object-contain" />
                    </div>
                    <p className="font-medium text-center text-gray-800">
                        Monsieur Toshinori chef et jury
                        <br />
                        specialiste en Ramen
                    </p>
                    <div className="mt-4 flex justify-center text-gray-600">
                        <span className="text-2xl">→</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
