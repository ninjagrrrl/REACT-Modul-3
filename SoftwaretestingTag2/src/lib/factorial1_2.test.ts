import { test, expect, describe } from "vitest";
import { factorial } from "./factorial1_2";

describe("factorial", () => {
  test("gibt 1 zurück für n = 0", () => {
    expect(factorial(0)).toBe(1); // Basisfall
  });
  test("gibt 1 zurück für n = 1", () => {
    expect(factorial(1)).toBe(1); // Basisfall
  });
  test("gibt 2 zurück für n = 2", () => {
    expect(factorial(2)).toBe(2); // rekursive Berechnung
  });
  test("gibt 24 zurück für n = 4", () => {
    expect(factorial(4)).toBe(24); // rekursive Berechnung
  });
});
