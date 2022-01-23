import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getTournamentInfo } from "./../../../Store/Action/adminTournament";
import {
  getTournamentInfo,
  deletetournament,
} from './../../../Store/Action/adminTornament';

import './AdminHome.css';
import Moment from 'moment';

function AdminHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const admin = useSelector((state) => state.admin);
  const players = admin.getplayer;
  const { tournamentname } = useParams();

  useEffect(() => {
    dispatch(getTournamentInfo());
  }, [admin.deleted]);

  const viewTournament = (tournamentname) => {
    navigate(`/adminParticipants/${tournamentname}`);
  };

  const handleDelete = (deletedid) => {
    dispatch(deletetournament(deletedid));
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col col-md-3 border-end border-3 shadow-lg border-primary border-top mt-5 rounded-3"
          style={{ backgroundColor: 'rgb(54 49 64 / 42%)' }}
        >
          <div class="text-center">
            <div class="mt-5">
              <h2 class="text-primary ">Tournament</h2>
              <h1>sharookh</h1>
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
          <div class="row  ">
            <div class="mt-5 col-9 col-lg-auto ">
              <ul
                class="spy nav   my-2 justify-content-start my-md-0 text-small"
                id="tab3"
              >
                <li class="me-5">
                  <Link to={`/adminParticipants/${tournamentname}`}>
                    <a class="nav-link text-light fs-3 ">Participants</a>
                  </Link>
                </li>

                <li class="me-5">
                  <Link to="/adminMatches">
                    <a class="nav-link text-light fs-3 ">Matches</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-3 mt-5  p-2">
              <Link to="/adminTournaments">
                {' '}
                <button type="submit" class="btn btn-primary fs-4  ">
                  Create Tournament
                </button>
              </Link>
            </div>
          </div>

          <div class="row ">
            {/* <div className="overflow-auto "> */}
            <div className="col-9 mt-5 shadow-lg adminhomeScroll  rounded">
              <table className="table ">
                <thead
                  class="sticky-top thead"
                  // style={{ backgroundColor: "#1c1921" }}
                  // style={{ backgroundColor: "rgb(54 49 64 / 42%)" }}
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
                      View
                    </th>
                    <th className="head fs-5" scope="col">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {players.map((player, index) => {
                    return (
                      <tr key={index}>
                        <th className="text-light">{player.game}</th>
                        <td className="text-light">{player.platform}</td>
                        <td className="text-light">
                          {Moment(player.date).format('DD-MM-YYYY')}
                        </td>
                        <td className="text-light">{player.tournamentname}</td>
                        <td className="text-light">{player.prize}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary rounded-3 btn-sm ps-3 pe-3"
                            onClick={() =>
                              viewTournament(player.tournamentname)
                            }
                          >
                            View
                          </button>
                        </td>
                        <td>
                          <button
                            className=" btn btn-danger rounded-3 btn-sm"
                            onClick={() => handleDelete(player._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
export default AdminHome;
