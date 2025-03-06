"use client";
import React from "react";
import likeIcon from '../../assets/images/Forum/like.png';
import dislikeIcon from '../../assets/images/Forum/dislike.png';
import Avatars from '../../assets/images/Forum/Avatars _ 3d_avatar_13.png';


function CommentCard() {
    return (
        <article className="flex justify-center w-full">
            <article className="flex flex-wrap items-start gap-2.5 max-w-[1118px] w-full">
                {/* User Avatar Section */}
                <section className="flex flex-col items-center gap-2 self-start text-sm font-semibold leading-3 text-center text-black whitespace-nowrap w-[58px]">
                    <img
                        src={Avatars}
                        alt="User avatar"
                        className="object-contain self-stretch w-full aspect-[1.07] rounded-[100px]"
                    />
                    <p className="mt-2 font-body">120</p>
                    <img
                        src={likeIcon}
                        alt="Icon"
                        className="object-contain aspect-square w-[25px]"
                    />
                    <img
                        src={dislikeIcon}
                        alt="Icon"
                        className="object-contain aspect-square w-[25px]"
                    />
                    <p className="font-body">1</p>
                </section>

                {/* Comment Content Section */}
                <section className="flex-1 w-auto">
                    <header className="flex flex-wrap justify-between items-center w-full leading-none text-black max-md:max-w-full">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold tracking-[1.98px] font-body">User123</h2>
                            <p className="self-start text-base tracking-widest font-body">Client</p>
                        </div>
                        {/*
                        <img
                            src={plate}
                            alt="User icon"
                            className="object-contain shrink-0 aspect-square w-[65px]"
                        /> */}
                    </header>
                    <div className="w-full">
                        <article className="flex flex-col px-3 pt-3.5 pb-7 leading-none text-black bg-white rounded-xl border-4 border-brand-primary border-solid w-fit max-w-full">
                            <time className="self-start text-base font-semibold tracking-widest font-body">
                                1 day ago
                            </time>
                            <p className="mt-1.5 text-lg tracking-widest max-md:max-w-full font-body">
                                That sounds amazing! Any tips on getting the perfect soft-boiled
                                egg?
                            </p>
                        </article>
                        <div className="flex gap-2 mt-1.5 text-sm font-medium tracking-normal leading-none text-center text-white whitespace-nowrap">
                            <button className="flex items-center justify-center bg-brand-primary text-white rounded-xl min-h-[33px] min-w-20 hover:bg-brand-primary/90 transition-colors font-body">
                                <div className="flex gap-3 justify-center items-center px-3 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>
                                    <span className="font-body">Reply</span>
                                </div>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
            </article>
        </article>
    );
}

export default CommentCard;