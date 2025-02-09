import { useTranslation } from "react-i18next";
import { secondsToTime } from "../../utils/secondsToTime";

interface TableRowProps {
  params: string;
  team1: number | string;
  team2: number | string;
  isShow: boolean;
}

export default function TableTeamRow({
  params,
  team1,
  team2,
  isShow,
}: TableRowProps) {
  const { t } = useTranslation();
  if (params === "Possession time") {
    team1 = secondsToTime(team1);
    team2 = secondsToTime(team2);
  }
  if (params === "Possession, %") {
    team1 = Math.round(Number(team1));
    team2 = Math.round(Number(team2));
  }
  return (
    <tr
      className={`${
        isShow ? "" : "hidden"
      } border-b border-[#EAD399] dark:border-[#B4EB54]`}
    >
      <td className="w-[100px]">{team1}</td>
      <td>{t(params)}</td>
      <td className="w-[100px]">{team2}</td>
    </tr>
  );
}
