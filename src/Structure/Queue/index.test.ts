import { Queue } from './index'

const queue = new Queue<number>()

test('make a new empty queue and enqueue number 1', () => {
  queue.enqueue(1)
  expect(queue).toEqual({ queue: [1] })
})

test('dequeue a item should be number 1', () => {
  expect(queue.dequeue()).toBe(1)
})

test('dequeue a item should be null', () => {
  expect(queue.dequeue()).toBeNull()
})

test('enqueue a number 5', () => {
  queue.enqueue(5)
  expect(queue).toEqual({ queue: [5] })
})

test('is queue empty?', () => {
  expect(queue.isEmpty).toBe(false)
})

test('empty the queue', () => {
  queue.clear()
  expect(queue).toEqual({ queue: [] })
})

test('whether or not queue is empty now', () => {
  expect(queue.isEmpty).toBe(true)
})
