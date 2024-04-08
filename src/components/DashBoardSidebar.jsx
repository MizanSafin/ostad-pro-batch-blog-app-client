import axios from "axios";
import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signOutSuccess } from "../redux/state/user/userSlice";
import { ImBlog } from "react-icons/im";

function DashBoardSidebar() {
  const [tab, setTab] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    console.log(urlParams.get("tab"));
    let tabFromURL = urlParams.get("tab");
    if (tabFromURL) {
      setTab(tabFromURL);
    }
  }, [location.search]);

  //signOut
  const handleSignOut = () => {
    axios
      .get(`http://localhost:3232/api/v1/user/signOut`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success === false) {
          console.log(res.data.message);
        }
        dispatch(signOutSuccess());
      })
      .catch((err) => console.log(err));
  };

  return (
    <Sidebar className="w-full md:w-64">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to={"/dashboard?tab=profile"}>
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin === true ? "admin" : "user"}
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item active={tab === "posts"} icon={ImBlog} as="div">
                posts
              </Sidebar.Item>
            </Link>
          )}
          <Sidebar.Item
            onClick={handleSignOut}
            icon={HiArrowSmRight}
            className="cursor-pointer"
          >
            Sign out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashBoardSidebar;
