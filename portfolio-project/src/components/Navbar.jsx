import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ about }) => {
  const [navbarActive, setNavbarActive] = useState("");

  const handleActiveNavbar = () => {
    setNavbarActive("navbar-active");
  };

  return (
    <div className="navbar-bg">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid ps-5 m-0 d-flex flex-row">
          <Link to="/" className="text-decoration-none">
            <div className="pt-3 align-items-center">
              <p className="navbar-brand fs-1 text-white p-0 m-0">Jason Chan</p>
            </div>
          </Link>
          <div className="d-flex flex-row justify-content-end">
            <button
              className="navbar-toggler border-0 w-100"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="d-flex flex-row justify-content-end">
                <span className="navbar-toggler-icon"></span>
              </div>
            </button>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end me-2 m-0 p-0 navbar-dropdown ps-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-0 align-items-center">
              <li className="nav-item" key="navbar-home">
                <Link
                  to="/"
                  className="nav-link fs-5 text-white"
                  onClick={handleActiveNavbar}
                >
                  <p
                    className={`fs-5 text-white d-flex flex-column justify-content-center align-items-center m-0 p-0 pt-2 px-1 mt-1 navbar-text ${navbarActive}`}
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li className="nav-item" key="navbar-about">
                <Link to="/about" className="nav-link fs-5 text-white">
                  <p className="fs-5 text-white d-flex flex-column justify content-center align-items-center m-0 p-0 pt-2 px-1 mt-1 navbar-text">
                    About
                  </p>
                </Link>
              </li>
              <li className="nav-item" key="navbar-projects">
                <Link to="/projects" className="nav-link fs-5 text-white">
                  <p className="fs-5 text-white d-flex flex-column justify content-center align-items-center m-0 p-0 pt-2 px-1 mt-1 navbar-text">
                    Projects
                  </p>
                </Link>
              </li>
              <li className="nav-item" key="navbar-contact">
                <Link to="/contact" className="nav-link fs-5 text-white">
                  <p className="fs-5 text-white d-flex flex-column justify content-center align-items-center m-0 p-0 pt-2 px-1 mt-1 navbar-text">
                    Contact
                  </p>
                </Link>
              </li>
              <li className="nav-item" key="navbar-linkedin">
                <a href={about.linkedin} target="_blank" rel="noreferrer">
                  <img
                    src={require("../icons/linkedin.png")}
                    title="linkedin"
                    alt="linkedin icon"
                    className="m-md-0 p-md-0 pe-md-3 icon pt-2 mt-1"
                  />
                </a>
              </li>
              <li className="nav-item" key="navbar-github">
                <a href={about.github} target="_blank" rel="noreferrer">
                  <img
                    src={require("../icons/github.png")}
                    title="github"
                    alt="github icon"
                    className="m-md-0 p-md-0 icon pt-2 mt-1"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
