// 单向链表节点
export class LinkNode<T> implements LinkNode<T> {
  value: T
  next: LinkNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export class LinkList<T> {
  next: LinkNode<T> | null
  private head: LinkNode<T> | null
  length: number

  constructor() {
    this.next = this.head = null
    this.length = 0
  }

  get isEmpty() {
    return this.length === 0
  }

  private isValidIndex(index) {
    return index >= 0 && index <= this.length
  }

  push(value: T): LinkNode<T> {
    const tailNode = new LinkNode<T>(value)

    if (!this.head) {
      this.head = tailNode
      this.length++
      return tailNode
    }

    let current = this.head

    while (current.next) {
      current = current.next
    }

    current.next = tailNode
    this.length++
    return tailNode
  }

  insert(index: number, value: T): boolean {
    if (!this.isValidIndex(index)) return false

    const insertNode = new LinkNode<T>(value)

    if (index === 0) {
      insertNode.next = this.head
      this.head = insertNode
      this.length++
    } else if (index === this.length) {
      this.push(value)
    } else {
      let currentIndex = 0
      let currentNode = this.head

      while (currentIndex + 1 < index) {
        currentNode = currentNode.next
        currentIndex++
      }
      insertNode.next = currentNode.next
      currentNode.next = insertNode
      this.length++
    }

    return true
  }
  remove(value: T): boolean {
    if (this.isEmpty) return false
    const dumpNode = new LinkNode(null)
    dumpNode.next = this.head
    let preNode,
      currentNode = dumpNode

    while (currentNode.next) {
      preNode = currentNode
      currentNode = currentNode.next
      if (currentNode.value === value) {
        preNode.next = currentNode.next
        this.head = dumpNode.next
        this.length--
        return true
      }
    }

    return false
  }
  clear() {
    this.length = 0
    this.head = null
  }
  find(value: T): LinkNode<T> | null {
    if (this.isEmpty) return null
    let current = this.head

    while (current) {
      if (current.value === value) return current
      current = current.next
    }

    return current
  }
  valueOf() {
    const result = []
    let tmp = this.head

    while (tmp) {
      result.push(tmp.value)
      tmp = tmp.next
    }

    return result
  }
}
