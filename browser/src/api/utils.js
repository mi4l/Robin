export const fetchData = ({
  fail,
  options,
  success,
  url
}) => fetch(url, options)
  .then(res => res.json())
  .then(success, fail)
  .catch(fail);