
import React from "react";
import Cards from "./cards";
import Nav from "./nav";
import ChartPage from "./barchart";
import TopProducts from "./topproducts";
import Heatmap from "./heatmap";
import Target from "./target";
import TargetChart from "./targetvsrevue";


export default function Sdebar(){
  return(
    <div>
      <div>
        <Nav/>
      </div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#">
                    Leaderboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sales Report
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Messages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Settings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sign Out
                  </a>
                </li>
              </ul>
              <hr />

            </div>
          </div>
          <div class="container">
            <div>
              <Cards/>
            </div>
            <div>
              <ChartPage/>
            </div>
            <div>
              <TopProducts/>
            </div>
            <div>
              <TargetChart/>
            </div>
        </div>
    </div>
  </div>
</div>
)
}

