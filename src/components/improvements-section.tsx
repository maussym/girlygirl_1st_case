"use client";

import { AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionTag } from "@/components/section-tag";
import { useLang } from "@/context/lang-context";
import { t } from "@/lib/i18n";

const ITEMS = [
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    titleKey: "impWeakTitle",
    items: ["impWeak1", "impWeak2", "impWeak3"] as const,
    color: "bg-amber-50 text-amber-600 group-hover:bg-amber-500",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    titleKey: "impIdeasTitle",
    items: ["impIdea1", "impIdea2", "impIdea3"] as const,
    color: "bg-fd-green-light text-fd-green group-hover:bg-fd-green",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    titleKey: "impFutureTitle",
    items: ["impFuture1", "impFuture2", "impFuture3"] as const,
    color: "bg-violet-50 text-violet-600 group-hover:bg-violet-500",
  },
] as const;

export function ImprovementsSection() {
  const { lang } = useLang();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16 py-12 sm:py-20">
      <FadeIn>
        <SectionTag num="007" label={t("impTitle", lang)} />
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {ITEMS.map((section, idx) => (
          <FadeIn key={section.titleKey} delay={idx * 100}>
            <div className="group rounded-xl border border-gray-100 bg-white p-4 sm:p-6 hover:border-fd-green/30 hover:shadow-lg hover:shadow-fd-green/5 transition-all duration-300 h-full">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:text-white transition-colors duration-300 ${section.color}`}>
                {section.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-4">{t(section.titleKey, lang)}</h3>
              <ul className="space-y-3">
                {section.items.map((key) => (
                  <li key={key} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-fd-green mt-1.5 shrink-0" />
                    <p className="text-xs text-gray-500 leading-relaxed">{t(key, lang)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
