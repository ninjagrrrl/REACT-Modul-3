import { test, expect } from "vitest";
import { cleanAndReverseString } from "./reverseString1_2";

test("aus hello wird olleh", () => {
  expect(cleanAndReverseString("hello")).toBe("olleh");
});
test("Sonderzeichen werden entfernt", () => {
  expect(cleanAndReverseString("h3l?0,")).toBe("0l3h");
});
