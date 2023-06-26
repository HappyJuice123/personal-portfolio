import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../backend/api";

export const Projects = ({ techStackObj, isTechStackLoading }) => {
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

  console.log("tech stack", isTechStackLoading, "project", isLoading);

  return !isLoading && !isTechStackLoading ? (
    <div className="mb-5 mt-5 pb-5">
      <h1>Projects</h1>
      <img
        src={require("../avatar/avatar-projects.png")}
        alt="Project Avatar"
        className="img-fluid avatar"
      />
      <div className="d-flex justify-content-center">
        <section className="tech-icon-section">
          <div>
            <img
              src={require("../icons/JavaScript.svg").default}
              alt="JavaScript Icon"
              title="JavaScript"
              className="tech-icon m-3 rounded-4 "
            />
            <p className="tech-text">JavaScript</p>
          </div>
          <div>
            <img
              src={require("../icons/HTML.svg").default}
              alt="HTML Icon"
              title="HTML"
              className="tech-icon m-3 rounded-4 "
            />
            <p className="tech-text">HTML</p>
          </div>
          <div>
            <img
              src={require("../icons/CSS.svg").default}
              alt="CSS Icon"
              title="CSS"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">CSS</p>
          </div>
          <div>
            <img
              src={require("../icons/PostgreSQL.svg").default}
              alt="PostgreSQL Icon"
              title="PostgreSQL"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">PostgreSQL</p>
          </div>
          <div>
            <img
              src={require("../icons/Git.svg").default}
              alt="Git Icon"
              title="Git"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">Git</p>
          </div>
          <div>
            <img
              src={require("../icons/MongoDB.svg").default}
              alt="MongoDB Icon"
              title="MongoDB"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">MongoDB</p>
          </div>
          <div>
            <img
              src={require("../icons/Firebase.svg").default}
              alt="Firebase Icon"
              title="Firebase"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">Firebase</p>
          </div>
          <div>
            <img
              src={require("../icons/Expo.svg").default}
              alt="Expo Icon"
              title="Expo"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">Expo</p>
          </div>
          <div>
            <img
              src={require("../icons/Jest.svg").default}
              alt="Jest Icon"
              title="Jest"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">Jest</p>
          </div>
          <div>
            <img
              src={require("../icons/Node.js.svg").default}
              alt="Node.js Icon"
              title="Node.js"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">Node.js</p>
          </div>
          <div>
            <img
              src={require("../icons/React.svg").default}
              alt="React Icon"
              title="React"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">React</p>
          </div>
          <div>
            <img
              src={require("../icons/React.svg").default}
              alt="React Native Icon"
              title="React Native"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">React Native</p>
          </div>
          <div>
            <img
              src={require("../icons/Axios.svg").default}
              alt="Axios Icon"
              title="Axios"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">Axios</p>
          </div>
          <div>
            <img
              src={require("../icons/Tailwind.svg").default}
              alt="Tailwind Icon"
              title="Tailwind"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">Tailwind</p>
          </div>
          <div>
            <img
              src={require("../icons/Bootstrap.svg").default}
              alt="Bootstrap Icon"
              title="Bootstrap"
              className="tech-icon m-3 rounded-4"
            />
            <p className="tech-text">Bootstrap</p>
          </div>
        </section>
      </div>
      <section className="d-flex justify-content-center">
        <ul className="list-unstyled projects-section">
          {projects.map((project) => {
            return (
              <li
                key={project.id}
                className="project-card border border-white pt-4 pb-4 w-50 mx-auto mt-4 mb-4 rounded-5"
                title={`View ${project.name} in More Detail`}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="nav-link fs-5 text-white"
                >
                  <div className="p-4 " key={"testing" + project.id}>
                    <p className="fs-2">{project.name}</p>
                    <p className="p-4">
                      <img
                        src={`http://drive.google.com/uc?export=view&id=${project.img}`}
                        alt={`${project.name}`}
                        className="img-fluid rounded-4 border project-img"
                      />
                    </p>

                    <div className="ps-4 pe-4">
                      Tech Stack:{" "}
                      {project.techStack.map((tech) => {
                        return techStackObj[tech] ? (
                          <div key={project + tech}>
                            {console.log("../icons/" + tech + ".svg")}
                            <img
                              src={require("../icons/" + tech + ".svg").default}
                              alt={`${tech} Icon`}
                              title={tech}
                              className="tech-icon m-3 rounded-4"
                            />
                            <p className="tech-text">{tech}</p>
                          </div>
                        ) : (
                          <p key={project + tech}>not there</p>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  ) : (
    <p className="pt-5">Page is Loading...</p>
  );
};
