module.exports = (req, res, next) => {
  const { tenantId } = req.params;

  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }

  // Super admin can access any tenant
  if (req.user.role === 'super_admin') {
    return next();
  }

  // Ensure tenant matches token
  if (tenantId && tenantId !== req.user.tenantId) {
    return res.status(403).json({
      success: false,
      message: 'Access denied for this tenant'
    });
  }

  next();
};
