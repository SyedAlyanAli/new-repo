import React, { useEffect } from "react";
import "./Tournament.css";
import { getTournamentInfo } from "./../../Store/Action/adminTornament";
import { useDispatch, useSelector } from "react-redux";
import Moment from "moment";

function Tournament() {
  const admin = useSelector((state) => state.admin);
  const players = admin.getplayer;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTournamentInfo());
  }, []);

  return (
    <div className="container-fluid mt-5">
      <div className="overflow-auto ps-5">
        <div className="col-9 mt-5 shadow-lg tournamentScroll  rounded  ">
          <table className="table table-sm   ">
            <thead className="sticky-top thead">
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
                {/* <th className="head fs-5" scope="col">
                  Registration
                </th> */}
              </tr>
            </thead>
            <tbody className="">
              {players.map((player, index) => {
                return (
                  <tr key={index}>
                    <th className="text-light">{player.game}</th>
                    <td className="text-light">{player.platform}</td>
                    <td className="text-light">
                      {Moment(player.date).format("DD-MM-YYYY")}
                    </td>
                    <td className="text-light">{player.tournamentname}</td>
                    <td className="text-light">{player.prize}</td>
                    <td>
                      {/* <button
                        type="button"
                        className="btn btn-primary rounded-3 btn-sm "
                      >
                        Register
                      </button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tournament;
