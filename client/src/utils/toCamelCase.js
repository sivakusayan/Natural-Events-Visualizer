/**
 * Assumes that the input string does not have any special characters.
 */
const toCamelCase = string => string.split(' ').map((word, index) => {
  if (index === 0) return word.charAt(0).toLowerCase() + word.slice(1)
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join('');

export default toCamelCase;
