import { describe, test, expect } from "@jest/globals";
import { getRandomWord } from "./SecretWords";

describe("getRandomWord", () => {
  test("should return a word of the correct length", () => {
    const length = 5;
    const word = getRandomWord(length);
    expect(word.length).toBe(length);
  });

  test("should return a word from the correct list for length 5", () => {
    const length = 5;
    const word = getRandomWord(length);
    const wordList = ["CYKEL", "MEDEL", "HOPPA", "BULLE", "SADEL"];
    expect(wordList).toContain(word);
  });

  test("should return a word from the correct list for length 6", () => {
    const length = 6;
    const word = getRandomWord(length);
    const wordList = ["ADDERA", "DAMSUG", "JODDLA", "PUTSAR"];
    expect(wordList).toContain(word);
  });

  test("should return a word from the correct list for length 7", () => {
    const length = 7;
    const word = getRandomWord(length);
    const wordList = ["MEDDELA", "BULLRAR", "PARKERA", "SLUMPAD", "BILDÄCK"];
    expect(wordList).toContain(word);
  });
});
