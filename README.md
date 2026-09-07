# AI Skill Factory

> **Describe what you need. Generate, validate, test, and publish production-ready AI Agent Skills.**

**AI Skill Factory** is an AI-powered platform that turns natural-language requirements into structured, validated, and testable AI Agent Skills.

Instead of manually designing prompts, instructions, metadata, examples, and tests, users describe what they want an AI Agent to do.

The platform handles the rest.

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

### Next.js

Main application framework.

Used for:

- Web application
- Dashboard
- Skill generator interface
- Skill editor
- Server-side functionality

### React

Used for the component-based UI architecture.

### Tailwind CSS

Used for styling and rapid UI development.

### shadcn/ui

Used for reusable interface components.

### Lucide React

Used for icons.

### React Hook Form

Used for complex and validated user forms.

---

# 🤖 AI Layer

### Vercel AI SDK

The AI layer should support multiple providers.

Initial providers:

- OpenAI
- Anthropic

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

Recommended packages:

```text
ai
@ai-sdk/openai
@ai-sdk/anthropic
```

The project must avoid permanent dependency on a single AI provider.

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

# 📁 Proposed Project Structure

```text
ai-skill-factory/
│
├── src/
│   │
│   ├── app/                 # Next.js App Router
│   │
│   ├── components/          # UI Components
│   │
│   ├── ai/                  # AI Pipeline
│   │   ├── requirement-analyzer.ts
│   │   ├── skill-architect.ts
│   │   ├── skill-generator.ts
│   │   ├── test-generator.ts
│   │   └── evaluator.ts
│   │
│   ├── skills/              # Skill handling
│   │   ├── parser.ts
│   │   ├── generator.ts
│   │   └── exporter.ts
│   │
│   ├── validator/           # Validation Engine
│   │   ├── structure.ts
│   │   ├── metadata.ts
│   │   ├── instructions.ts
│   │   └── security.ts
│   │
│   ├── schemas/             # Zod Schemas
│   │
│   ├── lib/                 # Utilities
│   │
│   └── db/                  # Database
│
├── tests/
│
├── public/
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
- [ ] Define the first supported Skill format

---

## Phase 1 — Foundation

- [ ] Initialize Next.js
- [ ] Configure TypeScript
- [ ] Configure Tailwind CSS
- [ ] Install shadcn/ui
- [ ] Create initial UI
- [ ] Set up project structure

---

## Phase 2 — Requirement Analysis

- [ ] User requirement input
- [ ] Requirement Analyzer
- [ ] Structured requirement output
- [ ] Zod validation

---

## Phase 3 — Skill Architecture

- [ ] Capability detection
- [ ] Input/output definition
- [ ] Rule generation
- [ ] Edge case analysis

---

## Phase 4 — Skill Generation

- [ ] Generate `SKILL.md`
- [ ] Generate metadata
- [ ] Generate examples
- [ ] Generate tests

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
- [ ] Skill export
- [ ] Documentation

---

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