"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionTag } from "@/components/section-tag";
import { useLang } from "@/context/lang-context";
import { t } from "@/lib/i18n";

const CODE = `from sklearn.metrics import f1_score
score = f1_score(y_true, y_pred,
                 labels=['COMMA', 'PERIOD', 'QUESTION'],
                 average='macro')`;

export function EvalSection() {
  const { lang } = useLang();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 lg:px-16 py-20">
      <FadeIn>
        <SectionTag num="005" label={t("evalTitle", lang)} />
      </FadeIn>

      <FadeIn delay={100}>
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-1.5 mb-5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-[11px] text-gray-400 tracking-wider font-mono">
              evaluation.py
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-5 leading-relaxed">{t("evalDesc", lang)}</p>

          <div className="code-block rounded-lg p-5 border border-gray-100 font-mono text-[12px] text-fd-green">
            <pre>{CODE}</pre>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
