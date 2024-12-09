import { delimiters, delimiterType } from "./static-data";


// Helper function to optimize lookups (see getDelimiterType)
const delimiterLookup: Record<string, { type: delimiterType; use: "open" | "close" }> = {};
for (const [type, { open, close }] of Object.entries(delimiters)) {
  delimiterLookup[open] = { type: type as delimiterType, use: "open" };
  delimiterLookup[close] = { type: type as delimiterType, use: "close" };
}

export const getDelimiterType = (
  char: string
): { type: delimiterType; use: "open" | "close" }  | null => {
  return delimiterLookup[char] || null; // Return null if not found
};
