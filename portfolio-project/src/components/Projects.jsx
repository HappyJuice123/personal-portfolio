import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../backend/api";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProjects()
      .then((data) => {
        setIsLoading(false);
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(true);
      });
  }, []);

  return isLoading ? (
    <p className="pt-5">Page is Loading...</p>
  ) : (
    <div className="mb-5 mt-5 pb-5">
      <h1>Projects</h1>
      <img
        src={require("../avatar/avatar-projects.png")}
        alt="Project Avatar"
        className="img-fluid avatar"
      />
      <section className="d-flex justify-content-center">
        <ul className="list-unstyled projects-section">
          {projects.map((project) => {
            return (
              <li
                key={project.name}
                className="project-card border border-white pt-4 pb-4 w-50 mx-auto mt-4 mb-4 rounded-5"
                title={`View ${project.name} in More Detail`}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="nav-link fs-5 text-white"
                >
                  <div className="p-4 ">
                    <p className="fs-2">{project.name}</p>
                    <p className="p-4">
                      <img
                        src={`http://drive.google.com/uc?export=view&id=${project.img}`}
                        alt={`${project.name}`}
                        className="img-fluid rounded-4 border project-img"
                      />
                    </p>

                    <p className="ps-4 pe-4">
                      Tech Stack:{" "}
                      {project.techStack.map((tech, index) => {
                        return index === project.techStack.length - 1
                          ? tech
                          : tech + ", ";
                      })}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
