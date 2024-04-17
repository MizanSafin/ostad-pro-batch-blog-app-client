import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CommentSection({ postId }) {
  const [comment, setComment] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className=" mb-5">
      {currentUser ? (
        <div className="max-w-2xl w-full mx-auto flex gap-2 items-center justify-between pb-5 text-gray-500 text-sm">
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
        <div className="flex gap-5 max-w-4xl w-full p-5 ">
          <h2 className="text-gray-500">Please sign in before comment</h2>
          <Link
            to={"/sign-in"}
            className="text-lime-400 hover:text-lime-700 hover:underline transition-colors"
          >
            Sign in
          </Link>
        </div>
      )}

      {currentUser && (
        <>
          <form className="max-w-2xl mx-auto w-full border p-1 border-lime-300">
            <textarea
              placeholder="Add a comment"
              name="comment"
              id="comment"
              rows="5"
              className="w-full"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              maxLength="120"
            ></textarea>
            <div className="flex justify-between items-center">
              <h2 className="text-xs">
                Remaining letters : {120 - comment.length}
              </h2>
              <button className="bg-lime-300 text-lime-700 px-4 py-1 rounded-md hover:bg-lime-700 hover:text-lime-300 transition-colors">
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default CommentSection;
