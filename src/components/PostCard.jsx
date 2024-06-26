import axios from "axios"
import { Spinner } from "flowbite-react"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CallToAction from "./CallToAction"
import CommentSection from "./CommentSection"
import SinglePost from "./SinglePost"

function PostCard() {
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState(null)
  const [err, setErr] = useState(null)
  const [recentPosts, setRecentPosts] = useState([])

  let { slug } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        axios
          .get(`http://localhost:3232/api/v1/post/get-post?slug=${slug}`, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.success === false) {
              setLoading(false)
              return
            }
            setPost(res.data.posts[0])
            setLoading(false)
          })
          .catch((err) => {
            console.log(err)
            setLoading(false)
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost()
  }, [slug])

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        axios
          .get(`http://localhost:3232/api/v1/post/get-post`, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.success === true) {
              setRecentPosts(res.data.posts)
            }
          })
          .catch((err) => console.log(err))
      }
      fetchRecentPosts()
    } catch (error) {
      console.log(error)
    }
  }, [])
  // console.log(recentPosts)
  return (
    <>
      {loading && (
        <>
          <div className="min-h-screen   flex justify-center items-center">
            <Spinner size="xl" />
          </div>
        </>
      )}
      <div className="dark:bg-[unset] min-h-screen max-w-4xl mx-auto flex flex-col gap-4">
        <h2 className="dark:text-gray-400 font-bold text-[20px] md:text-3xl max-w-2xl text-center w-full mx-auto my-7 px-5">
          {post && post.title}
        </h2>
        <Link to={`/search?category=${post && post.category}`} className="-m-5">
          <button className="text-gray-400 dark:text-green-350 flex py-1    hover:text-gray-500  px-5 rounded-md  mx-auto max-w-2xl">
            {post && post.category}
          </button>
        </Link>
        <img
          className="border-2 border-lime-50 rounded-md max-w-4xl max-h-[200px] md:max-h-[300px] md: object-cover p-3 mt-4 mb-5"
          src={post && post.image}
          alt=""
        />

        <div className="box text-gray-400 max-w-2xl w-full mx-auto flex justify-between items-center mb-5 -mt-5 px-5">
          <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
          <span>
            {`${post && (post.content.length / 1000).toFixed(0)}`} mins read
          </span>
        </div>
        <div
          className=" dark:!text-slate-600 post-content max-w-2xl mx-auto mb-5 px-5 text-justify"
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>
        <hr />
        <div className="max-w-4xl w-full mx-auto md:p-0 p-5 ">
          <CallToAction />
        </div>
        <hr className="" />
        <div className="max-w-4xl w-full mx-auto md:p-0 p-5 ">
          <CommentSection postId={post && post._id} />
        </div>
        <div className="recentPosts max-w-4xl w-full mx-auto md:p-0 md:-mt-7 -mt-12 ">
          <h2 className="text-xl text-slate-600 dark:text-slate-300 text-center mb-5 font-bold ">
            Recents Posts
          </h2>
          <div className="p-3 flex flex-wrap gap-5 md:gap-10 justify-center postsWrapper mb-3">
            {recentPosts &&
              recentPosts.map((post) => {
                return <SinglePost key={post._id} post={post} />
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default PostCard
