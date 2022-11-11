import React, { useState } from "react";

const Header = () => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("hrLogin") ? localStorage.getItem("hrLogin") : null
  );

  return (
    <div className="main-header fixed-top">
      {!user ? (
        <div className="">
          <h3 className="text-center text-white mt-3">MY JOB PORTAL</h3>
        </div>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand text-center" href="/">
              <img
                src={require("../images/Logo.png")}
                height={65}
                width={60}
                alt="Avatar"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <a className="nav-link p-0" href="/dashboard">
                    <div className="h3 m-auto text-center text-white">
                      MY JOB PORTAL
                    </div>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav navbar-right">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/Logout">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
