import React from "react";
import ForumPostComponent from "../../components/Forum/ForumPostCard";
import ForumComment from "../../components/Forum/ForumComment";

function ForumPostView() {
    return (
        <div className="flex flex-col space-y-6">
            <ForumPostComponent />
            <ForumComment />
            <ForumComment />
            <ForumComment />
        </div>
    );
}

export default ForumPostView;