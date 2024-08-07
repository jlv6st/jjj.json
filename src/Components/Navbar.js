import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="NAVBAR navbar navbar-expand-lg  fixed-top transparent">
          <div className="container-fluid ">
            <Link
              className="navbar-brand text-light glow-on-hover rounded-5"
              to="/"
            >
              NewsMonkey{" "}
            </Link>
            <button
              className="navbar-toggler visible"
              type="button"
              data-bs-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link  text-light glow-on-hover rounded-5 genre "
                    aria-current="page"
                    to="/"
                  >
                    General
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  {/* <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </Link> */}
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item glow-on-hover" href="/">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item glow-on-hover" href="/">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-divider glow-on-hover"></Link>
                    </li>
                    <li>
                      <Link className="dropdown-item glow-on-hover" href="/">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item rounded-5 glow-on-hover  genre ">
                  <Link className="nav-link text-light" to="/business">
                    business
                  </Link>
                </li>
                <li className="nav-item rounded-5 glow-on-hover genre">
                  <Link className="nav-link text-light" to="/entertainment">
                    entertainment{" "}
                  </Link>
                </li>
                <li className="nav-item rounded-5 glow-on-hover genre">
                  <Link className="nav-link text-light" to="/sports">
                    sports
                  </Link>
                </li>
                <li className="nav-item rounded-5 glow-on-hover genre">
                  <Link className="nav-link text-light" to="/health">
                    health
                  </Link>
                </li>
                <li className="nav-item rounded-5 glow-on-hover genre">
                  <Link className="nav-link text-light" to="/science">
                    science
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
