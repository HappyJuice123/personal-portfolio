import { Link } from "react-router-dom";

const Navbar = ({ about }) => {
  return (
    <div className="navbar-bg">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid ms-5 m-0 d-flex flex-row">
          <Link to="/" className="text-decoration-none">
            <div className="pt-3 align-items-center">
              <p className="navbar-brand fs-1 text-white p-0 m-0">
                {about.name}
              </p>
            </div>
          </Link>

          <div
            className="collapse navbar-collapse justify-content-end me-2 m-0 p-0 navbar-dropdown ps-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-0 align-items-center">
              <li className="nav-item" key="navbar-home">
                <Link to="/" className="nav-link fs-5 text-white">
                  <p className="fs-5 text-white d-flex flex-column justify-content-center align-items-center m-0 p-0 pt-2 px-1 mt-1">
                    Home
                  </p>
                </Link>
              </li>
              <li className="nav-item" key="navbar-about">
                <Link to="/about" className="nav-link fs-5 text-white">
                  <p className="fs-5 text-white d-flex flex-column justify content-center align-items-center m-0 p-0 pt-2 px-1 mt-1">
                    About
                  </p>
                </Link>
              </li>
              <li className="nav-item" key="navbar-projects">
                <Link to="/projects" className="nav-link fs-5 text-white">
                  <p className="fs-5 text-white d-flex flex-column justify content-center align-items-center m-0 p-0 pt-2 px-1 mt-1">
                    Projects
                  </p>
                </Link>
              </li>
              <li className="nav-item" key="navbar-contact">
                <Link to="/contact" className="nav-link fs-5 text-white">
                  <p className="fs-5 text-white d-flex flex-column justify content-center align-items-center m-0 p-0 pt-2 px-1 mt-1">
                    Contact
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex pe-5">
            <a href={about.linkedin} target="_blank" rel="noreferrer">
              <img
                src={require("../icons/linkedin.png")}
                title="linkedin"
                alt="linkedin icon"
                className="m-0 p-0 pe-3 icon"
              />
            </a>

            <a href={about.github} target="_blank" rel="noreferrer">
              <img
                src={require("../icons/github.png")}
                title="github"
                alt="github icon"
                className="m-0 p-0 icon"
              />
            </a>
          </div>
          <div className="d-flex flex-row justify-content-end">
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className=" d-flex flex-row justify-content-end">
                <span className="navbar-toggler-icon"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
