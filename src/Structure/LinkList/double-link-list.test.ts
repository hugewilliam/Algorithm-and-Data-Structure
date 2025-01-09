import { DoubleLinkList, DoubleLinkNode } from '.'

const linkList = new DoubleLinkList<number>()

describe('test double link list', () => {
  test('create a empty double link list', () => {
    expect(linkList.length).toBe(0)
    expect(linkList.isEmpty).toBeTruthy()
  })
  test('push some elements', () => {
    const node1 = linkList.push(0)
    expect(node1).toEqual(new DoubleLinkNode(0))
    expect(linkList.isEmpty).toBeFalsy()
    const node2 = new DoubleLinkNode(1, node1)
    expect(linkList.push(1)).toEqual(node2)
    expect(linkList.length).toBe(2)
    const node3 = new DoubleLinkNode(3, node2)
    node2.next = node3
    expect(linkList.push(3)).toEqual(node3)
  })
  test('clear the double link list', () => {
    linkList.clear()
    expect(linkList.isEmpty).toBeTruthy()
    expect(linkList.valueOf()).toEqual([])
  })
  test('insert some elements', () => {
    expect(linkList.insert(0, 0)).toBeTruthy()
    expect(linkList.insert(0, -1)).toBeTruthy()
    expect(linkList.valueOf()).toEqual([-1, 0])
    expect(linkList.insert(1, 1)).toBeTruthy()
    expect(linkList.valueOf()).toEqual([-1, 1, 0])
    expect(linkList.length).toBe(3)
    expect(linkList.insert(linkList.length, linkList.length)).toBeTruthy()
    expect(linkList.valueOf()).toEqual([-1, 1, 0, 3])

    // error index insert case
    expect(linkList.insert(-1, 0)).toBeFalsy()
  })
})
