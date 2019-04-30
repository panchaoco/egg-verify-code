const randomNum = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
}
exports.randomNum = randomNum

exports.randomColor = (min, max) => {
  const r = randomNum(min, max);
  const g = randomNum(min, max);
  const b = randomNum(min, max);
  return `rgb(${r}, ${g}, ${b})`;
}
