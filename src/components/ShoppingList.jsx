"use client";
import React, { useState } from "react";
import avocadoImg from "../assets/avocado.png";
import salmonImg from "../assets/salmon.png";
import sushiriceImg from "../assets/sushirice.png";
import wasabiImg from "../assets/wasabi.png";

const ShoppingList = () => {
  const products = [
    {
      id: 1,
      name: "Sushi rice",
      image: sushiriceImg,
      quantity: 1,
    },
    {
      id: 2,
      name: "Salmon",
      image: salmonImg,
      quantity: 3,
    },
    {
      id: 3,
      name: "Avocado",
      image: avocadoImg,
      quantity: 1,
    },
    {
      id: 4,
      name: "Wasabi",
      image: wasabiImg,
      quantity: 2,
    },
  ];

  return (
    <main className="flex overflow-hidden flex-col bg-stone-50">

      <h1 className="self-start mt-24 ml-40 text-6xl font-bold leading-none text-center text-[#904A41] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Your Shopping List
      </h1>

      <section className="flex flex-col items-center px-20 pt-16 pb-6 mt-24 mb-36 w-full bg-amber-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1129px] max-md:max-w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search the item..."
              className="w-full px-6 py-5 text-2xl font-medium tracking-normal leading-none rounded-3xl border-solid bg-zinc-100 border-[3px] border-zinc-100 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-neutral-400 outline-none"
              aria-label="Search items"
            />
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-[45px] h-[45px] text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="mt-9 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  initialQuantity={product.quantity}
                />
              ))}
            </div>
          </div>

          <button
            className="flex overflow-hidden flex-col justify-center self-center mt-24 max-w-full text-xl font-semibold tracking-normal leading-none text-center text-white whitespace-nowrap bg-[#904A41] rounded-xl min-h-[75px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[305px] max-md:mt-10 hover:bg-[#7a3f37]"
            aria-label="Buy items"
          >
            <span className="flex-1 gap-2 self-stretch px-6 py-2.5 size-full max-md:px-5">
              BUY
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};

const ProductCard = ({ image, name, initialQuantity = 1 }) => {
  const [quantity, setQuantity] = React.useState(initialQuantity);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="w-3/12 max-md:ml-0 max-md:w-full">
      <article className="flex flex-col items-center px-6 pt-16 pb-2.5 w-full text-xl leading-relaxed text-center text-black bg-amber-200 rounded-xl border-[#904A41] border-solid border-[3px] max-md:pl-5">
        <img
          src={image}
          alt={name}
          className="object-contain self-stretch w-full aspect-[0.86]"
        />
        <h3 className="mt-3.5 font-medium">{name}</h3>

        <div className="flex gap-5 justify-between px-2 py-3.5 mt-8 max-w-full font-light whitespace-nowrap rounded-3xl border-solid bg-zinc-100 border-[3px] border-zinc-100 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[157px]">
          <button onClick={decreaseQuantity} aria-label="Decrease quantity">
            <svg
              className="w-4 h-4 text-[#904A41]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span aria-label="Quantity">{quantity}</span>
          <button onClick={increaseQuantity} aria-label="Increase quantity">
            <svg
              className="w-4 h-4 text-[#904A41]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <button
          className="flex overflow-hidden flex-col justify-center mt-3.5 max-w-full font-semibold tracking-normal leading-none text-white bg-[#904A41] rounded-xl shadow-sm min-h-10 w-[157px] hover:bg-[#7a3f37]"
          aria-label={`Remove ${name}`}
        >
          <span className="flex-1 gap-2 self-stretch px-6 py-2.5 size-full max-md:px-5">
            Remove
          </span>
        </button>
      </article>
    </div>
  );
};

export default ShoppingList;
