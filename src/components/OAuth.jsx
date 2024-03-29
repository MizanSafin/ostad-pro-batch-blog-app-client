import React from "react";
import { Button } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/state/user/userSlice";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import axios from "axios";
function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      //http://localhost:3232/api/v1/auth/google
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
      let data = {
        name: resultsFromGoogle.user.displayName,
        email: resultsFromGoogle.user.email,
        googlePhotoUrl: resultsFromGoogle.user.photoURL,
      };
      console.log(data);
      axios
        .post(`http://localhost:3232/api/v1/auth/google`, data, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.success === true) {
            dispatch(signInSuccess(res.data.user));
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-3 mx-1">
      <Button
        gradientDuoTone="tealToLime"
        outline
        color="red"
        onClick={handleGoogleClick}
        className="googleBtn"
      >
        <FaGoogle className="font-bold text-lime-700 me-2" /> continue with
        google
      </Button>
    </div>
  );
}

export default OAuth;
