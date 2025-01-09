import { Tree } from '.'

const root = new Tree<number>(1)
root.left = new Tree(2)
root.right = new Tree(3)

test('test Tree structure, 2 <- 1 -> 3', () => {
  expect(root).toEqual({
    value: 1,
    left: {
      value: 2,
    },
    right: {
      value: 3,
    },
  })
})

test('root left value is 2', () => {
  expect(root.left.value).toBe(2)
})

test('root right equre {value: 3}', () => {
  expect(root.right).toEqual({
    value: 3,
  })
})
