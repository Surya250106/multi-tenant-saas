import api from "./api";

export const createProject = (data) => {
  return api.post("/projects", data);
};

export const listProjects = (params) => {
  return api.get("/projects", { params });
};

export const updateProject = (projectId, data) => {
  return api.put(`/projects/${projectId}`, data);
};

export const deleteProject = (projectId) => {
  return api.delete(`/projects/${projectId}`);
};
