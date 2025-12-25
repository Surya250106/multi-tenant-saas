import api from "./api";

export const addUser = (tenantId, data) => {
  return api.post(`/tenants/${tenantId}/users`, data);
};

export const listUsers = (tenantId, params) => {
  return api.get(`/tenants/${tenantId}/users`, { params });
};

export const updateUser = (userId, data) => {
  return api.put(`/users/${userId}`, data);
};

export const deleteUser = (userId) => {
  return api.delete(`/users/${userId}`);
};
