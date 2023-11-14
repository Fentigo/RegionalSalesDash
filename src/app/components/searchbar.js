import React from "react";
export default function SearchBar(){
    return(
        <div>
            <nav class="navbar bg-body-tertiary">
                <form class="d-flex justify-content-md-end" role="search" >
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
    
}

