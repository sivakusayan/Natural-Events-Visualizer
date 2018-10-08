const inside = require('point-in-polygon');
const polygon = [
  [-76, -80],
  [-84,-150],
  [-84, 147],
  [-70, 150]
];

console.log(inside([-80, 0], polygon));