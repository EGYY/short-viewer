import { atom } from "recoil";

export const teamSettings: any = atom({
  key: "teamSettings",
  default: {
    settings: [{ key: "", home: "", away: "", isShow: false }],
  },
});
