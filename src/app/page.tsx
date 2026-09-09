"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Check, ChevronDown, CircleHelp, FileCode2, FlaskConical, Layers3, Plus, Settings, Sparkles, WandSparkles } from "lucide-react";
import { SettingsModal } from "@/components/SettingsModal";
import { useSettingsStore } from "@/settings/store";
import { Locale, localeNames, isRTL } from "@/i18n/locales";
import { t, getMessages } from "@/i18n";

const examples = [
  "germanLetters",
  "studentEmails",
  "requirementsReview",
];

const pipeline = [
  { label: "analyze", icon: Sparkles },
  { label: "architect", icon: Layers3 },
  { label: "generate", icon: FileCode2 },
  { label: "validate", icon: Check },
];

export default function Home() {
  const [idea, setIdea] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { language, aiProvider, aiModel, apiKey } = useSettingsStore();
  const locale = language as Locale;
  const messages = getMessages(locale);
  const rtl = isRTL(locale);

  useEffect(() => {
    setMounted(true);
  }, []);

  function generateSkill() {
    if (!idea.trim() || isGenerating) return;
    if (!apiKey) {
      setSettingsOpen(true);
      return;
    }
    setIsGenerating(true);
    setGenerated(false);
    window.setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 900);
  }

  function handleExampleClick(exampleKey: string) {
    setIdea(t(locale, `examples.${exampleKey}`) as string);
  }

  if (!mounted) {
    return (
      <main className="shell" dir={rtl ? "rtl" : "ltr"}>
        <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Sparkles size={32} color="#d8f35f" />
        </div>
      </main>
    );
  }

  const currentPipeline = pipeline.map((p) => ({
    ...p,
    label: t(locale, `pipeline.steps.${pipeline.indexOf(p)}`),
  }));

  return (
    <main className="shell" dir={rtl ? "rtl" : "ltr"}>
      <nav className="topbar">
        <a className="brand" href="#top" aria-label={t(locale, "app.name") + " home"}>
          <span className="brand-mark"><WandSparkles size={16} /></span>
          <span>{t(locale, "app.name")}</span>
        </a>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setSettingsOpen(true)} aria-label={t(locale, "nav.settings") as string}>
            <Settings size={18} />
          </button>
          <button className="icon-button" aria-label={t(locale, "nav.help") as string}><CircleHelp size={18} /></button>
          <button className="avatar" aria-label={t(locale, "nav.account") as string}>A</button>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span className="status-dot" /> {t(locale, "hero.workspace")}</div>
        <h1>{t(locale, "hero.title")}<br /><em>{t(locale, "hero.subtitle")}</em></h1>
        <p className="hero-copy">{t(locale, "hero.description")}</p>

        <div className="workspace-grid">
          <section className="composer-panel panel">
            <div className="panel-heading">
              <div>
                <span className="panel-kicker">{t(locale, "composer.step")}</span>
                <h2>{t(locale, "composer.title")}</h2>
              </div>
              <span className="step-count">1 of 4</span>
            </div>
<textarea
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
              placeholder={t(locale, "composer.placeholder") as string}
              aria-label={t(locale, "composer.placeholder") as string}
            />
            <div className="composer-footer">
              <span className="hint">{t(locale, "composer.hint")}</span>
              <button className="generate-button" onClick={generateSkill} disabled={!idea.trim() || isGenerating}>
                {isGenerating ? t(locale, "composer.generating") : t(locale, "composer.generateButton")}
                <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="examples">
              <span>{t(locale, "composer.examples")}</span>
              {examples.map((example) => (
                <button key={example} onClick={() => handleExampleClick(example)}>
                  {t(locale, `examples.${example}`)} <Plus size={13} />
                </button>
              ))}
            </div>
          </section>

          <section className={`result-panel panel ${generated ? "is-ready" : ""}`}>
            <div className="panel-heading result-heading">
              <div>
                <span className="panel-kicker">{t(locale, "output.step")}</span>
                <h2>{t(locale, "output.title")}</h2>
              </div>
              <button className="more-button" aria-label={t(locale, "output.title") as string}><ChevronDown size={17} /></button>
            </div>
            {generated ? (
              <div className="blueprint-content">
                <div className="blueprint-title"><span className="file-icon"><FileCode2 size={17} /></span><div><strong>new-ai-skill</strong><span>Draft / v0.1</span></div></div>
                <div className="blueprint-row"><span>{t(locale, "output.purpose")}</span><strong>{idea}</strong></div>
                <div className="blueprint-row"><span>{t(locale, "output.inputs")}</span><strong>User request, context, reference material</strong></div>
                <div className="blueprint-row"><span>{t(locale, "output.outputs")}</span><strong>Clear, structured response with next actions</strong></div>
                <div className="blueprint-tags">
                  {(t(locale, "output.tags") as string[]).map((tag: string) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button className="outline-button">{t(locale, "output.openEditor")} <ArrowUpRight size={15} /></button>
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-orbit"><Sparkles size={22} /></div>
                <strong>{t(locale, "output.emptyTitle")}</strong>
                <span>{t(locale, "output.emptyDescription")}</span>
              </div>
            )}
          </section>
        </div>
      </section>

      <section className="pipeline-section">
        <div className="section-label"><span>{t(locale, "pipeline.label")}</span><span className="line" /></div>
        <div className="pipeline">
          {currentPipeline.map(({ label, icon: Icon }, index) => (
            <div className="pipeline-step" key={label}>
              <span className={`pipeline-icon ${generated && index < 2 ? "done" : ""}`}><Icon size={17} /></span>
              <span>{label}</span>
              {index < currentPipeline.length - 1 && <span className="pipeline-arrow">→</span>}
            </div>
          ))}
        </div>
      </section>

      <footer>
        <span>{t(locale, "footer.version")}</span>
        <span>{t(locale, "footer.tagline")}</span>
      </footer>

      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </main>
  );
}