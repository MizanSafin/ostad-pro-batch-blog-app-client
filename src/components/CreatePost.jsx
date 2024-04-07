import { FileInput, Select, TextInput } from "flowbite-react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  return (
    <div className="min-h-screen flex-col flex gap-4 p-5 items-center">
      <div className="wrapper w-full max-w-[600px] my-10 flex justify-center flex-col gap-4  p-0">
        <h2 className="text-2xl font-semibold">Create a Post</h2>
        <form className="flex flex-col  gap-7  py-5">
          <div className="flex gap-4 justify-between">
            <TextInput
              type="text"
              placeholder="title"
              className="w-full flex-1"
              id="title"
            />
            <Select>
              <option value="uncategorized">select a category</option>
              <option value="javascript">Javascript</option>
              <option value="reactjs">React.js</option>
              <option value="mern">MERN</option>
            </Select>
          </div>
          <div className="flex justify-between gap-4 sm:gap-10 border-gray-200 dark:border-gray-800 border-dashed rounded-md border-2 p-2">
            <FileInput className="flex-1" />
            <button className="border-lime-700 hover:border-none hover:bg-lime-200 dark:hover:bg-lime-700 transition-all border-2  px-4 py-1 rounded-md">
              Upload image
            </button>
          </div>
          <ReactQuill
            theme="snow"
            className="h-[200px] mb-10 "
            required
            placeholder="write something .."
          />
          <div className="ms-1 ">
            <button
              type="submit"
              className="bg-lime-100 px-10 py-2 rounded-md text-lime-700 hover:text-lime-100 hover:bg-lime-700 transition-all font-semibold"
            >
              publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
