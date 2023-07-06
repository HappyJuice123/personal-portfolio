export const Footer = ({ about }) => {
  return (
    <div className="footer d-flex flex-column justify-content-center py-2">
      <p className="fs-6 footer-content">Jason Chan &copy; 2023</p>

      <p className="d-flex justify-content-center footer-content">
        <a href={about.linkedin} target="_blank" rel="noreferrer">
          <img
            src={require("../icons/linkedin.png")}
            title="Linkedin - Opens in new tab"
            alt="linkedin icon"
            className="m-md-0 p-md-0 pe-md-3 footer-icon mx-2"
          />
        </a>
        <a href={about.github} target="_blank" rel="noreferrer">
          <img
            src={require("../icons/github.png")}
            title="Github - Opens in new tab"
            alt="github icon"
            className="m-md-0 p-md-0 footer-icon mx-2"
          />
        </a>
      </p>

      <p className="footer-content pt-2">
        <a
          href="https://www.flaticon.com/authors/freepik"
          title="linkedin icons"
          className="text-white text-decoration-none footer-credit"
        >
          Icons created by Freepik - Flaticon
        </a>
      </p>
    </div>
  );
};
