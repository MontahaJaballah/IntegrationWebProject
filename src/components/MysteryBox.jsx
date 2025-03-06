"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

// Import images from src/assets/
import mysteryBoxImage from "../assets/box.png";
import basket from "../assets/basket.png";
import Product1 from "../assets/girlybox.png";
import Product2 from "../assets/kidsbox.png";
import Product3 from "../assets/adultbox.png";
import Product4 from "../assets/queenbox.png";
import addToCartIcon from "../assets/basket.png";
import heart from "../assets/heart.png";
import share from "../assets/share.png";

function MysteryBox() {
  const [isFlipped, setIsFlipped] = useState(false); // State for flip card

  // Function to handle flip card click
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Example product data
  const products = [
    {
      id: 1,
      name: "Girly Mystery Box",
      price: "100.000TND",
      imageSrc: Product1,
    },
    {
      id: 2,
      name: "Happy Kid",
      price: "50.000TND",
      imageSrc: Product2,
    },
    {
      id: 3,
      name: "Adults Only!",
      price: "200.000TND",
      imageSrc: Product3,
    },
    {
      id: 4,
      name: "The Queen Box",
      price: "200.000TND",
      imageSrc: Product4,
    },
  ];

  // Example feature data
  const features = [
    {
      id: 1,
      title: "Surprise Goodies",
      description: "Every box is filled with unique and exciting items.",
      imageSrc: basket,
    },
    {
      id: 2,
      title: "High-Quality Products",
      description: "Only the best products are selected for our boxes.",
      imageSrc: basket,
    },
    {
      id: 3,
      title: "Perfect for Gifting",
      description: "A great gift for any occasion.",
      imageSrc: basket,
    },
  ];

  return (
    <div className="rounded-none">
      <div className="flex overflow-hidden flex-col w-full bg-white">

        {/* Hero Section with Flip Card */}
        <section className="self-center mt-10 md:mt-14 w-full max-w-[1129px] px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-5 md:gap-8">
            <div className="w-full md:w-6/12">
              <article className="self-stretch my-auto text-center md:text-left">
                <div className="flex flex-col pl-0 md:pl-2.5 leading-10 text-stone-900">
                  <h1 className="self-start text-2xl md:text-3xl font-quicksand font-bold">
                    Unbox the unexpected with our Mystery Box! <br />
                  </h1>
                  <p className="mt-6 md:mt-8 text-xl md:text-3xl font-asap font-thin">
                    Packed with surprise goodies, it's the perfect way to
                    discover new flavors and products. <br />
                    Will you find your new favorite item? Order now and let the
                    mystery unfold!
                  </p>
                </div>
                <button className="flex overflow-hidden flex-row justify-center items-center mt-8 md:mt-10 text-sm font-medium tracking-normal text-white bg-[#904A41] hover:bg-[#7d3f37] transition-colors min-h-[53px] rounded-[100px] w-[163px] mx-auto md:mx-0">
                  <span className="flex items-center justify-center px-6 py-2.5">
                    View Reviews
                  </span>
                </button>
              </article>
            </div>

            {/* Flip Card for Mystery Box Photo */}
            <ReactCardFlip
              isFlipped={isFlipped}
              flipDirection="horizontal"
              containerClassName="w-full md:w-6/12 mt-6 md:mt-0"
            >
              {/* Front Side: Mystery Box Photo */}
              <figure
                className="w-full cursor-pointer"
                onClick={handleClick}
              >
                <img
                  src={mysteryBoxImage}
                  alt="Mystery Box"
                  className="object-contain w-full aspect-[0.89] rounded-[30px]"
                />
              </figure>

              {/* Back Side: Description */}
              <div
                className="w-full p-6 bg-white rounded-[30px] shadow-lg cursor-pointer"
                onClick={handleClick}
              >
                <h2 className="text-xl md:text-2xl font-quicksand font-bold text-[#904A41] mb-4">
                  🎁✨ What's Inside?
                </h2>
                <p className="text-lg md:text-xl font-quicksand text-neutral-950">
                  Each Mystery Box is a treasure trove of surprises! From exotic
                  snacks to unique products, you never know what you'll find.
                  It's a fun and exciting way to explore new flavors and
                  experiences.
                </p>
                <p className="mt-4 text-base md:text-lg font-quicksand text-neutral-950">
                  🔥 Warning: May cause intense excitement and curiosity!
                </p>
                <p className="mt-4 text-base md:text-lg font-quicksand text-neutral-950">
                  🛍️ Mystery Box – Your Gateway to the Unexpected!
                </p>
              </div>
            </ReactCardFlip>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-20 pt-8 pb-20 md:pb-44 mt-7 w-full bg-orange-200">
          <div className="flex flex-col w-full max-w-[1130px]">
            <h2 className="self-start text-4xl md:text-6xl font-quicksand font-bold leading-none text-red-950">
              Get yours now !
            </h2>
            <div className="mt-6 md:mt-8 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {products.map((product) => (
                  <div key={product.id} className="w-full">
                    {/* Product Card */}
                    <article className="w-full bg-amber-200 rounded-xl border-[#904A41] border-solid border-[3px] transition-transform hover:scale-[1.02]">
                      <div className="flex flex-col pt-1.5 pb-5 w-full bg-amber-100 rounded-xl border-solid border-[3px] border-[#904A41] border-opacity-0">
                        <div className="flex gap-2 self-end mr-2">
                          <div className="flex gap-1">
                            <img
                              src={basket}
                              alt="Icon"
                              className="object-contain shrink-0 aspect-[1.31] fill-stone-900 w-[17px]"
                            />
                            <img
                              src={heart}
                              alt="Icon"
                              className="object-contain shrink-0 my-auto w-3.5 aspect-[1.4] fill-stone-900"
                            />
                          </div>
                          <img
                            src={share}
                            alt="Icon"
                            className="object-contain shrink-0 self-start w-5 aspect-[1.67] fill-stone-900"
                          />
                        </div>
                        <div className="flex flex-col px-2 mt-5 w-full text-xl font-medium text-center">
                          <img
                            src={product.imageSrc}
                            alt={product.name}
                            className="object-contain w-full aspect-[0.86]"
                          />
                          <h3 className="self-center mt-2 leading-relaxed text-black font-quicksand">
                            {product.name}
                          </h3>
                          <p className="self-end mt-6 md:mt-7 mr-2 leading-9 text-red-600 font-quicksand">
                            {product.price}
                          </p>
                          <div className="flex gap-2.5 self-end mt-3.5 max-w-full text-base font-semibold tracking-normal leading-none text-white whitespace-nowrap w-[151px] mr-2">
                            <button className="flex overflow-hidden flex-col justify-center items-center my-auto rounded-xl border border-black border-solid min-h-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                              <span className="flex items-center justify-center gap-2 self-stretch px-6 py-2.5 h-full bg-[#904A41] hover:bg-[#7d3f37] transition-colors">
                                Discover
                              </span>
                            </button>
                            <img
                              src={addToCartIcon}
                              alt="Add to cart"
                              className="object-contain shrink-0 w-10 aspect-square"
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MysteryBox;