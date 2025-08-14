import { describe, it, expect } from "vitest";
import { add } from "../src/utils.js";

describe("add()", () => {
  it("suma números correctamente", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  it("lanza error si recibe valores no numéricos", () => {
    expect(() => add("2", 3)).toThrow();
    expect(() => add(2, null)).toThrow();
  });
});
