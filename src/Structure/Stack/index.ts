export interface IStack<T = unknown> {
  isEmpty: boolean
  push: (value: T) => void
  pop: () => T | undefined
  clear: () => void
}

export class Stack<T> implements IStack<T> {
  private list: T[]

  constructor() {
    this.list = []
  }

  get isEmpty() {
    return this.list.length === 0
  }

  public push(value: T) {
    this.list.push(value)
  }

  public pop() {
    return this.list.pop()
  }

  public clear() {
    this.list.length = 0
  }

  public peek() {
    return this.list[this.list.length - 1]
  }
}
