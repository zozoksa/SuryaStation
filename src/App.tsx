import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Page } from "./types";
import { LangProvider, useLang } from "./i18n/LangContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { RiderPage } from "./pages/RiderPage";
import { DriverPage } from "./pages/DriverPage";
import { SafetyPage } from "./pages/SafetyPage";
import { AppPage } from "./pages/AppPage";
import { FoodComingSoonPage } from "./pages/FoodComingSoonPage";

function AppShell() {
  const { lang, dir } = useLang();
  const [page, setPage] = useState<Page>("home");

  // Scroll to top on navigation.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const fontFamily =
    lang === "ar" ? "'Cairo', 'Poppins', sans-serif" : "'Poppins', 'Cairo', sans-serif";

  const pages: Record<Page, ReactNode> = {
    home: <HomePage setPage={setPage} />,
    ride: <RiderPage />,
    drive: <DriverPage />,
    safety: <SafetyPage />,
    app: <AppPage />,
    food: <FoodComingSoonPage />,
  };

  return (
    <div dir={dir} style={{ fontFamily }} className="min-h-screen bg-white text-[#1a1a1a]">
      <Navbar page={page} setPage={setPage} />
      <main>{pages[page]}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppShell />
    </LangProvider>
  );
}
