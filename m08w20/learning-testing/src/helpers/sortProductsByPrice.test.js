import { expect, test } from 'vitest'
import sortProductsByPrice from './sortProductsByPrice'

const initialProducts = [
    {
      id: 1,
      name: "iPad",
      price: 400,
    },
    {
      id: 2,
      name: "iPhone",
      price: 600,
    },
    {
      id: 3,
      name: "Apple Mouse",
      price: 100,
    },
    {
      id: 4,
      name: "Apple Watch",
      price: 200,
    },
  ];

test('sortProductsByPrice should sort products in ascending order', () => {
    const result = sortProductsByPrice(initialProducts)
    const expected = "Apple Mouse"
  
    expect(result[0].name).toBe(expected)
})