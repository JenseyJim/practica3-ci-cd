export function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("add() solo acepta números");
  }
  return a + b;
}
