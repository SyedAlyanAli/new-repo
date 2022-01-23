import React, { useEffect, useState } from "react";
import logo from "./../../Images/logo.png";
// import dp from "./../../Images/logo192.png"
import profilephoto from "../../Images/profile2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { loginform ,uploadpic, getprofilepic } from "./../../Store/Action/auth";
import {Link} from "react-router-dom";


function UploadPhoto() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
console.log(auth)

  useEffect(() => {
    dispatch(loginform());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("profilepic", avatar);
     dispatch(uploadpic(data,auth.registereduser.saveuser._id))
  };


  const uploadProfilePhoto = (e) => {

    if (e.target.name === "profilepic") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);


   
     }
    // else {
   
    // const data = new FormData();

    // data.append("profilepic", file);
    // dispatch(uploadpic(data,auth.registereduser.saveuser._id))
    // }
  };

 
  return (
    <div className="container mt-2 mt-xxl-5">
      <div className="col-12 d-flex justify-content-center">
        <div className=" col-lg-4 col-md-8 d-flex justify-content-start">
          <img
            src={logo}
            width="auto"
            height="auto"
            className="d-none d-md-block "
            alt="something"
          />
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center mt-xxl-2">
        <div
          className=" col-lg-4 col-md-8 p-3 p-xxl-5 border-top mt-2 border-primary border-5 shadow-lg"
          style={{ backgroundColor: '#1c1921' }}
        >
          <h3 class="text-light text-center mb-3 mt-3 mt-xxl-5 mb-xxl-5">
            Thank you for Verification
          </h3>

        <div class="mt-4  d-flex  justify-content-center  align-items-center ">
        <label
                for="profileimages"
                style={
                  auth.getpic.profilepic
                    ? {
                        display: "block",
                        borderRadius: "50%",
                        position: "relative",
                        bottom: "0px",
                        left: "0px",
                      }
                    : {
                        visibility: "none",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        // backgroundImage:"./Images/Profile.png",
                        position: "relative",
                        bottom: "0px",
                        left: "0px",
                      }
                }
              >
                <img
                  className="profile-image border border-4 border-primary"
                  src={auth.getpic.profilepic ? `http://localhost:4000/${auth.getpic.profilepic}`: null}
                  style={
                    auth.getpic.profilepic
                      ? {
                          display: "block",
                          borderRadius: "50%",
                          height: "200px",
                          width: "200px",
                          border: "4px solid #f3f3f3",
                        }
                      : {
                          visibility: "none",
                          height: "120px",
                          width: "120px",
                          borderRadius: "50%",
                          backgroundColor: "white",
                          // backgroundImage:"./Images/Profile.png",

                          border: "4px solid #f3f3f3",
                          borderStyle: "none",
                        }
                  }
                />
              </label>
              <input
                accept="image/*"
                type="file"
                id="profileimages"
                name="profilepic"
                style={{ display: "none" }}
                onChange={uploadProfilePhoto}
              />
              <div className="position-absolute bi bi-upload text-dark"></div>
          {/* <img
            src={profilephoto}
            className="profile-image border border-4 border-primary rounded-circle mx-auto "
            style={{ width: "200px", height: "200px" }}
            alt="..."
          ></img> */}
          {/* <img src={profilephoto} class="rounded mx-auto d-block border-primary" alt="..."></img> */}
        </div>

        <div>
            <h5 class="text-light text-center mt-3 mb-4 mt-xxl-5 mb-xxl-5">
              Upload your Photo
            </h5>
          </div>

        {/* <div class="col d-grid gap-2 col-4 mx-auto mt-3  w-25 mb-5">
          <button class="btn btn-primary  rounded-3" onClick={handleSubmit} type="button">
            Upload
          </button>
        </div> */}

        {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
        <Link to="/profile">
          <button class="btn btn-primary mb-5  me-md-2 "  type="button">
            Skip
          </button>
          </Link> */}

          <div className="d-md-flex justify-content-md-between d-flex justify-content-center pb-xxl-3 pt-xxl-3">
            <button type="button" class="btn btn-primary me-2">
              <Link to="/profile" className="text-light text-decoration-none">
                {' '}
                Skip
              </Link>
            </button>
            <button type="submit" class="btn btn-primary" >
              Save
            </button>
          </div>
{/*          
          <button class="btn btn-primary mb-5  me-md-2 " type="button " >
            Save
          </button> */}
         
        </div>
      </div>
      </div>
    // </div>
  );
}

export default UploadPhoto;
