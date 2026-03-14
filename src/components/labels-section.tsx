"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";
import { SectionTag } from "@/components/section-tag";
import { useLang } from "@/context/lang-context";
import { t } from "@/lib/i18n";
import { LABEL_COLORS } from "@/config/constants";

const ITEMS = [
  { label: "O", key: "noMark", example: "menin \u2192 menin" },
  { label: "COMMA", key: "comma", example: "salem \u2192 salem," },
  { label: "PERIOD", key: "period", example: "baqyt \u2192 baqyt." },
  { label: "QUESTION", key: "question", example: "qalai \u2192 qalai?" },
] as const;

export function LabelsSection() {
  const { lang } = useLang();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16 py-12 sm:py-20">
      <FadeIn>
        <SectionTag num="003" label={t("labelsTitle", lang)} />
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
        {ITEMS.map((item, idx) => (
          <FadeIn key={item.label} delay={idx * 80}>
            <div className="group rounded-xl border border-gray-100 bg-white p-4 sm:p-6 text-center hover:border-fd-green/30 hover:shadow-lg hover:shadow-fd-green/5 transition-all duration-300 hover:-translate-y-1">
              <Badge
                variant="outline"
                className={`text-[11px] font-mono mb-4 rounded-md transition-transform group-hover:scale-110 ${LABEL_COLORS[item.label]}`}
              >
                {item.label}
              </Badge>
              <p className="text-sm text-gray-700 font-semibold">{t(item.key, lang)}</p>
              <p className="text-[11px] text-gray-400 mt-2 font-mono">{item.example}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
