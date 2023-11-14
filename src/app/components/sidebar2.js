import React from "react";

export default function Sdebar2(){
    return(
        <div className="sidebar-container">
            <div className="sidebar-content">
                <ul>
                    <li>
                        <div className="sidebar-item">
                            <div className="sidebar-icon"></div>
                            <div className="sidebar-text">Dashboard</div>
                        </div>
                    </li>
                    <li>
                        <div className="sidebar-item">
                            <div className="sidebar-icon"></div>
                            <div className="sidebar-text">Orders</div>
                        </div>
                    </li>
                    <li>
                        <div className="sidebar-item">
                            <div className="sidebar-icon"></div>
                            <div className="sidebar-text">Leaderboard</div>
                        </div>
                    </li>
                    <li>
                        <div className="sidebar-item">
                            <div className="sidebar-icon"></div>
                            <div className="sidebar-text">Messages</div>
                        </div>
                    </li>
                    <li>
                        <div className="sidebar-item">
                            <div className="sidebar-icon"></div>
                            <div className="sidebar-text">Settings</div>
                        </div>
                    </li>
                    <li>
                        <div className="sidebar-item">
                            <div className="sidebar-icon"></div>
                            <div className="sidebar-text">Sign Out</div>
                        </div>
                    </li>
                </ul>
                <hr />
            </div>
            {/* Container for Other Components */}
            <div className="container-other">
                {/* Other Components */}
                <div className="other-component"></div>
                <div className="other-component"></div>
                <div className="other-component"></div>
                <div className="other-component"></div>
            </div>
        </div>

    )
  }