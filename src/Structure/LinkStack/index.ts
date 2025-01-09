export interface IStack<T = unknown> {
  isEmpty: boolean
  push(v: T): void
  pop(): T
  peek(): T
}

export class LinkStack<T> implements IStack<T> {
  isEmpty: boolean
  constructor() {
    this.isEmpty = true
  }

  push(value: T) {}

  pop(): T {
    if (this.isEmpty) return
  }

  peek(): T {
    return
  }
}
