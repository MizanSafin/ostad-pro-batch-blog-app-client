import { Alert, Button, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineExclamationCircle } from "react-icons/hi";
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
import {
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
} from "../redux/state/user/userSlice";

function DashBoardProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const filePickerRef = useRef();
  const [fileUploadProgress, setFileUploadProgress] = useState(null);
  const [fileUploadError, setFileUploadError] = useState(null);
  const [fileUploading, setFileUploading] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [updateErrMsg, setUpdateErrMsg] = useState(null);
  const [updateSuccessMsg, setUpdateSuccessMsg] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim().toLowerCase(),
    });
  };

  const handleImageChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      setImg(file);
      setImgUrl(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (img) {
      uploadImage();
    }
  }, [img]);

  async function uploadImage() {
    setFileUploading(true);
    setFileUploadError(null);

    const storage = getStorage(app);
    const fileName = new Date().getTime() + img.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setFileUploadError(
          "Could not upload image (File must be less than 2MB)"
        );
        setFileUploadProgress(null);
        setImg(null);
        setImgUrl(null);
        setFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
          setFileUploading(false);
          setUpdateErrMsg(null);
        });
      }
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (Object.keys(formData).length === 0) {
      return;
    }
    if (formData.userName && formData.userName.includes(" ")) {
      setUpdateErrMsg("UserName should not have a space");
      setUpdateSuccessMsg(null);
      return;
    }
    let name = formData.userName;
    if (name === undefined || name.length < 7 || name.length > 20) {
      setUpdateErrMsg(`Please enter username length between 7 -20`);
      return;
    }
    if (fileUploading) {
      setUpdateErrMsg(`Please wait for image uploading...`);
      setUpdateSuccessMsg(null);
      return;
    }
    setUpdateSuccessMsg(null);
    dispatch(updateStart());
    axios
      .post(
        `http://localhost:3232/api/v1/user/updateUser/${currentUser._id}`,
        formData,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        if (res.data.success === false) {
          dispatch(updateFailure(res.data.message));
        }
        dispatch(updateSuccess(res.data.data));
        setUpdateErrMsg(null);
        setUpdateSuccessMsg(`Profile update successfully!`);
      })
      .catch((err) => {
        console.log(err);
        dispatch(updateFailure(err.message));
      });
  };

  const handleDeleteUser = () => {
    setShowModal(false);
    dispatch(deleteUserStart());
    axios
      .delete(
        `http://localhost:3232/api/v1/user/deleteUser/${currentUser._id}`,
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.success === false) {
          dispatch(deleteUserFailure(res.data.message));
        }
        dispatch(deleteUserSuccess());
      })
      .catch((err) => dispatch(deleteUserFailure(err.message)));
  };

  return (
    <div className="p-3 flex gap-6 my-4 flex-col items-center ">
      <h1 className="text-center text-2xl">Profile</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={filePickerRef}
        hidden
      />
      <form
        onClick={handleSubmit}
        className="flex gap-4 flex-col justify-center  w-full max-w-[500px]"
      >
        <div
          className="relative cursor-pointer self-center w-32 h-32 overflow-hidden shadow-md rounded-full"
          onClick={() => filePickerRef.current.click()}
        >
          {fileUploadProgress && (
            <CircularProgressbar
              value={fileUploadProgress || 0}
              text={`${fileUploadProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62, 152, 199, ${fileUploadProgress / 100})`,
                },
              }}
            />
          )}
          <img
            className={`border-4  border-gray-200 w-full h-full rounded-full object-cover ${
              fileUploadProgress && fileUploadProgress < 100 && "opacity-60"
            }`}
            src={imgUrl || currentUser.profilePicture}
            alt="userPic"
          />
        </div>
        {fileUploadError ? (
          <>
            <Alert color="failure">{fileUploadError}</Alert>
          </>
        ) : (
          <></>
        )}
        <TextInput
          onChange={handleChange}
          type="text"
          id="userName"
          defaultValue={currentUser.userName}
        />

        <TextInput
          onChange={handleChange}
          type="email"
          id="email"
          defaultValue={currentUser.email}
        />
        <TextInput
          onChange={handleChange}
          type="password"
          id="password"
          defaultValue="********"
        />

        {updateErrMsg && (
          <>
            <hr />
            <Alert color="failure">{updateErrMsg}</Alert>
          </>
        )}
        {updateSuccessMsg && (
          <>
            <hr />
            <Alert color="success">{updateSuccessMsg}</Alert>
          </>
        )}
        <Button type="submit" gradientDuoTone="tealToLime" outline>
          Update
        </Button>
        <div className="flex justify-between text-red-300 ">
          <button
            onClick={() => setShowModal(true)}
            className="hover:text-red-400"
          >
            delete account
          </button>
          <button className="hover:text-red-400">sign out</button>
        </div>
      </form>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete your account?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteUser}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DashBoardProfile;
