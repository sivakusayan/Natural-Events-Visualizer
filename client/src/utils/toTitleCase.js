const toTitleCase = (string) => {
  const words = string.toLowerCase().split(' ');
  const titledWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return titledWords.join(' ');
};

export default toTitleCase;
