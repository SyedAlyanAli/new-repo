import React, { useState, useEffect } from "react";
import logo from "./../../Images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { isEmail, isEmpty } from "validator";
import { signup } from "./../../Store/Action/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {preregistereduser,registered} = useSelector((state) => state.auth);

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    password: "",
    phone: "",
    agree:false
  });


  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    password: "",
    phone: "",
    agree:false
  });

  useEffect(() => {
   
    if (registered) {
      navigate("/verify");
    }
  }, [registered]);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let user = {
        firstname: state.firstname,
        lastname: state.lastname,
        emailaddress: state.emailaddress,
        password: state.password,
        phone: state.phone,

      };
    
      dispatch(signup(user));
    } else {
      setValidateOnChange(true);
    }
  };


  
  const [validateOnChange, setValidateOnChange] = useState(false);

  const validateForm = () => {
    let { firstname, lastname, emailaddress, password, phone,agree } = state;

    let errors = {
      firstname: "",
      lastname: "",
      emailaddress: "",
      password: "",
      phone: "",
      agree:""
    };

    let valid = true;

    if (isEmpty(emailaddress) || !isEmail(emailaddress)) {
      errors.emailaddress = "Please provide a valid email address , otherwise you will not get OTP code ";
      valid = false;
    }

    if (isEmpty(password) || password.length < 5) {
      errors.password = "Passowrd should be at least 8 characters long";
      valid = false;
    }

    if (isEmpty(firstname)) {
      errors.firstname = "You need to write first name";
      valid = false;
    }

    if (isEmpty(lastname)) {
      errors.lastname = "You need to write last name";
      valid = false;
    }

    if (isEmpty(phone)) {
      errors.phone = "Put your phone number";
      valid = false;
    }

    if (!agree) {
      errors.agree = "You must be agree to terms of use";
      valid = false;
    }


    setErrors(errors);

    return valid;
  };



const handleCheckbox  = ( evt) =>{
  const value = evt.target.checked;

  setState((state) => ({
    ...state,
    [evt.target.name]: value,
  }));
}

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState((state) => ({
      ...state,
      [evt.target.name]: value,
    }));
  };

  return (
    <div className="container mt-2 mt-xxl-3" >
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

      <div class="col-12 d-flex justify-content-center ">
        <div
          className="col-lg-4 col-md-8 p-3 p-xxl-5 mt-2 mt-xxl-3 border-top border-primary border-5 shadow-lg "
          style={{ backgroundColor: '#1c1921' }}
        >
          <div class=" mb-3 mt-5">
            <label for="formGroupExampleInput" class="form-label text-light">
              Full Name
            </label>
            <input
              type="text"
              name="firstname"
              class="form-control border-3 border-primary rounded-0"
              id="formGroupExampleInput"
              placeholder=""
              value={state.firstname}
              onChange={handleChange}
              style={{
                backgroundColor: "#35333a",
                height: "50px",
                color: "#C0C0C0",
              }}
            />
            <span style={{ color: "red" }}>
              {errors.firstname ? errors.firstname : null}
            </span>
          </div>

          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label text-light">
              User Name
            </label>
            <input
              type="text"
              name="lastname"
              class="form-control border-3 border-primary rounded-0"
              id="formGroupExampleInput2"
              placeholder=""
              value={state.lastname}
              onChange={handleChange}
              style={{
                backgroundColor: "#35333a",
                height: "50px",
                color: "#C0C0C0",
              }}
            />
            <span style={{ color: "red" }}>
              {errors.lastname ? errors.lastname : null}
            </span>
          </div>

          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label text-light">
              Email
            </label>
            <input
              type="text"
              name="emailaddress"
              class="form-control border-3 border-primary rounded-0"
              id="formGroupExampleInput2"
              placeholder=""
              value={state.emailaddress}
              onChange={handleChange}
              style={{
                backgroundColor: "#35333a",
                height: "50px",
                color: "#C0C0C0",
              }}
            />
             <span style={{ color: "red" }}>
              {errors.emailaddress ? errors.emailaddress : null}
            </span>
          </div>

          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label text-light">
              Password
            </label>
            <input
              type="password"
              name="password"
              class="form-control border-3 border-primary rounded-0"
              id="formGroupExampleInput2"
              placeholder=""
              value={state.password}
              onChange={handleChange}
              style={{
                backgroundColor: "#35333a",
                height: "50px",
                color: "#C0C0C0",
              }}
            />
            <span style={{ color: "red" }}>
              {errors.password ? errors.password : null}
            </span>
          </div>

          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label text-light">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              class="form-control border-3 border-primary rounded-0"
              id="formGroupExampleInput2"
              placeholder=""
              value={state.phone}
              onChange={handleChange}
              style={{
                backgroundColor: "#35333a",
                height: "50px",
                color: "#C0C0C0",
              }}
            />
            <span style={{ color: "red" }}>
              {errors.phone ? errors.phone : null}
            </span>
          </div>

          <div class="form-check m-2">
            <input
              class="form-check-input  rounded-0 border-primary "
              type="checkbox"
              checked={state.agree}
              onChange={handleCheckbox}
              
              name="agree"
              aria-describedby="invalidCheck3Feedback"
              required
            />
            <label class="form-check-label text-light " for="invalidCheck3">
              I have read and agree to company
            </label>
            <div id="invalidCheck3Feedback" class="invalid-feedback">
              You must agree before submitting.
            </div>
           
          

            <span class="form-check-label text-primary m-2">
              Terms of Service
            </span>
            
          </div>
          <span style={{ color: "red" }}>
              {errors.agree ? errors.agree : null}
            </span>

          <div class=" mt-3 mb-5">
            <button
              class="btn btn-primary me-3"
              type="submit"
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
