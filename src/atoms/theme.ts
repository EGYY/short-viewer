import { atom } from "recoil";

export const theme = atom({
  key: "theme",
  default: {
    theme: localStorage.theme === "dark" ? false : true,
  },
});
