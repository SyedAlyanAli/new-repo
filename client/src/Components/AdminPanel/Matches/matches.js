import React ,{useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import {creatematches} from "../../../Store/Action/adminMatches"
import {loadUsers} from "../../../Store/Action/auth"
import {useDispatch ,useSelector } from "react-redux"
import Select from "react-select";


  // {
  //   value: "stepdeck",
  //   label: "Step-Deck",
  // },
  // {
  //   value: "conestoage",
  //   label: "Conestoga",
  // },
  // {
  //   value: "van",
  //   label: "Van",
  // },
  // {
  //   value: "refer",
  //   label: "Refer",
  // },




function Matches() {

  
  const dispatch = useDispatch()
  const auth = useSelector( state => state.auth)
  const { tournamentname } = useParams();
  const [state,setState] = useState({
    matchname:"",
    tournamentname:"",
    matchdate:"",
    participants:[]
  })

  // const Equipments = [
  //   {
  //     value:`${state.participants}`,
  //     label: `${users}` ,
  //   },
  // ]


const userlists = auth.getusers

const users = userlists.map((user)=>{
    return (
      <option>
        {user.firstname}
      </option>
    )
  })



  useEffect(()=>{
    dispatch(loadUsers())
  },[])


  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    
  };


  function handleSelectUser(equipment) {
    setState({ ...state, equipment });
  }

  const handleSubmit = ( ) => {
     let matches = {
       matchname:state.matchname,
      tournamentname:state.tournamentname,
      matchdate:state.matchdate,
      participants:state.participants
     }
     dispatch(creatematches(matches))
  }

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
              s
            </div>
          </div>
        </div>

        <div className="col-9 ps-5">
          <div class="row mt-5">
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

              <div class=" ">
                <div class="align-items-center justify-content-center">
                  <a href="/" class="d-flex align-items-center "></a>

                  <ul class=" spy nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li class="me-5">
                      <Link
                        to={`/adminParticipants/${tournamentname}`}
                        class="nav-link text-light fs-3 "
                      >
                        Participants
                      </Link>
                    </li>

                    <li class="me-5">
                      <Link
                        to="/adminMatches"
                        class="nav-link text-light fs-3 active"
                      >
                        Matches
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mb-3 row pt-2 mt-5">
                <label class="form-label  col-sm-2 col-form-label text-light">
                 Match Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="matchname"
                    value={state.matchname}
                    onChange={handleChange}
                    class="form-control border-3 border-primary rounded-0"
                    style={{
                      backgroundColor: "#35333a",
                      height: "50px",
                      color: "#C0C0C0",
                    }}
                  />
                </div>
              </div>

              <div class="mb-3 row pt-2">
                <label class="form-label  col-sm-2 col-form-label text-light">
                  Tournament Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="tournamentname"
                    value={state.tournamentname}
                    onChange={handleChange}
                    class="form-control border-3 border-primary rounded-0"
                    style={{
                      backgroundColor: "#35333a",
                      height: "50px",
                      color: "#C0C0C0",
                    }}
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label class=" form-label col-sm-2 col-form-label text-light">
                  Date
                </label>

                <div class="col-sm-10">
                  <input
                    type="date"
                    name="matchdate"
                    value={state.matchdate}
                    onChange={handleChange}
                    class="form-control border-3 border-primary rounded-0"
                    style={{
                      backgroundColor: "#35333a",
                      height: "50px",
                      color: "#C0C0C0",
                    }}
                  />
                </div>
              </div>

              <div class="mb-3 row ">
                <label class="form-label  col-sm-2 col-form-label text-light text-nowrap">
                  Participants
                </label>
                <div class="col-sm-10 d-flex">

                <Select
                isMulti
                placeholder="Participants"
                value={state.participants}
                onChange={handleSelectUser}
                options={userlists.map((user)=>{
                  console.log(user.firstname)
                  return (
                    <option>
                      {user.firstname}
                    </option>
                  )
                })}
              />

                {/* <select  multiple placeholder=""  type="text" name="participants" value={state.participants} onChange={handleChange}>
                  {userlists.map((user)=>{
                    return (
                      <option>
                        {user.firstname}
                      </option>
                    )
                  })}
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
                  <input
                    type="text"
                    name="participants"
                    value={state.participants}
                    onChange={handleChange}
                    class="form-control border-3 border-primary rounded-0"
                    placeholder=""
                    style={{
                      backgroundColor: "#35333a",
                      height: "50px",
                      color: "#C0C0C0",
                    }}
                  /> */}
                  <span class="ps-3">
                    {" "}
                    <button class="btn btn-primary fs-5  ps-4 pe-4" onClick={handleSubmit}>Add</button>
                  </span>
                </div>
              </div>

              <div
                class="col-12 mt-3   mb-5 border border-primary border-3 p-5"
                style={{ backgroundColor: "#1c1921" }}
              >
                <div class="row mb-3">
                  <div class="col-3 d-flex justify-content-center  ">
                    <p class="text-light text-center fs-5">Noman</p>
                  </div>

                  <div class="col-3 d-flex justify-content-center ">
                    <div class="btn-group ps-lg-5 ">
                      <button
                        type="button"
                        class="btn btn-primary   btn-sm dropdown-toggle border-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Register
                      </button>
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
                  </div>

                  <div class="col-3  d-flex justify-content-center ">
                    <button class="btn btn-primary ms-2 me-2 ">View</button>
                  </div>

                  <div class="col-3 d-flex justify-content-center ">
                    <button class="btn btn-primary ms-2 me-2">Delete</button>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-3 d-flex justify-content-center  ">
                    <p class="text-light text-center fs-5">Alyan</p>
                  </div>

                  <div class="col-3 d-flex justify-content-center ">
                    <div class="btn-group ps-lg-5 ">
                      <button
                        type="button"
                        class="btn btn-primary   btn-sm dropdown-toggle border-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Register
                      </button>
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
                  </div>

                  <div class="col-3  d-flex justify-content-center ">
                    <button class="btn btn-primary ms-2 me-2 ">View</button>
                  </div>

                  <div class="col-3 d-flex justify-content-center ">
                    <button class="btn btn-primary ms-2 me-2">Delete</button>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-3 d-flex justify-content-center  ">
                    <p class="text-light text-center fs-5">Abeer</p>
                  </div>

                  <div class="col-3 d-flex justify-content-center ">
                    <div class="btn-group ps-lg-5 ">
                      <button
                        type="button"
                        class="btn btn-primary   btn-sm dropdown-toggle border-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Register
                      </button>
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
                  </div>

                  <div class="col-3  d-flex justify-content-center ">
                    <button class="btn btn-primary ms-2 me-2 ">View</button>
                  </div>

                  <div class="col-3 d-flex justify-content-center ">
                    <button class="btn btn-primary ms-2 me-2">Delete</button>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-3 d-flex justify-content-center  ">
                    <p class="text-light text-center fs-5">Taimoor</p>
                  </div>

                  <div class="col-3 d-flex justify-content-center ">
                    <div class="btn-group ps-lg-5 ">
                      <button
                        type="button"
                        class="btn btn-primary   btn-sm dropdown-toggle border-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Register
                      </button>
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
                  </div>

                  <div class="col-3  d-flex justify-content-center ">
                    <button class="btn btn-primary ms-2 me-2 ">View</button>
                  </div>

                  <div class="col-3 d-flex justify-content-center ">
                    <button class="btn btn-primary ms-2 me-2">Delete</button>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-end pe-3 ">
                <button class="btn btn-primary fs-4  ps-4 pe-4">Save</button>
              </div>

              <div class="d-flex justify-content-end pe-3 mt-3 ">
                <button class="btn btn-primary fs-4  ps-4 pe-4">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Matches;
