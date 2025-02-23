export const getPath = (page) => {
  const paths = {
    homepage: "/",
    aboutpage: "/about",
    lappage: "/loanagainstproperty",
    goldloanpage: "/goldloan",
    businessloanpage: "/businessloan",
  };

  // Return the corresponding path if found, otherwise return "/" as default
  return paths[page] || "/";
};
