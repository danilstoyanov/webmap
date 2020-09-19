export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function shuffleArray (array) {
  const copy = [...array];

  copy.sort(() => Math.random() - 0.5);

  return copy
}