import React from "react";
import Facebook from "../assets/images/facebook.png"
import Instagram from "../assets/images/instagram.png"
import Tiktok from "../assets/images/tiktok.png"

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
    <footer className="flex flex-col items-start text-left px-6 py-16 text-white bg-[#904A41] md:px-10 lg:px-40 min-h-[423px] w-full space-y-10 md:space-y-0 md:flex-row md:justify-between font-body">
      {/* Brand Section */}
      <section className="flex flex-col items-start md:items-start w-full md:w-auto max-w-72">
        <h2 className="mb-5 text-3xl font-bold text-amber-400">Exotica</h2>
        <p className="mb-6 text-xl font-semibold tracking-normal leading-7">
          These superfoods are packed with vital nutrients, including vitamins
          and minerals that can help keep you healthy.
        </p>
        <div className="mt-auto">
          <h3 className="mb-4 text-3xl font-semibold text-amber-400">
            Follow us
          </h3>
          <div className="flex gap-4 mb-3 justify-start">
            <img
              src={Instagram}
              alt="Instagram"
              className="w-12 h-12"
            />
            <img
              src={Facebook}
              alt="Facebook"
              className="w-12 h-12"
            />
            <img
              src={Tiktok}
              alt="TikTok"
              className="w-12 h-12"
            />
          </div>
          <p className="mt-2.5 text-base opacity-70">2025. All Rights Reserved.</p>
        </div>
      </section>

      {/* Navigation Section */}
      <nav className="flex flex-col md:flex-row items-start md:items-start gap-8 md:gap-16 lg:gap-24">
        {navigationColumns.map((column, index) => (
          <div key={index} className="flex flex-col gap-7">
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
      <section className="w-full max-w-md space-y-10">
        <h3 className="text-2xl font-semibold">Subscribe to our news letter and get 20% off</h3>
        <p className="text-xl font-semibold tracking-normal leading-7">
          These superfoods are packed with vital nutrients, including vitamins.
        </p>
        <div className="flex relative items-center p-1 w-full h-14 bg-red-100 rounded-3xl max-sm:h-12">
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-full h-full bg-transparent text-xl text-black placeholder-black placeholder-opacity-50 focus:outline-none ml-6 pr-12"
          />
          <div className="absolute right-3 cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17ZM5 17V12V7V10.5V13.5V17Z"
                fill="#904A41"
              />
            </svg>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
