import { findNeedle_SS, findNeedle_BS } from "./haystack-needle";

describe("Binary Search: If needle exist, return index in haystack", () => {
  it("If array is empty, it should return -1", () => {
    expect(findNeedle_BS([], 10)).toBe(-1);
  });

  it("If array is not empty but needle doesn't exist, it should return -1", () => {
    expect(findNeedle_BS([1, 2, 3, 4, 5, 6], 9)).toBe(-1);
  });

  it("If array is not empty and needle exist in it, it should return the index", () => {
    expect(findNeedle_BS([1, 2, 3, 4, 5, 6], 3)).toBe(2);
  });

  it("If array is not empty and needle doesn't exist and also needle is smaller than all elements", () => {
    expect(findNeedle_BS([5, 6, 7, 8, 9], 1)).toBe(-1);
  });
});

describe("Simple Search: If needle exist, return index in haystack", () => {
  it("If array is empty, it should return -1", () => {
    expect(findNeedle_SS([], 10)).toBe(-1);
  });

  it("If array is not empty but needle doesn't exist, it should return -1", () => {
    expect(findNeedle_SS([1, 2, 3, 4, 5, 6], 9)).toBe(-1);
  });

  it("If array is not empty and needle exist in it, it should return the index", () => {
    expect(findNeedle_SS([1, 2, 3, 4, 5, 6], 3)).toBe(2);
  });

  it("If array is not empty and needle doesn't exist and also needle is smaller than all elements", () => {
    expect(findNeedle_SS([5, 6, 7, 8, 9], 1)).toBe(-1);
  });
});
