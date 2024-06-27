import sum from "../sample/sample"

/**
 * 'test' is the method which is used to write test cases, it takes 2 arguments:
 * 1. A string that can be used for describing the functionality of this method
 * 2. A callback method, which is the actual test case. 
 */

test('Verify Sum of Two Numbers', () => {
  const result = sum(5, 2);

  /**
   * expect() method is used to make the assertion, i.e. it is the place where the expected output is validated against the output received from the service.
   */
  expect(result).toBe(7);
})
