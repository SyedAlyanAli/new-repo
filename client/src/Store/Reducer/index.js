import { combineReducers } from "redux";
import auth from "./auth";
import admin from "./adminTournament";
import adminparticipants from "./adminparticipants";
import userTournament from "./userTournament"

export default combineReducers({
  auth: auth,
  admin:admin,
  adminparticipants:adminparticipants,
  userTournament:userTournament

});
