import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
// import DarkMode from "./DarkMode";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../redux/state/theme/themeSlice";
import { signOutSuccess } from "../redux/state/user/userSlice";
import axios from "axios";

function Header() {
  let dispatch = useDispatch();
  let { theme } = useSelector((state) => state.theme);
  let path = useLocation().pathname;
  let { currentUser } = useSelector((state) => state.user);
  console.log(theme);

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
    <>
      <Navbar className="shadow-md   dark:text-gray-300 ">
        <div className="left flex items-center">
          <Link
            to={"/"}
            className="whitespace-nowrap self-center py-2 text-lime-900"
          >
            <span className="px-2 py-1 bg-gradient-to-r to-lime-500 via-lime-300 from-lime-100 rounded-md ">
              Mizan,s
            </span>
            Blog
          </Link>
        </div>
        <form>
          <TextInput
            placeholder="Search..."
            type="text"
            rightIcon={AiOutlineSearch}
            className="lg:inline hidden"
          ></TextInput>
        </form>
        <Button className="lg:hidden " color={"gray"} pill>
          <AiOutlineSearch className="hover:text-slate-700 dark:text-slate-500" />
        </Button>
        <div className="flex gap-2 md:order-2 items-center">
          {/* <DarkMode /> */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="bg-transparent text-[18px] outline-slate-300 hover:bg-slate-100 rounded-full p-2 outline-3 cursor-pointer"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          {currentUser ? (
            <>
              <Dropdown
                className="object-cover"
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="user" img={currentUser.profilePicture} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{currentUser.userName}</span>
                  <span className=" mt-1 block text-sm truncate">
                    {currentUser.email}
                  </span>
                </Dropdown.Header>
                <Link to={"/dashboard?tab=profile"}>
                  <Dropdown.Item>profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
              </Dropdown>
            </>
          ) : (
            <Link to={"/sign-in"} className="">
              <Button
                className="bg-red-300 hover:bg-red-700 "
                gradientDuoTone="tealToLime"
                outline
              >
                Sign in
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to={"/"}>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to={"/about"}>About me</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to={"/projects"}>Projects</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/blogs"} as={"div"}>
            <Link to={"/blogs"}>Blogs</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/contact"} as={"div"}>
            <Link to={"/contact"}>contact me</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
