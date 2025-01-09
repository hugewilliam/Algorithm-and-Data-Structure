import { LinkList, LinkNode } from '.'

const linkList = new LinkList<number>()

describe('test single link list', () => {
  test('push a element 0', () => {
    const node = linkList.push(0)
    expect(node).toEqual(new LinkNode(0))
  })
  test('push a lot of elements', () => {
    linkList.push(1)
    linkList.push(2)
    expect(linkList.length).toBe(3)
    expect(linkList.isEmpty).toBeFalsy()
  })
  test('remove some elements', () => {
    expect(linkList.remove(2)).toBeTruthy()
    expect(linkList.remove(1)).toBeTruthy()
    expect(linkList.remove(1)).toBeFalsy()
    expect(linkList.remove(0)).toBeTruthy()
    expect(linkList.remove(0)).toBeFalsy()
    expect(linkList.isEmpty).toBeTruthy()
  })
  test('insert some elements', () => {
    expect(linkList.push(0)).toEqual(new LinkNode(0))
    expect(linkList.insert(0, 1)).toBeTruthy()
    expect(linkList.length).toBe(2)
    expect(linkList.valueOf()).toEqual([1, 0])

    // insert index limit check
    expect(linkList.insert(-1, 1)).toBeFalsy()
    expect(linkList.insert(linkList.length + 1, 1)).toBeFalsy()

    // test insert
    expect(linkList.insert(1, 2)).toBeTruthy()
    expect(linkList.valueOf()).toEqual([1, 2, 0])
    expect(linkList.insert(2, 3)).toBeTruthy()
    expect(linkList.valueOf()).toEqual([1, 2, 3, 0])
    expect(linkList.length).toBe(4)
    expect(linkList.insert(4, 4)).toBeTruthy()
    expect(linkList.valueOf()).toEqual([1, 2, 3, 0, 4])
  })

  test('clear all elements', () => {
    linkList.clear()
    expect(linkList.length).toBe(0)
    expect(linkList.valueOf()).toEqual([])
  })

  test('find a element', () => {
    expect(linkList.find(0)).toBeNull()
    expect(linkList.push(1)).toBeTruthy()
    expect(linkList.find(1)).toEqual(new LinkNode(1))
    expect(linkList.find(100)).toBeNull()
  })
})
