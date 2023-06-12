import data from "../data/data.json";
import { Tooltip } from "react-tooltip";

export const Projects = () => {
  const handleGithub = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="mb-5 mt-5">
      <h1>Projects</h1>
      <section className="">
        <ul className="list-unstyled">
          {data.projects.map((project) => {
            return (
              <li
                key={project.name}
                className="project-card border border-white pt-4 pb-4 w-50 mx-auto mt-4 mb-4 rounded"
                onClick={() => {
                  handleGithub(project.github);
                }}
                title={`View ${project.name} at GitHub`}
              >
                <div className="p-4 ">
                  <p className="fs-2">{project.name}</p>
                  <p className="project-description p-4">
                    {project.description}
                  </p>
                  <p className="ps-4 pe-4">
                    Tech Stack:{" "}
                    {project.techStack.map((tech, index) => {
                      return index === project.techStack.length - 1
                        ? tech
                        : tech + ", ";
                    })}
                  </p>
                  <p>
                    <img
                      src={require("../icons/newTab.png")}
                      alt="new tab"
                      className="p-2"
                    />
                    GitHub
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <Tooltip delayShow={0} />
      </section>
    </div>
  );
};
