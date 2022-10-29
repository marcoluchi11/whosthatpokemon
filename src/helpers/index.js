export const capitalize = (str) => {
  const rest = str.substring(1);
  const mayus = str[0].toUpperCase();

  return mayus + rest;
};
