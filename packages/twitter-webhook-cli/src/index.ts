import { sum } from "twitter-webhook";

export const sumThenDouble = (a: number, b: number) => {
  if ("development" === process.env.NODE_ENV) {
    console.log("boop");
  }
  return 2 * sum(a, b);
};
