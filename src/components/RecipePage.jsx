import React from "react";

function RecipePage() {
  const recipes = [
    {
      id: 1,
      title: "Teriyaki Salmon Noodles",
      imageUrl:
        "src/assets/images_jawher/teriyaki_salmon.png",
      altText: "Teriyaki Salmon Noodles",
    },
    {
      id: 2,
      title: "Honey Prawns – stays crispy!",
      imageUrl:
        "src/assets/images_jawher/honey_prawns.png",
      altText: "Honey Prawns",
    },
    {
      id: 3,
      title: "Vegetable Dumplings (Potstickers!)",
      imageUrl:
        "src/assets/images_jawher/Vegetable_dum.png",
      altText: "Vegetable Dumplings",
    },
    {
      id: 4,
      title: "Garlic Noodles",
      imageUrl:
        "src/assets/images_jawher/garlic_noodles.png",
      altText: "Garlic Noodles",
    },
    {
      id: 5,
      title: "Beef tataki",
      imageUrl:
        "src/assets/images_jawher/beef_tataki.png",
      altText: "Beef tataki",
    },
    {
      id: 6,
      title: "Thai Turmeric Chicken",
      imageUrl:
        "src/assets/images_jawher/thai_chicken.png",
      altText: "Thai Turmeric Chicken",
    },
    {
      id: 7,
      title: "Vietnamese Caramel Ginger Chicken",
      imageUrl:
        "src/assets/images_jawher/vitanamese_caramel.png",
      altText: "Vietnamese Caramel Ginger Chicken",
    },
    {
      id: 8,
      title: "Beef chow mein",
      imageUrl:
        "src/assets/images_jawher/beef_chow_mein.png",
      altText: "Beef chow mein",
    },
  ];

  const RecipeCard = ({ title, imageUrl, altText }) => {
    return (
      <article className="flex flex-col items-center p-2 bg-amber-200 rounded-xl border-[#904A41] border-solid border-[3px] relative transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#904A41] cursor-pointer hover:animate-wiggle">
        <div className="absolute top-2 right-2 flex gap-2 z-10 mb-2">
          <img 
            src="src/assets/images_jawher/share.png" 
            alt="share"
            className="w-6 h-6 cursor-pointer transition-all duration-300 transform hover:scale-110 mt-1"
          />
          <img 
            src="src/assets/images_jawher/add.png" 
            alt="add"
            className="w-6 h-6 cursor-pointer transition-all duration-300 transform hover:scale-110 mt-1"
          />
          <img 
            src="src/assets/images_jawher/heart.png" 
            alt="heart"
            className="w-6 h-6 cursor-pointer transition-all duration-300 transform hover:scale-110 mt-1"
          />
        </div>

        <img
          src={imageUrl}
          className="object-cover mx-0 my-4 mt-8 h-[230px] w-full max-w-[300px] rounded-lg transition-transform duration-300 hover:scale-105 hover:rotate-2"
          alt={altText}
        />

        <h2 className="mx-0 my-4 text-lg text-center h-[60px] font-semibold transition-all duration-300 hover:text-[#904A41]">
          {title}
        </h2>

        <button className="px-5 py-2 text-lg font-semibold text-white bg-[#904A41] rounded-xl cursor-pointer border-[none] shadow-md transition-all duration-300 hover:bg-[#a55a52] hover:scale-105 active:translate-y-[2px] active:shadow-sm">
          Discover
        </button>
      </article>
    );
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&family=Quicksand:wght@700&display=swap"
        rel="stylesheet"
      />
      <main className="relative mx-auto my-0 w-full max-w-[1440px] px-4">
        <header className="px-0 py-5 text-xl bg-zinc-100 sticky top-0 z-10 shadow-md">
          Home &gt; Recipes
        </header>

        <section className="px-4 py-10 opacity-0 animate-fade-in">
          <div className="flex gap-5 items-center mb-8">
            <img
              src="src/assets/images_jawher/friedrice.png"
              className="h-[70px] w-[70px] animate-bounce"
              alt="Recipe icon"
            />
            <h1 className="text-6xl text-yellow-900 font-bold hover:text-[#904A41] transition-all duration-300">
              Our recipes
            </h1>
          </div>

          {/* Search Bar with animation */}
          <div className="flex items-center px-4 py-1 ml-auto mb-8 bg-orange-200 rounded-3xl border-2 border-[#904A41] border-solid h-[38px] w-full max-w-[455px] transition-transform duration-300 transform hover:scale-105 hover:bg-orange-300 shadow-md hover:shadow-xl">
            <input
              type="text"
              placeholder="Search recipes..."
              className="flex-1 text-base border-[none] bg-transparent outline-none transition-all duration-300 focus:ring-2 focus:ring-[#904A41] hover:ring-2"
            />
            <img 
              src="src/assets/images_jawher/search.png"
              alt="search"
              className="w-6 h-6 cursor-pointer transition-transform duration-300 transform hover:scale-125"
            />
          </div>

          <div className="grid gap-5 mb-16 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                imageUrl={recipe.imageUrl}
                altText={recipe.altText}
              />
            ))}
          </div>

          {/* Pagination with smooth transitions */}
          <nav className="flex gap-5 justify-center items-center mx-0 my-16">
            {/* Previous Button */}
            <button className="cursor-pointer border-none bg-transparent transform transition-transform duration-300 hover:scale-110 hover:rotate-12 hover:text-[#904A41]">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="1:838" layer-name="navigate_before" width="64" height="61" viewBox="0 0 64 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon"> <path d="M37.3333 45.75L21.3333 30.5L37.3333 15.25L41.0667 18.8083L28.8 30.5L41.0667 42.1917L37.3333 45.75Z" fill="#231918"></path> </svg>',
                }}
              />
            </button>

            {/* Page Numbers with hover effect */}
            <div className="flex gap-4">
              {["1", "2", "3", "4"].map((num, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center w-16 h-16 text-xl rounded-lg transition-all duration-300 ease-in-out transform bg-zinc-300 text-black hover:bg-[#904A41] hover:text-white active:bg-[#904A41] active:text-white hover:scale-105 hover:animate-bounce`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Next Button with rotation */}
            <button className="cursor-pointer border-none bg-transparent transform transition-transform duration-300 hover:scale-110 hover:rotate-12 hover:text-[#904A41]">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="1:839" layer-name="navigate_next" width="68" height="61" viewBox="0 0 68 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon"> <path d="M35.6505 30.5L22.6353 18.8083L26.5964 15.25L43.5728 30.5L26.5964 45.75L22.6353 42.1917L35.6505 30.5Z" fill="#231A16"></path> </svg>',
                }}
              />
            </button>
          </nav>
        </section>
      </main>
    </>
  );
}

export default RecipePage;
