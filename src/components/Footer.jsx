"use client";
import React from "react";

function Footer() {
  const navigationColumns = [
    {
      title: "Navigation",
      links: ["Search", "My Cart", "Wishlist", "Categories"],
    },
    {
      title: "About Us",
      links: ["Contact Us", "Faq's", "Delivery", "Privacy Policy"],
    },
  ];

  return (
    <footer className="flex flex-col items-center text-center px-6 py-16 text-white bg-[#904A41] md:px-10 lg:px-40 min-h-[423px] w-full space-y-10 md:space-y-0 md:flex-row md:justify-between">
      {/* Brand Section */}
      <section className="flex flex-col items-center md:items-start w-full md:w-auto max-w-72">
        <h2 className="mb-5 text-3xl font-bold text-amber-400">Exotica</h2>
        <p className="mb-6 text-xl font-semibold tracking-normal leading-7">
          These superfoods are packed with vital nutrients, including vitamins
          and minerals that can help keep you healthy.
        </p>
        <div className="mt-auto">
          <h3 className="mb-4 text-3xl font-semibold text-amber-400">
            Follow us
          </h3>
          <div className="flex gap-4 mb-3 justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08a62ceed3934a6254ea3f68b23653efb04b4dde"
              alt="Instagram"
              className="w-12 h-12"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c265622a80240e67b9c5559df1580d5f196c792d"
              alt="Facebook"
              className="w-12 h-12"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2872f1efd59b7fba2991d7d7f9ba4bbcb7e29c2e"
              alt="TikTok"
              className="w-12 h-12"
            />
          </div>
          <p className="mt-2.5 text-base opacity-70">2025. All Rights Reserved.</p>
        </div>
      </section>

      {/* Navigation Section */}
      <nav className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 lg:gap-24">
        {navigationColumns.map((column, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h3 className="text-xl font-extrabold">{column.title}</h3>
            {column.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-xl font-semibold opacity-50 hover:opacity-70 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </nav>

      {/* Subscribe Section */}
      <section className="w-full max-w-md">
        <h3 className="mb-6 text-2xl font-semibold">Subscribe and get 20% off</h3>
        <p className="mb-6 text-xl font-semibold tracking-normal leading-7">
          These superfoods are packed with vital nutrients, including vitamins.
        </p>
        <div className="p-1 h-14 bg-red-100 rounded-3xl flex items-center w-full">
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-full h-full bg-transparent text-xl text-black opacity-50 focus:outline-none px-6"
          />
          <button className="px-4 text-white bg-amber-500 rounded-full">
            Send
          </button>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
