exports.errorHandler = (res, error, status) => {
  return res.status(status).json({
    success: false,
    error: error,
  });
};
