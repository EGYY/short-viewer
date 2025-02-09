import { atom } from "recoil";

export const teams = atom({
  key: "team",
  default: {
    away_team: {id: 0, name: '', stat: []},
    home_team: {id: 0, name: '', stat: []},
    id: 0
  },
});