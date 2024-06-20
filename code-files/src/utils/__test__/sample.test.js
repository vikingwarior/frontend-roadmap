import sum from "../sample/sample"

test('Verify Sum of Two Numbers', () => {
  const result = sum(5, 2);

  expect(result).toBe(7);
})
