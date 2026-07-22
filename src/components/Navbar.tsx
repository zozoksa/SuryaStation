import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import type { Page } from "../types";
import { useLang } from "../i18n/LangContext";
import { brandBg } from "../lib/theme";
import { BrandButton } from "./ui/BrandButton";

const NAV_KEYS: Page[] = ["ride", "drive", "safety", "food", "app"];

export function Navbar({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const { toggleLang, t, dir } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (p: Page) => {
    setPage(p);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <button onClick={() => go("home")} className="flex flex-shrink-0 items-center gap-2">
          <div
            style={brandBg}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-white"
          >
            SS
          </div>
          <span className={`flex flex-col leading-none ${dir === "rtl" ? "items-end" : "items-start"}`}>
            <span className="text-sm font-bold text-[#1a1a1a]">{t("brand")}</span>
            <span className="text-[10px] text-[#6b6b6b]">{t("brandSub")}</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => go(key)}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#e8290b] ${
                page === key ? "text-[#e8290b]" : "text-[#4a4a4a]"
              }`}
            >
              {t(key)}
              {key === "food" && (
                <span className="rounded-full bg-[#1f8a54]/10 px-1.5 py-0.5 text-[9px] font-bold text-[#1f8a54]">
                  {t("foodBadge")}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium text-[#4a4a4a] transition-colors hover:text-[#e8290b]"
          >
            <Globe size={15} />
            {t("langToggle")}
          </button>
          <button className="px-3 py-2 text-sm font-medium text-[#4a4a4a] transition-colors hover:text-[#1a1a1a]">
            {t("login")}
          </button>
          <BrandButton className="!px-4 !py-2 text-sm">{t("signup")}</BrandButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-[#f0eeec] bg-white px-6 py-4 md:hidden">
          {NAV_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => go(key)}
              className={`flex items-center gap-2 text-sm font-medium ${dir === "rtl" ? "text-right" : "text-left"} ${
                page === key ? "text-[#e8290b]" : "text-[#4a4a4a]"
              }`}
            >
              {t(key)}
              {key === "food" && (
                <span className="rounded-full bg-[#1f8a54]/10 px-1.5 py-0.5 text-[9px] font-bold text-[#1f8a54]">
                  {t("foodBadge")}
                </span>
              )}
            </button>
          ))}
          <div className="flex items-center gap-3 border-t border-[#f0eeec] pt-2">
            <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-medium text-[#4a4a4a]">
              <Globe size={14} /> {t("langToggle")}
            </button>
            <BrandButton className="!px-4 !py-2 flex-1 text-sm">{t("signup")}</BrandButton>
          </div>
        </div>
      )}
    </nav>
  );
}
