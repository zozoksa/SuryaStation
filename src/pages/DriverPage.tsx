import { useState } from "react";
import type { CSSProperties } from "react";
import { useLang } from "../i18n/LangContext";
import { brandBg, brand } from "../lib/theme";
import { BrandButton } from "../components/ui/BrandButton";
import { cityRates, flexBenefitKeys, regSteps } from "../data/content";

export function DriverPage() {
  const { t } = useLang();
  const [hours, setHours] = useState(20);
  const [city, setCity] = useState("damascus");
  const [income, setIncome] = useState<number | null>(null);
  const [formStep, setFormStep] = useState(0);

  const calcIncome = () => {
    const rate = cityRates[city];
    setIncome(Math.round(hours * 4.3 * rate * 0.85));
  };

  const gradientText: CSSProperties = {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    background: `linear-gradient(90deg, ${brand.orange}, ${brand.red})`,
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1490650404312-a2175773bbf5?w=1400&h=700&fit=crop&auto=format"
          alt="Driver in city"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <h1 className="mb-4 font-extrabold leading-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
            {t("driverHero")}
            <br />
            <span style={gradientText}>{t("driverHero2")}</span>
          </h1>
          <p className="max-w-md text-lg text-white/60">{t("driverSub")}</p>
        </div>
      </section>

      {/* Earnings calculator */}
      <section className="bg-[#f7f5f3] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-10 font-extrabold text-[#1a1a1a]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
              {t("earningsTitle")}
            </h2>
            <div className="mb-8 space-y-6">
              <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">
                  {t("hoursPerWeek")}: <span className="text-[#e8290b]">{hours}h</span>
                </label>
                <input
                  type="range" min={5} max={60} value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#f0eeec]"
                  style={{ accentColor: brand.red }}
                />
                <div className="mt-1 flex justify-between text-xs text-[#9a9a9a]">
                  <span>5h</span><span>60h</span>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">{t("cityLabel")}</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full cursor-pointer rounded-xl border border-[#f0eeec] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8290b]/20"
                >
                  <option value="damascus">{t("damascus")}</option>
                  <option value="aleppo">{t("aleppo")}</option>
                  <option value="homs">{t("homs")}</option>
                </select>
              </div>
            </div>
            <BrandButton onClick={calcIncome} className="!px-8 !py-3.5">{t("calcBtn")}</BrandButton>
            {income !== null && (
              <div className="mt-6 rounded-2xl border border-[#e8290b]/20 bg-white p-5 shadow-sm">
                <p className="mb-1 text-xs font-semibold text-[#6b6b6b]">{t("estIncome")}</p>
                <p className="text-3xl font-extrabold text-[#e8290b]">
                  {income.toLocaleString()} <span className="text-lg">SYP / mo</span>
                </p>
                <p className="mt-1 text-xs text-[#9a9a9a]">
                  {cityRates[city] * 0.85} SYP {t("perTrip")}
                </p>
              </div>
            )}
          </div>

          {/* Flexibility benefits */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-[#1a1a1a]">{t("flexTitle")}</h3>
            <div className="space-y-4">
              {flexBenefitKeys.map((key, i) => (
                <div key={key} className="flex items-start gap-4 rounded-2xl border border-[#f0eeec] bg-white p-4">
                  <div style={brandBg} className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="pt-1 text-sm leading-relaxed text-[#4a4a4a]">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration steps */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-extrabold text-[#1a1a1a]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
            {t("registerTitle")}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {regSteps.map(({ key, icon: Icon }, i) => {
              const active = formStep === i;
              return (
                <button
                  key={key}
                  onClick={() => setFormStep(i)}
                  className={`rounded-3xl border-2 p-8 text-start transition-all duration-200 ${
                    active
                      ? "border-[#e8290b] bg-gradient-to-br from-[#e8290b]/5 to-[#f97316]/5 shadow-lg"
                      : "border-[#f0eeec] hover:border-[#e8290b]/30"
                  }`}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={active ? { ...brandBg, color: "white" } : { background: brand.line, color: brand.faint }}
                  >
                    <Icon size={20} />
                  </div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#e8290b]">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4 className="mb-1 text-lg font-bold text-[#1a1a1a]">{t(key)}</h4>
                  <p className="text-sm text-[#6b6b6b]">{t(`${key}Sub`)}</p>
                </button>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <BrandButton className="!px-12 !py-4 text-base">{t("applyNow")}</BrandButton>
          </div>
        </div>
      </section>
    </div>
  );
}
