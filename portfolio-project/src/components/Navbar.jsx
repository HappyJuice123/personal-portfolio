import data from "../data/data.json";

const Navbar = () => {
  return (
    <div className="navbar-bg">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ms-5">
          <a className="navbar-brand fs-1 text-white" href="/">
            {data.about.name}
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
            className="collapse navbar-collapse d-flex justify-content-end me-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-end">
              <li className="nav-item p-2" key="navbar-home">
                <a className="nav-link fs-5 text-white" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item p-2" key="navbar-about">
                <a
                  className="nav-link fs-5 text-white"
                  aria-current="page"
                  href="/"
                >
                  About
                </a>
              </li>
              <li className="nav-item p-2" key="navbar-projects">
                <a className="nav-link fs-5 text-white" href="/">
                  Projects
                </a>
              </li>
              <li className="nav-item p-2" key="navbar-contact">
                <a className="nav-link fs-5 text-white" href="/">
                  Contact
                </a>
              </li>

              <li className="nav-item p-2" key="navbar-linkedin">
                <a href={data.about.linkedin} target="_blank" rel="noreferrer">
                  <img
                    src={require("../icons/linkedin.png")}
                    title="linkedin"
                    alt="linkedin icon"
                    className="p-2"
                  />
                </a>
              </li>
              <li className="nav-item p-2" key="navbar-github">
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
