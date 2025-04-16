export function checkPalindrome(word: string): boolean {
  if (word === word.split("").reverse().join("")) return true;
  return false;
}

//- da es keine direkte reverse()-Methode für strings gibt, kann man folgendes Pattern verwenden:
//# word.split("").reverse().join("")
/*  
- split(""): macht aus "level" → ["l", "e", "v", "e", "l"]

- reverse(): dreht das Array um

- join(""): macht daraus wieder "level"
*/

// TODO: Wie würden Palindrom-Tests mit Groß-/Kleinschreibung, Leerzeichen und Sonderzeichen funzen?
