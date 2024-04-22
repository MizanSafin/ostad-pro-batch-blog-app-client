import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import DashBoardSidebar from "../components/DashBoardSidebar"
import DashBoardProfile from "../components/DashBoardProfile"
import DashPosts from "../components/DashPosts"
import DashUsers from "../components/DashUsers"
import DashComments from "../components/DashComments"
import DashComponent from "../components/DashComponent"

function Dashboard() {
  const [tab, setTab] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)

    let tabFromURL = urlParams.get("tab")
    if (tabFromURL) {
      setTab(tabFromURL)
    }
  }, [location.search])

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="">
        <DashBoardSidebar />
      </div>
      <div className="w-full">
        {tab === "profile" && <DashBoardProfile />}
        {tab === "posts" && <DashPosts />}
        {tab === "users" && <DashUsers />}
        {tab === "comments" && <DashComments />}
        {tab === "dash" && <DashComponent />}
      </div>
    </div>
  )
}

export default Dashboard
