import axios from "axios";

const api = axios.create({
  baseURL: "https://jasons-backend-api.onrender.com",
});

export const getAbout = () => {
  return api.get("/about").then((result) => {
    return result.data.about;
  });
};

export const getProjects = () => {
  return api.get("/projects").then((result) => {
    console.log(result.data.projects.projects);
    return result.data.projects.projects;
  });
};

export const postMessage = (contactInfo) => {
  return api.post("/contact", contactInfo).then((result) => {
    console.log(result.data);
    return result.data;
  });
};
