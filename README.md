# AI Skill Factory

> **Describe what you need. Generate, validate, test, and publish production-ready AI Agent Skills.**

**AI Skill Factory** is an AI-powered platform that turns natural-language requirements into structured, validated, and testable AI Agent Skills.

Instead of manually designing prompts, instructions, metadata, examples, and tests, users describe what they want an AI Agent to do.

The platform handles the rest.

## ✨ New Features (v0.1)

### 🤖 Multi-Provider AI Integration
- **OpenAI** support (GPT-4o, GPT-4o-mini, GPT-4-turbo, GPT-3.5-turbo)
- **Anthropic** support (Claude 3.5 Sonnet, Haiku, Opus)
- Extensible provider architecture for adding new AI providers
- Secure API key storage in browser localStorage
- Configurable base URLs for custom endpoints

### 🌍 Internationalization (i18n)
- **English** (default)
- **العربية (Arabic)** with full RTL support
- Language selection persisted in settings
- All UI text translated including examples and pipeline steps
- RTL layout support for Arabic

### ⚙️ Settings Panel
- AI Provider selection (OpenAI / Anthropic)
- Model selection per provider
- API Key management with show/hide toggle
- Optional custom Base URL for OpenAI-compatible endpoints
- Language selector with instant UI update
- Settings persisted across sessions

---

## 🚀 The Vision

AI Agents are becoming increasingly important.

However, creating reusable capabilities for AI Agents — often called **Skills** — still requires technical knowledge.

Developers typically need to:

1. Understand a Skill format or specification.
2. Analyze requirements.
3. Design the Skill architecture.
4. Write instructions.
5. Define inputs and outputs.
6. Add metadata.
7. Create examples.
8. Create test cases.
9. Validate the Skill.
10. Debug and improve it.
11. Publish or distribute it.

This process is repetitive, time-consuming, and difficult for many users.

### AI Skill Factory changes that.

```text
Your Idea
    ↓
AI Requirement Analysis
    ↓
Skill Architecture
    ↓
Skill Generation
    ↓
Validation
    ↓
Testing & Evaluation
    ↓
Production-Ready AI Skill
```

Our goal is simple:

> **Make creating AI Agent Skills as easy as describing what you want an AI to do.**

---

# 💡 The Core Idea

A user writes something like:

> "I need an AI Skill that helps students write professional emails to German teachers and schools."

The system analyzes the request and generates a complete Skill package.

Example:

```text
german-school-communication/
│
├── SKILL.md
├── metadata.json
│
├── examples/
│   ├── basic-example.md
│   └── advanced-example.md
│
├── tests/
│   ├── basic-tests.json
│   └── edge-cases.json
│
└── evaluation/
    └── evaluation-config.json
```

The generated Skill is then validated and tested before being exported or published.

---

# 🔥 Why This Project?

We are **not building another traditional AI Skills Marketplace**.

Traditional marketplaces have a major problem:

```text
No Users
    ↓
No Creators
    ↓
No Content
    ↓
No Users
```

They depend on a community before becoming useful.

AI Skill Factory takes a different approach.

## First, we automate creation.

```text
User Idea
    ↓
AI creates the Skill
```

This means the product can provide value immediately.

The Marketplace comes later.

---

# 🏗️ The Skill Factory Pipeline

## 1. Describe

The user describes the capability they need using natural language.

Example:

```text
Create an AI Skill that analyzes German bureaucratic letters
and explains them in Arabic.
```

The system extracts:

- Purpose
- Target users
- Required capabilities
- Inputs
- Outputs
- Constraints
- Rules
- Edge cases

---

## 2. Analyze

The Requirement Analyzer converts the user request into a structured specification.

Example:

```text
Target User:
Arabic speakers living in Germany

Input:
German official letter

Output:
Arabic explanation

Capabilities:
- Detect important information
- Identify deadlines
- Extract required actions
- Explain difficult German terminology

Constraints:
- Do not provide legal advice
- Clearly separate facts from assumptions
```

---

## 3. Architect

The Skill Architect designs the internal structure.

```text
Requirements
      ↓
Capabilities
      ↓
Inputs / Outputs
      ↓
Instructions
      ↓
Rules
      ↓
Edge Cases
```

The system should not immediately generate a massive prompt.

First, it creates a clear architecture.

---

## 4. Generate

The Skill Generator creates the actual Skill files.

Potential output:

```text
skill/
├── SKILL.md
├── metadata.json
├── examples/
├── tests/
└── evaluation/
```

---

## 5. Validate

Generation alone does not mean the Skill is production-ready.

The Validator checks:

### Structural Validation

- Required files exist
- Metadata is valid
- Folder structure is correct

### Instruction Validation

- No contradictory instructions
- No missing critical behavior
- Clear responsibilities
- Defined outputs

### Security Validation

