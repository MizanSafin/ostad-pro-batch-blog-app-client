import React, { useEffect, useState } from "react"
import CallToAction from "../components/CallToAction"
import axios from "axios"
import SinglePost from "../components/SinglePost"
import HomeComponent from "../components/Hero/HomeComponent"

function Homepage() {
  const [recentPosts, setRecentPosts] = useState([])
  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        axios
          .get(`http://localhost:3232/api/v1/post/get-post?limit=5`, {
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
    <div className="homeDesign ">
      <div className="content md:mx-10 bg  my-0">
        <HomeComponent />
      </div>
      <div className="p-2 max-w-4xl mx-auto bg">
        <div className="">
          <CallToAction />
        </div>

        <div className=" border-t border-slate-100 dark:border-slate-800 ">
          {/* <div className="w-full h-full absolute top-0 left-0  opacity-20 -z-10">
          <img
            src="https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}
          <h2 className="py-5 text-xl  font-semibold text-center">
            Recent posts
          </h2>

          <div className=" p-3 flex flex-wrap gap-5 md:gap-6 justify-center postsWrapper mb-3">
            {recentPosts &&
              recentPosts.map((post) => {
                return <SinglePost key={post._id} post={post} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
