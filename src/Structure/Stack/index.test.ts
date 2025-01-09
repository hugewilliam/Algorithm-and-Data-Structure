import { Stack } from './index'

const stack = new Stack<number>()

test('make a new empty Stack', () => {
  expect(stack.isEmpty).toBe(true)
})

test('push a number 1', () => {
  stack.push(1)
  expect(stack).toEqual({ list: [1] })
})

test('push a number 2', () => {
  stack.push(2)
  expect(stack).toEqual({ list: [1, 2] })
})

test('test peek', () => {
  expect(stack.peek()).toBe(2)
})

test('pop a number what is 2', () => {
  expect(stack.pop()).toBe(2)
})

test('test stack clear method', () => {
  stack.clear()
  expect(stack.isEmpty).toBe(true)
})
