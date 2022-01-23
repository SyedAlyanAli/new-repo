import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./../../Images/logo.png";
import "./Login.css";
import { isEmail, isEmpty } from "validator";
import { useSelector, useDispatch } from "react-redux";
import { loginform } from "./../../Store/Action/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth= useSelector(state => state.auth)  
  const [state, setState] = useState({
    emailaddress: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailaddress: "",
    password: "",
  });

  const [validateOnChange, setValidateOnChange] = useState(false);

  useEffect(()=>{
    if(auth.login && auth.isAuthenticated === true){
      console.log("useEffect")
   navigate("/playerprofile")
    }

    
  },[auth])

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    if (validateOnChange) {
      validateForm();
    }
  };

  const validateForm = () => {
    let { emailaddress, password } = state;
    let errors = { emailaddress: "", password: "" };
    let valid = true;

    if (isEmpty(emailaddress) || !isEmail(emailaddress)) {
      errors.emailaddress = "Please provide a valid email address";
      valid = false;
    }

    if (isEmpty(password) || password.length < 5) {
      errors.password = "Wrong Passowrd";
      valid = false;
    }

    setErrors(errors);

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let user = {
        emailaddress: state.emailaddress,
        password: state.password,
      };
      console.log(user);
      dispatch(loginform(user));
    } else {
      setValidateOnChange(true);
    }
  };

  return (
    <div class="container mt-2  mt-xxl-5" >
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


      <div class="col-12 d-flex justify-content-center  ">
        <form
           class=" col-lg-4 col-md-8 p-4 p-xxl-5 text-light border-5 mt-2 mt-xxl-3 border-top border-primary formcss"
          style={{ backgroundColor: "#1c1921" }}
        >
          <div class="mb-3 mb-xxl-5 form-text text-primary d-flex justify-content-end ">
            <a>Foget Password ?</a>
          </div>

          <div class=" col-10 input-group ">
            <input
              type="name"
              name="emailaddress"
              class="form-control  border-3 border-primary  rounded-0"
              id="exampleInputEmail1"
              placeholder="User Name"
              value={state.emailaddress}
              onChange={handleChange}
              style={{
                backgroundColor: "#35333a",
                height: "50px",
                color: "#C0C0C0",
              }}
            />
          </div>
          <span style={{ color: "red" }}>
            {errors.emailaddress ? errors.emailaddress : null}
          </span>

          <div class="col-10  mt-3 mt-xxl-5 input-group">
            <input
              type="password"
              name="password"
              class="form-control  border-3 border-primary rounded-0 "
              id="exampleInputPassword1"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              style={{
                backgroundColor: "#35333a",
                height: "50px",
                color: "#C0C0C0",
              }}
            />
            <div></div>
          </div>
          <span style={{ color: "red" }}>
            {errors.password ? errors.password : null}
          </span>

          <div className="  mt-3 mb-3 mt-xxl-5 mb-xxl-5  d-flex justify-content-center ">
            <button
              type="submit"
              class="btn btn-primary  btn-lg w-50"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>

          <div class="form-text  mb-5 text-light d-flex justify-content-start">
            <div className="me-2">Don't have an account ?</div>
            <span class=" text-primary"> <Link className="text-decoration-none" to="/signup">Sign Up here</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
