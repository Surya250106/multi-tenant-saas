import api from "./api";

export const createTask = (projectId, data) => {
  return api.post(`/projects/${projectId}/tasks`, data);
};

export const listTasks = (projectId, params) => {
  return api.get(`/projects/${projectId}/tasks`, { params });
};

export const updateTask = (taskId, data) => {
  return api.put(`/tasks/${taskId}`, data);
};

export const updateTaskStatus = (taskId, status) => {
  return api.patch(`/tasks/${taskId}/status`, { status });
};
