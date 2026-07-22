import { useState } from "react";
import { Clock, Car, Star, Shield, ArrowRight, UtensilsCrossed } from "lucide-react";
import type { Page } from "../types";
import { useLang } from "../i18n/LangContext";
import { brandBg, foodBg, gradients } from "../lib/theme";
import { BrandButton } from "../components/ui/BrandButton";
import { SectionTitle } from "../components/ui/SectionHeading";
import { services, safetyPoints } from "../data/content";

export function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const { t } = useLang();
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <div className="pt-16">
      {/* Hero — split screen */}
      <section className="grid min-h-[92vh] md:grid-cols-2">
        {/* Left: request card */}
        <div className="flex flex-col justify-center bg-white px-8 py-16 md:px-16 lg:px-20">
          <div className="mx-auto w-full max-w-sm md:mx-0">
            <span style={brandBg} className="mb-6 inline-block rounded-full px-3 py-1.5 text-xs font-semibold text-white">
              {t("heroBadge")}
            </span>
            <h1 className="mb-3 font-extrabold leading-tight text-[#1a1a1a]" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              {t("requestRide")}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-[#6b6b6b]">{t("heroSubtitle")}</p>

            <div className="rounded-3xl border border-[#f0eeec] bg-white p-6 shadow-xl shadow-black/5">
              <div className="mb-5 space-y-3">
                <div className="relative flex items-center">
                  <span className="absolute start-3.5 h-2.5 w-2.5 rounded-full bg-[#e8290b]" />
                  <input
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder={t("pickup")}
                    className="w-full rounded-xl border border-transparent bg-[#f7f5f3] py-3.5 pe-4 ps-10 text-sm placeholder-[#9a9a9a] transition-all focus:border-[#e8290b]/30 focus:outline-none focus:ring-2 focus:ring-[#e8290b]/20"
                  />
                </div>
                <div className="relative flex items-center">
                  <span className="absolute start-3.5 h-2.5 w-2.5 rounded-full border-2 border-[#1a1a1a]" />
                  <input
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    placeholder={t("dropoff")}
                    className="w-full rounded-xl border border-transparent bg-[#f7f5f3] py-3.5 pe-4 ps-10 text-sm placeholder-[#9a9a9a] transition-all focus:border-[#e8290b]/30 focus:outline-none focus:ring-2 focus:ring-[#e8290b]/20"
                  />
                </div>
              </div>
              <BrandButton className="w-full !py-3.5 text-base">{t("request")}</BrandButton>
              <button className="mt-2.5 flex w-full items-center justify-center gap-1.5 py-3 text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#e8290b]">
                <Clock size={14} />
                {t("scheduleRide")}
              </button>
            </div>
          </div>
        </div>

        {/* Right: map background */}
        <div className="relative hidden min-h-[92vh] overflow-hidden bg-gray-900 md:block">
          <img
            src="https://images.unsplash.com/photo-1561760041-f446e77d0885?w=1200&h=900&fit=crop&auto=format"
            alt="Aerial city view at night"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8290b]/40 via-transparent to-[#1a1a1a]/60" />
          <div className="absolute bottom-10 start-8 max-w-[220px] rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-3">
              <div style={brandBg} className="flex h-8 w-8 items-center justify-center rounded-full">
                <Car size={14} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#1a1a1a]">Ahmad K.</p>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={9} className="fill-[#f97316] text-[#f97316]" />
                  ))}
                  <span className="ms-1 text-[9px] text-[#6b6b6b]">4.98</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-[#6b6b6b]">
              Arriving in <span className="font-bold text-[#e8290b]">3 min</span>
            </p>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-3/4 rounded-full" style={{ background: gradients.brandFlat }} />
            </div>
          </div>
        </div>
      </section>

      {/* Drive CTA */}
      <section className="relative overflow-hidden px-6 py-20" style={{ background: gradients.night }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-4 font-extrabold leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              {t("driveTitle")}
            </h2>
            <p className="text-lg leading-relaxed text-white/60">{t("driveSub")}</p>
          </div>
          <BrandButton onClick={() => setPage("drive")} className="flex-shrink-0 !px-8 !py-4 text-base">
            {t("driveBtn")} <ArrowRight size={16} className="ms-2 inline" />
          </BrandButton>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f7f5f3] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-lg">
            <SectionTitle className="mb-3">{t("servicesTitle")}</SectionTitle>
            <p className="text-base text-[#6b6b6b]">{t("servicesSub")}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {services.map(({ icon: Icon, key, color }) => (
              <div
                key={key}
                className="group cursor-pointer rounded-3xl border border-[#f0eeec] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${color}22, ${color}44)`, color }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#1a1a1a]">{t(key)}</h3>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">{t(`${key}Sub`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food teaser */}
      <section className="relative overflow-hidden px-6 py-20" style={foodBg}>
        <div className="pointer-events-none absolute -end-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              <UtensilsCrossed size={13} /> {t("foodBadge")}
            </span>
            <h2 className="mb-3 font-extrabold leading-tight text-white" style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)" }}>
              {t("foodHero")} {t("foodHero2")}
            </h2>
            <p className="text-lg leading-relaxed text-white/80">{t("foodSub")}</p>
          </div>
          <BrandButton outline onClick={() => setPage("food")} className="flex-shrink-0 !px-8 !py-4 text-base">
            {t("learnMore")} <ArrowRight size={16} className="ms-2 inline" />
          </BrandButton>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <SectionTitle className="mb-3">{t("safetyTitle")}</SectionTitle>
            <p className="mb-10 text-lg text-[#6b6b6b]">{t("safetySub")}</p>
            <div className="space-y-6">
              {safetyPoints.map(({ icon: Icon, key }) => (
                <div key={key} className="flex items-start gap-4">
                  <div style={brandBg} className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white">
                    <Icon size={20} />
                  </div>
                  <p className="pt-2 text-sm leading-relaxed text-[#4a4a4a]">{t(key)}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setPage("safety")}
              className="group mt-10 flex items-center gap-1.5 text-sm font-semibold text-[#e8290b] transition-colors hover:text-[#f97316]"
            >
              {t("learnMore")}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
          <div className="relative h-[440px] overflow-hidden rounded-3xl bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1761486554787-89b2b4eb64ac?w=800&h=600&fit=crop&auto=format"
              alt="Premium black sedan on city street"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent" />
            <div className="absolute bottom-6 start-6 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur-sm">
              <Shield size={18} className="text-[#e8290b]" />
              <span className="text-xs font-semibold text-[#1a1a1a]">Verified Driver</span>
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
