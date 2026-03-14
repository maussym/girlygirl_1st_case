"use client";

import { BarChart3 } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionTag } from "@/components/section-tag";
import { useLang } from "@/context/lang-context";
import { t } from "@/lib/i18n";

const METRICS = [
  { label: "COMMA F1", value: "\u2014", key: "metricsComma" },
  { label: "PERIOD F1", value: "\u2014", key: "metricsPeriod" },
  { label: "QUESTION F1", value: "\u2014", key: "metricsQuestion" },
] as const;

export function MetricsSection() {
  const { lang } = useLang();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 lg:px-16 py-20 dot-grid">
      <FadeIn>
        <SectionTag num="004" label={t("metricsTitle", lang)} />
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-5">
        {METRICS.map((m, idx) => (
          <FadeIn key={m.label} delay={idx * 100}>
            <div className="group rounded-xl border border-gray-100 bg-white p-6 text-center hover:border-fd-green/30 hover:shadow-lg hover:shadow-fd-green/5 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-fd-green-light flex items-center justify-center text-fd-green mx-auto mb-4 group-hover:bg-fd-green group-hover:text-white transition-colors duration-300">
                <BarChart3 className="w-5 h-5" />
              </div>
              <p className="text-4xl font-extrabold text-fd-green mb-1">{m.value}</p>
              <p className="text-xs text-gray-500 font-bold tracking-wider font-mono">{m.label}</p>
              <p className="text-[11px] text-gray-400 mt-1">{t(m.key, lang)}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <p className="text-center text-gray-300 text-[11px] mt-6 tracking-wider font-mono">
        {t("metricsNote", lang)}
      </p>
    </section>
  );
}
