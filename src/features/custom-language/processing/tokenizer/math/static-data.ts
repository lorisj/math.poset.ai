// Static data, meaning stuff that is not specific to a user.
export type delimiterType = "curly" | "square" | "round" | "angle";

export const delimiters: {
  [key in delimiterType]: { open: string; close: string };
} = {
  curly: {
    open: "{",
    close: "}",
  },
  square: {
    open: "[",
    close: "]",
  },
  round: {
    open: "(",
    close: ")",
  },
  angle: {
    open: "<",
    close: ">",
  },
} as const;

export const combinationTypes = ["_", "^"];

