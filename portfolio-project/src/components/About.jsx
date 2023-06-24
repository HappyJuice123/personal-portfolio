import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export const About = ({ about, isLoading }) => {
  let workIconStyles = { background: "#2cce8a" };
  let schoolIconStyles = { background: "#ffb84f" };

  return isLoading ? (
    <p className="pt-5">Page is Loading...</p>
  ) : (
    <div className="pb-5 mb-5">
      <h1 className="mt-5 title">About</h1>
      <img
        src={require("../avatar/avatar-about.png")}
        alt="Jason Avatar"
        className="img-fluid"
      />
      <ul className="list-unstyled mb-5 mt-5">
        <li key="about description" className="d-flex justify-content-center">
          <p
            className="pt-5 px-sm-5 mx-sm-5 home-description px-5 about-description"
            style={{ whiteSpace: "pre-line" }}
          >
            {about.description}
          </p>
        </li>
      </ul>
      <VerticalTimeline className="">
        {about.timeline.map((element) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              className="timeline"
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={
                isWorkIcon ? (
                  <img
                    src={require("../icons/work.png")}
                    title="work"
                    alt="work icon"
                    className="h-50 mt-2 timeline-work-icon"
                  />
                ) : (
                  <img
                    src={require("../icons/school.png")}
                    title="school"
                    alt="school icon"
                    className="h-75 mt-1 pt-1 timeline-school-icon"
                  />
                )
              }
            >
              <h2 className="vertical-timeline-element-title d-flex">
                {element.title}
              </h2>
              <h5 className="vertical-timeline-element-subtitle d-flex fs-6 ">
                {element.location}
              </h5>
              <p id="description" className="d-flex text">
                {element.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
