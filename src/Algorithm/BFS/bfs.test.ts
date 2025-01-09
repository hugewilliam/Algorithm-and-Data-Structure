import { Tree } from '../../Structure/index'
import { walkBFS } from './bfs'

const root = new Tree<number>(1)
root.left = new Tree(2)
root.right = new Tree(3)
root.left.left = new Tree(4)
root.left.right = new Tree(5)

/**
 * 结构像这样：
 *     1
 *    | \
 *   2   3
 *  | \
 * 4  5
 */

// 遍历的顺序是 1 -> 2 -> 3 -> 4 -> 5

// 封装个方便测试的方法
const printWalkBFS = (root: Tree<number>) => {
  const res: number[] = []
  walkBFS(root, (item) => {
    res.push(item.value)
  })
  return res.join(' -> ')
}

test('test Breadth-First Search print 1 -> 2 -> 3 -> 4 -> 5', () => {
  expect(printWalkBFS(root)).toBe('1 -> 2 -> 3 -> 4 -> 5')
})
