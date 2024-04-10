import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashBoardSidebar from "../components/DashBoardSidebar";
import DashBoardProfile from "../components/DashBoardProfile";
import DashPosts from "../components/DashPosts";

function Dashboard() {
  const [tab, setTab] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    let tabFromURL = urlParams.get("tab");
    if (tabFromURL) {
      setTab(tabFromURL);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="">
        <DashBoardSidebar />
      </div>
      <div className="w-full">
        {tab === "profile" && <DashBoardProfile />}
        {tab === "posts" && <DashPosts />}
      </div>
    </div>
  );
}

export default Dashboard;
