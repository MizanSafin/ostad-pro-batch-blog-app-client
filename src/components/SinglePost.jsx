import React from "react"
import { Link } from "react-router-dom"

function SinglePost({ post }) {
  return (
    <div className="md:w-[260px] w-[320px]  h-auto p-4 flex flex-col gap-5   shadow-md dark:border dark:border-lime-300 rounded-md">
      <Link
        to={`/post/${post.slug}`}
        className="w-full h-[150px] overflow-hidden"
      >
        <img
          className="object-cover w-full h-[150px] hover:h-[200px] transition-all duration-300 rounded-md"
          src={post.image}
          alt=""
        />
      </Link>
      <div className=" flex flex-col gap-2 p-1">
        <h3 className="text-gray-500 font-semibold dark:text-gray-300">
          {post.title}
        </h3>
        <h4 className="text-sm text-lime-800">{post.category}</h4>
        <button className="mt-2 bg-lime-500 py-1 text-lime-200 hover:text-lime-500 hover:bg-lime-200 transition-all duration-300 rounded-md">
          <Link to={`/post/${post.slug}`}>Read Article</Link>
        </button>
      </div>
    </div>
  )
}

export default SinglePost
