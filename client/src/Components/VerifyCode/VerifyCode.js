import React, { useState, useEffect } from "react";
import logo from "./../../Images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
import { verifyOtpAndSaveDb } from "../../Store/Action/auth";

function VerifyCode() {
  const [OTP, setOTP] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {verifieduser , preregistereduser} = useSelector((state) => state.auth);


  useEffect(() => {
    if (verifieduser) {
      navigate("/dpupload");
    }
  }, [verifieduser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      user: preregistereduser,
      token: OTP,
    };
    console.log(preregistereduser)
   

    dispatch(verifyOtpAndSaveDb(user));
  };

  return (
    <div className="container mt-5 " style={{ width: "50%" }}>
      <div className="d-flex justify-content-start">
        <img src={logo} width="auto" height="auto" alt="something" />
      </div>
      <div
        className="row border-top mt-2 border-primary border-5 shadow-lg"
        style={{ backgroundColor: "#1c1921" }}
      >
        <h3 class="text-light text-center mt-5">Verify Security Code</h3>
        <p class="text-light text-center mt-4">
          Enter the security code sent to the number
        </p>

        <div class="container d-flex justify-content-around mt-2 ">
          <div class="row ">
            {/* <div class="col text-light  ">
                 <input type="text"  class="form-control border-3 border-primary rounded" id="formGroupExampleInput" placeholder="" style={{backgroundColor:"#35333a", color: "#C0C0C0", height:"50px", width:"50px"}}/>
                 </div>
                  <div class="col text-light">
                  <input type="text"  class="form-control border-3 border-primary rounded" id="formGroupExampleInput" placeholder="" style={{backgroundColor:"#35333a", color: "#C0C0C0", height:"50px", width:"50px"}}/>
                  </div> */}

            <div class="col text-light  ">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                // secure
              />
            </div>
          </div>
        </div>
        <div class="col d-grid gap-2 col-4 mx-auto mt-5 mb-5">
          <button
            class="btn btn-primary btn-lg "
            type="button"
            onClick={handleSubmit}
          >
            Verify Code
          </button>
        </div>

        <p class="text-light text-center mt-3 mb-5">
          I didn't recieve a code!
          <ResendOTP  onResendClick={() => console.log("Resend clicked")} />
          {/* <span class="text-primary m-2">Resend Code</span> */}
        </p>
      </div>
    </div>
  );
}

export default VerifyCode;
