import { PUNCT_MAP } from "@/config/constants";

export function renderPunctuated(text: string, labels: string): string {
  const words = text.split(/\s+/);
  const tags = labels.split(/\s+/);
  return words.map((w, i) => w + (PUNCT_MAP[tags[i]] || "")).join(" ");
}
