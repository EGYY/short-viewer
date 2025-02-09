import { useTranslation } from "react-i18next";
import { positionArray } from "../../utils/constants";
import Dot from "../icons/Dot/Dot";
// import Eye from "../icons/Eye";

interface TableSubheaderProps {
  handleChangeSort: Function;
}

export default function TableSubheader({
  handleChangeSort,
}: TableSubheaderProps) {
  const { t } = useTranslation();
  const handleClickSort = (item: any, array: any[]) => {
    if (item.isAsc) {
      handleChangeSort(item.keys);
      item.isAsc = !item.isAsc;
    } else {
      handleChangeSort(item.keysAsc);
      item.isAsc = !item.isAsc;
    }
  };
  return (
    <div className="min-w-[850px] lg:min-w-full grid grid-cols-[1fr_2fr] bg-[#6886BD66] dark:bg-[#B4EB5466] pl-[50px] py-[7px]">
      <div className="flex items-center gap-[25px] font-[600] dark:text-white mr-[40px]">
        <div>№</div>
        <div className="flex items-center gap-[5px] capitalize">
          {t("names")}
          {/* Names <Eye /> */}
        </div>
      </div>
      <ul className="min-w-[672px] w-full flex justify-between">
        {positionArray.map((item) => (
          <li
            className={`${
              item.isShow ? "" : "hidden"
            } flex items-center gap-[5px] min-w-[45px] max-w-[50px] dark:text-white cursor-pointer`}
            key={item.keys}
            onClick={() => handleClickSort(item, positionArray)}
            title={t(item.keys)}
          >
            {item.keys} <Dot />
          </li>
        ))}
      </ul>
    </div>
  );
}
