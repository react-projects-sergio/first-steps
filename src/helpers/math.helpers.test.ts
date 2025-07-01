import { describe, expect, test } from "vitest";
import { add, multiply, substract } from "./math.helper";

describe("math.helper.ts", () => {
  test("should add two numbers", () => {
    const result = add(1, 3);
    expect(result).toBe(4);
  });

  test("should subtract two numbers", () => {
    const result = substract(3, 1);
    expect(result).toBe(2);
  });

  test("should multiply two numbers", () => {
    const result = multiply(3, 2);
    expect(result).toBe(6);
  });
});
