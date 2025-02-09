import { atom } from "recoil";
export const valuesRefresh = [
  {time: 15000, name: 'Every 15 second'},
  {time: 60000, name: 'Every minute'},
  {time: 300000, name: 'Every 5 minutes'},
]

export const time = atom({
  key: "time",
  default: {
    time: localStorage.getItem('time') ? JSON.parse(localStorage.getItem('time')!).time : valuesRefresh[0].time,
    name: localStorage.getItem('time') ? JSON.parse(localStorage.getItem('time')!).name : valuesRefresh[0].name
  },
});
