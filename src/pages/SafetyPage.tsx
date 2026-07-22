import { Shield, Check } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { brandBg, gradients } from "../lib/theme";
import { safetyPillars, emergencyChecklist, team } from "../data/content";

export function SafetyPage() {
  const { t } = useLang();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-28" style={{ background: gradients.nightSafety }}>
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 70% 50%, #e8290b 0%, transparent 65%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f97316]">
              <Shield size={14} /> Safety First
            </span>
            <h1 className="mb-5 font-extrabold leading-tight text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              {t("safetyPageHero")}
            </h1>
            <p className="text-xl text-white/60">{t("safetyPageSub")}</p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {safetyPillars.map(({ titleKey, descKey, icon: Icon, color }) => (
            <div key={titleKey} className="group rounded-3xl border border-[#f0eeec] p-8 transition-all duration-300 hover:shadow-xl">
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-transform group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${color}dd, ${color}99)` }}
              >
                <Icon size={28} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-[#1a1a1a]">{t(titleKey)}</h3>
              <p className="text-sm leading-relaxed text-[#6b6b6b]">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency showcase */}
      <section className="bg-[#f7f5f3] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-5 font-extrabold text-[#1a1a1a]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)" }}>
              {t("emergencyTitle")}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-[#6b6b6b]">{t("emergencyDesc")}</p>
            <div className="space-y-4">
              {emergencyChecklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span style={brandBg} className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <Check size={10} className="text-white" />
                  </span>
                  <p className="text-sm text-[#4a4a4a]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mock with SOS */}
          <div className="flex justify-center">
            <div className="relative h-[420px] w-52 rounded-[3rem] bg-[#1a1a1a] p-3 shadow-2xl shadow-black/30">
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#1a1a1a]">
                <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#2a2a2a]" />
                <div className="p-6 text-center">
                  <p className="mb-2 text-xs text-white/50">Syria Station</p>
                  <p className="mb-8 text-sm font-bold text-white">Trip in progress</p>
                  <button
                    className="flex h-28 w-28 animate-pulse items-center justify-center rounded-full text-lg font-black text-white shadow-2xl shadow-red-500/50 motion-reduce:animate-none"
                    style={{ background: "linear-gradient(135deg, #e8290b, #dc2626)" }}
                  >
                    SOS
                  </button>
                  <p className="mt-6 text-xs text-white/40">Hold 2s to activate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="mb-3 font-extrabold text-[#1a1a1a]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
              {t("teamTitle")}
            </h2>
            <p className="mx-auto max-w-md text-[#6b6b6b]">{t("teamSub")}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(({ name, role, initials }) => (
              <div key={name} className="group rounded-3xl border border-[#f0eeec] p-8 text-center transition-all duration-300 hover:border-[#e8290b]/20 hover:shadow-lg">
                <div style={brandBg} className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-bold text-white transition-transform group-hover:scale-105">
                  {initials}
                </div>
                <h4 className="mb-1 font-bold text-[#1a1a1a]">{name}</h4>
                <p className="text-sm text-[#6b6b6b]">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
