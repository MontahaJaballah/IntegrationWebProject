import React from "react";

function RecipeDetails() {
  // Recipe steps data
  const steps = [
    {
      stepNumber: 1,
      title: "Slow roast",
      description: "Rub beef with oil and salt, roast at 130°...view more",
      imageUrl:
        "src/assets/images_jawher/slow_roast.png",
    },
    {
      stepNumber: 2,
      title: "Cool",
      description: "Rest at room temp for 30 min, then ...view more",
      imageUrl:
        "src/assets/images_jawher/cool.png",
    },
    {
      stepNumber: 3,
      title: "Crispy potato straws",
      description: "Julienne potato, rinse, dry, then fry for ...view more",
      imageUrl:
      "src/assets/images_jawher/crispy_potato.png"
    },
    {
      stepNumber: 4,
      title: "Slice",
      description: "Cut into thin slices ...view more",
      imageUrl:
    "src/assets/images_jawher/slice.png"
    },
  ];

  // Features data
  const features = [
    {
      id: 1,
      title: "Fast delivery",
      description: "We prepare and ship your package the day after your order.",
      iconUrl:
        "src/assets/images_jawher/Delivery_icon.png",
      altText: "Delivery icon",
    },
    {
      id: 2,
      title: "In-Store pickup",
      description:
        "Prefer to collect your order? Choose free same-day pickup at our store located in Ariena.",
      iconUrl:
        "src/assets/images_jawher/Store_icon.png",
      altText: "Store icon",
    },
    {
      id: 3,
      title: "Secure Payment",
      description:
        'Payments are processed through Monetique Tunisie\'s "Clictopay" platform. We do not store any banking information.',
      iconUrl:
        "src/assets/images_jawher/Payment_icon.png",
      altText: "Payment icon",
    },
  ];

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Asap:wght@400;600;700&family=Quicksand:wght@700&display=swap"
        rel="stylesheet"
      />

      {/* Main Container */}
      <main className="p-0 m-0 min-h-screen bg-white">

        {/* Breadcrumb Navigation */}
        <nav className="px-60 py-7 text-xl bg-zinc-100 lg:px-40 md:px-20 sm:px-10 max-sm:p-4">
          <span>Home &gt; recipes &gt;</span>
          <span className="font-bold">Discover</span>
        </nav>

        {/* Main Content Section */}
        <section className="px-40 py-9 relative lg:px-32 md:px-16 sm:px-8 max-md:p-5 opacity-0 animate-fade-in">
          {/* Title and Bookmark */}
          <div className="flex gap-5 items-center flex-wrap">
            <h1 className="text-6xl font-bold text-yellow-900 lg:text-5xl md:text-4xl max-sm:text-4xl transition-all ease-in-out duration-300 hover:text-yellow-600">
              Beef TakiTaki
            </h1>
            <div className="cursor-pointer">
              <svg
                width="61"
                height="66"
                viewBox="0 0 61 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bookmark-icon lg:w-[50px] lg:h-[55px] md:w-[45px] md:h-[50px] sm:w-[40px] sm:h-[45px] transition-transform ease-in-out duration-300 hover:scale-110"
              >
                <path
                  d="M12.7083 57.75V13.75C12.7083 12.2375 13.206 10.9427 14.2015 9.86563C15.197 8.78854 16.3937 8.25 17.7916 8.25H43.2083C44.6062 8.25 45.8029 8.78854 46.7984 9.86563C47.7938 10.9427 48.2916 12.2375 48.2916 13.75V57.75L30.4999 49.5L12.7083 57.75Z"
                  fill="#904A41"
                ></path>
              </svg>
            </div>
          </div>

          {/* Rating Section */}
          <div className="flex flex-col gap-2.5 mt-5">
            <h2 className="text-3xl font-semibold text-yellow-900 md:text-2xl sm:text-xl">
              Rating
            </h2>
            <div className="flex gap-6 flex-wrap">
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src="src/assets/images_jawher/star.png"
                  alt="star"
                  className="h-[46px] w-[46px] md:h-[40px] md:w-[40px] sm:h-[35px] sm:w-[35px]"
                />
              ))}
              <img
                src="src/assets/images_jawher/half_star.png"
                alt="half star"
                className="h-[46px] w-[46px] md:h-[40px] md:w-[40px] sm:h-[35px] sm:w-[35px]"
              />
            </div>
          </div>

          {/* Ask Wasabi Section */}
          <aside className="flex items-center px-5 py-0 bg-[#904A41] h-[116px] rounded-[50px] w-[314px] xl:absolute xl:right-[157px] xl:top-[125px] lg:absolute lg:right-[100px] lg:top-[125px] md:static md:mx-auto md:my-5 md:w-[280px] md:h-[100px] sm:static sm:mx-auto sm:my-5 sm:w-full sm:h-auto max-sm:static max-sm:mx-auto max-sm:my-5 max-sm:p-2.5 max-sm:w-full max-sm:h-auto">
            <h3 className="ml-5 text-3xl font-bold text-white md:text-2xl sm:text-xl">
              Ask Wasabi
            </h3>
            <img
              src="src/assets/images_jawher/wasabi.png"
              alt="Wasabi"
              className="ml-auto h-[91px] rounded-[50px] w-[90px] md:h-[75px] md:w-[75px] sm:h-[60px] sm:w-[60px] max-sm:h-[60px] max-sm:w-[60px] transition-all duration-300 hover:scale-110"
            />
          </aside>

          {/* Recipe Steps Section */}
          <div className="flex gap-6 mt-12 lg:gap-4 md:gap-3 md:flex-wrap md:justify-center sm:gap-4 sm:flex-wrap sm:justify-center max-sm:flex-col max-sm:items-center">
            {steps.map((step) => (
              <article key={step.stepNumber} className="flex flex-col gap-5 transition-all ease-in-out duration-300 hover:scale-105 hover:animate-wiggle">
                <h3 className="text-4xl font-bold text-center text-pink-900 md:text-3xl sm:text-2xl">
                  Step {step.stepNumber}
                </h3>
                <div className="overflow-hidden bg-amber-200 rounded-xl border-pink-900 border-solid border-[3px] h-[386px] w-[264px] lg:h-[360px] lg:w-[240px] md:h-[340px] md:w-[220px] sm:h-[320px] sm:w-[280px] max-sm:w-full max-sm:max-w-[320px] transition-all ease-in-out duration-300 hover:shadow-xl">
                  <div className="flex gap-4 justify-end p-2.5">
                    <i className="ti ti-share text-xl text-black" />
                    <i className="ti ti-heart text-xl text-black" />
                  </div>
                  <img
                    src={step.imageUrl}
                    alt={`Step ${step.stepNumber}`}
                    className="object-cover w-full h-[125px] md:h-[110px] sm:h-[100px] transition-transform duration-300 hover:scale-105 hover:rotate-2"
                  />
                  <h4 className="mt-5 text-3xl font-bold text-center md:text-2xl sm:text-xl">
                    {step.title}
                  </h4>
                  <p className="p-5 text-base tracking-widest text-center md:p-4 sm:p-3 sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Add to Basket Button */}
          <div className="flex justify-center mt-16 mb-8">
            <button
              className="text-2xl font-semibold text-white bg-[#904A41] rounded-xl cursor-pointer border-[none] h-[72px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[257px] sm:w-[220px] sm:h-[60px] sm:text-xl max-sm:w-full max-sm:max-w-[250px] max-sm:h-[60px] max-sm:text-xl transition-all ease-in-out duration-300 hover:bg-yellow-600 active:translate-y-[2px] active:shadow-sm"
              onClick={() => console.log("Added to basket")}
            >
              Add to basket
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid gap-10 p-10 mt-16 bg-white grid-cols-[repeat(3,1fr)] max-md:grid-cols-[1fr] max-sm:gap-5 max-sm:grid-cols-[1fr]">
          {features.map((feature) => (
            <article key={feature.id} className="text-center transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={feature.iconUrl}
                className="mb-5 h-[60px] w-[60px] mx-auto transition-transform duration-300 transform hover:scale-125 hover:rotate-6 hover:shadow-md hover:shadow-[#904A41]"
                alt={feature.altText}
              />
              <h3 className="mb-2.5 text-xl font-extrabold hover:text-[#904A41]">{feature.title}</h3>
              <p className="text-lg opacity-50 hover:opacity-100">{feature.description}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default RecipeDetails;
