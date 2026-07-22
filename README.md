# Syria Station — Modular Structure

بنية modular نضيفة بدل الملف الواحد الكبير. كل حاجة متقسّمة حسب المسؤولية.

```
src/
├── App.tsx                     # الروت: provider + routing + dir/font
├── types.ts                    # Lang / Page / Dir types
│
├── lib/
│   └── theme.ts                # design tokens: ألوان + gradients (مصدر واحد)
│
├── i18n/
│   ├── translations.ts         # قاموس الترجمة en/ar (بما فيه مفاتيح الطعام)
│   └── LangContext.tsx         # Context + Provider + useLang() hook
│
├── data/
│   └── content.ts              # كل المحتوى الثابت (services, team, faqs, food…)
│
├── components/
│   ├── Navbar.tsx              # + لينك صفحة Food مع بادج "قريباً"
│   ├── Footer.tsx
│   └── ui/
│       ├── BrandButton.tsx     # زرار البراند (filled + outline)
│       └── SectionHeading.tsx  # Eyebrow + SectionTitle
│
└── pages/
    ├── HomePage.tsx            # + بانر تشويقي لخدمة الطعام
    ├── RiderPage.tsx
    ├── DriverPage.tsx
    ├── SafetyPage.tsx
    ├── AppPage.tsx
    └── FoodComingSoonPage.tsx  # ✨ الصفحة الجديدة (زي طلبات)
```

## أهم التنظيفات

- **Design tokens في مكان واحد:** الـ gradient `linear-gradient(135deg, #e8290b, #f97316)`
  كان متكرر ~20 مرة inline → دلوقتي `brandBg` / `gradients.brand` من `lib/theme.ts`.
- **الـ content مفصول عن الـ JSX:** كل الـ arrays (services, team, faqs, food…) بقت في `data/content.ts`.
- **`useLang()` hook** بدل `useContext(LangCtx)` المتكرر في كل ملف.
- **إضافات جودة:** `focus-visible` rings للكيبورد، احترام `motion-reduce` في نبضة الـ SOS،
  و`aria-label` / `aria-expanded` على الأزرار التفاعلية.
- **RTL** شغّال زي ما هو عبر `dir` + خصائص `ps-`/`pe-`/`start-`/`end-` المنطقية.

## صفحة الطعام (Coming Soon)

vertical جديد بلون accent أخضر خاص بيه (`#1f8a54` / `#7bb662`) عشان يتميّز عن الأحمر/البرتقالي
من غير ما يخرج عن هوية البراند. فيها:
- Hero + بطاقة **waitlist** (إدخال إيميل → "أنت على القائمة!").
- شبكة أقسام (مطاعم، بقالة، صيدلية، حلويات وقهوة).
- قسم "مدعوم بالأسطول اللي تعرفه" + phone mock بتتبّع الطلب.

> ملاحظة: الـ waitlist دلوقتي client-side بس. لما توصّل الـ backend اربط `handleJoin`
> في `FoodComingSoonPage.tsx` بالـ endpoint بتاعك.

اتعمله type-check بـ `tsc --strict` ونضيف بدون أخطاء.
