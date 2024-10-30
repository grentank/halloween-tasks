module.exports = function isHalloweenNumber(n) {
  return (n % 13 === 0
    ? n % 5 === 0
      ? n % 2 === 0
        ? 'No'
        : n % 3 === 0
        ? 'No'
        : 'No'
      : n % 4 === 0
      ? 'Yes'
      : n % 6 === 0
      ? 'No'
      : 'Yes'
    : n % 7 === 0
    ? n % 8 === 0
      ? 'No'
      : n % 9 === 0
      ? 'No'
      : 'No'
    : n % 10 === 0
    ? 'No'
    : 'No') === 'Yes'
    ? 'Yes, Halloween number!'
    : 'Nope, not scary enough';
};
