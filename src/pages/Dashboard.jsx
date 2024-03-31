import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashBoardSidebar from "../components/DashBoardSidebar";
import DashBoardProfile from "../components/DashBoardProfile";

function Dashboard() {
  const [tab, setTab] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    console.log(urlParams.get("tab"));
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
        {tab === "profile" ? <DashBoardProfile /> : <></>}
      </div>
    </div>
  );
}

export default Dashboard;
