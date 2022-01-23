import React, { useEffect } from "react";
import { Link,  useNavigate} from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { addData ,getTournamentInfo  } from "./../../../Store/Action/adminTornament";
import "./Tournaments.css";
// import Moment from "moment";
// import PlayerProfile from "../../PlayerProfile/PlayerProfile";

function Tournaments() {
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);
 const navigate = useNavigate()
  const admin = useSelector((state) => state.admin);
  // const players = admin.getplayer;
  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTournamentInfo());
  }, []);

  const [state, setState] = useState({
    game: "",
    date: "",
    tournamentname: "",
    platform: "",
    prize: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tournamentinfo = {
      game: state.game,
      date: state.date,
      tournamentname: state.tournamentname,
      platform: state.platform,
      prize: state.prize,
    };
    console.log("tournamentinfo", tournamentinfo);

    dispatch(addData(tournamentinfo));
  };

  const viewTournament =  (tournamentname) =>{
    navigate(`/adminParticipants/${tournamentname}`)
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

            <div class="mt-3 ">
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
          {/* <div class="mt-5 ">
            <ul
              class="spy nav col-12 col-lg-auto my-2 justify-content-start my-md-0 text-small"
              id="tab3"
            >
              <li class="me-5 ">
                <Link to="/adminhome">
                  <a class="nav-link text-light text-decoration-none fs-3 active">
                    Home
                  </a>
                </Link>
              </li>

              <li class="me-5">
                <Link to="/adminParticipants">
                  <a class="nav-link text-light fs-3 ">Participants</a>
                </Link>
              </li>

              <li class="me-5">
                <Link to="/adminMatches">
                  <a class="nav-link text-light fs-3 ">Matches</a>
                </Link>
              </li>
            </ul>
          </div> */}

          <div class="row mt-5">
            <div
              class="col-md-9 col-sm-12 mt-3 shadow-lg p-3 mb-5 "
              style={{ backgroundColor: "rgb(54 49 64 / 42%)" }}
            >
              <div class="d-flex justify-content-end ">
                <i class="text-primary fs-4 bi bi-arrow-left">
                  <Link class="text-decoration-none " to="/adminhome">
                    Back
                  </Link>
                </i>
              </div>
              <div class=" mb-5">
                <ul
                  class="spy nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
                  id="tab3"
                >
                  {/* <li class="me-5 ">
                <Link to="/adminhome">
                  <a class="nav-link text-light text-decoration-none fs-3 active">
                    Home
                  </a>
                </Link>
              </li> */}

                  {/* <li class="me-5">
                    <button onClick= {viewTournament}>
                      <a class="nav-link text-light fs-3 ">Participants</a>
                    </button>
                  </li> */}

                  <li class="me-5">
                    <Link to="/adminMatches">
                      <a class="nav-link text-light fs-3 ">Matches</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="row">
                <h1 class="text-light text-center">Create Tournament</h1>
              </div>

              <div class="mb-3 row pt-2 mt-5">
                <label class="form-label  col-sm-2 col-form-label text-light">
                  Games
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="game"
                    class="form-control border-3 border-primary "
                    value={state.game}
                    onChange={handleChange}
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
                    name="date"
                    value={state.date}
                    onChange={handleChange}
                    class="form-control border-3 border-primary "
                    style={{
                      backgroundColor: "#35333a",
                      height: "50px",
                      color: "#C0C0C0",
                    }}
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label class="form-label  col-sm-2 col-form-label  text-light">
                  Tournament Name
                </label>
                <div class="col-sm-10 ">
                  <input
                    name="tournamentname"
                    type="text"
                    value={state.tournamentname}
                    onChange={handleChange}
                    class="form-control border-3 border-primary "
                    placeholder=""
                    style={{
                      backgroundColor: "#35333a",
                      height: "50px",
                      color: "#C0C0C0",
                    }}
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label class="form-label col-sm-2 col-form-label text-light">
                  Platform
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="platform"
                    value={state.platform}
                    onChange={handleChange}
                    class="form-control border-3 border-primary "
                    placeholder=""
                    style={{
                      backgroundColor: "#35333a",
                      height: "50px",
                      color: "#C0C0C0",
                    }}
                  />
                </div>
              </div>

              <div class="mb-5 row">
                <label class="form-label col-sm-2 col-form-label text-light">
                  Prize
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="prize"
                    value={state.prize}
                    onChange={handleChange}
                    class="form-control border-3 border-primary "
                    placeholder=""
                    style={{
                      backgroundColor: "#35333a",
                      height: "50px",
                      color: "#C0C0C0",
                    }}
                  />
                </div>
              </div>

              <div class="d-flex justify-content-end pe-3">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  class="btn btn-primary fs-4  ps-5 pe-5"
                >
                  Save
                </button>
              </div>
            </div>
{/* 
            <div className="overflow-auto ">
              <div className="col-9  shadow-lg panelScroll  rounded">
                <table className="table table-sm  table table-dark table-hover ">
                  <thead
                    class="sticky-top "
                    style={{ backgroundColor: "#1c1921" }}
                  >
                    <tr>
                      <th className="head fs-5" scope="col">
                        Games
                      </th>
                      <th className="head fs-5" scope="col">
                        Platforms
                      </th>
                      <th className="head fs-5" scope="col">
                        Dates
                      </th>
                      <th className="head fs-5" scope="col">
                        Tournament
                      </th>
                      <th className="head fs-5" scope="col">
                        Prize
                      </th>
                      <th className="head fs-5" scope="col">
                        Registration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="thead ">
                    {players.map((player, index) => {
                      return (
                        <tr key={index}>
                          <th className="text-light">{player.game}</th>
                          <td className="text-light">{player.platform}</td>
                          <td className="text-light">
                            {Moment(player.date).format("DD-MM-YYYY")}
                          </td>
                          <td className="text-light">
                            {player.tournamentname}
                          </td>
                          <td className="text-light">${player.prize}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary rounded-3 btn-sm "
                              onClick={()=>viewTournament(player.tournamentname)}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tournaments;
