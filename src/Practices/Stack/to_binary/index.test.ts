import { decimal2Binary } from '.'
import { generateRandomGroup } from '../../../utils'

describe('Decimal2binary', () => {
  it('0 -> 0', () => {
    expect(decimal2Binary(0)).toBe('0')
  })

  it('8 -> 1000', () => {
    expect(decimal2Binary(8)).toBe('1000')
  })

  it('11 -> 1011', () => {
    expect(decimal2Binary(11)).toBe('1011')
  })

  it('any number', () => {
    const arr = generateRandomGroup(100, 0, 100)
    for (const num of arr) {
      expect(decimal2Binary(num)).toBe(num.toString(2))
    }
  })
})
