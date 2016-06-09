const parseDateToLocalFormat = (date) => {
  return new Date(date).toLocaleString();
};

const nl2br = (str) => {
  return str.replace(/[\n]/g, "<br />");
};
