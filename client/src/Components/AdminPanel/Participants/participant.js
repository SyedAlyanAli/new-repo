import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
  addpart,
  getparticipants,
} from "../../../Store/Action/adminparticipants";

import { useDispatch, useSelector } from "react-redux";

function Participants() {
  
  const [state, setState] = useState({
    partname: "",
  });


  const dispatch = useDispatch();
  const adminparticipants = useSelector((state) => state.adminparticipants);
  const { tournamentname } = useParams();
  const partlist = adminparticipants.participantslist.participants;

  console.log(partlist);

  useEffect(() => {
    dispatch(getparticipants(tournamentname));
  }, []);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleAddUser = () => {
    let addparticipants = {
      participants: state.partname,
      tournamentname: tournamentname,
    };
    dispatch(addpart(addparticipants));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col col-md-3 border-end border-3 shadow-lg border-primary border-top mt-5 rounded-3"
          style={{ backgroundColor: "rgb(54 49 64 / 42%)" }}
        >
          <div class="text-center">
            <div class="mt-5">
              <h2 class="text-primary ">Tournament</h2>
            </div>

            <div class="mt-3">
              <Link
                class="text-decoration-none text-light fs-4 "
                to="/adminhome"
              >
                Home
              </Link>
            </div>

            <div class="mt-3">
              <Link class="text-decoration-none text-light fs-4 " to="/home">
                Games
              </Link>
            </div>

            <div class="mt-3">
              <Link class="text-decoration-none text-light fs-4 " to="/home">
                User
              </Link>
            </div>
          </div>
        </div>

        <div className="col-9 ps-5">
          <div class="mt-5 "></div>
          <div class="row ">
            <div
              class="col-md-9 col-sm-12 mt-3 shadow-lg  mb-5 rounded-3 p-5"
              style={{ backgroundColor: "rgb(54 49 64 / 42%)" }}
            >
              <div class="d-flex justify-content-end ">
                <i class="text-primary fs-4 bi bi-arrow-left">
                  <Link class="text-decoration-none " to="/adminhome">
                    Back
                  </Link>
                </i>
              </div>

              <div class="align-items-center justify-content-center mb-5">
                <a href="/" class="d-flex align-items-center "></a>

                <ul class=" spy nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                  <li class="me-5">
                    <Link
                      to={`/adminParticipants/${tournamentname}`}
                      class="nav-link text-light fs-3 active "
                    >
                      Participants
                    </Link>
                  </li>

                  <li class="me-5">
                    <Link to="/adminMatches" class="nav-link text-light fs-3 ">
                      Matches
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="text-center mb-5 ">
                <h2 class="text-light">{tournamentname}</h2>
              </div>

              <div class="mb-3 row ">
                <div class="col-sm-8 d-flex">
                  <input
                    name="partname"
                    value={state.partname}
                    onChange={handleChange}
                    type="text"
                    class="form-control border-3 border-primary rounded-0"
                    placeholder="User"
                    style={{
                      backgroundColor: "#35333a",
                      height: "50px",
                      color: "#C0C0C0",
                    }}
                  />
                  <span class="ps-3">
                    {" "}
                    <button
                      class="btn btn-primary fs-5  ps-4 pe-4"
                      onClick={handleAddUser}
                    >
                      Add
                    </button>
                  </span>
                </div>
              </div>
              <div class="">
                <p class="fs-3 text-light">Participants Status</p>
              </div>

              <div
                class=" col border border-primary border-3 p-5"
                style={{ backgroundColor: "#1c1921" }}
              >
                <div className="row"></div>
                <div class="col-3 d-flex   mb-5">
                  <div class="row mb-5">
                    {partlist
                      ? partlist.map((lists) => {
                          return (
                            <div className="d-flex m-2 ">
                              <p class="text-light m-2 p-2 "> {lists}</p>
                              <button
                                type="button"
                                class="btn btn-primary btn-sm dropdown-toggle border-2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Register
                              </button>
                              <div class="btn-group ps-lg-5 ">
                                <ul
                                  class="dropdown-menu"
                                  style={{ backgroundColor: "#413e46" }}
                                >
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="#"
                                      style={{ color: "red" }}
                                    >
                                      Pub-G
                                    </a>
                                  </li>
                                  <li>
                                    <hr class="dropdown-divider" />
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="#"
                                      style={{ color: "red" }}
                                    >
                                      Call of Duty
                                    </a>
                                  </li>
                                  <li>
                                    <hr class="dropdown-divider" />
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="#"
                                      style={{ color: "red" }}
                                    >
                                      GTA-5
                                    </a>
                                  </li>
                                  <li>
                                    <hr class="dropdown-divider" />
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="#"
                                      style={{ color: "red" }}
                                    >
                                      Free Fire
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div class="col-3  d-flex justify-content-center ">
                                <button class="btn btn-primary ms-2 me-2 ">
                                  View
                                </button>
                              </div>
                              <div class="col-3 d-flex justify-content-center ">
                                <button class="btn btn-danger ms-2 me-2">
                                  Delete
                                </button>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Participants;
