import api from "./api";

export const login = (data) => {
  return api.post("/auth/login", data);
};

export const registerTenant = (data) => {
  return api.post("/auth/register-tenant", data);
};

export const getCurrentUser = () => {
  return api.get("/auth/me");
};

export const logout = () => {
  return api.post("/auth/logout");
};
