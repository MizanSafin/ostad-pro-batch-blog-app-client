import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DarkMode from "./DarkMode";
import { AiOutlineSearch } from "react-icons/ai";
function Header() {
  let path = useLocation().pathname;

  return (
    <>
      <Navbar className="shadow-md   dark:text-gray-300 ">
        <div className="left flex items-center">
          <Link to={"/"} className="whitespace-nowrap self-center py-2">
            <span className="px-2 py-1 bg-gradient-to-r from-lime-900 via-lime-700 to-amber-400 rounded-md text-gray-200">
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
        <div className="flex gap-2 md:order-2">
          <DarkMode />
          <Link to={"/sign-in"} className="">
            <Button
              className="bg-red-300 hover:bg-red-700 "
              gradientDuoTone="tealToLime"
              outline
            >
              Sign in
            </Button>
          </Link>
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
