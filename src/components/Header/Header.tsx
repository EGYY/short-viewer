import { useRecoilValue } from "recoil";
import Logo from "../../images/Logo.svg";
import Logo2 from "../../images/Logo2.svg";
import LangSwitch from "../LangSwitch/LangSwitch";
import Toggle from "../Toggle/Toggle";
import { teams } from "../../atoms/team";
import { match } from "../../atoms/match";
import { theme } from "../../atoms/theme";
import { formatDate } from "../../utils/formatDate";
import { RefreshSettings } from "../RefreshSettings/RefreshSettings";

export default function Header() {
  const team = useRecoilValue(teams);
  const logos = useRecoilValue(theme);
  const matches = useRecoilValue(match);
  const { date, away_team, home_team } = matches;
  const d = new Date(String(date));
  const matchDate = formatDate(d);
  const homeScore = home_team.score;
  const awayScore = away_team.score;
  const themes = logos.theme ? Logo : Logo2;

  return (
    <header className="flex justify-between items-center px-[10px] lg:px-[50px] dark:bg-[#1B2436] bg-[#EAD399] h-[95px] shadow-header">
      <div className="h-full">
        {!window.location.pathname.includes('sponsor') && <img className="h-full" src={themes} alt="" />}
      </div>
      <div className="flex">
        <div className="text-right px-2 border-r dark:border-r-white border-r-black dark:text-[#EBF1FF] text-gray text-[7px] lg:text-[16px]">
          <p>{matchDate}</p>
          <p>{matches.season.title}</p>
          <p>TIME</p>
        </div>
        <div className="dark:text-white flex items-center gap-[25px] px-2 text-[12px] lg:text-[32px] font-[700]">
          <div>{team.home_team.name}</div>
          <div className="text-gray-blue dark:text-[#B4EB54] min-w-[30px]">
            {homeScore} : {awayScore}
          </div>
          <div>{team.away_team.name}</div>
        </div>
      </div>
      <div className="flex items-center gap-[10px] relative">
        <RefreshSettings />
        <Toggle />
        <LangSwitch />
      </div>
    </header>
  );
}
