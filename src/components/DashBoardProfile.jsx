import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DashBoardProfile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 flex gap-6 my-4 flex-col items-center ">
      <h1 className="text-center text-2xl">Profile</h1>
      <form className="flex gap-4 flex-col justify-center  w-full max-w-[500px]">
        <div className=" self-center w-32 h-32 overflow-hidden shadow-md rounded-full">
          <img
            className="border-4  border-gray-200 w-full h-full rounded-full"
            src={currentUser.profilePicture}
            alt="userPic"
          />
        </div>
        <TextInput
          type="text"
          id="userName"
          defaultValue={currentUser.userName}
        />
        <TextInput type="email" id="email" defaultValue={currentUser.email} />
        <TextInput type="password" id="password" defaultValue="********" />
        <Button gradientDuoTone="tealToLime" outline>
          Update
        </Button>
        <div className="flex justify-between text-red-500">
          <Link>delete account</Link>
          <Link>sign out</Link>
        </div>
      </form>
    </div>
  );
}

export default DashBoardProfile;
