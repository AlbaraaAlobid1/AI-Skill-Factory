import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AIProvider } from "@/ai/providers";
import { Locale } from "@/i18n/locales";

export interface SettingsState {
  aiProvider: AIProvider;
  aiModel: string;
  apiKey: string;
  baseURL?: string;
  language: Locale;
  setAIProvider: (provider: AIProvider) => void;
  setAIModel: (model: string) => void;
  setAPIKey: (key: string) => void;
  setBaseURL: (url: string | undefined) => void;
  setLanguage: (language: Locale) => void;
  reset: () => void;
}

const DEFAULT_SETTINGS = {
  aiProvider: "openai" as AIProvider,
  aiModel: "gpt-4o",
  apiKey: "",
  baseURL: undefined,
  language: "en" as Locale,
};

const OPENAI_MODELS = ["gpt-4o", "gpt-4o-mini", "gpt-4-turbo", "gpt-3.5-turbo"];
const ANTHROPIC_MODELS = [
  "claude-3-5-sonnet-20241022",
  "claude-3-5-haiku-20241022",
  "claude-3-opus-20240229",
  "claude-3-sonnet-20240229",
];

export const getModelsForProvider = (provider: AIProvider): string[] => {
  return provider === "openai" ? OPENAI_MODELS : ANTHROPIC_MODELS;
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      ...DEFAULT_SETTINGS,
      setAIProvider: (provider) =>
        set((state) => ({
          aiProvider: provider,
          aiModel: getModelsForProvider(provider)[0],
        })),
      setAIModel: (model) => set({ aiModel: model }),
      setAPIKey: (key) => set({ apiKey: key }),
      setBaseURL: (url) => set({ baseURL: url }),
      setLanguage: (language) => set({ language }),
      reset: () => set(DEFAULT_SETTINGS),
    }),
    {
      name: "ai-skill-factory-settings",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        aiProvider: state.aiProvider,
        aiModel: state.aiModel,
        apiKey: state.apiKey,
        baseURL: state.baseURL,
        language: state.language,
      }),
    }
  )
);