"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip"; // Import ReactCardFlip
import exotica from "../assets/exotica.png";
import Discounts from "./Discounts";
import DiscountPage from "./DiscountPage"; // Import DiscountPage component

const DiscountsPage = () => {
  const [isFlipped, setIsFlipped] = useState(false); // State to control flip

  // Function to handle flip
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <main className="overflow-hidden bg-white">


      {/* Main Content Section */}
      <div className="flex flex-col pb-14 w-full bg-amber-200 max-md:max-w-full">
        <section className="self-center mt-10 md:mt-20 w-full max-w-[1128px] px-4 md:px-0 max-md:max-w-full">
          <div className="flex flex-col md:flex-row gap-5 max-md:flex-col">
            {/* Text Content */}
            <article className="w-full md:w-6/12 max-md:ml-0">
              <div className="self-stretch my-auto tracking-normal leading-10 text-left text-neutral-950 max-md:mt-10 max-md:max-w-full">
                {/* Title with Quicksand font and weight 700 */}
                <h1 className="text-3xl md:text-4xl font-quicksand font-bold mt-6 md:mt-12 max-md:mr-2.5 max-md:max-w-full">
                  Discover authentic flavors with{" "}
                  <span className="text-[#904A41]">Exotica</span>:{" "}
                </h1>
                {/* Text with Asap font */}
                <p className="mt-4 md:mt-6 text-xl md:text-3xl font-asap max-md:max-w-full">
                  high-quality Asian food products at discounted prices. Take
                  advantage of our exclusive deals and embark on a unique
                  culinary journey!
                </p>
                {/* Updated Explore Button */}
                <button
                  className="mt-6 md:mt-10 py-2 md:py-3 px-4 md:px-6 bg-[#904A41] text-white rounded-lg text-base font-medium hover:bg-[#803A31] transition-colors duration-300"
                  aria-label="Explore products"
                >
                  Explore
                </button>
              </div>
            </article>

            {/* Flip Card for Exotica Photo */}
            <ReactCardFlip
              isFlipped={isFlipped}
              flipDirection="horizontal" // Flip horizontally
              containerClassName="w-full md:w-6/12 max-md:ml-0" // Adjust width
            >
              {/* Front Side: Exotica Photo */}
              <figure
                className="w-full cursor-pointer mt-6 md:mt-0 md:ml-5"
                onClick={handleClick}
              >
                <img
                  src={exotica}
                  alt="Asian food products showcase"
                  className="object-contain w-full aspect-[0.98] rounded-[40px] max-md:mt-10 max-md:max-w-full"
                />
              </figure>

              {/* Back Side: Description */}
              <div
                className="w-full p-4 md:p-6 bg-white rounded-[40px] shadow-lg cursor-pointer mt-6 md:mt-0 md:ml-5"
                onClick={handleClick}
              >
                <h2 className="text-xl md:text-2xl font-quicksand font-bold text-[#904A41] mb-4">
                  🌍✨ Meet Wasabi-chan!
                </h2>
                <p className="text-lg md:text-xl font-asap text-neutral-950">
                  The globetrotting, sushi-loving, spice-sprinkling mascot of
                  Exotica! He’s on a mission to bring you the most exotic and
                  delightful finds from across Asia—spicy, sweet, quirky, and
                  everything in between!
                </p>
                <p className="mt-4 text-base md:text-lg font-asap text-neutral-950">
                  🔥 Warning: May cause intense cravings for adventure (and
                  snacks).
                </p>
                <p className="mt-4 text-base md:text-lg font-asap text-neutral-950">
                  🛍️ Exotica – Your Passport to the Unexpected!
                </p>
              </div>
            </ReactCardFlip>
          </div>
        </section>
      </div>
      <Discounts />
    </main>
  );

};

export default DiscountsPage;