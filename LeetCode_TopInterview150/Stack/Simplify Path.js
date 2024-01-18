/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const tokens = path.split("/");
  const newPath = [];

  for (const token of tokens) {
    if (token === "..") {
      newPath.pop();
    } else if (token !== "" && token !== ".") {
      newPath.push(token);
    }
  }
  return `/${newPath.join("/")}`;
};