- Basic prompt injection risks
- Dangerous instructions
- Unsafe tool behavior
- Sensitive data concerns

---

## 6. Test

The platform generates test scenarios.

Example:

```text
Input:
A German school letter about a missed deadline.

Expected Behavior:
- Explain the letter in Arabic
- Identify the deadline
- Clearly state required actions
- Do not invent information
```

The generated Skill is evaluated against expected behavior.

---

## 7. Improve

Failed Skills can enter an improvement loop.

```text
Generate
    ↓
Validate
    ↓
Test
    ↓
Failure Detected
    ↓
AI Analysis
    ↓
Improve Skill
    ↓
Test Again
```

The long-term goal is to create an iterative Skill development pipeline.

---

# 🎯 Target Users

## AI Developers

Developers building:

- AI Agents
- Agent workflows
- AI automations
- Plugins
- Reusable AI capabilities

---

## AI Enthusiasts

Users who know what they want an AI to do but do not want to manually create complex Skill structures.

---

## Companies

Organizations that want to generate private internal AI Skills based on their workflows.

Example:

```text
Company Workflow
        +
Company Knowledge
        ↓
AI Skill Factory
        ↓
Private Internal AI Skill
```

---

# 🛠️ Technology Stack

## Primary Language

### TypeScript

TypeScript will be the primary language for the project.

```text
Frontend     → TypeScript
Backend      → TypeScript
AI Pipeline  → TypeScript
Validation   → TypeScript
API          → TypeScript
```

This reduces unnecessary complexity and allows the MVP to use a unified technology stack.

---

# 🌐 Frontend

### Next.js (App Router)

Main application framework.

Used for:

- Web application
- Dashboard
- Skill generator interface
- Skill editor
- Server-side functionality (API Routes)

### React

Used for the component-based UI architecture.

### Custom CSS (CSS Variables)

Used for styling with design tokens (no Tailwind dependency).

### Lucide React

Used for icons.

### Zustand

Lightweight state management for settings persistence.

### next-intl (planned)

For advanced i18n routing (currently using custom lightweight solution).

---

# 🤖 AI Layer

### Vercel AI SDK

The AI layer supports multiple providers.

Implemented providers:

- **OpenAI** (GPT-4o, GPT-4o-mini, GPT-4-turbo, GPT-3.5-turbo)
- **Anthropic** (Claude 3.5 Sonnet, Haiku, Opus)

Example architecture:

```text
                    AI Provider Layer
                           │
             ┌──────────────┼──────────────┐
             │              │              │
          OpenAI        Anthropic      Future Providers
             │              │              │
             └──────────────┼──────────────┘
                           │
                       AI Pipeline
```

Installed packages:

```text
ai
@ai-sdk/openai
@ai-sdk/anthropic
```

The project avoids permanent dependency on a single AI provider through the provider abstraction layer in `src/ai/providers.ts`.

---

# 🧠 AI Pipeline Architecture

The MVP should avoid unnecessary agent frameworks.

Instead, the AI pipeline should consist of focused modules.

```text
Requirement Analyzer
        ↓
Skill Architect
        ↓
Skill Generator
        ↓
Skill Validator
        ↓
Test Generator
        ↓
Skill Evaluator
```

Suggested structure:

```text
src/
└── ai/
    ├── requirement-analyzer.ts
    ├── skill-architect.ts
    ├── skill-generator.ts
    ├── test-generator.ts
    └── evaluator.ts
```

Each module should have one clear responsibility.

---

# 📦 Skill Parsing

Generated Skills may contain Markdown, YAML, and JSON.

## Markdown

Recommended libraries:

- `gray-matter`
- `remark`
- `unified`

Used for:

- Frontmatter parsing
- Markdown analysis
- Skill document processing

---

## YAML

Recommended library:

- `yaml`

Used for:

- Metadata
- Configuration
- Structured Skill information

---

# 🔍 Validation

## Zod

Zod will be used for schema validation.

Example:

```typescript
const SkillSchema = z.object({
  name: z.string(),
  description: z.string(),
  version: z.string(),
  instructions: z.string(),
});
```

Validation happens at multiple stages:

```text
User Input
    ↓
Zod Validation
    ↓
AI Generation
    ↓
Generated Output Validation
    ↓
Skill Validator
```

---

# 🗄️ Database

## PostgreSQL

Primary database.

Expected entities:

```text
Users
Projects
Skills
Skill Versions
Validation Reports
Test Runs
```

---

## Drizzle ORM

Recommended ORM.

Reasons:

- TypeScript-first
- Lightweight
- Type-safe
- Strong SQL control

Architecture:

```text
PostgreSQL
    ↓
Drizzle ORM
    ↓
Application
```

---

# 🔐 Authentication

### Better Auth

Planned authentication solution.

Potential features:

