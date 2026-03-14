"use client";

import { FileText, SplitSquareHorizontal, Brain, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionTag } from "@/components/section-tag";
import { useLang } from "@/context/lang-context";
import { t } from "@/lib/i18n";

const ICONS = [
  <FileText key="1" className="w-5 h-5" />,
  <SplitSquareHorizontal key="2" className="w-5 h-5" />,
  <Brain key="3" className="w-5 h-5" />,
  <CheckCircle2 key="4" className="w-5 h-5" />,
];

const STEP_KEYS = [
  { num: "01", title: "step1Title", desc: "step1Desc" },
  { num: "02", title: "step2Title", desc: "step2Desc" },
  { num: "03", title: "step3Title", desc: "step3Desc" },
  { num: "04", title: "step4Title", desc: "step4Desc" },
] as const;

export function StepsSection() {
  const { lang } = useLang();

  return (
    <section id="how" className="mx-auto w-full max-w-7xl px-6 lg:px-16 py-20 dot-grid">
      <FadeIn>
        <SectionTag num="002" label={t("howItWorks", lang)} />
      </FadeIn>

      <div className="grid md:grid-cols-4 gap-5">
        {STEP_KEYS.map((step, idx) => (
          <FadeIn key={step.num} delay={idx * 100}>
            <div className="group relative rounded-xl border border-gray-100 bg-white p-6 hover:border-fd-green/30 hover:shadow-lg hover:shadow-fd-green/5 transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="w-10 h-10 rounded-lg bg-fd-green-light flex items-center justify-center text-fd-green mb-4 group-hover:bg-fd-green group-hover:text-white transition-colors duration-300">
                {ICONS[idx]}
              </div>
              <div className="text-[10px] text-fd-green tracking-widest mb-2 font-bold font-mono">
                STEP {step.num}
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-2">{t(step.title, lang)}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{t(step.desc, lang)}</p>

              {idx < 3 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-gray-200 group-hover:text-fd-green/40 transition-colors" />
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
