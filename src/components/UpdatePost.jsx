import { Alert, FileInput, Select, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//functional component start
function UpdatePost() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({});
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [publishErr, setPublishErr] = useState(null);
  const navigate = useNavigate();
  const { postId } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(
          `http://localhost:3232/api/v1/post/get-post?postId=${postId}`
        );

        if (response.data.success === false) {
          setPublishErr(response.data.message);
          return;
        }

        setFormData(response.data.posts[0]);
      } catch (error) {
        setPublishErr(error.message);
      }
    })();
  }, [postId]);
  /*
     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.id]: e.target.value });
    };
*/
  const handleUploadImg = async () => {
    try {
      if (!file) {
        setImageUploadError(`Please select an image .`);
        return;
      }
      let storage = getStorage(app);
      let filename = new Date().getTime() + file.name;
      let storageRef = ref(storage, filename);
      let uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError(`Image upload failed .`);
      setImageUploadProgress(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:3232/api/v1/post/update-post/${currentUser._id}/${postId}`,
        formData,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.success === false) {
          setPublishErr(res.data.message);
          return;
        } else {
          navigate(`/post/${res.data.updatedPost.slug}`);
          alert("post updated successfully");
        }
      })
      .catch((error) => setPublishErr(error.message));
  };

  return (
    <div className="min-h-screen flex-col flex gap-4 p-5 items-center">
      <div className="wrapper w-full max-w-[600px] my-10 flex justify-center flex-col gap-4  p-0">
        <h2 className="text-2xl font-semibold">Update Post</h2>
        <form className="flex flex-col  gap-7  py-5" onSubmit={handleSubmit}>
          <div className="flex gap-4 justify-between">
            <TextInput
              type="text"
              placeholder="Title"
              className="w-full flex-1"
              id="title"
              value={formData.title || ""}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
            <Select
              id="category"
              value={formData.category || ""}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="uncategorized">Select a category</option>
              <option value="javascript">Javascript</option>
              <option value="reactjs">React.js</option>
              <option value="mern">MERN</option>
            </Select>
          </div>
          <div className="flex justify-between gap-4 sm:gap-10 border-gray-200 dark:border-gray-800 border-dashed rounded-md border-2 p-2">
            <FileInput
              className="flex-1"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button
              onClick={handleUploadImg}
              disabled={imageUploadProgress}
              className={` text-lime-950  border-none outline-none hover:text-lime-700 dark:hover:text-lime-700 transition-all border-2 text-[13px] h-10  rounded-md ${
                imageUploadProgress ? " bg-none w-auto" : "bg-lime-200 w-24"
              }`}
            >
              {imageUploadProgress ? (
                <>
                  <CircularProgressbar
                    className="h-10 w-10 text-2xl"
                    value={imageUploadProgress}
                    text={`${imageUploadProgress ? imageUploadProgress : 0}%`}
                  />
                </>
              ) : (
                "Upload image"
              )}
            </button>
          </div>
          {imageUploadError && (
            <Alert color="failure">{imageUploadError}</Alert>
          )}
          {formData.image && (
            <>
              <img
                src={formData.image}
                alt=""
                className="w-full h-60 object-cover"
              />
            </>
          )}
          <ReactQuill
            theme="snow"
            className="h-[200px] mb-10 "
            required
            id="content"
            value={formData.content || ""}
            placeholder="write something .."
            onChange={(value) => setFormData({ ...formData, content: value })}
          />
          <div className="ms-1 ">
            <button
              type="submit"
              className="bg-lime-100 px-10 py-2 rounded-md text-lime-700 hover:text-lime-100 hover:bg-lime-700 transition-all font-semibold"
            >
              Update
            </button>
          </div>
          {publishErr && (
            <>
              <Alert color="failure">{publishErr}</Alert>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default UpdatePost;
