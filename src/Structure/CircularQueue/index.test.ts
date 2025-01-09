import {
  CircularQueue,
  CircularQueueTypeError,
  OverflowError,
  UnderflowError,
} from './index'

const q = new CircularQueue<number>(2)

test('invalid type of Circular queue max size', () => {
  const t = () => new CircularQueue('string' as unknown as number)
  expect(t).toThrow(CircularQueueTypeError)
})

test('make a circular queue that has 2 max size', () => {
  expect(q.maxSize).toBe(2)
})

test('enqueue a number in circular queue', () => {
  expect(q.enqueue(0)).toBe(true)
})

test('test overflow case', () => {
  const t = () => q.enqueue(1)
  expect(t).toThrow(OverflowError)
})

test('dequeue a number in circular queue', () => {
  expect(q.dequeue()).toBe(0)
})

test('test another overflow case', () => {
  q.enqueue(2)
  const t = () => q.enqueue(3)
  expect(t).toThrow(OverflowError)
})

test('test clear the queue', () => {
  q.clear()
  expect(q.queue).toEqual({
    front: 0,
    rear: 0,
    data: {},
  })
})

test('test underflow case', () => {
  const t = () => q.dequeue()
  expect(t).toThrow(UnderflowError)
})
