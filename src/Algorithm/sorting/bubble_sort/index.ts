export const bubbleSort = (arr) => {
  let isSwapped = false

  for (let i = 0; i < arr.length - 1; i++) {
    isSwapped = false
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        isSwapped = true
      }
    }

    if (!isSwapped) break
  }

  return arr
}
