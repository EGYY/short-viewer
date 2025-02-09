import { atom } from "recoil";

export const players = atom({
  key: "player",
  default: {
    away_team: { id: 0, name: "", players_stat: [] },
    home_team: { id: 0, name: "", players_stat: [] },
    id: 0,
  },
});
