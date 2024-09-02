import React from "react";
import Dashboardlogo from "../../assets/images/dashbord-logo.png";
import Notificationlogo from "../../assets/images/icons/notification.png";
import Profile from "../../assets/images/profilepic.png";
import Vector from "../../assets/images/Vector.png";
import Admin from "../../assets/images/admin.png";
import Architecture from "../../assets/images/Architecture.png";
import Mngt from "../../assets/images/Mngt.png";
import Document from "../../assets/images/Document.png";
import Project from "../../assets/images/Project.png";
import Testing from "../../assets/images/Testing.png";
import Customer from "../../assets/images/Customer.png";
import { Link } from "react-router-dom";

const Header = ({
  handleLogout,
  loading,
  handleOverviewClick,
  handleIGClick,
  handleUserMaster,
  handleCustomerList,
  handleProjectList,
  handleRoleList,
  handleScopeList,
}) => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark top-header-bar">
            <div className="container-fluid">
              <a className="navbar-brand main-dash-logo" href="/">
                <img src={Dashboardlogo} alt="Logo" /> Clora AI
              </a>
              <div className="">
                <ul className="navbar-nav me-auto"></ul>
                <div className="right-side-code">
                  <div className="right-co">
                    <ul>
                      <li>
                        <a href="/">
                          <img src={Notificationlogo} alt="Notification" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pro-img dropdown">
                    <span
                      className="dropdown-toggle"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={Profile} alt="Profile" />
                      <span className="user-name">User Name</span>
                    </span>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                      style={{ cursor: "pointer" }}
                    >
                      <li>
                        <span className="dropdown-item text-color">
                          Profile
                        </span>
                      </li>
                      <li>
                        <span className="dropdown-item text-color">
                          Settings
                        </span>
                      </li>
                      <hr className="dropdown-divider" />
                      <li>
                        <span
                          className="dropdown-item text-color"
                          onClick={handleLogout}
                          disabled={loading}
                        >
                          {loading ? "Logging out..." : "Logout"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark dashboard-menu">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                      <img src={Vector} alt="Vector" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={Admin} alt="Admin" /> <span>Admin</span>{" "}
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu" style={{ cursor: "pointer" }}>
                      <li>
                        <span
                          className="dropdown-item"
                          onClick={handleRoleList}
                        >
                          User Role
                        </span>
                      </li>
                      <li>
                        <span className="dropdown-item">User Permission</span>
                      </li>
                      <li>
                        <span
                          className="dropdown-item"
                          onClick={handleUserMaster}
                        >
                          User Master
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
