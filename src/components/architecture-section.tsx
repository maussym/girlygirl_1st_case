"use client";

import { Cpu, Database, Layers, Workflow, Settings, Zap } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionTag } from "@/components/section-tag";
import { useLang } from "@/context/lang-context";
import { t } from "@/lib/i18n";

const ARCH_ITEMS = [
  { icon: <Cpu className="w-5 h-5" />, titleKey: "archModel", descKey: "archModelDesc" },
  { icon: <Layers className="w-5 h-5" />, titleKey: "archCrf", descKey: "archCrfDesc" },
  { icon: <Database className="w-5 h-5" />, titleKey: "archData", descKey: "archDataDesc" },
  { icon: <Settings className="w-5 h-5" />, titleKey: "archTraining", descKey: "archTrainingDesc" },
  { icon: <Zap className="w-5 h-5" />, titleKey: "archInference", descKey: "archInferenceDesc" },
  { icon: <Workflow className="w-5 h-5" />, titleKey: "archPipeline", descKey: "archPipelineDesc" },
] as const;

export function ArchitectureSection() {
  const { lang } = useLang();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16 py-12 sm:py-20 dot-grid">
      <FadeIn>
        <SectionTag num="006" label={t("archTitle", lang)} />
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {ARCH_ITEMS.map((item, idx) => (
          <FadeIn key={item.titleKey} delay={idx * 80}>
            <div className="group rounded-xl border border-gray-100 bg-white p-4 sm:p-6 hover:border-fd-green/30 hover:shadow-lg hover:shadow-fd-green/5 transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="w-10 h-10 rounded-lg bg-fd-green-light flex items-center justify-center text-fd-green mb-4 group-hover:bg-fd-green group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-2">{t(item.titleKey, lang)}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{t(item.descKey, lang)}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
