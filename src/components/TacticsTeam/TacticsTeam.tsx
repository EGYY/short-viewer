import { useRecoilState, useRecoilValue } from "recoil";
import Gear from "../icons/Gear/Gear";
import { useEffect, useRef, useState } from "react";
import { TeamService } from "../../services/Team.Service";
import { teams } from "../../atoms/team";
import { getStatsArray } from "../../utils/getStatsArray";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TeamsSettings from "../TeamsSettings/TeamsSettings";
import { match } from "../../atoms/match";
import { url } from "../../services/api";
import TableTeam from "../TableTeam/TableTeam";
import { time } from "../../atoms/time";

export default function TecticsTeam() {
  let { id } = useParams();
  const [isShow, setIsShow] = useState(false);
  const [teamsData, setTeamsData] = useRecoilState(teams);
  const [settings, setSettings] = useState([]) as any;
  const times = useRecoilValue(time);
  const matches = useRecoilValue(match);
  const { t } = useTranslation();
  const { analyse_status } = useRecoilValue(match);
  const matchData = useRecoilValue(match);
  const intervalRef = useRef<NodeJS.Timer | number | null>(null);

  const { away_team, home_team } = teamsData;
  const statArray = getStatsArray(home_team.stat[0], away_team.stat[0]);
  const headlerClick = () => {
    setIsShow(!isShow);
  };

  const [sponsors, setSponsors] = useState<{ name: string, url: string }[]>([]);

  const testLinks = [
    { name: '1', url: "https://i.ibb.co/KcDt7h0w/On-Sport-Logo.png" },
    { name: '2', url: "https://i.ibb.co/1JYg5CzW/Scoutium-logo.png" },
  ]

  useEffect(() => {
    setSettings(statArray);
  }, [teamsData]);

  useEffect(() => {
    if (window.location.pathname.includes('sponsor')) {
      const getSponsors = () => {
        fetch('https://script.google.com/macros/s/AKfycbwqe_bhf16v2qyjpF3y1-yZouIerq2JN--7bOk-gMaUoSj1L-UgNQ1SiIOjs3LRcHk8/exec')
          .then((response) => response.json())
          .then((data) => {
            setSponsors(data);
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .catch(() => {
            setSponsors([]);
          })
      }
      getSponsors();
    }
  }, [])

  const fetchData = async () => {
    const response = await TeamService.getTeam(Number(id));
    const newData = await response.data;
    setTeamsData(newData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (analyse_status === 2) {
      const interval = setInterval(fetchData, times.time);
      intervalRef.current = interval;
    }
  }, [analyse_status])
  useEffect(() => {
    if (analyse_status !== 2 && analyse_status !== 0) {
      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current as NodeJS.Timer);
        }
      };
    }
  }, [matchData]);

  return (

    <>
      <div className="flex-1 rounded-[10px] shadow-teams">
        <div>
          <div className="bg-[#EAD399] dark:bg-[#B4EB54] py-[7px] px-[24px] rounded-t-[10px] text-center underline text-[20px] relative">
            {t("teams").toLocaleUpperCase()}
            <div
              onClick={headlerClick}
              className="absolute top-[10px] right-[10px] cursor-pointer"
            >
              <Gear color={"#917a36"} />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-around bg-[#EAD39966] dark:bg-[#B4EB5491] dark:text-white py-[7px]">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[30px] h-[35px]"
                src={url + matches.home_team.logo}
                alt=""
              />
              <p>{home_team.name}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[30px] h-[35px]"
                src={url + matches.away_team.logo}
                alt=""
              />
              <p>{away_team.name}</p>
            </div>
          </div>
          <TableTeam array={settings} />


          <TeamsSettings
            changeState={setSettings}
            isShow={isShow}
            data={statArray}
            changeIsShow={headlerClick}
          />
        </div>

      </div>
      {window.location.pathname.includes('sponsor') && (
        <div className={'flex  flex-wrap gap-3'}>
          {sponsors.map((image, idx) => {
            return (
              <img
                key={`${image.name}-${idx}`}
                className={'max-h-[50px] max-w-[200px] object-contain'}
                alt={image.name}
                src={image.url}
              />
            )
          })}
        </div>
      )}
    </>
  );
}
