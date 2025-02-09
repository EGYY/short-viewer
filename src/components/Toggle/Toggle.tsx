import { useState } from "react";
import { setDarkTheme } from "../../utils/setDarkTheme";
import { useRecoilState } from "recoil";
import { theme } from "../../atoms/theme";

export default function Toggle() {
  let checker = localStorage.theme === "light" ? true : false;
  const [enabled, setEnabled] = useState(checker);
  const [themes, setThemes] = useRecoilState(theme);
  const changeThemeHandler = () => {
    setDarkTheme();
    setEnabled(!enabled);
    const state = { theme: !enabled };
    setThemes(state);
  };
  const pos = enabled ? "left-0 bg-[#EBF1FF]" : "right-0 custom-inp";
  return (
    <div
      onClick={changeThemeHandler}
      className="z-0 relative w-[38px] h-[14px] lg:w-[165px] lg:h-[42px] dark:bg-white custom-inp rounded-full flex items-center"
    >
      <div
        className={`z-0 lg:w-[105px] transition-all h-full pl-[20px]  absolute ${pos} rounded-full flex items-center shadow-switch`}
      ></div>
      <div className="z-2 relative left-1 lg:left-3 w-[6px] h-[6px] lg:w-[27px] lg:h-[27px] custom-sper rounded-full"></div>
      <div className="z-2 bg-[#EBF1FF] w-[6px] h-[6px] lg:w-[27px] lg:h-[27px] absolute right-1 lg:right-5 rounded-full"></div>
    </div>
  );
}
