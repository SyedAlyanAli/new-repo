import axios from "axios";
import * as types from "./types";
import toastr from  "toastr"
// import history from "../../history";
// import { useHistory } from "react-router-dom";

// import setAuthToken from "./../../utils/setAuthToken"

export const signup = (user) => async (dispatch) => {
  try {
    
   const result = await axios.post("http://localhost:4000/user/register", user);
   console.log(result)
   if(result.data.emailaddress  === "Email already exists" ){
    toastr.error("Email already exist")
   }

  

   else{
    dispatch({ type: types.REGISTER, payload: result.data });
   }

    
   
  } catch (error) {
    console.log(error);
  }
};




export const verifyOtpAndSaveDb = (verifyuser) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:4000/user/verify",verifyuser );
    console.log(data)
   if (data.message === "token is not valid please try again") 

   {
    toastr.error("Please enter valid OTP")
   } 
   else {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      dispatch({ type: types.VERIFIED_USER, payload: data.user });
      
    }
  } catch (error) {
    console.log(error.message);
  }
};




export const loadUsers = () => async (dispatch) => {
  try {
     const result = await axios.get("http://localhost:4000/user/loaduser")

     dispatch({type:types.LOAD_USER , payload: result.data})
  }
  catch (error) {
       console.log(error)
  }
}

export const loginform = (user) => async (dispatch) => {
  
  try {
    const result = await axios.post("http://localhost:4000/user/login", user);

    console.log(result);
    if (result.data.token) {
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      //  setAuthToken(result.data.token)
      dispatch({ type: types.LOGIN, payload: result.data.user });
    } else {
      // history.push("/signup");
     
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => (dispatch, _getState) => {
  try {
    localStorage.clear();

    dispatch({ type: types.LOGOUT_USER, payload: "" });
  } catch (error) {
    console.log(error.message);
    
  }
};


export const uploadpic = (data,userid) => async (dispatch, _getState) => {
  try {
    
    const result = await  axios.put(`http://localhost:4000/user/image/uploadprofilepic/${userid}`, data)
  
    dispatch({ type: types.USER_PROFILE_PHOTO, payload: result.data });
     
    
  } catch (error) {
    console.log(error.message);
  }
};



export const getprofilepic = (userid) => async (dispatch, _getState) => {
  try {
   
    const result = await  axios.get(`http://localhost:4000/user/image/getprofilepic/${userid}`)
 
    dispatch({ type: types.GET_PROFILE_PHOTO, payload: result.data });
     
    
  } catch (error) {
    console.log(error.message);
  }
};


export const updateprofile = (profileinfo,userid) => async (dispatch, _getState) => {
  try {
     console.log(profileinfo,userid)
    const result = await axios.put(`http://localhost:4000/user/editprofile/${userid}`,profileinfo)
    console.log(result)
    dispatch({ type: types.PROFILE_INFO, payload: result.data });
     
    
  } catch (error) {
    console.log(error.message);
  }
};




