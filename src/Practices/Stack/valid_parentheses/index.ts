/**
 * https://leetcode.cn/problems/valid-parentheses/
 * A leetcode question, to judge the string has valid parentheses.
 * Yep, we can use the Stack structure to solve it.
 */

import { Stack } from '../../../Structure'

const parenthesesMap = {
  ')': '(',
  '}': '{',
  ']': '[',
}

export const isValidParentheses = (str: string): boolean => {
  const bracketStack = new Stack<string>()

  for (const char of str) {
    if (
      char in parenthesesMap &&
      bracketStack.peek() === parenthesesMap[char]
    ) {
      bracketStack.pop()
    } else {
      bracketStack.push(char)
    }
  }

  return bracketStack.isEmpty
}
