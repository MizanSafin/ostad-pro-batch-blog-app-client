import axios from "axios"
import React, { useEffect, useState } from "react"
import moment from "moment"
import { IoThumbsUpSharp } from "react-icons/io5"
import { useSelector } from "react-redux"

function Comment({ comment, handleLike }) {
  const [users, setUsers] = useState({})

  const { currentUser } = useSelector((state) => state.user)

  useEffect(() => {
    const getUser = async () => {
      axios
        .get(`http://localhost:3232/api/v1/user/get-user/${comment.userId}`)
        .then((res) => {
          if (res.data.success === true) {
            setUsers(res.data.user)
          }
        })
        .catch((err) => console.log(err))
    }
    getUser()
  }, [comment])

  const { userName, profilePicture, email } = users
  return (
    <div className="flex gap-3 border-b p-5 border-slate-200 dark:border-slate-500 ">
      <div className="img flex-shrink-0">
        <img
          className="w-9 h-9 rounded-full"
          src={profilePicture}
          alt={userName}
        />
      </div>
      <div className="flex-1 flex-col flex ">
        <div className=" mb-2 flex gap-2 items-center">
          <span className="font-bold text-xs dark:text-gray-400 text-gray-600">
            user @{userName}
          </span>
          <span className="text-xs font-semibold dark:text-gray-400 text-gray-600">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        <div className="text-gray-500 text-sm font-semibold mb-2">
          {comment.content}
        </div>
        <div className="flex gap-3 text-xs border-t dark:border-slate-600 border-slate-300 my-2 p-2 w-fit">
          <button type="button" onClick={() => handleLike(comment._id)}>
            <IoThumbsUpSharp
              className={`text-slate-500 ${
                currentUser && comment.likes.includes(currentUser._id)
                  ? "!text-lime-500"
                  : ""
              }`}
            />
          </button>
          <h2 className="text-gray-400 text-xs font-semibold">
            {comment.numbersOfLikes}{" "}
            {comment.numbersOfLikes > 1 ? "likes" : "like"}{" "}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Comment