- User accounts
- GitHub login
- Project ownership
- Private Skills
- Public profiles

Authentication is not required for the earliest prototype.

---

# ⚙️ Background Workflows

AI Skill generation may eventually involve multiple long-running steps.

Example:

```text
Generate
    ↓
Validate
    ↓
Generate Tests
    ↓
Run Evaluation
```

For asynchronous workflows, the project may use:

### Inngest

Used for:

- Background jobs
- Multi-step workflows
- Long-running AI pipelines

This is planned for later versions.

---

# 🧪 Testing

## Application Testing

### Vitest

Used for:

- Unit tests
- Validator tests
- Utility tests

### Playwright

Used for:

- End-to-end testing
- User interface testing

---

## AI Evaluation

### Promptfoo

Planned for advanced LLM evaluation.

Possible use cases:

- Prompt testing
- Regression testing
- Model comparison
- Generated Skill evaluation

Example:

```text
Generated Skill
       ↓
Test Cases
       ↓
Promptfoo Evaluation
       ↓
Results
       ↓
Quality Score
```

---

# 📊 AI Observability

### Langfuse

Planned for later versions.

Potential uses:

- LLM traces
- Prompt debugging
- Cost monitoring
- Performance analysis
- Generation history

---

# 🐳 Isolated Execution

### Docker

May be used in the future if generated Skills need to execute code.

⚠️ Code execution is **not part of the initial MVP**.

Security and sandboxing must be carefully designed before enabling execution.

---

# ☁️ Deployment

## Application

### Vercel

Recommended for:

- Next.js deployment
- Fast iteration
- Preview deployments

## Database

Potential providers:

- Neon PostgreSQL
- Supabase PostgreSQL

---

# 📁 Project Structure

```text
ai-skill-factory/
│
├── src/
│   │
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   └── generate-skill/ # Skill generation API endpoint
│   │   ├── globals.css         # Global styles with CSS variables
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main page (client component)
│   │
│   ├── ai/                     # AI Pipeline
│   │   ├── providers.ts        # Multi-provider abstraction (OpenAI, Anthropic)
│   │   ├── requirement-analyzer.ts  # Requirement analysis module
│   │   ├── skill-architect.ts       # Skill architecture design
│   │   ├── skill-generator.ts       # Skill file generation
│   │   └── index.ts                  # AI pipeline exports
│   │
│   ├── components/             # UI Components
│   │   └── SettingsModal.tsx   # Settings modal with provider/lang config
│   │
│   ├── i18n/                   # Internationalization
│   │   ├── index.ts            # Translation utilities
│   │   ├── locales.ts          # Locale definitions (en, ar)
│   │   └── messages/
│   │       ├── en.json         # English translations
│   │       └── ar.json         # Arabic translations (RTL)
│   │
│   ├── settings/               # Settings Management
│   │   └── store.ts            # Zustand store with localStorage persistence
│   │
│   ├── skills/                 # Skill handling (planned)
│   │   ├── parser.ts
│   │   ├── generator.ts
│   │   └── exporter.ts
│   │
│   ├── validator/              # Validation Engine (planned)
│   │   ├── structure.ts
│   │   ├── metadata.ts
│   │   ├── instructions.ts
│   │   └── security.ts
│   │
│   ├── schemas/                # Zod Schemas (planned)
│   │
│   └── lib/                    # Utilities (planned)
│
├── tests/                      # Test files (planned)
│
├── public/                     # Static assets
│
└── README.md
```

---

# 🚧 Development Roadmap

## Phase 0 — Planning

- [x] Define the core concept
- [x] Define product positioning
- [x] Define initial architecture
- [x] Select the initial technology stack
- [x] Define the first supported Skill format

---

## Phase 1 — Foundation

- [x] Initialize Next.js (App Router)
- [x] Configure TypeScript
- [x] Configure CSS Variables design system
- [x] Install Lucide React for icons
- [x] Create initial UI (composer + output panels)
- [x] Set up project structure
- [x] **Add multi-provider AI infrastructure (OpenAI, Anthropic)**
- [x] **Add internationalization (English + Arabic with RTL)**
- [x] **Add settings panel with persistence**

---

## Phase 2 — Requirement Analysis

- [x] User requirement input (with examples)
- [x] Requirement Analyzer (AI-powered)
- [x] Structured requirement output (Zod validated)
- [x] Zod validation

---

## Phase 3 — Skill Architecture

- [x] Capability detection
- [x] Input/output definition (JSON Schema)
- [x] Rule generation
- [x] Edge case analysis

---

## Phase 4 — Skill Generation

- [x] Generate `SKILL.md`
- [x] Generate metadata (`metadata.json`)
- [x] Generate examples (basic + advanced)
- [x] Generate tests (basic + edge cases)
- [x] Generate evaluation config

---

## Phase 5 — Validation

