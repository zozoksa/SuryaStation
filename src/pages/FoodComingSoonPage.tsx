import { useState } from "react";
import { UtensilsCrossed, Check, ArrowRight, MapPin } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { foodBg, gradients, food } from "../lib/theme";
import { foodCategories, foodReasons } from "../data/content";

export function FoodComingSoonPage() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    // Very light validation — real submission would hit the waitlist API.
    if (/^\S+@\S+\.\S+$/.test(email)) setJoined(true);
  };

  return (
    <div className="pt-16">
      {/* Hero + waitlist */}
      <section className="relative overflow-hidden px-6 py-28" style={foodBg}>
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute -start-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -end-10 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
              <UtensilsCrossed size={14} /> {t("foodBadge")}
            </span>
            <h1 className="mb-5 font-extrabold leading-tight text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
              {t("foodHero")} <span className="opacity-90">{t("foodHero2")}</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-white/85">{t("foodSub")}</p>

            <p className="mt-8 flex items-center gap-2 text-sm font-medium text-white/80">
              <MapPin size={15} /> {t("foodLaunchNote")}
            </p>
          </div>

          {/* Waitlist card */}
          <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-black/20">
            {joined ? (
              <div className="py-6 text-center">
                <div style={foodBg} className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-white">
                  <Check size={28} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#1a1a1a]">{t("foodJoined")}</h3>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">{t("foodJoinedDesc")}</p>
              </div>
            ) : (
              <>
                <h3 className="mb-2 text-xl font-bold text-[#1a1a1a]">{t("foodNotifyTitle")}</h3>
                <p className="mb-6 text-sm leading-relaxed text-[#6b6b6b]">{t("foodNotifyDesc")}</p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                  type="email"
                  placeholder={t("foodEmailPlaceholder")}
                  className="mb-3 w-full rounded-xl border border-[#f0eeec] bg-[#f7f5f3] px-4 py-3.5 text-sm transition-all focus:border-[#1f8a54]/40 focus:outline-none focus:ring-2 focus:ring-[#1f8a54]/20"
                />
                <button
                  onClick={handleJoin}
                  style={foodBg}
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-base font-semibold text-white shadow-lg shadow-green-700/20 transition-all hover:opacity-90 active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f8a54]/40"
                >
                  {t("foodNotifyBtn")} <ArrowRight size={16} />
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-14 text-center font-extrabold text-[#1a1a1a]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
            {t("foodWhatTitle")}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {foodCategories.map(({ icon: Icon, titleKey, descKey }) => (
              <div
                key={titleKey}
                className="group rounded-3xl border border-[#f0eeec] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1f8a54]/25 hover:shadow-xl"
              >
                <div style={foodBg} className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-white transition-transform group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#1a1a1a]">{t(titleKey)}</h3>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why — powered by the fleet */}
      <section className="bg-[#f7f5f3] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: food.green }}>
              {t("foodBadge")}
            </span>
            <h2 className="mb-8 font-extrabold text-[#1a1a1a]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)" }}>
              {t("foodWhyTitle")}
            </h2>
            <div className="space-y-4">
              {foodReasons.map(({ icon: Icon, key }) => (
                <div key={key} className="flex items-start gap-4 rounded-2xl border border-[#f0eeec] bg-white p-4">
                  <div style={foodBg} className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-white">
                    <Icon size={17} />
                  </div>
                  <p className="pt-1.5 text-sm text-[#4a4a4a]">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Order-tracking phone mock */}
          <div className="flex justify-center">
            <div className="relative h-[440px] w-56 rounded-[3rem] bg-[#1a1a1a] p-3 shadow-2xl shadow-black/30">
              <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.5rem] bg-[#0f120f]">
                <div className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#2a2a2a]" />
                <div className="h-40 w-full" style={{ background: gradients.food }} />
                <div className="flex-1 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div style={foodBg} className="flex h-9 w-9 items-center justify-center rounded-full">
                      <UtensilsCrossed size={15} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Abu Kamal Shawarma</p>
                      <p className="text-[10px] text-white/50">Order #4821</p>
                    </div>
                  </div>
                  <p className="mb-2 text-[11px] text-white/60">
                    On the way · <span className="font-bold text-[#7bb662]">12 min</span>
                  </p>
                  <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full" style={{ background: gradients.food }} />
                  </div>
                  <div className="space-y-2.5">
                    {["Order confirmed", "Preparing your food", "Driver picked up"].map((s) => (
                      <div key={s} className="flex items-center gap-2 text-[11px] text-white/70">
                        <span style={foodBg} className="flex h-4 w-4 items-center justify-center rounded-full">
                          <Check size={9} className="text-white" />
                        </span>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
