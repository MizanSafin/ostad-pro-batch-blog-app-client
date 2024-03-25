import axios from "axios";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const [formData, setFormData] = useState({});
  const [errMessage, setErrMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async () => {
    let { userName, email, password } = formData;
    if (!userName || !email || !password) {
      return setErrMessage(`All fields are required .`);
    }
    setLoading(true);
    setErrMessage(null);
    axios
      .post(`http://localhost:3232/api/v1/user/createUser`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success === true) {
          navigate("/sign-in");
          setLoading(false);
        }
      })
      .catch((err) => {
        setErrMessage(
          "Same user found with this email & password .Please Sign in"
        );
        setLoading(false);
      });
  };

  return (
    <div className=" min-h-screen flex flex-col md:flex-row  justify-between gap-7 max-w-[1200px] mx-auto">
      <div className="mt-20 flex-1  flex flex-col gap-5 justify-start ps-5 md:ms-10 md:mt-36 ">
        <Link to={"/"} className=" py-2 text-4xl text-lime-900 font-semibold">
          <span className="px-2 py-1 bg-gradient-to-r to-lime-500 via-lime-300 from-lime-100 rounded-md text-lime-700">
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
        <div className="flex max-w-md flex-col gap-4 shadow-sm bg-lime-200 px-5 py-7 rounded-md">
          <div>
            <div className="mb-2 block">
              <Label
                className="text-lime-700 text-[16px]"
                htmlFor="userName"
                value="User Name :"
              />
            </div>
            <TextInput
              onChange={handleChange}
              className=""
              id="userName"
              type="text"
              // sizing="md"
              placeholder="User name."
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="text-lime-700"
                htmlFor="email"
                value="Email :"
              />
            </div>
            <TextInput
              onChange={handleChange}
              id="email"
              type="text"
              sizing="md"
              placeholder="demo@useremail.com"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="text-lime-700"
                htmlFor="password"
                value="Password :"
              />
            </div>
            <TextInput
              onChange={handleChange}
              id="password"
              type="password"
              sizing="md"
              placeholder="Enter password."
            />
          </div>
          <div>
            <Button
              className="bg-red-300 hover:bg-red-700 text-lime-700"
              gradientDuoTone="tealToLime"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span>loading ...</span>
                </>
              ) : (
                "Sign up"
              )}
            </Button>
          </div>

          <div className="mt-0 flex gap-7 items-center">
            <span className="text-lime-700">Have an account ?</span>
            <Link
              to={"/sign-in"}
              className="bg-lime-100 hover:bg-lime-200 transition px-4 py-1 rounded-md text-lime-700"
            >
              Sign in
            </Link>
          </div>

          {errMessage && (
            <Alert className="mt-5 " color="failure">
              {errMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
