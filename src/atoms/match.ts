import { atom } from "recoil";

export const match = atom({
  key: "match",
  default: {
    analyse_status: 0,
    away_team: { score: 0, logo: "", color: "", color_number: "", name: "" },
    date: {},
    home_team: { score: 0, logo: "", color: "", color_number: "", name: "" },
    id: 0,
    season: {
      title: null,
    },
    status: null,
  },
});
