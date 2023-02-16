const pagination = (limit, page, count) => {
  const totalPage = Math.ceil(count / limit);

  let pagination = {
    count: count,
    totalPage,
  };
  if (totalPage != 1 && page < totalPage && page != null) {
    pagination.next = { page: page + 1 };
  }
  if (totalPage != 1 && page != null && page != 1 && page <= totalPage) {
    pagination.prev = { page: page - 1 };
  }
  return pagination;
};
module.exports = pagination;
