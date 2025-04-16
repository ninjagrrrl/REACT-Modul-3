import { describe, test, expect } from "vitest";
import { checkPalindrome } from "./unitTestingTDD1_1";

//NOTE - describe() ist ein Block, mit dem man Tests thematisch gruppieren kann! Wenn man viele Tests hat, kann man sie logisch gruppieren
describe("checkPalindrome", () => {
  test("radar ist von vorne und hinten gelesen gleich", () => {
    expect(checkPalindrome("radar")).toBe(true);
  });

  test("level ist von vorne und hinten gelesen gleich", () => {
    expect(checkPalindrome("level")).toBe(true);
  });

  test("anna ist von vorne und hinten gelesen gleich", () => {
    expect(checkPalindrome("anna")).toBe(true);
  });
});
