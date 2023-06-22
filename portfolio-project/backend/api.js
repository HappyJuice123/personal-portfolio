const axios = require("axios");

const api = axios.create({
  baseURL: "https://jasons-backend-api.onrender.com",
});

function getAbout() {
  return api.get("/about").then((result) => {
    return result.data;
  });
}

function getProjects() {
  return api.get("/projects").then((result) => {
    console.log(result.data.projects.projects);
    return result.data.projects.projects;
  });
}

function postMessage(contactInfo) {
  return api.post("/contact", contactInfo).then((result) => {
    console.log(result.data);
    return result.data;
  });
}

module.exports = { getAbout, getProjects, postMessage };
