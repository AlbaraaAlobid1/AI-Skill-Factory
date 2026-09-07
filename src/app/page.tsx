"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, CircleHelp, FileCode2, FlaskConical, Layers3, Plus, Sparkles, WandSparkles } from "lucide-react";

const examples = [
  "Explain German bureaucratic letters in Arabic",
  "Help students write professional emails to schools",
  "Review product requirements for edge cases",
];

const pipeline = [
  { label: "Analyze", icon: Sparkles },
  { label: "Architect", icon: Layers3 },
  { label: "Generate", icon: FileCode2 },
  { label: "Validate", icon: Check },
];

export default function Home() {
  const [idea, setIdea] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  function generateSkill() {
    if (!idea.trim() || isGenerating) return;
    setIsGenerating(true);
    setGenerated(false);
    window.setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 900);
  }

  return (
    <main className="shell">
      <nav className="topbar">
        <a className="brand" href="#top" aria-label="AI Skill Factory home">
          <span className="brand-mark"><WandSparkles size={16} /></span>
          <span>AI Skill Factory</span>
        </a>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Help"><CircleHelp size={18} /></button>
          <button className="avatar" aria-label="Open account menu">A</button>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span className="status-dot" /> Skill workspace / New project</div>
        <h1>Build the capability.<br /><em>Skip the scaffolding.</em></h1>
        <p className="hero-copy">Describe what your AI should do. We turn the idea into a structured, testable skill ready for production.</p>

        <div className="workspace-grid">
          <section className="composer-panel panel">
            <div className="panel-heading">
              <div>
                <span className="panel-kicker">01 / Describe</span>
                <h2>What should your skill do?</h2>
              </div>
              <span className="step-count">1 of 4</span>
            </div>
            <textarea
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
              placeholder="I need an AI skill that..."
              aria-label="Describe your AI skill"
            />
            <div className="composer-footer">
              <span className="hint">Be specific about users, inputs, and desired outcomes.</span>
              <button className="generate-button" onClick={generateSkill} disabled={!idea.trim() || isGenerating}>
                {isGenerating ? "Working..." : "Generate skill"}
                <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="examples">
              <span>Try an example</span>
              {examples.map((example) => (
                <button key={example} onClick={() => setIdea(example)}>{example} <Plus size={13} /></button>
              ))}
            </div>
          </section>

          <section className={`result-panel panel ${generated ? "is-ready" : ""}`}>
            <div className="panel-heading result-heading">
              <div>
                <span className="panel-kicker">02 / Output</span>
                <h2>Your skill blueprint</h2>
              </div>
              <button className="more-button" aria-label="Open output options"><ChevronDown size={17} /></button>
            </div>
            {generated ? (
              <div className="blueprint-content">
                <div className="blueprint-title"><span className="file-icon"><FileCode2 size={17} /></span><div><strong>new-ai-skill</strong><span>Draft / v0.1</span></div></div>
                <div className="blueprint-row"><span>Purpose</span><strong>{idea}</strong></div>
                <div className="blueprint-row"><span>Inputs</span><strong>User request, context, reference material</strong></div>
                <div className="blueprint-row"><span>Outputs</span><strong>Clear, structured response with next actions</strong></div>
                <div className="blueprint-tags"><span>Instructions</span><span>Examples</span><span>Test cases</span></div>
                <button className="outline-button">Open skill editor <ArrowUpRight size={15} /></button>
              </div>
            ) : (
              <div className="empty-state"><div className="empty-orbit"><Sparkles size={22} /></div><strong>Your generated skill will appear here</strong><span>We&apos;ll map the requirements into a clear architecture.</span></div>
            )}
          </section>
        </div>
      </section>

      <section className="pipeline-section">
        <div className="section-label"><span>THE WORKFLOW</span><span className="line" /></div>
        <div className="pipeline">
          {pipeline.map(({ label, icon: Icon }, index) => <div className="pipeline-step" key={label}><span className={`pipeline-icon ${generated && index < 2 ? "done" : ""}`}><Icon size={17} /></span><span>{label}</span>{index < pipeline.length - 1 && <span className="pipeline-arrow">→</span>}</div>)}
        </div>
      </section>

      <footer><span>AI Skill Factory <small>·</small> v0.1 prototype</span><span>Designed for builders who think in capabilities.</span></footer>
    </main>
  );
}
