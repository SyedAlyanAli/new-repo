import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Payment(){
    return(
        <div className="container-fluid">
        <div className="row">
          <div
            className="col col-md-3 border-end border-3 shadow-lg border-primary border-top mt-5 rounded-3"
            style={{ backgroundColor: "rgb(54 49 64 / 42%)" }}
          >
            <div class="text-center">
              <div class="mt-5">
                <h2 class="text-primary ">Payments</h2>
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
                </div>
                </div>
                </div>
                </div>
                </div>
                
    )
}


export default Payment;