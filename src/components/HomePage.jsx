"use client";
import React from "react";

function HomePage() {
  // Base URL for all images
  const baseUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/";
  const apiKeyParam =
    "?placeholderIfAbsent=true&apiKey=181894eca76440a1869a47443e2324bf";

  // Custom color
  const mainColor = "#904A41";

  // Image URLs
  const images = {
    like:
      baseUrl +
      "420277c4fa30d0d0a338f2ef48dbff552575a424b4d5640d1f83979971a4455e" +
      apiKeyParam,
    comment:
      baseUrl +
      "d9fff7e3c3f12a0d3df786a3827c271f654d1d68160e94e4cf6f7845137b2c98" +
      apiKeyParam,
    cart:
      baseUrl +
      "46705b25f58f5115fab04116205c9602aa0c67e4c45e48682bd3eff71c7520a9" +
      apiKeyParam,
    hero:
      baseUrl +
      "90486fb06a8c44c454093f0f6d363df5ef98962ccec6363ae3a2c7a732bda04a" +
      apiKeyParam,
    arrow:
      baseUrl +
      "5773ddc15ad214a9fb8990abd016aa888c8f50d3d6d727b4f2b3bbf45abb532f" +
      apiKeyParam,
    recipeIcon:
      baseUrl +
      "c9dd152ed6b8bcdda5cd79cba3abc7c6b969258a162fee6c05ba48ba761c9254" +
      apiKeyParam,
    mysteryBoxBg:
      baseUrl +
      "da6f49eecee8d4ad92d486178c4f6b7a068740478a3f3e64c03f4795413644a2" +
      apiKeyParam,
    mysteryBoxItem1:
      baseUrl +
      "496e9531201f29a6814ecb3362586a9416950bd0dbe4de21eda1a683488c1141" +
      apiKeyParam,
    mysteryBoxItem2:
      baseUrl +
      "ac6bea1e2ec36b64fd2e9cf1ed276a4e68e421df0abc141d54b21fc064d520a0" +
      apiKeyParam,
    benefitsBg:
      baseUrl +
      "91864edeeb950925a89fbeead4e3df24d0a524341d23b8bfb59fa1604982c716" +
      apiKeyParam,
    fastDeliveryIcon:
      baseUrl +
      "c0654868b1f85cc2ec57e2940ab385e43db566fa19c447dec32c674c5d52d157" +
      apiKeyParam,
    pickupIcon:
      baseUrl +
      "6fb29f4b865fa09692d60fcd6facf5ee982b54ab647f7c400619991fff29190b" +
      apiKeyParam,
    securePaymentIcon:
      baseUrl +
      "f5b1b8d1c5a5b225a96e4d4765697e20af368365d3af29e77c0d2e35ebcadbb9" +
      apiKeyParam,
  };

  // Product data
  const products = [
    {
      id: 1,
      image:
        baseUrl +
        "84665024d88810825ef08513ab43f50c6966ee079050674f476c009d9c1bf4f6" +
        apiKeyParam,
      title: "Biscuits with strawberry flavour",
      price: "6,000 TND",
      rating:
        baseUrl +
        "42e5debbf4411e3eb9f6d1d7ec7a59e0fd22096c84423bf8ba13fd0c6d2ea18a" +
        apiKeyParam,
    },
    {
      id: 2,
      image:
        baseUrl +
        "62f4491b3846a1d2ea28c0954881d656eb6de8edba87e9334480a27b15348b95" +
        apiKeyParam,
      title: "Matcha Latte with green Tea",
      price: "15,000 TND",
      rating:
        baseUrl +
        "f3745fcf71454fbee438bc266342da612ed3a49e0cd12372928ccf05ac462b5f" +
        apiKeyParam,
    },
    {
      id: 3,
      image:
        baseUrl +
        "1a5de4177a6c77bf5b0394f908d17c80aff3b20a15f24ab159c395f162af71f4" +
        apiKeyParam,
      title: "Chips : Sweet and Sour",
      price: "5,000 TND",
      rating:
        baseUrl +
        "42e5debbf4411e3eb9f6d1d7ec7a59e0fd22096c84423bf8ba13fd0c6d2ea18a" +
        apiKeyParam,
    },
  ];

  // Recipe data
  const recipes = [
    {
      id: 1,
      image:
        baseUrl +
        "ae6923a82279eb38c755228e0baf4621cb4a4f4a3fcbc93e4bdb63247ca31711" +
        apiKeyParam,
      badge:
        baseUrl +
        "a70d5d6a521b72b15e60fb3704dead4ce94247cf99ef62eefd890f573a3070ab" +
        apiKeyParam,
      title: "Tahini Miso Ramen",
      saved:
        baseUrl +
        "17e8c5aecbd6055f216f5dff58ebdbef4f831e7095fbb90537a76589be4caaae" +
        apiKeyParam,
      share:
        baseUrl +
        "7ce11dabc4f86855be66ba77be1a5e6dd623f8ae593e0bec982b525dd80da5e9" +
        apiKeyParam,
    },
    {
      id: 2,
      image:
        baseUrl +
        "c5c680cf00949816da2a37b33ad101ef5c50545d9b7e499e03444882890092d8" +
        apiKeyParam,
      title: "Vegan Sushi (Three Ways, Fish-Free)",
      saved:
        baseUrl +
        "3db0aa9839ec3837169095fe3bee62288430340c4763ffbc7bdb645680700cc7" +
        apiKeyParam,
      like:
        baseUrl +
        "c5fa3fab141ac12fe42d515b36605e5d344c21174c8963902daaed3951875ce3" +
        apiKeyParam,
      share:
        baseUrl +
        "7ce11dabc4f86855be66ba77be1a5e6dd623f8ae593e0bec982b525dd80da5e9" +
        apiKeyParam,
    },
    {
      id: 3,
      image:
        baseUrl +
        "90e8d855175080ed60147cf3b6baa249a9f1e3cb95ca2baddb4e0c39479370d8" +
        apiKeyParam,
      title: "Six dumpling sauces",
      like:
        baseUrl +
        "c5fa3fab141ac12fe42d515b36605e5d344c21174c8963902daaed3951875ce3" +
        apiKeyParam,
      share:
        baseUrl +
        "7ce11dabc4f86855be66ba77be1a5e6dd623f8ae593e0bec982b525dd80da5e9" +
        apiKeyParam,
    },
    {
      id: 4,
      image:
        baseUrl +
        "e2ad114808d6e4a4167c8b150306fd9c842fbd02968ea5d5a33aa87cf87adb44" +
        apiKeyParam,
      badge:
        baseUrl +
        "ffc9229538ede79f9e94c463c6d376fa530aad8331d9e7616870c0937eb62f59" +
        apiKeyParam,
      title: "Korean Fried Chicken Baw",
      like:
        baseUrl +
        "c5fa3fab141ac12fe42d515b36605e5d344c21174c8963902daaed3951875ce3" +
        apiKeyParam,
      share:
        baseUrl +
        "7ce11dabc4f86855be66ba77be1a5e6dd623f8ae593e0bec982b525dd80da5e9" +
        apiKeyParam,
    },
  ];

  // Categories data
  const categories = [
    {
      id: 1,
      title: "Prepared meals",
      buttonText: "Check out Meals",
      backgroundImage:
        baseUrl +
        "d67a51ac9d4f6480c2845a1dbb4957f26edda4670baff34764b0e8c023f5ef7a" +
        apiKeyParam,
    },
    {
      id: 2,
      title: "Ingredients",
      buttonText: "Check out Ingredients",
      backgroundImage:
        baseUrl +
        "ce6277c1b078eca54e0f2c0153c61a69adea0b37b5d2d34fd8797ce98cce9280" +
        apiKeyParam,
    },
  ];

  // Forum posts data
  const forumPosts = [
    {
      id: 1,
      title: "My recipe for cooking ramen",
      author: "Bridget Cosmus",
      role: "Chef",
      avatar:
        baseUrl +
        "e7d6d8f05ee52c370d4e3694af35ae097ae94d592bf8aec33dce60ebeb17f1bb" +
        apiKeyParam,
      likes: "532",
      comments: "12",
      content:
        "Boil ramen noodles in water until tender. Simmer a broth with soy sauce, miso paste, garlic, and ginger. Combine the noodles with the broth, then top with a soft-boiled egg...",
    },
    {
      id: 2,
      title: "My recipe for cooking sushi",
      author: "Haley Belle",
      role: "Chef",
      avatar:
        baseUrl +
        "2971d40ccd3370494a0f649fee14e1775590c55ad9036503fdc7f2f53c8bf51d" +
        apiKeyParam,
      likes: "1200",
      comments: "20",
      content:
        "Cook sushi rice and season it with rice vinegar, sugar, and salt. Place a sheet of nori on a mat, spread the rice evenly, and add your choice of fillings like fish...",
    },
    {
      id: 3,
      title: "Three easy steps to perfect your chopping skills",
      author: "Kenzo Tenma",
      role: "Client",
      avatar:
        baseUrl +
        "eeb345c0d698e3034a34a36493438549da2086baeb29dce882eee53957575cc2" +
        apiKeyParam,
      likes: "",
      comments: "7",
      content:
        "Use a sharp knife for clean, precise cuts. Master basic techniques like the rocking motion for slicing and the claw grip to protect your fingers. Practice consistency by...",
    },
  ];

  return (
    <main className="flex overflow-hidden flex-col bg-orange-200 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      {/* Hero Section */}
      <section className="flex flex-col items-center px-20 pb-28 bg-orange-50 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 w-full max-w-[1119px] max-md:mb-2.5 max-md:max-w-full">
          <div className="self-end w-full max-w-[1017px] max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start mt-36 w-full text-center max-md:mt-10 max-md:max-w-full">
                  <h1
                    className="text-9xl font-semibold tracking-normal leading-none"
                    style={{ color: mainColor }}
                  >
                    Exotica
                  </h1>
                  <h2 className="self-stretch mt-12 text-4xl font-semibold leading-9 text-stone-900 max-md:mt-10 max-md:max-w-full">
                    Discover Asia's flavors! Recipes, tips, and stories
                    await—your culinary adventure starts here!
                  </h2>
                  <div className="flex gap-9 mt-16 max-w-full text-2xl tracking-normal leading-none w-[356px] max-md:mt-10">
                    <button
                      className="flex overflow-hidden items-center justify-center font-semibold text-white rounded-xl shadow-sm min-h-16 px-6 py-2.5 max-md:px-5"
                      style={{ backgroundColor: mainColor }}
                    >
                      Shop Now
                    </button>
                    <button className="grow shrink my-auto text-black w-[99px]">
                      Show more
                    </button>
                  </div>
                </div>
              </div>
              <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  src={images.hero}
                  alt="Asian cuisine display"
                  className="object-contain grow w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Product Showcase */}
          <section className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="w-[33%] max-md:ml-0 max-md:w-full"
                >
                  {index === 0 && (
                    <article className="flex grow gap-2.5 px-5 pt-4 pb-2 w-full font-semibold leading-9 bg-white rounded-xl max-md:mt-5">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="object-contain shrink-0 my-auto aspect-[0.57] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[91px]"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-base font-medium text-black">
                          {product.title}
                        </h3>
                        <p className="self-start mt-2.5 text-sm text-red-600 max-md:ml-1">
                          {product.price}
                        </p>
                        <img
                          src={product.rating}
                          alt="Product rating"
                          className="object-contain max-w-full aspect-[5.32] w-[170px] max-md:ml-1"
                        />
                        <div className="flex gap-0.5 self-end mt-7 w-36 max-w-full text-base tracking-normal leading-none text-center text-black whitespace-nowrap max-md:mr-2">
                          <button className="flex overflow-hidden items-center justify-center my-auto rounded-xl border border-black border-solid min-h-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-6 py-2.5 max-md:px-5">
                            Discover
                          </button>
                          <img
                            src={images.cart}
                            alt="Add to cart"
                            className="object-contain shrink-0 w-10 aspect-square"
                          />
                        </div>
                      </div>
                    </article>
                  )}

                  {index === 1 && (
                    <article className="flex flex-col pt-4 pr-4 pb-2 pl-9 mx-auto w-full bg-white rounded-xl max-md:pl-5 max-md:mt-5">
                      <div className="flex items-start leading-9">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="object-contain shrink-0 self-end mt-7 max-w-full aspect-square w-[108px]"
                        />
                        <div className="self-start">
                          <h3 className="text-base font-medium text-black">
                            {product.title}
                          </h3>
                          <div className="flex flex-col px-2.5 mt-2.5 text-sm font-semibold text-red-600">
                            <p className="self-start">{product.price}</p>
                            <img
                              src={product.rating}
                              alt="Product rating"
                              className="object-contain mt-1.5 aspect-[6.06] w-[170px] max-md:ml-2.5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0.5 self-end mt-2 w-36 max-w-full text-base font-semibold tracking-normal leading-none text-center text-black whitespace-nowrap max-md:mr-1.5">
                        <button className="flex overflow-hidden items-center justify-center my-auto rounded-xl border border-black border-solid min-h-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-6 py-2.5 max-md:px-5">
                          Discover
                        </button>
                        <img
                          src={images.cart}
                          alt="Add to cart"
                          className="object-contain shrink-0 w-10 aspect-square"
                        />
                      </div>
                    </article>
                  )}

                  {index === 2 && (
                    <article className="flex flex-col pt-5 pr-3.5 pb-2 pl-9 mx-auto w-full bg-white rounded-xl max-md:pl-5 max-md:mt-5">
                      <div className="flex gap-5 items-start max-w-full leading-9 w-[286px]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="object-contain shrink-0 mt-5 aspect-[0.78] w-[83px]"
                        />
                        <div className="flex flex-col items-start">
                          <h3 className="text-base font-medium text-black">
                            {product.title}
                          </h3>
                          <p className="mt-2.5 text-sm font-semibold text-red-600 max-md:ml-1">
                            {product.price}
                          </p>
                          <img
                            src={product.rating}
                            alt="Product rating"
                            className="object-contain ml-3.5 aspect-[5.32] w-[170px] max-md:ml-2.5"
                          />
                        </div>
                      </div>
                      <div className="flex gap-1 self-end mt-4 max-w-full text-base font-semibold tracking-normal leading-none text-center text-black whitespace-nowrap w-[145px]">
                        <button className="flex overflow-hidden items-center justify-center my-auto rounded-xl border border-black border-solid min-h-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-6 py-2.5 max-md:px-5">
                          Discover
                        </button>
                        <img
                          src={images.cart}
                          alt="Add to cart"
                          className="object-contain shrink-0 w-10 aspect-square"
                        />
                      </div>
                    </article>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="flex flex-col">
        <div className="flex gap-5 justify-between self-end mt-24 mr-60 max-w-full w-[306px] max-md:mt-10 max-md:mr-2.5">
          <img
            src={images.arrow}
            alt="Previous page"
            className="object-contain shrink-0 aspect-square fill-stone-900 w-[17px]"
          />
          <img
            src={images.arrow}
            alt="Next page"
            className="object-contain shrink-0 aspect-square fill-stone-900 w-[17px]"
          />
        </div>

        <div className="flex flex-wrap gap-5 justify-between items-start self-center mt-6 w-full max-w-[1114px] max-md:max-w-full">
          <div className="flex gap-4 text-6xl font-bold leading-none text-yellow-900 max-md:text-4xl">
            <img
              src={images.recipeIcon}
              alt="Recipe icon"
              className="object-contain shrink-0 aspect-square w-[70px]"
            />
            <h2 className="flex-auto self-start mt-2.5 max-md:text-4xl">
              Our recipies
            </h2>
          </div>
          <button
            className="flex overflow-hidden items-center justify-center mt-2 text-2xl font-semibold tracking-normal leading-none text-center text-white rounded-xl shadow-sm min-h-[70px] px-6 py-2.5 max-md:px-5"
            style={{ backgroundColor: mainColor }}
          >
            Discover Recipes
          </button>
        </div>

        <div className="self-center mt-8 w-full max-w-[1120px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {recipes.map((recipe, index) => (
              <div key={recipe.id} className="w-3/12 max-md:ml-0 max-md:w-full">
                <article
                  className="flex flex-col px-1.5 pt-2.5 pb-11 mx-auto w-full bg-amber-200 rounded-xl border-solid border-[3px] max-md:mt-6"
                  style={{ borderColor: mainColor }}
                >
                  <div
                    className={`flex ${
                      index === 0 ? "self-end" : "gap-2 items-start self-end"
                    } max-md:mr-1.5`}
                  >
                    {recipe.saved && (
                      <img
                        src={recipe.saved}
                        alt="Save recipe"
                        className={`object-contain shrink-0 ${
                          index === 0
                            ? "aspect-[1.75] w-[42px]"
                            : "aspect-square w-[23px]"
                        }`}
                      />
                    )}
                    {recipe.like && (
                      <img
                        src={recipe.like}
                        alt="Like recipe"
                        className="object-contain shrink-0 w-6 aspect-square"
                      />
                    )}
                    {recipe.share && (
                      <img
                        src={recipe.share}
                        alt="Share recipe"
                        className="object-contain shrink-0 w-6 aspect-square"
                      />
                    )}
                  </div>

                  {index === 0 || index === 3 ? (
                    <div className="flex relative flex-col items-start pt-36 pb-20 mt-1.5 aspect-[0.863] max-md:pt-24 max-md:pr-5">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="object-cover absolute inset-0 size-full"
                      />
                      {recipe.badge && (
                        <img
                          src={recipe.badge}
                          alt="Recipe badge"
                          className={`object-contain ${
                            index === 0
                              ? "w-16 aspect-[1.05]"
                              : "-mb-6 w-11 aspect-[1.33] max-md:-mr-1 max-md:mb-2.5"
                          }`}
                        />
                      )}
                    </div>
                  ) : (
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="object-contain mt-1 w-full aspect-[0.86]"
                    />
                  )}

                  <h3
                    className={`${
                      index === 1
                        ? "mt-2 text-xl font-medium leading-9 text-center text-black"
                        : "self-center mt-2 text-xl font-medium leading-relaxed text-center text-black"
                    }`}
                  >
                    {recipe.title}
                  </h3>

                  <button
                    className={`flex overflow-hidden items-center justify-center self-center ${
                      index === 1 ? "mt-4" : "mt-14"
                    } max-w-full text-xl font-semibold tracking-normal leading-none text-center text-white whitespace-nowrap rounded-xl shadow-sm min-h-10 w-[196px] px-6 py-2.5 max-md:px-5 max-md:mt-10`}
                    style={{ backgroundColor: mainColor }}
                  >
                    Discover
                  </button>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mystery Box Section */}
      <section
        className="flex flex-col justify-center items-center px-16 py-5 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
        style={{ backgroundColor: mainColor }}
      >
        <div className="w-full max-w-[1121px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <h2 className="text-7xl font-bold text-amber-200 leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  This Week's Mystery Box
                </h2>
                <button
                  className="flex overflow-hidden items-center justify-center mt-20 max-w-full text-3xl font-medium tracking-wide leading-none bg-amber-200 rounded-xl min-h-[98px] w-[360px] px-6 py-2.5 max-md:px-5 max-md:mt-10"
                  style={{ color: mainColor }}
                >
                  Check out Box Offers
                </button>
              </div>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col items-center px-16 pt-72 pb-14 w-full rounded-xl min-h-[465px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
                <img
                  src={images.mysteryBoxBg}
                  alt="Mystery box background"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative gap-5 max-w-full w-[254px]">
                  <img
                    src={images.mysteryBoxItem1}
                    alt="Mystery box item 1"
                    className="object-contain shrink-0 max-w-full aspect-[1.18] w-[147px]"
                  />
                  <img
                    src={images.mysteryBoxItem2}
                    alt="Mystery box item 2"
                    className="object-contain shrink-0 self-start mt-2.5 aspect-square w-[89px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="flex flex-col items-center">
        <h2 className="self-center mt-20 text-8xl font-bold leading-none text-center text-yellow-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Categories
        </h2>

        <div className="self-center mt-20 w-full max-w-[1120px] max-md:mt-10 max-md:max-w-full px-4">
          <div className="flex gap-5 max-md:flex-col max-md:gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`${
                  index === 1 ? "ml-5" : ""
                } w-6/12 max-md:ml-0 max-md:w-full`}
              >
                <article className="flex relative flex-col grow px-12 py-24 rounded-xl h-[606px] max-md:px-5 max-md:py-16 max-md:mt-5 max-md:max-w-full max-md:h-[450px] max-sm:h-[350px]">
                  <img
                    src={category.backgroundImage}
                    alt={category.title}
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex flex-col justify-between h-full">
                    <h3 className="relative self-start text-7xl font-bold text-amber-200 leading-tight max-md:text-5xl max-sm:text-4xl">
                      {category.title}
                    </h3>
                    <button
                      className="flex overflow-hidden relative items-center justify-center self-center mt-auto max-w-full text-3xl font-medium tracking-wide leading-none bg-amber-200 rounded-xl min-h-[98px] w-[356px] px-6 py-2.5 max-md:px-5 max-md:min-h-[80px] max-md:text-2xl max-sm:w-full max-sm:text-xl"
                      style={{ color: mainColor }}
                    >
                      {category.buttonText}
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section className="flex flex-col items-center">
        <h2 className="self-center mt-32 text-8xl font-bold leading-none text-center text-yellow-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Join our Forum
        </h2>

        <div
          className="flex flex-col items-center px-16 pb-12 mt-44 w-full max-md:px-5 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full"
          style={{ backgroundColor: mainColor }}
        >
          <div className="z-10 mt-0 w-full max-w-[1119px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {forumPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={`${
                    index > 0 ? "ml-5" : ""
                  } w-[33%] max-md:ml-0 max-md:w-full`}
                >
                  <article
                    className={`flex flex-col ${
                      index === 0
                        ? "px-3.5 py-10 mx-auto w-full text-black bg-white rounded-xl border-4 border-solid max-md:pr-5 max-md:mt-5"
                        : index === 1
                          ? "px-5 py-10 mx-auto w-full text-black bg-white rounded-xl border-4 border-solid max-md:mt-5"
                          : "grow py-10 w-full bg-white rounded-xl border-4 border-solid max-md:mt-5"
                    }`}
                    style={{ borderColor: mainColor }}
                  >
                    {index === 0 && (
                      <>
                        <div className="flex gap-10 items-start">
                          <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit">
                            <h3 className="text-3xl font-bold leading-9">
                              {post.title}
                            </h3>
                            <div className="flex gap-3.5 self-start mt-5 leading-none">
                              <img
                                src={post.avatar}
                                alt={post.author}
                                className="object-contain shrink-0 aspect-[0.96] w-[50px]"
                              />
                              <div className="flex flex-col">
                                <p className="text-xl font-bold tracking-[2.2px]">
                                  {post.author}
                                </p>
                                <p className="self-start mt-1.5 text-base tracking-widest">
                                  {post.role}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col self-end mt-12 text-base font-bold leading-loose text-center whitespace-nowrap max-md:mt-10">
                            <p>{post.likes}</p>
                            <img
                              src={images.like}
                              alt="Like"
                              className="object-contain mt-1.5 aspect-[1.05] w-[22px]"
                            />
                            <img
                              src={images.comment}
                              alt="Comment"
                              className="object-contain mt-3 aspect-[1.05] w-[22px]"
                            />
                            <p className="self-start mt-1.5">{post.comments}</p>
                          </div>
                        </div>
                        <p className="mt-5 text-base tracking-widest leading-5 max-md:mr-1.5">
                          {post.content}
                        </p>
                        <button
                          className="flex overflow-hidden items-center justify-center self-center mt-7 max-w-full text-xl font-semibold tracking-normal leading-none text-center text-white rounded-xl min-h-10 w-[196px] px-6 py-2.5 max-md:px-5"
                          style={{ backgroundColor: mainColor }}
                        >
                          Check out
                        </button>
                      </>
                    )}

                    {index === 1 && (
                      <>
                        <h3 className="text-3xl font-bold leading-none max-md:mr-1.5">
                          {post.title}
                        </h3>
                        <div className="flex gap-5 justify-between mt-6 w-full">
                          <div className="flex gap-3.5 self-end mt-7 leading-none">
                            <img
                              src={post.avatar}
                              alt={post.author}
                              className="object-contain shrink-0 my-auto aspect-square w-[50px]"
                            />
                            <div className="flex flex-col">
                              <p className="text-xl font-bold tracking-[2.2px]">
                                {post.author}
                              </p>
                              <p className="self-start mt-1.5 text-base tracking-widest">
                                {post.role}
                              </p>
                            </div>
                          </div>
                          <div className="text-base font-bold leading-loose text-center whitespace-nowrap">
                            <p>{post.likes}</p>
                            <img
                              src={images.like}
                              alt="Like"
                              className="object-contain mt-1.5 aspect-[1.05] w-[22px] max-md:mr-1.5"
                            />
                            <div className="flex flex-col px-1 mt-3">
                              <img
                                src={images.comment}
                                alt="Comment"
                                className="object-contain aspect-[1.05] w-[22px]"
                              />
                              <p className="self-start mt-1.5">
                                {post.comments}
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="mt-5 text-base tracking-widest leading-5 max-md:mr-2.5">
                          {post.content}
                        </p>
                        <button
                          className="flex overflow-hidden items-center justify-center self-center mt-7 max-w-full text-xl font-semibold tracking-normal leading-none text-center text-white rounded-xl min-h-10 w-[196px] px-6 py-2.5 max-md:px-5"
                          style={{ backgroundColor: mainColor }}
                        >
                          Check out
                        </button>
                      </>
                    )}

                    {index === 2 && (
                      <>
                        <div className="flex flex-col px-6 w-full max-md:pl-5">
                          <h3 className="text-3xl font-bold leading-9 text-black max-md:mr-1">
                            {post.title}
                          </h3>
                          <div className="flex gap-5 justify-between items-start mt-2.5 w-full">
                            <div className="flex gap-3.5 leading-none text-black">
                              <img
                                src={post.avatar}
                                alt={post.author}
                                className="object-contain shrink-0 my-auto aspect-square w-[50px]"
                              />
                              <div className="flex flex-col">
                                <p className="text-xl font-bold tracking-[2.2px]">
                                  {post.author}
                                </p>
                                <p className="self-start mt-1.5 text-base tracking-widest">
                                  {post.role}
                                </p>
                              </div>
                            </div>
                            <div>
                              <img
                                src={images.like}
                                alt="Like"
                                className="object-contain aspect-[1.05] w-[22px]"
                              />
                              <img
                                src={images.comment}
                                alt="Comment"
                                className="object-contain mt-3 aspect-[1.05] w-[22px]"
                              />
                            </div>
                          </div>
                          <p className="self-end mt-1 text-base font-bold leading-loose text-center text-black max-md:mr-2">
                            {post.comments}
                          </p>
                        </div>
                        <p className="mt-3.5 mr-3.5 ml-6 text-base tracking-widest leading-5 text-black max-md:mx-2.5">
                          {post.content}
                        </p>
                        <button
                          className="flex overflow-hidden items-center justify-center self-center mt-7 max-w-full text-xl font-semibold tracking-normal leading-none text-center text-white rounded-xl min-h-10 w-[196px] px-6 py-2.5 max-md:px-5"
                          style={{ backgroundColor: mainColor }}
                        >
                          Check out
                        </button>
                      </>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="flex relative flex-col justify-center items-center px-16 py-36 w-full min-h-[470px] max-md:px-5 max-md:py-24 max-md:mr-0.5 max-md:max-w-full">
        <img
          src={images.benefitsBg}
          alt="Benefits background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative pr-6 pl-2 mb-0 max-w-full bg-white w-[1120px] max-md:pr-5 max-md:mb-2.5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[68%] max-md:ml-0 max-md:w-full">
              <div className="flex relative grow gap-5 justify-between items-center font-extrabold text-black max-md:mt-10">
                <img
                  src={images.fastDeliveryIcon}
                  alt="Fast delivery icon"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[1.29] w-[71px]"
                />
                <div className="flex flex-col self-start mt-7">
                  <h3 className="self-start text-xl">Fast delivery</h3>
                  <p className="mt-4 text-lg">
                    We prepare and ship your package the day after your order.
                  </p>
                </div>
                <div className="shrink-0 self-stretch w-2.5 border-orange-200 border-solid border-[10px] h-[175px]" />
                <img
                  src={images.pickupIcon}
                  alt="In-store pickup icon"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[1.04] w-[59px]"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <h3 className="self-start text-xl">In-Store pickup</h3>
                  <p className="mt-4 text-lg">
                    Prefer to collect your order? Choose free same-day pickup at
                    our store located in Ariena.
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex relative grow gap-4 items-center font-extrabold text-black max-md:mt-10">
                <div className="shrink-0 self-stretch w-2.5 border-orange-200 border-solid border-[10px] h-[175px]" />
                <img
                  src={images.securePaymentIcon}
                  alt="Secure payment icon"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <h3 className="self-start text-xl">Secure Payment</h3>
                  <p className="mt-2 text-lg">
                    Payments are processed through Monetique Tunisie's
                    &quot;Clictopay&quot; platform. We do not store any banking
                    information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
