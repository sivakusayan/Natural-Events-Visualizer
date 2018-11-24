/**
 * @fileoverview A collection of functions that test whether the given filters
 * are valid.
 */

export const isValidLatitude = (input) => {
  const value = Number.parseInt(input, 10);
  // Check for NaN value since typeof NaN returns 'number'
  return !Number.isNaN(value)
         && typeof value === 'number'
         && value >= -90
         && value <= 90;
};

export const isValidLongitude = (input) => {
  const value = Number.parseInt(input, 10);
  // Check for NaN value since typeof NaN returns 'number'
  return !Number.isNaN(value)
         && typeof value === 'number'
         && value >= -180
         && value <= 180;
};

export const isValidRadius = (input) => {
  const value = Number.parseInt(input, 10);
  // Check for NaN value since typeof NaN returns 'number'
  return !Number.isNaN(value)
         && typeof value === 'number';
};
