import { useState } from "react";
import { Download, ChevronDown, Check, Mail } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { brandBg, gradients } from "../lib/theme";
import { BrandButton } from "../components/ui/BrandButton";
import { faqKeys, appStats, contactItems } from "../data/content";

export function AppPage() {
  const { t } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (name && email && message) setSent(true);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="overflow-hidden bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <h1 className="mb-5 font-extrabold leading-tight text-[#1a1a1a]" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              {t("appHero")}
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-[#6b6b6b]">{t("appSub")}</p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-2xl bg-[#1a1a1a] px-6 py-3.5 text-white shadow-lg transition-colors hover:bg-[#2a2a2a]">
                <Download size={18} />
                <span className="text-start">
                  <span className="block text-[9px] leading-none opacity-70">Download on the</span>
                  <span className="block text-sm font-bold leading-none">App Store</span>
                </span>
              </button>
              <button className="flex items-center gap-3 rounded-2xl border-2 border-[#1a1a1a] px-6 py-3.5 text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white">
                <Download size={18} />
                <span className="text-start">
                  <span className="block text-[9px] leading-none opacity-70">Get it on</span>
                  <span className="block text-sm font-bold leading-none">Google Play</span>
                </span>
              </button>
            </div>
            <div className="mt-10 flex items-center gap-6">
              {appStats.map(({ val, label }) => (
                <div key={label}>
                  <p className="text-2xl font-extrabold text-[#e8290b]">{val}</p>
                  <p className="text-xs text-[#6b6b6b]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="relative h-[520px] w-64 rounded-[3.5rem] bg-[#1a1a1a] p-3.5 shadow-2xl shadow-black/20">
              <div className="relative h-full w-full overflow-hidden rounded-[3rem] bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1691256676376-357c3aa66c89?w=600&h=1000&fit=crop&auto=format"
                  alt="Syria Station mobile app"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
                <div className="absolute left-1/2 top-4 z-10 h-1.5 w-20 -translate-x-1/2 rounded-full bg-[#2a2a2a]" />
                <div className="absolute inset-x-4 bottom-6">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <p className="mb-1 text-xs font-bold text-white">Syria Station</p>
                    <p className="text-[10px] text-white/70">Your driver is 3 min away</p>
                    <div className="mt-2 h-1 rounded-full bg-white/20">
                      <div className="h-full w-3/4 rounded-full" style={{ background: gradients.brandFlat }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f5f3] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-extrabold text-[#1a1a1a]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
            {t("faqTitle")}
          </h2>
          <div className="space-y-3">
            {faqKeys.map(({ q, a }, i) => {
              const open = openFaq === i;
              return (
                <div key={q} className="overflow-hidden rounded-2xl border border-[#f0eeec] bg-white">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-start"
                    aria-expanded={open}
                  >
                    <span className="text-sm font-semibold text-[#1a1a1a]">{t(q)}</span>
                    <ChevronDown size={18} className={`ms-4 flex-shrink-0 text-[#6b6b6b] transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-relaxed text-[#6b6b6b]">{t(a)}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-3 font-extrabold text-[#1a1a1a]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)" }}>
              {t("contactTitle")}
            </h2>
            <p className="mb-10 text-base text-[#6b6b6b]">{t("contactSub")}</p>
            <div className="space-y-5">
              {contactItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div style={brandBg} className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white">
                    <Icon size={18} />
                  </div>
                  <span className="text-sm text-[#4a4a4a]">{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-4">
                <div style={brandBg} className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white">
                  <Mail size={18} />
                </div>
                <span className="text-sm text-[#4a4a4a]">support@syriastation.sy</span>
              </div>
            </div>
          </div>

          {sent ? (
            <div className="rounded-3xl bg-[#f7f5f3] p-10 text-center">
              <div style={brandBg} className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-white">
                <Check size={28} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#1a1a1a]">{t("msgSentTitle")}</h3>
              <p className="text-sm text-[#6b6b6b]">{t("msgSentBody")}</p>
            </div>
          ) : (
            <div className="rounded-3xl bg-[#f7f5f3] p-8">
              <div className="mb-6 space-y-4">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">{t("nameLabel")}</label>
                  <input
                    value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Ahmad Al-Hassan"
                    className="w-full rounded-xl border border-[#f0eeec] bg-white px-4 py-3 text-sm transition-all focus:border-[#e8290b]/30 focus:outline-none focus:ring-2 focus:ring-[#e8290b]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">{t("emailLabel")}</label>
                  <input
                    value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                    placeholder="ahmad@example.com"
                    className="w-full rounded-xl border border-[#f0eeec] bg-white px-4 py-3 text-sm transition-all focus:border-[#e8290b]/30 focus:outline-none focus:ring-2 focus:ring-[#e8290b]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">{t("msgLabel")}</label>
                  <textarea
                    value={message} onChange={(e) => setMessage(e.target.value)} rows={4}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-xl border border-[#f0eeec] bg-white px-4 py-3 text-sm transition-all focus:border-[#e8290b]/30 focus:outline-none focus:ring-2 focus:ring-[#e8290b]/20"
                  />
                </div>
              </div>
              <BrandButton onClick={handleSend} className="w-full !py-3.5">{t("sendMsg")}</BrandButton>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
