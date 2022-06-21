import { findGreatest } from "./greatest";

describe("Finding Greatest element from an array", () => {
  it("If list is not passed as paramenter, it should throw error", () => {
    expect(findGreatest()).toBeNull();
  });

  it("If there is no element in the array, it should return null value", () => {
    expect(findGreatest([])).toBeNull();
  });

  it("If there is only one element in the list, it should return that value", () => {
    expect(findGreatest([1])).toBe(1);
  });

  it("If there are multiple values, it should return largest", () => {
    expect(findGreatest([4, 6, 3, 7, 1, 9])).toBe(9);
  });

  it("If all the elements are same in the list, it should return any one of them", () => {
    expect(findGreatest([3, 3, 3, 3, 3, 3, 3, 3, 3])).toBe(3);
  });

  it("If the elements are sorted in ascending order, it should return last element", () => {
    expect(findGreatest([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(9);
  });

  it("If the elements are sorted in descending order, it should return first element", () => {
    expect(findGreatest([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(9);
  });
});