- [ ] Structural validation
- [ ] Metadata validation
- [ ] Instruction validation
- [ ] Basic security checks
- [ ] Quality scoring

---

## Phase 6 — Testing

- [ ] Test generation
- [ ] Evaluation pipeline
- [ ] Failure analysis
- [ ] Improvement loop

---

## Phase 7 — v1.0 Release

- [ ] Stable generation pipeline
- [ ] Validation reports
- [ ] Test results
- [ ] Skill export (ZIP download)
- [ ] Documentation

---

# 🔌 API Usage

## Generate Skill Endpoint

```
POST /api/generate-skill
```

### Request Body

```json
{
  "idea": "I need an AI skill that analyzes German bureaucratic letters and explains them in Arabic",
  "provider": "openai",
  "model": "gpt-4o",
  "apiKey": "sk-...",
  "baseURL": "https://api.openai.com/v1",
  "language": "en"
}
```

### Response

```json
{
  "success": true,
  "skill": {
    "name": "german-letter-analyzer",
    "version": "0.1.0",
    "description": "Analyzes German bureaucratic letters and provides Arabic explanations",
    "files": {
      "SKILL.md": "# german-letter-analyzer\n\n...",
      "metadata.json": "{...}",
      "examples/basic-example.md": "# Basic Example\n...",
      "examples/advanced-example.md": "# Advanced Example\n...",
      "tests/basic-tests.json": "[...]",
      "tests/edge-cases.json": "[...]",
      "evaluation/evaluation-config.json": "{...}"
    }
  }
}
```

### Supported Providers & Models

| Provider | Models |
|----------|--------|
| OpenAI | `gpt-4o`, `gpt-4o-mini`, `gpt-4-turbo`, `gpt-3.5-turbo` |
| Anthropic | `claude-3-5-sonnet-20241022`, `claude-3-5-haiku-20241022`, `claude-3-opus-20240229`, `claude-3-sonnet-20240229` |

### Language Support

| Code | Language | Direction |
|------|----------|-----------|
| `en` | English | LTR |
| `ar` | Arabic | RTL |

---

# 🎨 UI Features

## Settings Modal

Accessible via the gear icon in the top navigation. Provides:

- **AI Provider Selection**: Switch between OpenAI and Anthropic
- **Model Selection**: Per-provider model dropdown
- **API Key Input**: Secure password field with visibility toggle
- **Base URL** (Optional): For OpenAI-compatible endpoints
- **Language Selector**: English / العربية with instant UI update

Settings are persisted to `localStorage` and survive page reloads.

## RTL Support

When Arabic is selected:
- Layout direction switches to RTL
- Text alignment adjusts automatically
- Icons and spacing mirror appropriately
- Form inputs support RTL text entry

---

# 📦 Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Environment Variables

No environment variables required for the frontend. API keys are provided via the settings UI and stored in browser localStorage.

For production deployments, consider using a backend proxy to avoid exposing API keys to the client.

---

# 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` and `npm run build`
5. Submit a pull request

---

# 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

# 🔮 Future Development

## v2 — Skill Registry

Possible features:

- User accounts
- Saved Skills
- Skill versioning
- Sharing
- Forking

---

## v3 — Marketplace

Possible features:

- Public Skills
- Discovery
- Categories
- Community contributions
- Ratings
- Verified Skills

---

# 🧭 Project Principles

## Quality over Quantity

The goal is not to generate thousands of low-quality Skills.

The system should prioritize:

- Clear instructions
- Reliable behavior
- Validation
- Testing
- Maintainability

---

## Generate ≠ Production Ready

AI generation alone is not enough.

```text
Generate
    ↓
Validate
    ↓
Test
    ↓
Evaluate
    ↓
Production Ready
```

---

## Modular Architecture

The following components must remain replaceable:

- AI Providers
- Models
- Skill formats
- Validators
- Testing systems

---

## Avoid Overengineering

The MVP should remain focused.

We will **not** build:

- A massive marketplace
- Complex social features
- Code execution infrastructure
- Multiple unnecessary agent frameworks

before the core generation pipeline works.

---

# 🎯 MVP Goal

The first version should do one thing extremely well:

```text
Describe the Skill you need
            ↓
Analyze Requirements
            ↓
Design Architecture
            ↓
Generate the Skill
            ↓
Validate It
            ↓
Generate Tests
            ↓
Evaluate Results
            ↓
Export the Skill
```

---

# 🏁 Final Positioning

We are not building:

> **Another AI Skills Marketplace.**

We are building:

# **The Factory That Creates AI Skills.**

```text
IDEA
 ↓
AI ANALYSIS
 ↓
SKILL ARCHITECTURE
 ↓
GENERATION
 ↓
VALIDATION
 ↓
TESTING
 ↓
PRODUCTION-READY SKILL
```

## AI Skill Factory

> **From idea to AI capability.**