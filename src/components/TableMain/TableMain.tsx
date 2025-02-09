import { url } from "../../services/api";
import { useEffect, useMemo, useState } from "react";
import { positionArray } from "../../utils/constants";
// @ts-ignore
import { Spinner } from '../Spinner/Spinner.tsx';

interface TableMainProps {
  players: { id: number; name: string; players_stat: any[] };
  lastChild?: boolean;
  color?: string;
  colorText?: string;
  logo?: string;
  name?: string;
  typeSort?: string;
}

export default function TableMain({
  lastChild,
  players,
  color,
  colorText,
  logo,
  name,
  typeSort,
}: TableMainProps) {
  const [isLoad, setIsLoad] = useState(true);
  const { players_stat } = players;
  const playersArr = useMemo(() => {
    switch (typeSort) {
      case "MINS":
        return sortPlayers([...players_stat], "Minutes", "");
      case "MINS_asc":
        return sortPlayers([...players_stat], "Minutes", "asc");
      case "G":
        return sortPlayers([...players_stat], "Goals", "");
      case "G_asc":
        return sortPlayers([...players_stat], "Goals", "asc");
      case "AST":
        return sortPlayers([...players_stat], "Assists", "");
      case "AST_asc":
        return sortPlayers([...players_stat], "Assists", "asc");
      case "YC":
        return sortPlayers([...players_stat], "YC", "");
      case "YC_asc":
        return sortPlayers([...players_stat], "YC", "asc");
      case "RC":
        return sortPlayers([...players_stat], "RC", "");
      case "RC_asc":
        return sortPlayers([...players_stat], "RC", "asc");
      case "SH":
        return sortPlayers([...players_stat], "Shots", "");
      case "SH_asc":
        return sortPlayers([...players_stat], "Shots", "asc");
      case "SH+":
        return sortPlayers([...players_stat], "Shots on target", "");
      case "SH+_asc":
        return sortPlayers([...players_stat], "Shots on target", "asc");
      case "SH%":
        return sortPlayers([...players_stat], "Shots on target, %", "");
      case "SH%_asc":
        return sortPlayers([...players_stat], "Shots on target, %", "asc");
      case "OFF":
        return sortPlayers([...players_stat], "Offsides", "");
      case "OFF_asc":
        return sortPlayers([...players_stat], "Offsides", "asc");
      case "F":
        return sortPlayers([...players_stat], "Fouls", "");
      case "F_asc":
        return sortPlayers([...players_stat], "Fouls", "asc");
      case "FS":
        return sortPlayers([...players_stat], "Fouls on", "");
      case "FS_asc":
        return sortPlayers([...players_stat], "Fouls on", "asc");
      default:
        return players_stat;
    }
  }, [typeSort, players_stat]);

  setTimeout(() => { setIsLoad(false) }, 1300)

  function sortPlayers(players: any[], property: string, direction: string) {
    return players.sort((a: any, b: any) => {
      const aValue = Number(a.params[0][property]);
      const bValue = Number(b.params[0][property]);

      if (direction === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
  }

  return (
    <div className="grid grid-cols-[35px_1fr]">
      <div className="flex flex-col">
        <div
          style={{ backgroundColor: color }}
          className={`${lastChild ? "rounded-bl-[10px]" : ""} h-full ${playersArr.length > 0 && !isLoad ? "" : "min-h-[30em]"} relative`}
        >
          <img className="w-full" src={url + logo} alt="" />
          <p
            style={{ color: colorText }}
            className="text-[16px] font-[600] absolute top-[50%] left-[5px] rotate-180 test0f "
          >
            {name}
          </p>
        </div>
      </div>
      {isLoad ? <Spinner /> : <div className="h-full dark:bg-[#1B2436] relative">
        {playersArr.length > 0 ? <ul>
          {playersArr.map(({ id, name, number, params }) => (
            <PlayerItem
              key={id + " " + name}
              id={id}
              name={name}
              number={number}
              params={params}
            />
          ))}
        </ul> : <p className="text-[24px] text-center font-[500] absolute left-[50%] top-[50%] -translate-y-2/4 -translate-x-2/4">The line-ups will be updated shortly</p>}
      </div>}
    </div>
  );
}

interface PlayerItemProps {
  id: number;
  name: string;
  number: number;
  params: any[];
  isShow?: boolean;
}

const createArray = (obj: any, arr: any[]): any[] => {
  const tmp = arr.filter((item) => item.isShow).map((item) => addData(item));
  function addData(item: any) {
    switch (item.keys) {
      case "MINS":
        return { key: "MINS", value: obj["Minutes"] };
      case "G":
        return { key: "G", value: obj["Goals"] };
      case "AST":
        return { key: "AST", value: obj["Assists"] };
      case "YC":
        return { key: "YC", value: obj["YC"] };
      case "RC":
        return { key: "RC", value: obj["RC"] };
      case "SH":
        return { key: "SH", value: obj["Shots"] };
      case "SH+":
        return { key: "SH+", value: obj["Shots on target"] };
      case "SH%":
        return { key: "SH%", value: obj["Shots on target, %"] };
      case "OFF":
        return { key: "OFF", value: obj["Offsides"] };
      case "F":
        return { key: "F", value: obj["Fouls"] };
      case "FS":
        return { key: "FS", value: obj["Fouls on"] };
    }
  }

  return tmp;
};

const PlayerItem = ({ id, name, number, params }: PlayerItemProps) => {
  const [posititon] = useState(positionArray);
  const data = createArray(params[0], posititon);
  return (
    <li
      className={` grid grid-cols-[1fr_2fr] px-[15px] py-[2px] border-b border-[#6886BD] dark:text-white`}
    >
      <div className="flex gap-[25px]">
        <div className="font-[600] min-w-[20px]">{number}</div>
        <div className="flex items-center gap-[5px] w-full">{name}</div>
      </div>
      <ul className="min-w-[672px] w-full flex justify-between">
        {data.map((item, index) => (
          <li
            className={`flex justify-center items-center min-w-[50px] text-center ${!item.isShow ? "" : "hidden"
              }`}
            key={item + " " + index}
          >
            {Math.round(Number(item.value))}
          </li>
        ))}
      </ul>
    </li>
  );
};
