import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { LanguageModel } from "ai";

export type AIProvider = "openai" | "anthropic";

export interface AIProviderConfig {
  provider: AIProvider;
  apiKey: string;
  model: string;
  baseURL?: string;
}

const DEFAULT_MODELS: Record<AIProvider, string> = {
  openai: "gpt-4o",
  anthropic: "claude-3-5-sonnet-20241022",
};

export function createAIProvider(config: AIProviderConfig): LanguageModel {
  const model = config.model || DEFAULT_MODELS[config.provider];

  switch (config.provider) {
    case "openai": {
      const openai = createOpenAI({
        apiKey: config.apiKey,
        baseURL: config.baseURL,
      });
      return openai(model);
    }
    case "anthropic": {
      const anthropic = createAnthropic({
        apiKey: config.apiKey,
      });
      return anthropic(model);
    }
    default:
      throw new Error(`Unsupported AI provider: ${config.provider}`);
  }
}

export function getDefaultModel(provider: AIProvider): string {
  return DEFAULT_MODELS[provider];
}

export function validateProviderConfig(config: AIProviderConfig): boolean {
  return !!config.apiKey && !!config.model;
}