import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function DashBoardSidebar() {
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
  console.log(tab);
  return (
    <Sidebar className="w-full md:w-64">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to={"/dashboard?tab=profile"}>
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label="user"
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
            Sign out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashBoardSidebar;
