import React, { useEffect }  from "react";
import profilephoto from "../../Images/profile2.jpg";
import "./PlayerProfile.css";
import { loginform } from "./../../Store/Action/auth";
import { useDispatch, useSelector } from "react-redux";


function PlayerProfile() {
  const auth = useSelector((state) => state.auth);
 
  const dispatch = useDispatch();
  console.log(auth)
  
  useEffect(() => {
    dispatch(loginform());
  }, []);

  const uploadProfilePhoto = (file) => {
    const data = new FormData();

    data.append("profilepic", file);

    // fetch(`/user/image/uploadprofilepic/${auth.user._id}`, {
    //   method: "put",

    //   body: data,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch({ type: types.USER_PROFILE_PHOTOS, payload: data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6 mt-5 border-end border-1 border-light">
          <div class="row align-items-center">
            <div class="col-md-4 col-sm ">
              <label
                for="profileimages"
                style={
                  auth.getpic.profilepic 
                    ? {
                        display: "block",
                        borderRadius: "50%",
                        position: "relative",
                        bottom: "20px",
                        left: "10px",
                      }
                    : {
                        visibility: "none",
                        borderRadius: "50%",
                        backgroundColor: "gray",
                        position: "relative",
                        bottom: "60px",
                        left: "10px",
                      }
                }
              >
                <img
                  className="profile-image border border-4 border-primary"
                  src={auth.getpic.profilepic ? `http://localhost:4000/${auth.getpic.profilepic}`: null}
                  style={
                    profilephoto
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
                          backgroundColor: "gray",
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
                style={{ display: "none" }}
                onChange={(e) => uploadProfilePhoto(e.target.files[0])}
              />
            </div>
            
            <div class="col-md-8 col-sm   ">
            
              <div class="">
                {/* <h1 class="text-light ps-lg-3">
                  {auth.registereduser.saveuser.firstname}
                 {auth.registereduser.saveuser.lastname}
                 </h1> */}

                <div class="ps-lg-3">
                  <i class="bi bi-instagram fs-2 text-light m-3"></i>
                  <i class="bi bi-twitter fs-2 text-light"></i>
                </div>
              </div>
            </div>
            
          </div>

          <div class="row ps-5">
            <h2 class="text-primary  mt-3">About</h2>
            <p class="text-light ">
              I am an expert in PUB-G and I have Won 3<br /> World Championships
            </p>
            <h2 class="text-primary  mt-5">TOURNAMENT</h2>
          </div>
        </div>
      </div>

      <div class="mt-5 p-5 ">
        <table
          class="table text-light table-responsive"
          // style={{ backgroundColor: "#1c1921" }}
        >
          <thead >
            <tr >
              {/* HEADING */}
              <th class=" text-center mb-5  p-3 mb-5"  scope="col">
                <h3 class="text-success">Game</h3>
              </th>
              <th class=" text-center mb-5 p-3" scope="col">
                <h3 class="text-warning"> Tournament</h3>
              </th>
              <th class=" text-center mb-5 p-3 " scope="col">
                <h3 class="text-danger">Date</h3>
              </th>
              <th class="text-center mb-5 p-3" scope="col">
                <h3 class="text-primary">Status</h3>
              </th>
              <th class="  text-center mb-5 p-3" scope="col">
                <h3 class="text-light">Winnings</h3>
              </th>
            </tr>
            {/* HEADING  END*/}

            <tr>
              <th
              style={{backgroundColor:"rgb(54 49 64 / 42%)"}}
                class="border-success border border-3 text-center mb-5 shadow p-3 mb-5"
                scope="col"
              >
                PUB-G
              </th>
              <th
              style={{backgroundColor:"rgb(54 49 64 / 42%)"}}
                class="border-warning border border-3 text-center"
                scope="col"
              >
                PUB-G Semi-Final
              </th>
              <th
              style={{backgroundColor:"rgb(54 49 64 / 42%)"}}
                class="border-danger border border-3 text-center "
                scope="col"
              >
                01-05-2022
              </th>
              <th
              style={{backgroundColor:"rgb(54 49 64 / 42%)"}}
                class="border-primary border border-3 text-center"
                scope="col"
              >
                Won
              </th>
              <th
              style={{backgroundColor:"rgb(54 49 64 / 42%)"}}
                class=" border border-3 text-center"
                scope="col"
                style={{ borderBlockColor: "#a3f59a" }}
              >
                Rs. 10,000
              </th>
            </tr>

            <tr>
              <th
              
                class="border-success border border-3 text-center"
                scope="row"
              >
                PUB-G
              </th>
              <td class="border-warning border border-3 text-center">
                PUB-G Semi-Final
              </td>
              <td class="border-danger border border-3 text-center">
                10-05-2022
              </td>
              <td class="border-primary border border-3 text-center"></td>
              <td class=" border border-3 text-center"></td>
            </tr>

            <tr>
              <th
                class="border-success border border-3 text-center"
                scope="row"
              >
                PUB-G
              </th>
              <td class="border-warning border border-3 text-center">
                PUB-G Semi-Final
              </td>
              <td class="border-danger border border-3 text-center">
                Thornton
              </td>
              <td class="border-primary border border-3 text-center"></td>
              <td class="border border-3 text-center"></td>
            </tr>

            <tr>
              <th
                class="border-success border border-3 text-center"
                scope="row"
              >
                PUB-G
              </th>
              <td class="border-warning border border-3 text-center">
                PUB-G Semi-Final
              </td>
              <td class="border-danger border border-3 text-center">
                @twitter
              </td>
              <td class="border-primary border border-3 text-center"></td>
              <td class=" border border-3 text-center"></td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default PlayerProfile;
