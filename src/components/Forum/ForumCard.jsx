import React, { useState } from "react";
import likeIcon from '../../assets/images/Forum/like.png';
import dislikeIcon from '../../assets/images/Forum/dislike.png';
import Avatars from '../../assets/images/Forum/Avatars _ 3d_avatar_9.png';
import ChefHat from '../../assets/images/Forum/chefHat.png'

function ForumCard({ background = "white" }) {
  const [likes, setLikes] = useState(777);
  const [dislikes, setDislikes] = useState(12);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const bgClass =
    background === "white"
      ? "bg-white"
      : background === "brand-secondary"
        ? "bg-brand-secondary"
        : "";

  const handleLike = () => {
    setLikes(current => isLiked ? current - 1 : current + 1);
    setIsLiked(!isLiked);

    // Reset dislike if it was previously disliked
    if (isDisliked) {
      setDislikes(current => current - 1);
      setIsDisliked(false);
    }
  };

  const handleDislike = () => {
    setDislikes(current => isDisliked ? current - 1 : current + 1);
    setIsDisliked(!isDisliked);

    // Reset like if it was previously liked
    if (isLiked) {
      setLikes(current => current - 1);
      setIsLiked(false);
    }
  };

  return (
    <article className="flex flex-col items-center text-black rounded-none max-w-[293px]">
      <img
        src={ChefHat}
        alt="Recipe logo"
        className="object-contain z-10 aspect-square w-[90px]"
      />
      <section className={`flex flex-col self-stretch px-4 py-9 w-full ${bgClass} rounded-xl border-4 border-brand-primary border-solid`}>
        <h1 className="text-3xl font-bold leading-9 font-body">
          My recipe for cooking ramen
        </h1>
        <p className="self-start mt-11 text-base tracking-widest leading-5 font-body">
          Boil ramen noodles in water until tender. Simmer a broth with soy
          sauce, miso paste, garlic, and ginger. Combine the noodles with the
          broth, then top with a soft-boiled egg...
        </p>
      </section>
      <div className="flex gap-3 mt-3 w-full leading-none text-center max-w-[268px]">
        <div className="flex flex-col items-center w-16">
          <img
            src={dislikeIcon}
            alt="Dislike Button"
            onClick={handleDislike}
            className={`object-contain shrink-0 w-8 h-8 mb-2 cursor-pointer transition-transform duration-200 ${isDisliked ? 'scale-110 opacity-80' : 'hover:scale-105'
              }`}
          />
          <p className="text-2xl font-bold leading-loose text-center whitespace-nowrap w-full font-body">
            {dislikes}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold tracking-[2.2px] font-display">
              Bridget Cosmus
            </h2>
            <p className="text-base tracking-widest font-body">
              Chef
            </p>
          </div>
          <img
            src={Avatars}
            alt="Avatar"
            className="object-contain shrink-0 max-w-full aspect-square rounded-[100px] w-[108px] mt-2 border-4 border-brand-primary"
          />
        </div>
        <div className="flex flex-col items-center w-16">
          <img
            src={likeIcon}
            alt="Like Button"
            onClick={handleLike}
            className={`object-contain shrink-0 w-8 h-8 mb-2 cursor-pointer transition-transform duration-200 ${isLiked ? 'scale-110 opacity-80' : 'hover:scale-105'
              }`}
          />
          <p className="text-2xl font-bold leading-loose text-center whitespace-nowrap w-full font-body">
            {likes}
          </p>
        </div>
      </div>
    </article>
  );
}

export default ForumCard;
