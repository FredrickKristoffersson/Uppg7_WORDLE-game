import { describe, it, test, expect, jest } from "@jest/globals";
import getRandomWord from "./SecretWords";
import { renderHBS } from "./header";

test("if we get correct length of word back, when wordlength is 7", () => {
  const wordLength = 7;
  const word = getRandomWord(wordLength);
  expect(word.length).toBe(wordLength);
});

test("if we get correct length of word back, when wordlength is 6", () => {
  const wordLength = 6;
  const word = getRandomWord(wordLength);
  expect(word.length).toBe(wordLength);
});

test("if we get correct length of word back, when wordlength is 5", () => {
  const wordLength = 5;
  const word = getRandomWord(wordLength);
  expect(word.length).toBe(wordLength);
});

test("should call res.render with correct page and menu items", async () => {
  const res = {
    render: jest.fn(),
  };
  const page = "testPage";

  await renderHBS(res, page);

  expect(res.render).toHaveBeenCalledWith(page, {
    menuRoad: [
      { title: "WORDLE", address: "/" },
      { title: "ABOUT", address: "/about" },
      { title: "HIGHSCORE", address: "/highscore" },
    ],
  });
});
