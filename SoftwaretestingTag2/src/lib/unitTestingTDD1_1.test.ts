import { describe, test, expect } from "vitest";
import { checkPalindrome } from "./unitTestingTDD1_1";

//NOTE - describe() ist ein Block, mit dem man Tests thematisch gruppieren kann! Wenn man viele Tests hat, kann man sie logisch gruppieren
describe("checkPalindrome", () => {
  test("radar ist von vorne und hinten gelesen gleich, returns true", () => {
    expect(checkPalindrome("radar")).toBe(true);
  });

  test("level ist von vorne und hinten gelesen gleich, returns true", () => {
    expect(checkPalindrome("level")).toBe(true);
  });

  test("anna ist von vorne und hinten gelesen gleich, returns true", () => {
    expect(checkPalindrome("anna")).toBe(true);
  });
  test("hallo ist von vorne und hinten gelesen nicht gleich, returns false", () => {
    expect(checkPalindrome("anna")).toBe(false);
  });
});
