"use client";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import stampCompleted from "../assets/stamp-completed.png";
import stampEmpty from "../assets/stamp-empty.png";
import progressIcon from "../assets/progress.png";
import chocoLava from "../assets/ChocoLava.png";
import matcha from "../assets/Matcha.png";
import mystery from "../assets/mystery.png";
import videoSushi from "../assets/video/videosushi.mp4";
import discountsImg from "../assets/Discounts.png";
import basket from "../assets/basket.png"; // Import the basket icon
import star from "../assets/star.png"; // Import the star icon

const LoyaltyPage = () => {
  const [completedOrders, setCompletedOrders] = useState(0); // Track completed orders
  const [showPopup, setShowPopup] = useState(false); // Control popup visibility
  const navigate = useNavigate();

  const products = [
    {
      image: chocoLava,
      name: "Choco Lava",
      price: "8,000 TND",
      rating: 4, // Number of stars
    },
    {
      image: mystery,
      name: "Little Moons",
      price: "14,000 TND",
      rating: 5, // Number of stars
    },
    {
      image: matcha,
      name: "Matcha 100% Natural",
      price: "30,000 TND",
      rating: 3, // Number of stars
    },
  ];

  // Function to handle order completion
  const handleOrderComplete = () => {
    if (completedOrders < 5) {
      setCompletedOrders(completedOrders + 1); // Increment completed orders
    }

    // Show popup if all 5 orders are completed
    if (completedOrders + 1 === 5) {
      setShowPopup(true);
    }
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  const handleDiscountsNavigation = () => {
    navigate('/discounts');
  };

  const handleMysteryBoxNavigation = () => {
    navigate('/mystery-box');
  };

  return (
    <main className="flex flex-col bg-white min-h-screen w-full font-asap">


      <div className="container mx-auto px-4 mt-8 max-w-[1105px]">
        <div className="flex flex-col md:flex-row gap-5">
          <section className="w-full">
            <div className="flex flex-col md:flex-row items-start mt-8 md:mt-16 gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-black font-quicksand">
                  Loyal Customers Get Rewarded! 💎
                </h2>
                <p className="mt-6 text-xl font-medium text-black">
                  Make 5 orders and receive a free Mystery Box!
                </p>
                <div className="flex flex-wrap gap-4 mt-8 w-full">
                  <div className="flex flex-wrap md:flex-nowrap gap-2">
                    {[1, 2, 3, 4, 5].map((stamp) => (
                      <img
                        key={stamp}
                        src={
                          stamp <= completedOrders
                            ? stampCompleted
                            : stampEmpty
                        }
                        alt={`Order stamp ${stamp}`}
                        className="w-[60px] md:w-[68px] aspect-square object-contain"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2.5 text-base font-medium text-black">
                    <p>{completedOrders} order(s) completed</p>
                    <img
                      src={progressIcon}
                      alt="Progress indicator"
                      className="w-10 aspect-square object-contain"
                    />
                  </div>
                </div>
                {/* Button to simulate order completion */}
                <button
                  onClick={handleOrderComplete}
                  className="mt-6 py-2 px-4 bg-[#904A41] border border-black text-white rounded-lg text-sm font-medium"
                >
                  Complete Order
                </button>
              </div>
              <div className="w-full md:w-[300px] h-[200px] rounded-lg overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={videoSushi} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Popup for winning */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-black mb-4">You Win! 🎉</h2>
            <p className="text-lg text-gray-700 mb-6">
              Congratulations! You've completed 5 orders and earned a free Mystery
              Box!
            </p>
            <button
              onClick={closePopup}
              className="py-2 px-4 bg-[#904A41] border border-black text-white rounded-lg text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Rest of the code remains unchanged */}
      <section className="container mx-auto px-4 mt-10 md:mt-14 max-w-[1125px]">
        <div className="flex flex-col md:flex-row gap-5">
          <article className="w-full md:w-1/2">
            <div className="relative flex flex-col rounded-xl overflow-hidden min-h-[400px] md:min-h-[606px]">
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <img
                src={discountsImg}
                alt="Discounts background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative p-6 md:p-12 flex flex-col h-full z-20">
                <h2 className="text-4xl md:text-8xl font-bold text-amber-200 font-quicksand mb-8">
                  Discounts
                </h2>
                <div className="flex flex-col justify-end items-center h-full">
                  <button
                    onClick={handleDiscountsNavigation}
                    className="w-full max-w-[250px] py-3 px-2 text-base md:text-lg font-medium text-black bg-amber-200 rounded-lg text-center mt-64"
                  >
                    Grab Exclusive Discounts
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="w-full md:w-1/2">
            <div className="relative flex flex-col rounded-xl overflow-hidden min-h-[400px] md:min-h-[606px]">
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <img
                src={mystery}
                alt="Mystery Box background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative p-6 md:p-12 flex flex-col h-full z-20">
                <h2 className="text-4xl md:text-7xl font-bold text-amber-200 leading-tight font-quicksand mb-8">
                  Mystery Box
                </h2>
                <div className="flex flex-col justify-end items-center h-full">
                  <button
                    onClick={handleMysteryBoxNavigation}
                    className="w-full max-w-[250px] py-3 px-2 text-base md:text-lg font-medium text-black bg-amber-200 rounded-lg text-center mt-72"
                  >
                    Claim Your Mystery Box
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Best Seller Section */}
      <section className="w-full bg-amber-200 mt-10 md:mt-14 px-4 py-12 md:py-20">
        <div className="container mx-auto max-w-[1126px]">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 md:mb-12 font-quicksand">
            Best seller
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((product, index) => (
              <article
                key={index}
                className="bg-white rounded-xl p-5 flex flex-col"
              >
                <div className="flex gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[100px] aspect-square object-cover rounded-lg"
                  />
                  <div className="flex flex-col flex-1">
                    <h3 className="text-base font-medium text-black font-quicksand">
                      {product.name}
                    </h3>
                    {/* Price in Red and Bold */}
                    <p className="text-sm text-red-600 font-bold mt-1">
                      {product.price}
                    </p>
                    {/* Rating Stars */}
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src={star}
                          alt="Star"
                          className={`w-4 h-4 ${i < product.rating ? "opacity-100" : "opacity-30"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Discover Button and Basket Icon */}
                <div className="flex justify-center items-center mt-4 gap-4">
                  <button
                    className="py-2 px-4 bg-[#904A41] border border-black text-white rounded-lg text-sm font-medium"
                  >
                    Discover
                  </button>
                  <img
                    src={basket}
                    alt="Basket"
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/discounts')}
          className="bg-[#904A41] text-white text-2xl font-bold py-4 px-8 rounded-lg hover:bg-[#7a3f37] transition-colors duration-300 shadow-lg"
        >
          Grab Exclusive Discounts
        </button>
      </div>
    </main>
  );
};

export default LoyaltyPage;