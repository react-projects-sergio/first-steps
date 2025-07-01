import { describe, expect, test } from "vitest";
import { add } from "./math.helper";

describe("math.helper.ts", () => {
  test("should add two positive numbers", () => {
    const result = add(1, 3);
    expect(result).toBe(4);
  });
});
