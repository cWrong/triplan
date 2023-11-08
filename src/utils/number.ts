import { Question } from "@/model/survey";

export default class NumberUtils {
  static splitArrayIntoPairs(arr: number[]): Question[] {
    if (arr.length % 2 !== 0) throw new Error("Array length is not even");

    const result: Question[] = [];

    for (let i = 0; i < arr.length; i += 2) {
      result.push({ first: arr[i], second: arr[i + 1] });
    }

    return result;
  }
}
