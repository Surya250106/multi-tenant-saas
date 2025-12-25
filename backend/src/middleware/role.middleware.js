module.exports = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized'
      });
    }

    if (
      req.user.role === 'super_admin' ||
      allowedRoles.includes(req.user.role)
    ) {
      return next();
    }

    return res.status(403).json({
      success: false,
      message: 'Forbidden: insufficient permissions'
    });
  };
};
