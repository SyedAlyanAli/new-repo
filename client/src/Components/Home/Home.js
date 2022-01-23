import React from "react";
import "./Home.css";
import banner from "./../../Images/banner.png";
import game1 from "./../../Images/game1.jpg";
import game2 from "./../../Images/game2.jpg";
import game3 from "./../../Images/game3.jpg";
import game4 from "./../../Images/game4.jpg";
import game5 from "./../../Images/game5.jpg";
import game6 from "./../../Images/game6.jpg";
import game7 from "./../../Images/game7.jpg";
import game8 from "./../../Images/game8.jpg";
import game9 from "./../../Images/game9.jpg";

function Home() {
  return (
    <div>
      <div class="text-center">
        <img src={banner} class="img-fluid mw-100" alt="..."></img>
      </div>

      <div className="container">
        <div class="text-light mt-5 mb-3">
          <h3>UPCOMING TOURNAMENTS</h3>
        </div>
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div class="col">
            <div class="p-3">
              <div class="card rounded-0">
                <img src={game1} class="card-img-top" alt="..." />
              </div>
              <div class="">
                <h4 class="mt-2 " style={{ color: "#959c97" }}>
                  Call of Duty
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3">
              <div class="card rounded-0">
                <img src={game2} class="card-img-top" alt="..." />
              </div>
              <div class="">
                <h4 class="mt-2 " style={{ color: "#959c97" }}>
                  FiFA 19
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3">
              <div class="card rounded-0">
                <img src={game3} class="card-img-top" alt="..." />
              </div>
              <div class="">
                <h4 class="mt-2 " style={{ color: "#959c97" }}>
                  Fallout 76
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3">
              <div class="card rounded-0">
                <img src={game4} class="card-img-top" alt="..." />
              </div>
              <div class="">
                <h4 class="mt-2 " style={{ color: "#959c97" }}>
                  World of Warcraft
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3">
              <div class="card rounded-0">
                <img src={game5} class="card-img-top" alt="..." />
              </div>
              <div class="">
                <h4 class="mt-2 " style={{ color: "#959c97" }}>
                  Battlefield v
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3">
              <div class="card rounded-0">
                <img src={game6} class="card-img-top" alt="..." />
              </div>
              <div class="">
                <h4 class="mt-2 " style={{ color: "#959c97" }}>
                  Magic the Gather
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3">
              <div class="card rounded-0">
                <img src={game7} class="card-img-top" alt="..." />
              </div>
              <div class="">
                <h4 class="mt-2 " style={{ color: "#959c97" }}>
                  Heroes of Strom
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3">
              <div class="card rounded-0">
                <img src={game8} class="card-img-top" alt="..." />
              </div>
              <div class="">
                <h4 class="mt-2 " style={{ color: "#959c97" }}>
                  Dota 2
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3">
              <div class="card rounded-0">
                <img src={game9} class="card-img-top" alt="..." />
              </div>
              <div class="">
                <h4 class="mt-2 " style={{ color: "#959c97" }}>
                  Red dead Redept
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3">
              <div class="card rounded-0">
                <img src={game2} class="card-img-top" alt="..." />
              </div>
              <div class="">
                <h4 class="mt-2 " style={{ color: "#959c97" }}>
                  FiFA 19
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
