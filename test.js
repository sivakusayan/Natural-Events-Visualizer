const isValidRadius = input => (
  // Check for NaN value since typeof NaN returns 'number'
  !Number.isNaN(input)
  && typeof input === 'number'
);

console.log(isValidRadius(999));