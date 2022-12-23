import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

// date-fns 테스트
export const date = new Date("2022-12-21");
console.log(format(date, "yyyy-MM-dd"));

export const fromNow = formatDistanceToNow(date, {
  addSuffix: true,
  locale: ko,
});
