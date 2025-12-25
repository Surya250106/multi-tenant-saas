exports.getPagination = (page = 1, limit = 20) => {
  const safePage = Math.max(parseInt(page, 10) || 1, 1);
  const safeLimit = Math.min(parseInt(limit, 10) || 20, 100);

  const offset = (safePage - 1) * safeLimit;

  return {
    page: safePage,
    limit: safeLimit,
    offset
  };
};

exports.buildPaginationResponse = ({
  total,
  page,
  limit
}) => {
  return {
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalItems: total,
    limit
  };
};
