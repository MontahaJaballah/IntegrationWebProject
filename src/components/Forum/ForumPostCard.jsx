import React, { useState } from "react";
import likeIcon from '../../assets/images/Forum/like.png';
import dislikeIcon from '../../assets/images/Forum/dislike.png';
import Avatars from '../../assets/images/Forum/Avatars _ 3d_avatar_9.png';
import ChefHat from '../../assets/images/Forum/chefHat.png'
import Dish from '../../assets/images/Forum/Dish.png'

function RecipePost() {
    const [comment, setComment] = useState("");

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            console.log("Submitting comment:", comment);
            // Here you would typically send the comment to your backend
            setComment("");
        }
    };

    return (
        <article className="flex flex-col items-center">
            <section className="flex flex-wrap mt-7 w-full text-lg font-bold tracking-widest leading-none text-black max-w-[1118px] max-md:max-w-full max-md:gap-4 max-md:px-4">
                {/* Profile Header Section */}
                <header className="flex justify-between items-center self-stretch w-full max-w-[1109px] max-md:max-w-full py-0 mx-auto">
                    <div className="flex gap-3.5 items-center">
                        <img
                            src={Avatars}
                            className="object-contain aspect-square rounded-[100px] w-[78px] border-4 border-brand-primary"
                            alt="Profile avatar"
                        />
                        <div className="flex flex-col ml-2">
                            <h2 className="text-xl font-bold tracking-[2.2px]">
                                Bridget Cosmus
                            </h2>
                            <p className="text-base tracking-widest">Chef</p>
                        </div>
                    </div>
                    <img
                        src={ChefHat}
                        className="object-contain w-[100px] h-[100px]"
                        alt="Chef hat logo"
                    />
                </header>

                {/* Main Container */}
                <div className="flex flex-col items-center w-full max-md:px-5 max-md:max-w-full -mt-1">
                    <div className="absolute inset-x-0 top-3/4 bottom-[-360px] bg-brand-secondary"></div>
                    {/* Flex Container for Metrics + Article Side by Side */}
                    <div className="flex flex-row w-full justify-center relative z-10">
                        {/* Interaction Metrics Section */}
                        <section className="flex flex-col justify-start items-center mt-3">
                            <div className="flex flex-col items-center">
                                <p className="text-base font-semibold leading-loose text-center">
                                    545
                                </p>
                                <img
                                    src={likeIcon}
                                    className="object-contain aspect-square w-[30px] max-md:ml-2.5"
                                    alt="Like icon"
                                />
                                <img
                                    src={dislikeIcon}
                                    className="object-contain aspect-square w-[30px] max-md:ml-2.5"
                                    alt="Dislike icon"
                                />
                                <p className="text-base font-semibold leading-loose text-center">
                                    12
                                </p>
                            </div>
                        </section>

                        {/* Post Content Section */}
                        <article className="z-10 px-6 pt-3 pb-9 ml-4 max-w-full bg-white rounded-xl border-4 border-pink-900 border-solid w-[1033px] max-md:pr-5">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                                        <time className="self-start text-base tracking-widest leading-none">
                                            2 days ago
                                        </time>
                                        <h1 className="mt-2.5 text-4xl font-bold leading-none max-md:max-w-full">
                                            My recipe for cooking ramen
                                        </h1>
                                        <p className="mt-6 text-lg tracking-widest leading-7 max-md:max-w-full">
                                            Boil ramen noodles in water until tender, then drain and set
                                            aside. In a pot, simmer a flavorful broth with soy sauce, miso
                                            paste, garlic, and ginger, allowing the flavors to meld. Once
                                            the broth is ready, add the cooked noodles and let them soak
                                            up the rich taste. Top with a soft-boiled egg, sliced green
                                            onions, nori, and sesame seeds for an authentic touch. For
                                            extra depth, include protein like chicken or tofu and finish
                                            with a drizzle of chili oil for a spicy kick.
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <img
                                        src={Dish}
                                        className="object-contain grow mt-20 w-full aspect-[1.5] max-md:mt-10 max-md:max-w-full"
                                        alt="Ramen dish"
                                    />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Comment Input Section */}
            <section className="flex flex-wrap items-center gap-3 mt-7 w-full text-lg font-bold tracking-widest leading-none text-black max-w-[1118px] max-md:max-w-full max-md:gap-4 max-md:px-4 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-11 bg-brand-primary text-white rounded-full p-2 hover:bg-primary-600 transition-colors duration-300 ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                </svg>

                <form
                    onSubmit={handleCommentSubmit}
                    className="flex flex-auto  items-center px-4 py-3 bg-white rounded-xl border-4 border-brand-primary border-solid max-md:max-w-full max-md:py-2 w-[1033px]"
                >
                    <div className="flex items-center w-full">
                        <input
                            type="text"
                            placeholder="Write a comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full bg-transparent outline-none text-lg font-bold tracking-widest placeholder-black focus:placeholder-gray-400 transition-colors"
                            aria-label="Comment text"
                        />
                        <button
                            type="submit"
                            aria-label="Send comment"
                            className="flex items-center justify-center ml-4 p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary max-md:p-3 touch-manipulation">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </form>
            </section>
        </article>
    );
}

export default RecipePost;