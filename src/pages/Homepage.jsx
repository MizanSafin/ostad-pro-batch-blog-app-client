import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row gap-7 ">
      <div className="mt-28 flex-1  flex flex-col gap-5 justify-start ps-5">
        <Link to={"/"} className=" py-2 text-4xl text-gray-700 font-semibold">
          <span className="px-2 py-1 bg-gradient-to-r to-lime-900 via-lime-700 from-amber-400 rounded-md text-gray-200">
            Mizan,s
          </span>
          Blog
        </Link>
        <h3 className="text-gray-700 text-[16px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
          nesciunt. Lorem ipsum dolor sit amet.
        </h3>
      </div>

      <div className="p-5 flex-1  mt-10">
        <div className="flex max-w-md flex-col gap-4 bg-lime-50 px-5 py-7 rounded-md">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="userName" value="User Name :" />
            </div>
            <TextInput
              className=""
              id="userName"
              type="text"
              // sizing="md"
              placeholder="User name."
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email :" />
            </div>
            <TextInput
              id="email"
              type="text"
              sizing="md"
              placeholder="demo@useremail.com"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password :" />
            </div>
            <TextInput
              id="password"
              type="text"
              sizing="md"
              placeholder="Enter password."
            />
          </div>
          <div>
            <Button
              className="bg-red-300 hover:bg-red-700 "
              gradientDuoTone="tealToLime"
              outline
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
