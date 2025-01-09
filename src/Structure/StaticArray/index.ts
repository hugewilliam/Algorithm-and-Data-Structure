export const OverflowError = new Error('StructArray overflow')
export const UnderflowError = new Error('StructArray underflow')
export const InvalidIndex = new Error('StructArray InvalidIndex')

type Iterator<T> = (item: T, index: number, array: T[]) => void

abstract class IStaticArray<T> {
  /** the length of array */
  abstract length: number
  /** stored data */
  abstract data: { [key in string]: T }
  /** get a item in array */
  abstract get: (index: number) => T | undefined | never
  /** push a item on tail of array, O(1) time complex */
  abstract push: (item: T) => undefined | never
  /** pop a item on tail of array O(1) time complex */
  abstract pop: () => T | never
  /** insert a item in index position of array, O(n) time complex */
  abstract insert: (index: number, item: T) => undefined | never
  /** remove a item in array, O(n) time complex */
  abstract remove: (item: T) => boolean
  /** the iterator method of array */
  abstract iterator: (cb: Iterator<T>) => void

  // constructor(capacity: number) {}
}

export class StaticArray<T> implements IStaticArray<T> {
  public length: number
  private readonly capacity: number
  public data: { [key in string]: T }

  constructor(capacity: number) {
    this.length = 0
    this.capacity = capacity
    this.data = {}
  }

  private checkMaxSize(): boolean {
    return this.length >= this.capacity
  }

  private get array(): T[] {
    return Array.from<undefined[], T>(
      Array(this.length),
      (_, index) => this.data[index],
      this,
    )
  }

  get(index: number): T | undefined | never {
    if (index < 0 || index >= this.capacity) throw InvalidIndex

    return this.data[index]
  }

  push(item: T): undefined | never {
    if (this.checkMaxSize()) throw OverflowError
    this.data[this.length] = item
    this.length++
  }

  pop(): T | never {
    if (this.length === 0) throw UnderflowError

    const last = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return last
  }

  insert(index: number, item: T): undefined | never {
    if (index > this.length - 1 || index < 0) throw InvalidIndex
    if (this.checkMaxSize()) throw OverflowError

    let cur = this.length - 1
    while (cur >= index) {
      this.data[cur + 1] = this.data[cur]
      cur--
    }
    this.data[index] = item
    this.length++
  }

  remove(item: T): boolean {
    let flag = false
    let cur = 0
    while (cur < this.length) {
      if (item === this.data[cur]) {
        flag = true
        break
      }
      cur++
    }

    if (flag) {
      delete this.data[cur]
      while (cur < this.length) {
        this.data[cur] = this.data[cur + 1]
        cur++
      }
      delete this.data[--this.length]
    }

    return flag
  }

  iterator(cb: Iterator<T>) {
    for (let i = 0; i < this.length; i++) {
      cb(this.data[i], i, this.array)
    }
  }
}
