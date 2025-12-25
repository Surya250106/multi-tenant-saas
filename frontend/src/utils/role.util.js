export const isSuperAdmin = (user) => {
  return user?.role === "super_admin";
};

export const isTenantAdmin = (user) => {
  return user?.role === "tenant_admin";
};

export const isRegularUser = (user) => {
  return user?.role === "user";
};
