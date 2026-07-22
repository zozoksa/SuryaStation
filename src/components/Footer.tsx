import { Globe } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { brandBg } from "../lib/theme";
import { socialIcons, footerColumns } from "../data/content";

export function Footer() {
  const { t, toggleLang } = useLang();

  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-2 gap-10 border-b border-white/10 pb-12 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div
                style={brandBg}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-white"
              >
                SS
              </div>
              <span className="text-sm font-bold text-white">{t("brand")}</span>
            </div>
            <p className="max-w-[240px] text-sm leading-relaxed text-white/40">{t("footerTagline")}</p>
            <div className="mt-6 flex items-center gap-4">
              {socialIcons.map((Icon, i) => (
                <button
                  key={i}
                  aria-label="Social link"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-[#e8290b]"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(({ titleKey, linkKeys }) => (
            <div key={titleKey}>
              <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/60">{t(titleKey)}</p>
              <ul className="space-y-3">
                {linkKeys.map((key) => (
                  <li key={key}>
                    <button className="text-sm text-white/50 transition-colors hover:text-white">{t(key)}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">{t("rights")}</p>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white/70"
          >
            <Globe size={12} />
            {t("langToggle")}
          </button>
        </div>
      </div>
    </footer>
  );
}
