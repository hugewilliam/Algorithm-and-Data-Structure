import { Queue } from '../../Structure'
import type { TreeNode } from '../../Structure'

// 广度优先遍历树的方法
type Iterator<T> = (item: TreeNode<T>) => void
export function walkBFS<T = unknown>(root: TreeNode<T>, iterator: Iterator<T>) {
  const queue = new Queue<TreeNode<T>>()
  queue.enqueue(root)

  while (!queue.isEmpty) {
    const currentNode = queue.dequeue()
    iterator?.(currentNode)
    if (currentNode.left) {
      queue.enqueue(currentNode.left)
    }
    if (currentNode.right) {
      queue.enqueue(currentNode.right)
    }
  }
}
