import data from "../data/data.json";

export const About = () => {
  return (
    <div>
      <h1 className="mt-5">About</h1>
      <ul className="list-unstyled mb-5 mt-5">
        <li key={"about" + data.about.name}>{data.about.name}</li>
        <li key={"about" + data.about.description}>{data.about.description}</li>
      </ul>
    </div>
  );
};
