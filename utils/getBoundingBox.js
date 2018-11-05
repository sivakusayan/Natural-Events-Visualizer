/**
 * Takes a point, and returns a bounding box with specified
 * side length that surrounds that point.
 * 
 * @param {{ x: Number, y: Number}} point 
 *  The point to get the bounding box of
 * @param {Number} boxLength 
 *  The side length of the bounding box
 * 
 * @returns {Number[][]}
 *  A bounding box around the point
 */
const getBoundingBox = (point, boxLength = 10) => {
  const moveBy = boxLength / 2;
  return [[
    point.x - moveBy,
    point.y - moveBy,
  ], [
    point.x + moveBy,
    point.y + moveBy,
  ]];
};

module.exports = getBoundingBox;
