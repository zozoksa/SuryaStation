import { createContext, useContext, useState, useMemo, useCallback } from "react";
import type { ReactNode } from "react";
import type { Lang, Dir } from "../types";
import { translations } from "./translations";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: Dir;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: (k) => k,
  dir: "ltr",
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = useCallback((key: string) => translations[lang][key] ?? key, [lang]);
  const toggleLang = useCallback(() => setLang((l) => (l === "en" ? "ar" : "en")), []);

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, toggleLang, t, dir: lang === "ar" ? "rtl" : "ltr" }),
    [lang, t, toggleLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LangContext);
