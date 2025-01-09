type Node = DoubleLinkNode<T> | null
export class DoubleLinkNode<T> {
  value: T
  prev: Node
  next: Node

  constructor(value: T, prev: Node = null, next: Node = null) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}

export class DoubleLinkList<T> {
  private head: DoubleLinkNode<T> | null
  length: number

  constructor() {
    this.clear()
  }

  get isEmpty() {
    return this.length === 0
  }

  private isValidIndex(index) {
    return index >= 0 && index <= this.length
  }

  push(value: T): DoubleLinkNode<T> {
    const node = new DoubleLinkNode<T>(value)
    if (this.isEmpty) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
      node.prev = currentNode
    }
    this.length++
    return node
  }
  insert(index: number, value: T): boolean {
    if (!this.isValidIndex(index)) return false
    if (this.isEmpty || index === this.length) return !!this.push(value)
    const insertNode = new DoubleLinkNode(value)
    let currentIdx = 0
    let currentNode = this.head

    while (currentIdx < index) {
      currentNode = currentNode.next
      currentIdx++
    }

    if (currentNode.prev) {
      currentNode.prev.next = insertNode
      insertNode.prev = currentNode.prev
      currentNode.prev = insertNode
      insertNode.next = currentNode
    } else {
      this.head = insertNode
      insertNode.next = currentNode
      currentNode.prev = insertNode
    }
    this.length++
    return true
  }
  clear() {
    this.length = 0
    this.head = null
  }
  valueOf(): T[] {
    let tmp = this.head
    const result = []

    while (tmp) {
      result.push(tmp.value)
      tmp = tmp.next
    }

    return result
  }
}
