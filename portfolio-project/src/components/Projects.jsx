import data from "../data/data.json";

export const Projects = () => {
  return (
    <div className="mb-5">
      <h1>Projects</h1>
      <section className="">
        <ul className="list-unstyled">
          {data.projects.map((project) => {
            return (
              <li
                key={project.name}
                className="project-card border border-white pt-4 pb-4 w-50 mx-auto mt-4 mb-4 rounded"
              >
                <p className="fs-2">{project.name}</p>

                <p>{project.description}</p>
                <p>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </p>
                <p>
                  <a
                    href={project.host ? project.host : false}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.host ? "Website" : false}
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
