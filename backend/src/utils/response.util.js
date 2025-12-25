exports.success = (res, data = null, message = null, status = 200) => {
  return res.status(status).json({
    success: true,
    ...(message && { message }),
    ...(data && { data })
  });
};

exports.error = (res, message, status = 500) => {
  return res.status(status).json({
    success: false,
    message
  });
};
