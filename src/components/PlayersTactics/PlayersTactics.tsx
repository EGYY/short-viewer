import { useEffect, useRef, useState } from "react";
import TableMain from "../TableMain/TableMain";
import TableSubheader from "../TableSubheader/TableSubheader";
import Gear from "../icons/Gear/Gear";
import { PlayerService } from "../../services/Player.Services";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { players } from "../../atoms/player";
import { match } from "../../atoms/match";
import PlayerSettings from "../PlayersSettings/PlayersSettings";
import { useTranslation } from "react-i18next";
import { time } from "../../atoms/time";

export default function PlayersTactics() {
  let { id } = useParams();
  const [isShow, setIsShow] = useState(false);
  const { t } = useTranslation();
  const [playerData, setPlayersData] = useRecoilState(players);
  const [matches, setMatches] = useRecoilState(match);
  const { analyse_status } = useRecoilValue(match);
  const times = useRecoilValue(time);
  const [currSortHome, setCurrSortHome] = useState("");
  const [currSortAway, setCurrSortAway] = useState("");
  const { away_team, home_team } = playerData;
  const homeColor = matches.home_team.color || "#C90F32";
  const awayColor = matches.away_team.color || "#00448B";
  const homeColorText = matches.home_team.color_number || "#000000";
  const awayColorText = matches.away_team.color_number || "#000000";
  const homeImage = matches.home_team.logo;
  const awayImage = matches.away_team.logo;
  const homeName = matches.home_team.name;
  const awayName = matches.away_team.name;
  const intervalRef = useRef<NodeJS.Timer | number | null>(null);
  const matchData = useRecoilValue(match);
  const fetchData = async () => {
    const response = await PlayerService.getPlayer(Number(id));
    const newData = await response.data;
    setPlayersData(newData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (analyse_status === 2){
      const interval = setInterval(fetchData, times.time);
      intervalRef.current = interval;
    }
  },[analyse_status])
  useEffect(() => {
    if (analyse_status !== 2 && analyse_status !== 0) {
      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current as NodeJS.Timer);
        }
      };
    }
  }, [matchData]);
  const headlerClick = () => {
    setIsShow(!isShow);
  };

  const handleChangeSortHome = (sort: string) => {
    setCurrSortHome(sort);
  };
  const handleChangeSortAway = (sort: string) => {
    setCurrSortAway(sort);
  };

  return (
    <div className="shadow-teams rounded-[10px]">
      <div>
        <div className="bg-[#6886BD] dark:bg-[#B4EB54] py-[7px] rounded-t-[10px] text-white dark:text-black text-center underline text-[20px] relative">
          <p>{t("players").toLocaleUpperCase()}</p>
          <div
            onClick={headlerClick}
            className="absolute top-[10px] right-[10px] cursor-pointer"
          >
            <Gear color={"#77abff"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col relative">
        <div className="overflow-x-auto">
          <TableSubheader handleChangeSort={handleChangeSortHome} />
          <TableMain
            logo={homeImage}
            color={homeColor}
            colorText={homeColorText}
            players={home_team || { id: 0, name: "", players_stat: [{}] }}
            name={homeName}
            typeSort={currSortHome}
          />
        </div>
        <div className="overflow-x-auto">
          <TableSubheader handleChangeSort={handleChangeSortAway} />
          <TableMain
            lastChild
            logo={awayImage}
            color={awayColor}
            colorText={awayColorText}
            players={away_team || { id: 0, name: "", players_stat: [{}] }}
            name={awayName}
            typeSort={currSortAway}
          />
        </div>
        <PlayerSettings handleClick={headlerClick} isShow={isShow} />
      </div>
    </div>
  );
}
