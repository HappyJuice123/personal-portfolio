import data from "../data/data.json";

export const About = () => {
  return (
    <div>
      <ul>
        <li>{data.about.name}</li>
        <li>{data.about.description}</li>
      </ul>
    </div>
  );
};
