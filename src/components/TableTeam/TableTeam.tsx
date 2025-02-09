import { useEffect, useState } from "react";
import TableTeamRow from "../TableTeamRow/TableTeamRow";

interface TableTeamProps {
  array: any[];
}

export default function TableTeam({ array }: TableTeamProps) {
  const [data, setData] = useState(array);

  useEffect(() => {
    setData(array);
  }, [array]);
  return (
    <table className="w-full text-center dark:text-white dark:bg-[#1B2436]">
      <tbody>
        {data.map((item) => (
          <TableTeamRow
            key={item.key}
            params={item.key}
            team1={item.home}
            team2={item.away}
            isShow={item.isShow}
          />
        ))}
      </tbody>
    </table>
  );
}
