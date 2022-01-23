import React,{useState, useEffect} from "react";
import { useNavigate , Link} from "react-router-dom";
import logo from "./../../Images/logo.png";
import {useDispatch,useSelector} from "react-redux"
import { updateprofile  } from "./../../Store/Action/auth";

function CreateProfile() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  console.log(auth)

  const [state,setState] =useState({
    aboutme:'',
    facebook:'',
    instagram:'',
    youtube:'',
    twitter:'',
    twitch:"",
    
  }) 

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    
  };


  const handleSubmit = () =>{
   
    let editprofile={
      
      aboutme: state.aboutme,
      facebook: state.facebook,
      instagram: state.instagram,
      twitter: state.twitter,
      youtube: state.youtube,
      twitch: state.twitch,
    }
    console.log(editprofile)
  dispatch(updateprofile(editprofile,auth.registereduser.saveuser._id))
  }


  return (
    <div class="container mt-5" style={{ width: "27%" }}>
      <img src={logo} width="auto" height="auto" alt="something" />

      <div
        class="row  mt-3 p-4  border-top border-primary border-5 shadow-lg"
        style={{ backgroundColor: "#1c1921" }}
      >
        <div class="mb-3 my-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label text-light"
          >
            About Me
          </label>
          <textarea
          name= "aboutme"
          onChange={handleChange}
            value={state.aboutme}
            class="form-control border-primary border-2 rounded-0"
            id="exampleFormControlTextarea1"
            rows="3"
            style={{ backgroundColor: "#35333a", color: "#C0C0C0" }}
          ></textarea>
        </div>

        <div>
          <p class="text-light">Add Your Social Accounts</p>
        </div>

        <div class="row">
          <div class="d-flex justify-content-around text-center">
            <div class="col-3 m-2 ">
              <a class="" href="#" target="">
                <h3 class="bi bi-facebook "></h3>
              </a>
            </div>

            <div class="col-3 m-2  ">
              <a href="#" target="">
                <h3 class="bi bi-instagram text-danger"></h3>
              </a>
            </div>

            <div class="col-3 m-2  ">
              <a href="#" target="">
                <h3 class="bi bi-twitter "></h3>
              </a>
            </div>

            <div class="col-3 m-2 ">
              <a href="#" target="">
                <h3 class="bi bi-youtube text-danger"></h3>
              </a>
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="mb-3">
            <input
             onChange={handleChange}
             value={state.facebook}
              name="facebook"
              type="text"
              class="form-control border-primary border-2 rounded-0 mt-2"
              id="exampleFormControlInput1"
              placeholder="Facebook"
              style={{ backgroundColor: "#35333a", color: "#C0C0C0" }}
            />
          </div>
          <div class="mb-3">
            <input
             onChange={handleChange}
             value={state.instagram}
              name='instagram'
              type="text"
              class="form-control border-primary border-2 rounded-0 mt-2"
              id="exampleFormControlInput1"
              placeholder="Instagram"
              style={{ backgroundColor: "#35333a", color: "#C0C0C0" }}
            />
          </div>
          <div class="mb-3">
            <input
             onChange={handleChange}
             value={state.twitter}
              name="twitter"
              type="text"
              class="form-control border-primary border-2 rounded-0 mt-2"
              id="exampleFormControlInput1"
              placeholder="Twitter"
              style={{ backgroundColor: "#35333a", color: "#C0C0C0" }}
            />
          </div>
          <div class="mb-3">
            <input
            onChange={handleChange}
            value={state.youtube}
              name="youtube"
              type="text"
              class="form-control border-primary border-2 rounded-0 mt-2"
              id="exampleFormControlInput1"
              placeholder="YouTube"
              style={{ backgroundColor: "#35333a", color: "#C0C0C0" }}
            />
          </div>
          <div class="mb-3">
            <input
            value={state.twitch}
              name="twitch"
              onChange={handleChange}
              type="text"
              class="form-control border-primary border-2 rounded-0 mt-2"
              id="exampleFormControlInput1"
              placeholder="Twitch"
              style={{ backgroundColor: "#35333a", color: "#C0C0C0" }}
            />
          </div>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/login">
          <button class=" btn btn-outline-light me-md-2" type="button">
            Skip
          </button>
          </Link>

          <button class=" btn btn-primary" type="button" 
          onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default CreateProfile;



