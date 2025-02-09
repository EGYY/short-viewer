import { atom } from "recoil";

export const possession = atom({
  key: "possession",
  default: [{events: [], half: 1}],
});