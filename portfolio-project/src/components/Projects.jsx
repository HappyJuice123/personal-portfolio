import data from "../data/data.json";

export const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul className="list-unstyled">
        {data.projects.map((project) => {
          return (
            <li
              key={project.name}
              className="border border-dark pt-4 pb-4 w-50 mx-auto mt-4 mb-4"
            >
              <p className="fs-2">{project.name}</p>
              <p>{project.github}</p>
              <p>{project.host ? project.host : false}</p>
              <p>{project.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
