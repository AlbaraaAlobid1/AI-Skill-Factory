"use client";

import { useState } from "react";
import { X, Save, Loader2, Key, Globe, Brain, ChevronDown } from "lucide-react";
import { useSettingsStore, getModelsForProvider } from "@/settings/store";
import { AIProvider } from "@/ai/providers";
import { Locale, localeNames, isRTL } from "@/i18n/locales";
import { t, getMessages } from "@/i18n";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const {
    aiProvider,
    aiModel,
    apiKey,
    baseURL,
    language,
    setAIProvider,
    setAIModel,
    setAPIKey,
    setBaseURL,
    setLanguage,
  } = useSettingsStore();

  const [saving, setSaving] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [providerModels] = useState(() => getModelsForProvider(aiProvider));
  const locale = language;
  const messages = getMessages(locale);

  const settings = messages.settings;

  if (!isOpen) return null;

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 500));
    setSaving(false);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
      dir={isRTL(locale) ? "rtl" : "ltr"}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 id="settings-title">{settings.title}</h2>
          <button className="close-button" onClick={onClose} aria-label={messages.nav.help}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="setting-group">
            <label className="setting-label">
              <Brain size={18} />
              <span>{settings.aiProvider}</span>
            </label>
            <p className="setting-description">{settings.aiProviderDescription}</p>
            <div className="provider-options">
              {["openai", "anthropic"].map((provider) => (
                <button
                  key={provider}
                  className={`provider-option ${aiProvider === provider ? "selected" : ""}`}
                  onClick={() => setAIProvider(provider as AIProvider)}
                >
                  <span className="provider-name">
                    {provider === "openai" ? settings.openai : settings.anthropic}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="setting-group">
            <label className="setting-label">
              <Brain size={18} />
              <span>{settings.model}</span>
            </label>
            <select
              className="model-select"
              value={aiModel}
              onChange={(e) => setAIModel(e.target.value)}
              disabled={providerModels.length === 0}
            >
              {providerModels.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
              {providerModels.length === 0 && (
                <option value="">{settings.selectModel}</option>
              )}
            </select>
          </div>

          <div className="setting-group">
            <label className="setting-label">
              <Key size={18} />
              <span>{settings.apiKey}</span>
            </label>
            <p className="setting-description">{settings.apiKeyDescription}</p>
            <div className="api-key-input">
              <input
                type={showKey ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setAPIKey(e.target.value)}
                placeholder="sk-..."
                className="api-key-field"
              />
              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowKey(!showKey)}
                aria-label={showKey ? "Hide key" : "Show key"}
              >
                <Key size={18} />
              </button>
            </div>
            {baseURL !== undefined && (
              <div className="setting-group">
                <label className="setting-label">
                  <Globe size={18} />
                  <span>Base URL (Optional)</span>
                </label>
                <input
                  type="url"
                  value={baseURL || ""}
                  onChange={(e) => setBaseURL(e.target.value || undefined)}
                  placeholder="https://api.openai.com/v1"
                  className="api-key-field"
                />
              </div>
            )}
          </div>

          <div className="setting-group">
            <label className="setting-label">
              <Globe size={18} />
              <span>{settings.language}</span>
            </label>
            <p className="setting-description">{settings.languageDescription}</p>
            <select
              className="model-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value as Locale)}
            >
              {(Object.keys(localeNames) as Locale[]).map((loc) => (
                <option key={loc} value={loc}>
                  {localeNames[loc]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="modal-footer">
          <button className="save-button" onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <Loader2 size={18} className="spin" />
                {settings.saved}
              </>
            ) : (
              <>
                <Save size={18} />
                {settings.save}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}