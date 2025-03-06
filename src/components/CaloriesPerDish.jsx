import React, { useState } from "react";
import Footer from "./Footer";
import Myprofile from "./Myprofile";
import CompetitionOfTheDay from "./CompetitionOfTheDay";
import YourCaloryProfile from "./YourCaloryProfile";
import YourDaily from "./YourDaily";

// Import images directly
import tahiniMisoRamen from "../images/Tahini-Miso-Ramen.jpg";
import veganSushi from "../images/vegan-sushi.jpg";
import dumpingSauces from "../images/dumpling-sauces.jpg";
import koreanFriedChickenBao from "../images/korean-fried-chicken-bao.jpg";
import tofu from "../images/tofu.jpg";
import chineseSpringRolls from "../images/chinese-spring-rolls.jpg";
import chowMein from "../images/chow-mein.jpg";
import kungPao from "../images/kung-pao.jpg";
import padThai from "../images/pad-thai.jpg";
import bibimbap from "../images/Bibimbap.jpg";

function CaloriesPerDish() {
    const [currentPage, setCurrentPage] = useState(1);

    const foodCompetitions = [
        { id: 1, name: "Tahini Miso Ramen", image: tahiniMisoRamen, calories: 450 },
        { id: 2, name: "Vegan Sushi", image: veganSushi, calories: 300 },
        { id: 3, name: "Six dumpling sauces", image: dumpingSauces, calories: 150 },
        { id: 4, name: "Korean Fried Chicken Bao", image: koreanFriedChickenBao, calories: 550 },
        { id: 5, name: "Tofu", image: tofu, calories: 200 },
        { id: 6, name: "Chinese Spring Rolls", image: chineseSpringRolls, calories: 400 },
        { id: 7, name: "Chow Mein", image: chowMein, calories: 500 },
        { id: 8, name: "Kung Pao", image: kungPao, calories: 600 },
        { id: 9, name: "Pad Thai", image: padThai, calories: 550 },
        { id: 10, name: "Bibimbap", image: bibimbap, calories: 480 },
    ];

    const itemsPerPage = 8;
    const totalPages = Math.ceil(foodCompetitions.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = foodCompetitions.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleAdd = (id) => {
        console.log(`Adding food item ${id} to the list`);
    };

    return (

        <section className="max-w-6xl mx-auto px-4 py-8">
            <YourDaily />
            <YourCaloryProfile />

            <header className="mb-10">
                <h1 className="text-center text-competition-title text-custom-brown">
                    Check Calories Per Dish!
                </h1>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-card-gap">
                {currentItems.map((item) => (
                    <article
                        key={item.id}
                        className="rounded-competition overflow-hidden border-2 border-custom-brown bg-custom-yellow"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <h3 className="text-center text-card-title mb-3">{item.name}</h3>
                            <div className="w-full py-1.5 mb-2 bg-gray-100 text-black text-center rounded-competition">
                                Calories: {item.calories} kcal
                            </div>
                            <button
                                onClick={() => handleAdd(item.id)}
                                className="w-full py-1.5 bg-custom-brown text-white rounded-competition hover:opacity-90 transition"
                                aria-label={`Add ${item.name} to the list`}
                            >
                                Add
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            <nav className="flex justify-end items-center mt-10 space-x-2" aria-label="Pagination">
                <button
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50"
                    aria-label="Previous page"
                >
                    <span aria-hidden="true">&lt;</span>
                </button>

                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`w-8 h-8 flex items-center justify-center rounded-md ${currentPage === index + 1 ? "bg-competition-red text-white" : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        aria-label={`Page ${index + 1}`}
                        aria-current={currentPage === index + 1 ? "page" : undefined}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50"
                    aria-label="Next page"
                >
                    <span aria-hidden="true">&gt;</span>
                </button>
            </nav>
            <Footer />
        </section>
    );
}

export default CaloriesPerDish;
