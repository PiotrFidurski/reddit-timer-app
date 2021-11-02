function getDateInEpoch() {
  const threeMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 3) / 1000).toFixed();
  const sixMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 6) / 1000).toFixed();
  const yearAgo = (new Date(Date.now()).setFullYear(new Date().getFullYear() - 1) / 1000).toFixed();

  return [threeMonthsAgo, sixMonthsAgo, yearAgo];
}

export { getDateInEpoch };
