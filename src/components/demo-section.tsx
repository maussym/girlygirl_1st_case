"use client";

import { useState, useCallback } from "react";
import { Code2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";
import { SectionTag } from "@/components/section-tag";
import { useLang } from "@/context/lang-context";
import { t } from "@/lib/i18n";
import { renderPunctuated } from "@/lib/punctuation";
import { EXAMPLE_INPUT, EXAMPLE_OUTPUT, LABEL_COLORS } from "@/config/constants";

type Result = { labels: string; words: string[] };

export function DemoSection() {
  const { lang } = useLang();
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const resultLabels = result?.labels.split(/\s+/) || [];

  const handlePredict = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setError("");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
      const res = await fetch(`${apiUrl}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText.trim() }),
      });
      if (!res.ok) throw new Error("Prediction failed");
      const data = await res.json();
      setResult({ labels: data.labels.join(" "), words: data.words });
    } catch {
      setError(t("demoError", lang));
      const words = inputText.trim().split(/\s+/);
      const demoLabels = words.map((_, i) => (i === words.length - 1 ? "PERIOD" : "O"));
      setResult({ labels: demoLabels.join(" "), words });
    } finally {
      setLoading(false);
    }
  };

  const handleDemo = () => {
    setInputText(EXAMPLE_INPUT);
    setResult({ labels: EXAMPLE_OUTPUT, words: EXAMPLE_INPUT.split(/\s+/) });
    setError("");
  };

  const handleCopy = useCallback(() => {
    if (!result) return;
    navigator.clipboard.writeText(renderPunctuated(inputText, result.labels));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [result, inputText]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handlePredict();
    }
  };

  return (
    <section id="demo" className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16 py-12 sm:py-20">
      <FadeIn>
        <SectionTag num="001" label={t("demoTitle", lang)} />
      </FadeIn>

      <FadeIn delay={100}>
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 sm:p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-fd-green" />
              <span className="text-sm font-semibold text-gray-700">{t("demoInput", lang)}</span>
              <span className="text-[9px] text-gray-300 font-mono ml-2 hidden sm:inline">Ctrl+Enter</span>
            </div>
            <button
              onClick={handleDemo}
              className="text-[11px] font-mono text-fd-green hover:text-fd-green/80 tracking-wider uppercase transition-colors cursor-pointer font-bold"
            >
              [{t("demoExample", lang)}]
            </button>
          </div>

          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("demoPlaceholder", lang)}
            className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-300 min-h-25 text-sm rounded-lg focus:border-fd-green/40 focus:ring-fd-green/10 resize-none"
          />

          <Button
            onClick={handlePredict}
            disabled={loading || !inputText.trim()}
            className="w-full mt-4 bg-fd-green text-white hover:bg-fd-green/90 font-semibold text-sm rounded-lg py-5 shadow-md shadow-fd-green/10 cursor-pointer disabled:opacity-30 transition-all duration-300 hover:shadow-lg hover:shadow-fd-green/20"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {t("demoProcessing", lang)}
              </span>
            ) : (
              t("demoButton", lang)
            )}
          </Button>

          {error && <p className="text-amber-600 text-xs text-center mt-3 font-mono">{error}</p>}

          {result && (
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div>
                <p className="text-[10px] text-gray-400 mb-3 uppercase tracking-widest font-mono font-bold">
                  {t("demoPredicted", lang)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {result.words.map((word, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1.5 animate-in fade-in duration-300"
                      style={{ animationDelay: `${i * 50}ms`, animationFillMode: "both" }}
                    >
                      <span className="text-sm text-gray-700 font-medium">{word}</span>
                      <Badge
                        variant="outline"
                        className={`text-[10px] font-mono rounded-md transition-transform hover:scale-110 ${LABEL_COLORS[resultLabels[i]] || LABEL_COLORS.O}`}
                      >
                        {resultLabels[i]}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono font-bold">
                    {t("demoResult", lang)}
                  </p>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-fd-green transition-colors cursor-pointer font-mono"
                  >
                    {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
                  </button>
                </div>
                <div className="bg-fd-green-light/30 rounded-lg p-4 border border-fd-green/10">
                  <p className="text-base text-fd-green font-bold tracking-wide">
                    {renderPunctuated(inputText, result.labels)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
