export const generateRandom = (low = 0, high = 1) => {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

export const generateRandomGroup = (
  count = 100,
  low = undefined,
  high = undefined,
) => Array.from({ length: count }, (_) => generateRandom(low, high))
