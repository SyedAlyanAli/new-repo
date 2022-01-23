import React from "react";
import logo from "./../../Images/logo.png";

import "./LeaderBoard.css";

function LeaderBoard() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div class="col">
          <button type="button" class="btn btn-outline-primary">
            All Games
          </button>
        </div>

        <div class="col">
          <button type="button" class="btn btn-outline-primary">
            Call of Duty
          </button>
        </div>

        <div class="col">
          <button type="button" class="btn btn-outline-primary">
            PUB-G
          </button>
        </div>

        <div class="col">
          <button type="button" class="btn btn-outline-primary">
            Batterfield
          </button>
        </div>

        <div class="col">
          <button type="button" class="btn btn-outline-primary">
            RDR
          </button>
        </div>

        <div class="col">
          <button type="button" class="btn btn-outline-primary">
            Minecraft
          </button>
        </div>

        <div class="col">
          <button type="button" class="btn btn-outline-primary">
            GTA-5
          </button>
        </div>
      </div>

      <header class="d-flex justify-content-start">
        <div class="px-3 py-2 mt-5 ">
          <div class="align-items-center justify-content-start">
            <a href="/" class="d-flex align-items-center "></a>

            <ul class=" spy nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a class="nav-link text-light text-decoration-none  ">
                  All Time
                </a>
              </li>

              <li>
                <a class="nav-link text-light ">Last 7 Days</a>
              </li>

              <li>
                <a class="nav-link text-light">Last 15 Days</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="shadow-lg   rounded">
        <table class="table table-sm table-responsive">
          <thead  class="thead">
            <tr>
              <th class="head text-center" scope="col">
                Rank
              </th>
              <th class="head text-center" scope="col">
                Name
              </th>
              <th class="head text-center" scope="col">
                Game
              </th>
              <th class="head text-center" scope="col">
                Matches Won
              </th>
              <th class="head text-center" scope="col">
                Platform
              </th>
              <th class="head text-center" scope="col">
                Winnings
              </th>
              <th class="head text-center" scope="col">
                Trophies <i class="bi bi-trophy"></i>
              </th>
            </tr>
          </thead>
          <tbody >
            <tr class="line">
              <th class="text-center" scope="row">
                1
              </th>
              <td class="text-center">Alyan901</td>
              <td class="text-center">PubG</td>
              <td class="text-center">15</td>
              <td class="text-center">Mobile</td>
              <td class="text-center">$1,500</td>
              <td class="text-center">5</td>
            </tr>
            <tr class="line">
              <th scope="row" class="text-center">
                2
              </th>
              <td class="text-center">Saad101</td>
              <td class="text-center"> Free Fire</td>
              <td class="text-center">14</td>
              <td class="text-center">PC</td>
              <td class="text-center">$1,500</td>
              <td class="text-center">4</td>
            </tr>

            <tr class="line">
              <th scope="row" class="text-center">
                3
              </th>
              <td class="text-center">Faiz733</td>
              <td class="text-center"> Call of Duty</td>
              <td class="text-center">12</td>
              <td class="text-center">Mobile</td>
              <td class="text-center">$1,500</td>
              <td class="text-center">4</td>
            </tr>

            <tr class="line">
              <th scope="row" class="text-center">
                4
              </th>
              <td class="text-center">Taimoor</td>
              <td class="text-center">PubG</td>
              <td class="text-center">8</td>
              <td class="text-center">Mobile</td>
              <td class="text-center">$1,500</td>
              <td class="text-center">2</td>
            </tr>

            <tr class="line">
              <th scope="row" class="text-center">
                5
              </th>
              <td class="text-center">Ansub</td>
              <td class="text-center">Minecraft</td>
              <td class="text-center">8</td>
              <td class="text-center">Mobile</td>
              <td class="text-center">$1,500</td>
              <td class="text-center">2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
