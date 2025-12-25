import api from "./api";

export const getTenantDetails = (tenantId) => {
  return api.get(`/tenants/${tenantId}`);
};

export const updateTenant = (tenantId, data) => {
  return api.put(`/tenants/${tenantId}`, data);
};

export const listTenants = (params) => {
  return api.get("/tenants", { params });
};
