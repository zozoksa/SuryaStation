import {
  Zap, Star, Users, Shield, MapPin, Phone, Navigation, DollarSign,
  Car, MessageSquare, AlertCircle, Globe, Mail, Share2, Link,
  UtensilsCrossed, ShoppingBasket, Pill, Coffee, Clock, Route, Smartphone, Wallet,
  type LucideIcon,
} from "lucide-react";

// ─── Home ────────────────────────────────────────────────────────────────────

export const services: { icon: LucideIcon; key: string; color: string }[] = [
  { icon: Zap, key: "economy", color: "#6b7280" },
  { icon: Star, key: "premium", color: "#f97316" },
  { icon: Users, key: "family", color: "#e8290b" },
];

export const safetyPoints: { icon: LucideIcon; key: string }[] = [
  { icon: Shield, key: "safetyP1" },
  { icon: MapPin, key: "safetyP2" },
  { icon: Phone, key: "safetyP3" },
];

// ─── Rider ───────────────────────────────────────────────────────────────────

export const riderSteps: { num: number; key: string; icon: LucideIcon }[] = [
  { num: 1, key: "step1", icon: Navigation },
  { num: 2, key: "step2", icon: MapPin },
  { num: 3, key: "step3", icon: DollarSign },
];

export const safetyFeatureKeys = ["sf1", "sf2", "sf3", "sf4", "sf5"];

// ─── Driver ──────────────────────────────────────────────────────────────────

export const cityRates: Record<string, number> = { damascus: 280, aleppo: 240, homs: 210 };

export const flexBenefitKeys = ["flex1", "flex2", "flex3", "flex4"];

export const regSteps: { key: string; icon: LucideIcon }[] = [
  { key: "step1r", icon: Users },
  { key: "step2r", icon: Car },
  { key: "step3r", icon: Shield },
];

// ─── Safety ──────────────────────────────────────────────────────────────────

export const safetyPillars: { titleKey: string; descKey: string; icon: LucideIcon; color: string }[] = [
  { titleKey: "bgTitle", descKey: "bgDesc", icon: Shield, color: "#e8290b" },
  { titleKey: "supportTitle", descKey: "supportDesc", icon: MessageSquare, color: "#f97316" },
  { titleKey: "emergencyTitle", descKey: "emergencyDesc", icon: AlertCircle, color: "#dc2626" },
];

// English-only operational copy (kept out of i18n on purpose — internal checklist).
export const emergencyChecklist = [
  "Location shared with emergency services",
  "Trusted contacts notified instantly",
  "Live audio monitoring activated",
  "Nearest Syria Station agent dispatched",
];

export const team = [
  { name: "Layla Hassan", role: "CEO & Co-Founder", initials: "LH" },
  { name: "Omar Zaydan", role: "CTO", initials: "OZ" },
  { name: "Rania Khalil", role: "Head of Safety", initials: "RK" },
  { name: "Samer Nasri", role: "Operations Director", initials: "SN" },
];

// ─── App ─────────────────────────────────────────────────────────────────────

export const faqKeys = [
  { q: "faq1q", a: "faq1a" },
  { q: "faq2q", a: "faq2a" },
  { q: "faq3q", a: "faq3a" },
  { q: "faq4q", a: "faq4a" },
];

export const appStats = [
  { val: "500K+", label: "Riders" },
  { val: "50K+", label: "Drivers" },
  { val: "4.8★", label: "App Rating" },
];

export const contactItems: { icon: LucideIcon; label: string }[] = [
  { icon: Phone, label: "+963 11 000 0000" },
  { icon: MapPin, label: "Damascus, Syria" },
];

// ─── Food (coming soon) ──────────────────────────────────────────────────────

export const foodCategories: { icon: LucideIcon; titleKey: string; descKey: string }[] = [
  { icon: UtensilsCrossed, titleKey: "foodCat1", descKey: "foodCat1d" },
  { icon: ShoppingBasket, titleKey: "foodCat2", descKey: "foodCat2d" },
  { icon: Pill, titleKey: "foodCat3", descKey: "foodCat3d" },
  { icon: Coffee, titleKey: "foodCat4", descKey: "foodCat4d" },
];

export const foodReasons: { icon: LucideIcon; key: string }[] = [
  { icon: Shield, key: "foodWhy1" },
  { icon: Route, key: "foodWhy2" },
  { icon: Smartphone, key: "foodWhy3" },
  { icon: Wallet, key: "foodWhy4" },
];

// ─── Footer ──────────────────────────────────────────────────────────────────

export const socialIcons: LucideIcon[] = [Globe, Mail, Share2, Link];

export const footerColumns = [
  { titleKey: "company", linkKeys: ["aboutUs", "careers", "press", "blog"] },
  { titleKey: "products", linkKeys: ["rideLabel", "driveLabel", "businessLabel"] },
  { titleKey: "legalLabel", linkKeys: ["privacyLabel", "termsLabel", "cookiesLabel"] },
];

export { Clock };
