import { twoSum } from"../src/two_sum"

it('1_1: synchronous passing test', (done) => {
    // This test passes because it does not throw an exception.
    const [a, b] = twoSum([2,7,11,15], 9)
    expect(a).toEqual(0)
    expect(b).toEqual(1)
    done()
  });

it('1_2: synchronous passing test', (done) => {
  // This test passes because it does not throw an exception.
  const [a, b] = twoSum([0,4,3,0], 0)
  expect(a).toEqual(0)
  expect(b).toEqual(3)
  done()
});
