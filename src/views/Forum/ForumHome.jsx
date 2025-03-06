import React from "react";
import PostGrid from "../../components/Forum/PostGrid";

function ForumHome() {
    return (
        <main className="flex overflow-hidden flex-col items-center pt-11 pb-3 bg-white">
            <section className="flex flex-col w-full max-w-[1125px] max-md:max-w-full">
                <header>
                    <h1 className="self-center text-6xl font-bold tracking-normal leading-none text-center text-brand-primary max-md:max-w-full max-md:text-4xl font-display">
                        Recommended for you
                    </h1>
                    <p className="self-start mt-4 ml-3 text-xl tracking-normal leading-none text-left text-black max-md:ml-2.5 font-body">
                        Showing 1 - 9 of 60 results
                    </p>
                </header>

                <div className="flex flex-wrap gap-5 justify-between mt-11 w-full max-md:mt-10 max-md:max-w-full">
                    <button className="flex overflow-hidden flex-col justify-center text-2xl font-bold tracking-normal leading-none text-center text-white bg-brand-primary rounded-xl min-h-[47px] font-display">
                        <span className="flex flex-1 gap-2 justify-center items-center bg-brand-primary py-2.5 pr-6 pl-4 size-full max-md:pr-5 font-body">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <span className="self-stretch my-auto">Add Post</span>
                        </span>
                    </button>
                    <div className="flex gap-7 self-start max-md:max-w-full">
                        <button className="flex overflow-hidden flex-col justify-center text-xl font-semibold tracking-normal leading-none text-center text-brand-primary bg-brand-secondary rounded-xl border-2 border-brand-primary border-solid min-h-[38px]">
                            <span className="flex flex-1 gap-2 justify-center items-center py-2.5 pr-6 pl-4 size-full max-md:pr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                                <span className="self-stretch my-auto">Sort By</span>
                            </span>
                        </button>
                        <div className="flex overflow-hidden flex-auto gap-1 bg-brand-secondary rounded-3xl border-2 border-brand-primary border-solid min-h-[38px]">
                            <div className="flex flex-1 items-center px-4">
                                <input
                                    type="text"
                                    placeholder="Search forums..."
                                    className="w-full bg-transparent outline-none font-body text-brand-primary placeholder-brand-primary/50"
                                />
                                <div className="flex items-center ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-brand-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center self-stretch px-20 py-3.5 mt-10 w-full bg-brand-secondary max-md:px-5 max-md:max-w-full">
                <PostGrid background="white" />
            </section>

            <section className="mt-8 w-full max-w-[983px] max-md:max-w-full">
                <PostGrid background="brand-secondary" />
            </section>

            <section className="flex flex-col justify-center items-center self-stretch px-20 py-3.5 mt-7 w-full bg-brand-secondary max-md:px-5 max-md:max-w-full">
                <PostGrid background="white" />
            </section>

            <nav
                className="flex gap-8 mt-8 max-w-full text-xl tracking-normal leading-none text-center whitespace-nowrap w-[433px]"
                aria-label="Pagination"
            >
                <div className="flex gap-4 text-white">
                    <button aria-label="Previous page">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </button>
                    <button
                        className="px-6 w-16 h-16 bg-brand-primary max-md:px-5"
                        aria-current="page"
                    >
                        1
                    </button>
                </div>
                <div className="flex flex-auto gap-5 text-black">
                    <button className="px-7 w-16 h-16 bg-zinc-300 max-md:px-5">2</button>
                    <button className="px-7 w-16 h-16 bg-zinc-300 max-md:px-5">3</button>
                    <button className="px-7 w-16 h-16 bg-zinc-300 max-md:px-5">4</button>
                    <button aria-label="Next page">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </nav>
        </main>
    );
}

export default ForumHome;
