import { useState } from "react";
import Triangle from "../icons/Triangle/Triangle";
import { useTranslation } from "react-i18next";
import { LexiconService } from "../../services/Lexicon.Service";

const lang = [
  {
    language: "en",
    text: "EN",
  },
  {
    language: "cn",
    text: "CN",
  },
  {
    language: "sp",
    text: "ESP",
  },
];

export default function LangSwitch() {
  const [state, setState] = useState(false);
  const [language, setLanguage] = useState(lang[0]);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng.language);
    setLanguage(lng);
    const fetchLexics = async () => {
      const response = await LexiconService.getLexic(localStorage.getItem("i18nextLng") || 'en');
      const newData = await response.data;
      localStorage.setItem('lexics', JSON.stringify(newData))
    }
    fetchLexics();
  };
  return (
    <div
      onClick={() => setState(!state)}
      className={`${
        state ? "relative lg:top-10" : "h-[25px] lg:h-[60px]"
      } overflow-hidden bg-[#EBF1FF] lg:w-[130px] 
       gap-[5px]  flex items-center justify-center rounded-[10px] z-30 min-w-[50px]`}
    >
      <div className=" font-[600] h-full text-[10px] lg:text-[32px] flex flex-col justify-center items-center">
        {state ? (
          lang.map((item) => (
            <p
              key={item.text}
              onClick={() => changeLanguage(item)}
              className="cursor-pointer lg:px-[20px] "
            >
              {t(item.text)}
            </p>
          ))
        ) : (
          <p>{String(localStorage.i18nextLng).toLocaleUpperCase()}</p>
        )}
      </div>
      <div className={`${state ? "hidden" : ""} `}>
        <Triangle />
      </div>
    </div>
  );
}
