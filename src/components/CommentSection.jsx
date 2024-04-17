import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function CommentSection({ postId }) {
  const [comment, setComment] = useState("");
  const [commentErr, setCommentErr] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (comment.trim() === "") {
        return;
      }
      let reqBody = { content: comment, postId, userId: currentUser._id };

      axios
        .post(`http://localhost:3232/api/v1/comment/create-comment`, reqBody, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.success === true) {
            setCommentErr(null);
            setComment("");
            setComments([...comments, res.data.comment]);
          }
        })
        .catch((err) => {
          setCommentErr(err.message);
        });
    } catch (error) {
      setCommentErr(error.message);
    }
  };
  console.log(comments);
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
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto w-full border p-1 border-lime-300"
          >
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
              <button
                type="submit"
                className="bg-lime-300 text-lime-700 px-4 py-1 rounded-md hover:bg-lime-700 hover:text-lime-300 transition-colors"
              >
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
