export type Lang = "ru" | "en" | "kz";

export const LANG_LABELS: Record<Lang, string> = {
  ru: "Русский",
  en: "English",
  kz: "Қазақша",
};

const translations = {
  hackathon: { ru: "Хакатон 2026", en: "Hackathon 2026", kz: "Хакатон 2026" },
  team: { ru: "Команда GirlyGirl", en: "Team GirlyGirl", kz: "GirlyGirl тобы" },

  heroTag: { ru: "NLP / Классификация токенов", en: "NLP / Token Classification", kz: "NLP / Токен классификациясы" },
  heroSubtitle: { ru: "Восстановление пунктуации казахского текста", en: "Kazakh Punctuation Restoration", kz: "Қазақ мәтінінің пунктуациясын қалпына келтіру" },
  heroDesc: {
    ru: "AI модель, которая восстанавливает знаки препинания в казахском тексте. Превращает сырой ASR-вывод в читаемый текст.",
    en: "AI model that restores punctuation in Kazakh text. Converts raw ASR output into readable text.",
    kz: "Қазақ мәтініндегі тыныс белгілерін қалпына келтіретін AI моделі. ASR шығысын оқылатын мәтінге айналдырады.",
  },
  tryDemo: { ru: "Попробовать демо", en: "Try Demo", kz: "Демо көру" },
  howItWorks: { ru: "Как это работает", en: "How It Works", kz: "Қалай жұмыс істейді" },

  demoTitle: { ru: "Интерактивное демо", en: "Interactive Demo", kz: "Интерактивті демо" },
  demoInput: { ru: "Введите текст без знаков препинания", en: "Enter text without punctuation", kz: "Тыныс белгілерсіз мәтін енгізіңіз" },
  demoExample: { ru: "Пример", en: "Example", kz: "Мысал" },
  demoPlaceholder: { ru: "сәлем менің атым бақыт қалың қалай", en: "сәлем менің атым бақыт қалың қалай", kz: "сәлем менің атым бақыт қалың қалай" },
  demoButton: { ru: "Восстановить пунктуацию", en: "Restore Punctuation", kz: "Пунктуацияны қалпына келтіру" },
  demoProcessing: { ru: "Обработка...", en: "Processing...", kz: "Өңдеу..." },
  demoPredicted: { ru: "Предсказанные метки", en: "Predicted Labels", kz: "Болжанған белгілер" },
  demoResult: { ru: "Результат", en: "Result", kz: "Нәтиже" },
  demoError: {
    ru: "API модели не подключен. Показан демо-вывод.",
    en: "Model API is not connected. Showing demo output.",
    kz: "Модель API қосылмаған. Демо нәтиже көрсетілуде.",
  },

  step1Title: { ru: "Ввод текста", en: "Text Input", kz: "Мәтін енгізу" },
  step1Desc: { ru: "Сырой текст без пунктуации (например, из ASR системы)", en: "Raw text without punctuation (e.g. from ASR system)", kz: "Тыныс белгілерсіз мәтін (мысалы, ASR жүйесінен)" },
  step2Title: { ru: "Токенизация", en: "Tokenization", kz: "Токенизация" },
  step2Desc: { ru: "Текст разбивается на токены по пробелам", en: "Text is split into tokens by whitespace", kz: "Мәтін бос орындар бойынша токендерге бөлінеді" },
  step3Title: { ru: "Классификация", en: "Classification", kz: "Классификация" },
  step3Desc: { ru: "ML модель предсказывает метку для каждого токена: O, COMMA, PERIOD, QUESTION", en: "ML model predicts a label for each token: O, COMMA, PERIOD, QUESTION", kz: "ML моделі әр токен үшін белгі болжайды: O, COMMA, PERIOD, QUESTION" },
  step4Title: { ru: "Результат", en: "Result", kz: "Нәтиже" },
  step4Desc: { ru: "Знаки препинания восстановлены — текст готов к использованию", en: "Punctuation restored — text is ready to use", kz: "Тыныс белгілері қалпына келтірілді — мәтін пайдалануға дайын" },

  labelsTitle: { ru: "Метки классификации", en: "Classification Labels", kz: "Классификация белгілері" },
  noMark: { ru: "Нет знака", en: "No mark", kz: "Белгі жоқ" },
  comma: { ru: "Запятая", en: "Comma", kz: "Үтір" },
  period: { ru: "Точка", en: "Period", kz: "Нүкте" },
  question: { ru: "Вопрос", en: "Question", kz: "Сұрақ" },

  metricsTitle: { ru: "Результаты модели", en: "Model Results", kz: "Модель нәтижелері" },
  metricsComma: { ru: "Запятые", en: "Commas", kz: "Үтірлер" },
  metricsPeriod: { ru: "Точки", en: "Periods", kz: "Нүктелер" },
  metricsQuestion: { ru: "Вопросительные знаки", en: "Question marks", kz: "Сұрақ белгілері" },
  metricsNote: { ru: "Метрики обновятся после завершения обучения модели", en: "Metrics will update after model training is complete", kz: "Модельді оқыту аяқталғаннан кейін метрикалар жаңартылады" },

  evalTitle: { ru: "Оценка: Macro F1", en: "Evaluation: Macro F1", kz: "Бағалау: Macro F1" },
  evalDesc: {
    ru: "Submissions оцениваются по Macro F1 — среднее F1 по трём классам (COMMA, PERIOD, QUESTION). Класс O исключён из подсчёта.",
    en: "Submissions are scored using Macro F1 — the average F1 across three classes (COMMA, PERIOD, QUESTION). Class O is excluded.",
    kz: "Submissions Macro F1 бойынша бағаланады — үш класс бойынша орташа F1 (COMMA, PERIOD, QUESTION). O класы есептен шығарылған.",
  },

  archTitle: { ru: "Архитектура модели", en: "Model Architecture", kz: "Модель архитектурасы" },
  archModel: { ru: "Базовая модель", en: "Base Model", kz: "Негізгі модель" },
  archModelDesc: {
    ru: "XLM-RoBERTa / mBERT с classification head для token-level предсказаний. Fine-tuned на казахских текстах.",
    en: "XLM-RoBERTa / mBERT with classification head for token-level predictions. Fine-tuned on Kazakh texts.",
    kz: "XLM-RoBERTa / mBERT token деңгейіндегі болжамдар үшін classification head-пен. Қазақ мәтіндерінде fine-tune жасалған.",
  },
  archTokenizer: { ru: "Токенизатор", en: "Tokenizer", kz: "Токенизатор" },
  archTokenizerDesc: {
    ru: "WordPiece/SentencePiece субтокенизация. Выравнивание меток через first-subtoken стратегию.",
    en: "WordPiece/SentencePiece sub-tokenization. Label alignment via first-subtoken strategy.",
    kz: "WordPiece/SentencePiece суб-токенизация. First-subtoken стратегиясы арқылы белгілерді туралау.",
  },
  archData: { ru: "Данные", en: "Training Data", kz: "Деректер" },
  archDataDesc: {
    ru: "Multidomain Kazakh Dataset (Wikipedia, news, books, web). Пунктуация извлечена автоматически из размеченных текстов.",
    en: "Multidomain Kazakh Dataset (Wikipedia, news, books, web). Punctuation extracted automatically from annotated texts.",
    kz: "Multidomain Kazakh Dataset (Wikipedia, жаңалықтар, кітаптар, веб). Тыныс белгілері белгіленген мәтіндерден автоматты алынған.",
  },
  archPipeline: { ru: "Пайплайн", en: "Pipeline", kz: "Пайплайн" },
  archPipelineDesc: {
    ru: "Whitespace split → субтокенизация → модель → argmax по 4 классам → выравнивание обратно на слова.",
    en: "Whitespace split → sub-tokenization → model → argmax over 4 classes → alignment back to words.",
    kz: "Бос орындар бойынша бөлу → суб-токенизация → модель → 4 класс бойынша argmax → сөздерге кері туралау.",
  },
  archTraining: { ru: "Обучение", en: "Training", kz: "Оқыту" },
  archTrainingDesc: {
    ru: "AdamW optimizer, learning rate 2e-5, batch size 32, 5 эпох. Cross-entropy loss с class weights для балансировки.",
    en: "AdamW optimizer, learning rate 2e-5, batch size 32, 5 epochs. Cross-entropy loss with class weights for balancing.",
    kz: "AdamW оптимизатор, learning rate 2e-5, batch size 32, 5 эпоха. Теңестіру үшін class weights-пен cross-entropy loss.",
  },
  archInference: { ru: "Инференс", en: "Inference", kz: "Инференс" },
  archInferenceDesc: {
    ru: "FastAPI endpoint принимает текст, возвращает метки. Средняя латентность ~50ms на GPU.",
    en: "FastAPI endpoint accepts text, returns labels. Average latency ~50ms on GPU.",
    kz: "FastAPI endpoint мәтінді қабылдайды, белгілерді қайтарады. Орташа кідіріс GPU-да ~50ms.",
  },

  impTitle: { ru: "Анализ и улучшения", en: "Analysis & Improvements", kz: "Талдау және жақсартулар" },
  impWeakTitle: { ru: "Слабые стороны", en: "Weaknesses", kz: "Әлсіз жақтары" },
  impWeak1: {
    ru: "COMMA — самый сложный класс: запятые часто субъективны и зависят от стиля автора",
    en: "COMMA is the hardest class: commas are often subjective and depend on author's style",
    kz: "COMMA — ең қиын класс: үтірлер көбінесе субъективті және автор стиліне байланысты",
  },
  impWeak2: {
    ru: "Дисбаланс классов: ~85% токенов — O, модель склонна к under-prediction пунктуации",
    en: "Class imbalance: ~85% of tokens are O, model tends to under-predict punctuation",
    kz: "Класс теңсіздігі: токендердің ~85% — O, модель тыныс белгілерін аз болжайды",
  },
  impWeak3: {
    ru: "Разговорный текст хуже формального: менее предсказуемая структура предложений",
    en: "Conversational text performs worse than formal: less predictable sentence structure",
    kz: "Сөйлесу мәтіні формальдыдан нашар: сөйлем құрылымы аз болжанады",
  },
  impIdeasTitle: { ru: "Идеи улучшения", en: "Improvement Ideas", kz: "Жақсарту идеялары" },
  impIdea1: {
    ru: "CRF слой поверх трансформера для моделирования зависимостей между соседними метками",
    en: "CRF layer on top of transformer to model dependencies between adjacent labels",
    kz: "Көршілес белгілер арасындағы тәуелділіктерді модельдеу үшін трансформер үстіне CRF қабаты",
  },
  impIdea2: {
    ru: "Data augmentation: перестановка предложений, удаление слов, замена синонимами",
    en: "Data augmentation: sentence shuffling, word deletion, synonym replacement",
    kz: "Data augmentation: сөйлемдерді ауыстыру, сөздерді жою, синонимдермен ауыстыру",
  },
  impIdea3: {
    ru: "Ensemble нескольких моделей (XLM-R + mBERT + KazBERT) с majority voting",
    en: "Ensemble of multiple models (XLM-R + mBERT + KazBERT) with majority voting",
    kz: "Бірнеше модельдің ансамблі (XLM-R + mBERT + KazBERT) majority voting-пен",
  },
  impFutureTitle: { ru: "Перспективы", en: "Future Work", kz: "Болашақ жоспарлар" },
  impFuture1: {
    ru: "Добавить восстановление заглавных букв (True Casing) как второй этап пайплайна",
    en: "Add True Casing restoration as a second pipeline stage",
    kz: "True Casing қалпына келтіруді пайплайнның екінші кезеңі ретінде қосу",
  },
  impFuture2: {
    ru: "Интеграция с реальными ASR системами (Whisper, Google STT) для end-to-end демо",
    en: "Integration with real ASR systems (Whisper, Google STT) for end-to-end demo",
    kz: "End-to-end демо үшін нақты ASR жүйелерімен (Whisper, Google STT) интеграция",
  },
  impFuture3: {
    ru: "Расширение на другие тюркские языки (узбекский, кыргызский) через transfer learning",
    en: "Extension to other Turkic languages (Uzbek, Kyrgyz) via transfer learning",
    kz: "Transfer learning арқылы басқа түркі тілдеріне (өзбек, қырғыз) кеңейту",
  },

  footerText: { ru: "KazPunct Хакатон 2026 — Восстановление пунктуации", en: "KazPunct Hackathon 2026 — Punctuation Restoration", kz: "KazPunct Хакатон 2026 — Пунктуацияны қалпына келтіру" },
} as const;

type Key = keyof typeof translations;

export function t(key: Key, lang: Lang): string {
  return translations[key][lang];
}
