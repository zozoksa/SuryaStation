import { useState } from "react";
import { Clock, Check } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { brandBg, gradients } from "../lib/theme";
import { BrandButton } from "../components/ui/BrandButton";
import { riderSteps, safetyFeatureKeys } from "../data/content";

export function RiderPage() {
  const { t } = useLang();
  const [fromLoc, setFromLoc] = useState("");
  const [toLoc, setToLoc] = useState("");
  const [fareResult, setFareResult] = useState<string | null>(null);

  const handleEstimate = () => {
    if (!fromLoc || !toLoc) return;
    const fare = Math.floor(Math.random() * 3000 + 1500);
    setFareResult(`${fare.toLocaleString()} SYP`);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a1a1a] px-6 py-24">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 30% 50%, #e8290b 0%, transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <h1 className="mb-4 font-extrabold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            {t("riderHero")}
          </h1>
          <p className="max-w-xl text-xl text-white/60">{t("riderSub")}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-14 text-center font-extrabold text-[#1a1a1a]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
            {t("howItWorks")}
          </h2>
          <div className="relative grid gap-10 sm:grid-cols-3">
            <div className="absolute inset-x-1/4 top-10 hidden h-px bg-gradient-to-r from-[#e8290b]/30 to-[#f97316]/30 sm:block" />
            {riderSteps.map(({ num, key, icon: Icon }) => (
              <div key={num} className="flex flex-col items-center text-center">
                <div style={brandBg} className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg">
                  <Icon size={24} />
                </div>
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[#e8290b]">
                  {String(num).padStart(2, "0")}
                </span>
                <h3 className="mb-3 text-xl font-bold text-[#1a1a1a]">{t(key)}</h3>
                <p className="max-w-[220px] text-sm leading-relaxed text-[#6b6b6b]">{t(`${key}d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fare estimator + safety */}
      <section className="bg-[#f7f5f3] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          {/* Fare estimator */}
          <div className="rounded-3xl border border-[#f0eeec] bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-[#1a1a1a]">{t("fareEst")}</h3>
            <div className="mb-6 space-y-4">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">{t("from")}</label>
                <input
                  value={fromLoc}
                  onChange={(e) => setFromLoc(e.target.value)}
                  placeholder="Damascus, Mazzeh"
                  className="w-full rounded-xl border border-transparent bg-[#f7f5f3] px-4 py-3 text-sm transition-all focus:border-[#e8290b]/30 focus:outline-none focus:ring-2 focus:ring-[#e8290b]/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">{t("to")}</label>
                <input
                  value={toLoc}
                  onChange={(e) => setToLoc(e.target.value)}
                  placeholder="Damascus, Old City"
                  className="w-full rounded-xl border border-transparent bg-[#f7f5f3] px-4 py-3 text-sm transition-all focus:border-[#e8290b]/30 focus:outline-none focus:ring-2 focus:ring-[#e8290b]/20"
                />
              </div>
            </div>
            <BrandButton onClick={handleEstimate} className="w-full !py-3.5">{t("estimate")}</BrandButton>
            {fareResult && (
              <div className="mt-5 rounded-2xl border border-[#e8290b]/15 bg-gradient-to-r from-[#e8290b]/5 to-[#f97316]/5 p-4">
                <p className="mb-1 text-xs font-semibold text-[#6b6b6b]">{t("approxFare")}</p>
                <p className="text-2xl font-extrabold text-[#e8290b]">{fareResult}</p>
              </div>
            )}
          </div>

          {/* Safety + scheduled */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#f0eeec] bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-[#1a1a1a]">{t("safetyFeatures")}</h3>
              <ul className="space-y-3">
                {safetyFeatureKeys.map((key) => (
                  <li key={key} className="flex items-center gap-3 text-sm text-[#4a4a4a]">
                    <span style={brandBg} className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                      <Check size={10} className="text-white" />
                    </span>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl p-8 text-white" style={{ background: gradients.brand }}>
              <Clock size={28} className="mb-4 opacity-90" />
              <h3 className="mb-2 text-xl font-bold">{t("scheduledRides")}</h3>
              <p className="text-sm leading-relaxed text-white/80">{t("scheduledDesc")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
