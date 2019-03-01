/**
 * Takes an array of points and returns the point that has
 * averaged coordinates.
 * 
 * @param {Number[][]} points 
 * An array of points in two dimensional space.
 * 
 * @returns
 * The average of the points
 */
const pointMean = (points) => {
  let [xSum, ySum] = [0, 0];
  points.forEach((point) => {
    xSum += point[0];
    ySum += point[1];
  });
  return [xSum / points.length, ySum / points.length];
};

export default pointMean;
