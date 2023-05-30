import data from "../data/data.json";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ms-5">
          <a className="navbar-brand fs-1" href="/">
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
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-end border">
              <li className="nav-item p-2">
                <a className="nav-link fs-5" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link fs-5" aria-current="page" href="/">
                  About
                </a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link fs-5" href="/">
                  Projects
                </a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link fs-5" href="/">
                  Contact
                </a>
              </li>

              <li className="nav-item p-2">
                <a
                  href="https://www.linkedin.com/in/jason-chan-a35255159/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../icons/linkedin.png")}
                    title="linkedin"
                    alt="linkedin icon"
                    className="p-2"
                  />
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  href="https://github.com/HappyJuice123"
                  target="_blank"
                  rel="noreferrer"
                >
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
