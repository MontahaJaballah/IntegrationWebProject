import React from "react";
import { useNavigate } from "react-router-dom";
import ForumCard from "./ForumCard";

const PostGrid = ({
  background = "transparent",
}) => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: "Healthy Eating Habits",
      author: "John Doe",
      date: "May 15, 2024",
      image: "https://via.placeholder.com/300",
      excerpt: "Discover the secrets to maintaining a balanced diet..."
    },
    {
      id: 2,
      title: "Fitness Workout Routine",
      author: "Jane Smith",
      date: "April 22, 2024",
      image: "https://via.placeholder.com/300",
      excerpt: "Learn effective exercises for total body transformation..."
    },
    {
      id: 3,
      title: "Mental Health Awareness",
      author: "Alex Johnson",
      date: "June 5, 2024",
      image: "https://via.placeholder.com/300",
      excerpt: "Understanding and improving your mental well-being..."
    }
  ];

  const handlePostClick = (postId) => {
    navigate(`/forum/post/${postId}`);
  };

  return (
    <div className="w-full max-w-[983px] max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {posts.map((post) => (
            <div
              key={post.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden w-[33%] max-md:ml-0 max-md:w-full"
              onClick={() => handlePostClick(post.id)}
            >
              <ForumCard
                background={background}
                image={post.image}
                title={post.title}
                author={post.author}
                date={post.date}
                excerpt={post.excerpt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostGrid;