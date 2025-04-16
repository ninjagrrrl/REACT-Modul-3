export function cleanAndReverseString(word: string) {
  const cleaned = word.replace(/[^a-z0-9]/gi, "");
  const reversed = cleaned.split("").reverse().join("");
  return reversed;
}
