import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import Login from "./Components/Login/Login.js";
import background from "./Images/background.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Index";
import SignUp from "./Components/SignUp/SignUp";
import Header from "./Components/Header/Header";
import UploadPhoto from "./Components/UploadPhoto/UploadPhoto";
import VerifyCode from "./Components/VerifyCode/VerifyCode";
import CreateProfile from "./Components/CreateProfile/CreateProfile";
import Tournament from "./Components/Tournament/Tournament";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import PlayerProfile from "./Components/PlayerProfile/PlayerProfile";
import Tournaments from "./Components/AdminPanel/Tournaments/Tournaments";
import Matches from "./Components/AdminPanel/Matches/matches";
import Participants from "./Components/AdminPanel/Participants/participant";
import ProtectedRoute from "./Components/ProtectedRoute/protected";
import AdminHome from "./Components/AdminPanel/AdminHome/AdminHome";
import Payment from "./Components/AdminPanel/Payment/Payment";
import setAuthToken from './Utils/setAuthToken'

// if (localStorage.token && localStorage.user) {
//   // setAuthToken to HTTP header
//   setAuthToken(localStorage.token)

//   // redux setup for user data
//   store.dispatch({ type: types.VERIFIED_USER, payload: JSON.parse(localStorage.user) })

// }

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<VerifyCode />} />
            <Route path="/tournament" element={<Tournament />} />
            <Route path="/adminTournaments"isAdmin={true}  element={<Tournaments />} />
            <Route path="/adminParticipants/:tournamentname" isAdmin={true} element={<Participants />} />
            <Route path="/adminMatches" isAdmin={true}  element={<Matches />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/profile" element={<CreateProfile />} />
            <Route path="/adminhome" isAdmin={true} element={<AdminHome />} />
            <Route path="/payment" element={<Payment />} />

            <Route path="/" element={<Home />} />
            <Route
              path="/playerprofile"
              element={
                
                  <PlayerProfile />
              
              }
            />

            <Route
              path="/dpupload"
              element={
                // <ProtectedRoute>
                <UploadPhoto />
                // </ProtectedRoute>
              }
            />
            {/* <Route
              path="/playerprofile"
              element={
                <ProtectedRoute>
                  <PlayerProfile />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="/tournament"
              element={
                <ProtectedRoute>
                  <Tournament />
                </ProtectedRoute>
              }
            />
            <Route
              path="/playerprofile"
              element={
                <ProtectedRoute>
                  <PlayerProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
          {/* <Footer /> */}
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
