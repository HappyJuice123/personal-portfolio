export const Home = ({ about }) => {
  console.log(about.home);

  return (
    <section className="pt-5">
      <img
        src={require("../avatar/avatar-home.png")}
        alt="Hi Avatar"
        className="pt-5 img-fluid"
      />
      <p
        className="pt-5 px-sm-5 mx-sm-5 home-description px-5"
        style={{ whiteSpace: "pre-line" }}
      >
        {about.home}
      </p>
    </section>
  );
};
