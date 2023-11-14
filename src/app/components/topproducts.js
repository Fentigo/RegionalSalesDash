import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TopProducts(){
    return(
        <div> 
            <h2> Top Products</h2>
            <table class="table" title="Top Products">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style ={{width: '45%'}}
                                aria-valuenow="45" aria-valuemin="" aria-valuemax="100">
                                </div>
                            </div></td>
                        <td> 
                         <span class="badge badge-pill badge-success">45%</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar"  style={{width: '12%'}}
                                aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="badge badge-pill badge-primary">12&</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: '8%'}}
                                aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="badge badge-pill badge-primary">8%</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}