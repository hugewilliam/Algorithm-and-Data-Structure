export interface IQueue<T> {
  isEmpty: boolean
  enqueue: (value: T) => void
  dequeue: () => T | null
  clear: () => void
}

export class Queue<T> implements IQueue<T> {
  private queue: T[]

  constructor() {
    this.queue = []
  }

  get isEmpty() {
    return this.queue.length === 0
  }

  enqueue(value: T) {
    this.queue.push(value)
  }

  dequeue(): T | null {
    if (this.queue.length > 0) {
      return this.queue.shift()
    }
    return null
  }

  clear(): void {
    this.queue = []
  }
}
