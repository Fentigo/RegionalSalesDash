import React from "react";
import ExportBtn from "./exportbutton";
import '../cards.css'

export default function Cards(){
    return(
      <div class="container text-center col py-3">
        <div class="row">
          <div class="col">
            <div class="card text-bg-danger">
              <div class="card-body">
                <h5 class="card-title fw-bold">70k</h5>
                <p class="card-text fw-lighter">Total Sales</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-bold">274</h5>
              <p class="card-text fw-lighter">Total Orders</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-bold">59</h5>
              <p class="card-text fw-lighter">Products Sold</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-bold">8</h5>
              <p class="card-text fw-lighter">New Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
        
}
// Cards.js

function Card() {
  return (
    <div className="container" id="todays-sales">
      <h5>Today's sales </h5>
      <small> Sales Summary</small>

      <div className="card" style={{
        position: 'absolute',
        width: '180px',
        height: '184px',
        left: '32px',
        top: '132px',
        background: '#FFE2E5',
        borderRadius: '16px',
      }}>
        <h4 class="card-title"> 70k</h4>
        <h5 class="card-text"> Total Sales </h5>
        <small> + 7% from yesterday </small>
      </div>

      <div className="card" style={{
        position: 'absolute',
        width: '180px',
        height: '184px',
        left: '463x',
        top: '132px',
        background: '#FFE2E5',
        borderRadius: '16px',
      }}>
        <h4 class="card-title"> 274</h4>
        <h5 class="card-text"> Total orders </h5>
        <small> + 5% from yesterday </small>
      </div>

      <div className="card" style={{
        position: 'absolute',
        width: '180px',
        height: '184px',
        left: '674px',
        top: '132px',
        background: '#FFE2E5',
        borderRadius: '16px',
      }}>
        <h4 class="card-title"> 59</h4>
        <h5 class="card-text"> Products Sold </h5>
        <small> + 1.2% from yesterday </small>
      </div>

      <div className="card" style={{
        position: 'absolute',
        width: '180px',
        height: '184px',
        left: '885px',
        top: '132px',
        background: '#FFE2E5',
        borderRadius: '16px',
      }}>
        <h4 class="card-title"> 8 </h4>
        <h5 class="card-text"> New Customers </h5>
        <small> + 0.5% from yesterday </small>
      </div>

     

      {/* Exports */}
      <div className="exports">
        {/* ... rest of the Exports content ... */}
      </div>
    </div>
  );
}
