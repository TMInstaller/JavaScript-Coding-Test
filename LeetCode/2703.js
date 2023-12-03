/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  const array = [...args];
  return array.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
