import { useEffect, useState } from "react";
import { getProjectByProjectId } from "../backend/api";
import { useParams } from "react-router-dom";

export const SingleProject = () => {
  const { id } = useParams();

  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProjectByProjectId(id)
      .then((data) => {
        setIsLoading(false);
        setProject(data);
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err);
      });
  }, [id]);

  return isLoading ? (
    <p className="pt-5">Loading Project...</p>
  ) : (
    <section className="pt-5 pb-5 mb-5">
      <img
        src={require("../avatar/avatar-work.PNG")}
        alt="Working Avatar"
        className="img-fluid avatar"
      />
      <div className="single-project border border-white pt-4 pb-4 w-75 mx-auto mt-4 mb-4 rounded-5">
        <p className="fs-2">{project.name}</p>
        <p className="p-4">
          <img
            src={`http://drive.google.com/uc?export=view&id=${project.img}`}
            alt={`${project.name}`}
            className="img-fluid rounded-4 border single-project-img"
          />
        </p>
        <p className="project-description p-4">{project.description}</p>
        <p className="ps-4 pe-4">
          Tech Stack:{" "}
          {project.techStack.map((tech, index) => {
            return index === project.techStack.length - 1 ? tech : tech + ", ";
          })}
        </p>
        <div className="d-flex justify-content-center">
          <a
            href={project.github}
            className="text-decoration-none link"
            title="Opens GitHub Project in New Tab"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white link">
              GitHub -
              <img
                src={require("../icons/newTab.png")}
                alt="new tab"
                className="p-2"
              />
            </p>
          </a>
        </div>
        {project.host ? (
          <div className="d-flex justify-content-center">
            <a
              href={project.host}
              className="text-decoration-none link"
              title="Opens Hosted Project in New Tab"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-white link">
                Hosted Website -
                <img
                  src={require("../icons/newTab.png")}
                  alt="new tab"
                  className="p-2"
                />
              </p>
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
};
