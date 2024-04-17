import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="">
      {currentUser ? (
        <div className="flex gap-2 items-center justify-between pb-5 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <p>Sign in as</p>
            <img
              src={currentUser.profilePicture}
              className="w-5 h-5 object-cover rounded-full"
              alt=""
            />
          </div>
          <Link
            to={"/dashboard?tab=profile"}
            className="text-xs text-lime-400 hover:text-lime-700 transition-colors"
          >
            @{currentUser.userName}
          </Link>
        </div>
      ) : (
        <div>
          <h2>Please sign in before comment</h2>
          <Link to={"/sign-in"}>Sign in</Link>
        </div>
      )}
    </div>
  );
}

export default CommentSection;
