import { test, expect, describe } from "vitest";
import { square } from "../square";

describe("square", () => {
  test("squares 2 to equal 4", () => {
    expect(square(2)).toBe(4);
  });

  test("squares 3 to equal 9", () => {
    expect(square(3)).toBe(9);
  });
});
