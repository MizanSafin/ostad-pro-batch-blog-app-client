import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Alert } from "flowbite-react"
import Comment from "./Comment"

function CommentSection({ postId }) {
  const [commentText, setCommentText] = useState("")
  const [commentErr, setCommentErr] = useState(null)
  const { currentUser } = useSelector((state) => state.user)
  const [comments, setComments] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (commentText.trim() === "") {
        return
      }
      let reqBody = { content: commentText, postId, userId: currentUser._id }

      axios
        .post(`http://localhost:3232/api/v1/comment/create-comment`, reqBody, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.success === true) {
            setCommentErr(null)
            setCommentText("")
            setComments([res.data.comment, ...comments])
          }
        })
        .catch((err) => {
          setCommentErr(err.message)
        })
    } catch (error) {
      setCommentErr(error.message)
    }
  }

  useEffect(() => {
    const getComments = async () => {
      try {
        axios
          .get(`http://localhost:3232/api/v1/comment/get-comments/${postId}`, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.success === true) {
              setComments(res.data.comments)
            }
          })
          .catch((err) => console.log(err))
      } catch (error) {
        console.log(error)
      }
    }
    getComments()
  }, [postId])

  const handleLike = async (commentId) => {
    if (!currentUser) {
      navigate("/sign-in")
      return
    }
    try {
      axios
        .get(`http://localhost:3232/api/v1/comment/like-comment/${commentId}`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.success === true) {
            setComments(
              comments.map((comment) =>
                comment._id === commentId
                  ? {
                      ...comment,
                      likes: res.data.comment.likes,
                      numbersOfLikes: res.data.comment.likes.length,
                    }
                  : comment
              )
            )
          }
        })
        .catch((err) => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

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
              onChange={(e) => setCommentText(e.target.value)}
              value={commentText}
              maxLength="120"
            ></textarea>
            <div className="flex justify-between items-center">
              <h2 className="text-xs">
                Remaining letters : {120 - commentText.length}
              </h2>
              <button
                type="submit"
                className="bg-lime-300 text-lime-700 px-4 py-1 rounded-md hover:bg-lime-700 hover:text-lime-300 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Comment error show */}
          {commentErr && (
            <>
              <Alert color="failure" className="mt-5">
                {commentErr}
              </Alert>
            </>
          )}

          <div className=" my-8 max-w-2xl mx-auto w-full">
            {comments && comments.length > 0 ? (
              <>
                <div className="heading flex gap-3 items-center mb-5">
                  <h2 className="text-sm font-semibold">Comments</h2>
                  <span className="text-xs  border border-lime-700 px-3 py-1">
                    {comments.length}
                  </span>
                </div>
                <hr />
              </>
            ) : (
              <h2>No comments </h2>
            )}

            {comments && comments.length > 0 ? (
              <>
                {comments.map((postComment, index) => {
                  return (
                    <Comment
                      key={index.toString()}
                      handleLike={handleLike}
                      comment={postComment}
                    />
                  )
                })}
              </>
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default CommentSection
