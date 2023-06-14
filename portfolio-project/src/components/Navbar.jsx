import data from "../data/data.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-bg">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ms-5 m-0 d-flex flex-row">
          <Link to="/" className="text-decoration-none">
            <p className="navbar-brand fs-1 text-white  p-0 m-0 pt-4 ">
              {data.about.name}
            </p>
          </Link>
          <div
            className="collapse navbar-collapse d-flex justify-content-end me-5 m-0 p-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-end">
              <li className="nav-item pt-3" key="navbar-home">
                <Link to="/" className="text-decoration-none">
                  <p className="nav-link fs-5 text-white">Home</p>
                </Link>
              </li>
              <li className="nav-item pt-3" key="navbar-about">
                <Link to="/about" className="text-decoration-none">
                  <p className="nav-link fs-5 text-white">About</p>
                </Link>
              </li>
              <li className="nav-item pt-3" key="navbar-projects">
                <Link to="/projects" className="text-decoration-none">
                  <p className="nav-link fs-5 text-white">Projects</p>
                </Link>
              </li>
              <li className="nav-item pt-3" key="navbar-contact">
                <Link to="/contact" className="text-decoration-none">
                  <p className="nav-link fs-5 text-white">Contact</p>
                </Link>
              </li>
              <li className="nav-item pt-2" key="navbar-linkedin">
                <a href={data.about.linkedin} target="_blank" rel="noreferrer">
                  <img
                    src={require("../icons/linkedin.png")}
                    title="linkedin"
                    alt="linkedin icon"
                    className="p-2"
                  />
                </a>
              </li>
              <li className="nav-item pt-2" key="navbar-github">
                <a href={data.about.github} target="_blank" rel="noreferrer">
                  <img
                    src={require("../icons/github.png")}
                    title="github"
                    alt="github icon"
                    className="p-2"
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
