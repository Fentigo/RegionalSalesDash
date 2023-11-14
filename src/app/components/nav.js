
import React from 'react';

export default function Nav (){
    return (
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">Dashboard</a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="dropdown pb-4">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                  <span className="d-none d-sm-inline mx-1">loser</span>
                </a>
                <small>Bruce Wayne</small>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><small>admin</small></li>
                </ul>
          </div>
        </div>
       
      </nav>   
      )
}
