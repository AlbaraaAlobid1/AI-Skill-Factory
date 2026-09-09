import { generateObject } from "ai";
import { z } from "zod";
import { LanguageModel } from "ai";
import { Requirement } from "./requirement-analyzer";

export const ArchitectureSchema = z.object({
  name: z.string().describe("Skill name (kebab-case)"),
  description: z.string().describe("Brief description"),
  version: z.string().describe("Initial version"),
  instructions: z.string().describe("Core instructions for the skill"),
  inputSchema: z.record(z.string(), z.any()).describe("JSON Schema for inputs"),
  outputSchema: z.record(z.string(), z.any()).describe("JSON Schema for outputs"),
  metadata: z.object({
    tags: z.array(z.string()),
    category: z.string(),
    author: z.string().optional(),
  }),
  examples: z.array(z.object({
    name: z.string(),
    input: z.record(z.string(), z.any()),
    expectedOutput: z.record(z.string(), z.any()),
  })),
  testCases: z.array(z.object({
    name: z.string(),
    input: z.record(z.string(), z.any()),
    expectedBehavior: z.array(z.string()),
  })),
  rules: z.array(z.string()).describe("Operational rules"),
  edgeCases: z.array(z.string()).describe("Edge case handling"),
});

export type SkillArchitecture = z.infer<typeof ArchitectureSchema>;

const SYSTEM_PROMPT = `You are a skill architect. Design a complete skill architecture based on the requirements.

Return a JSON object with:
- name: Skill name in kebab-case
- description: Brief description
- version: Initial version (e.g., "0.1.0")
- instructions: Detailed instructions for the AI
- inputSchema: JSON Schema for inputs
- outputSchema: JSON Schema for outputs
- metadata: Tags, category, author
- examples: Example inputs and expected outputs
- testCases: Test cases with expected behavior
- rules: Operational rules
- edgeCases: Edge case handling

Make the architecture production-ready and detailed.`;

export async function designArchitecture(
  model: LanguageModel,
  requirement: Requirement,
  language: "en" | "ar" = "en"
): Promise<SkillArchitecture> {
  const prompt = language === "ar"
    ? `صمم بنية مهارة كاملة بناءً على المتطلبات التالية:\n\n${JSON.stringify(requirement, null, 2)}`
    : `Design a complete skill architecture based on the following requirements:\n\n${JSON.stringify(requirement, null, 2)}`;

  const { object } = await generateObject({
    model,
    system: SYSTEM_PROMPT,
    prompt,
    schema: ArchitectureSchema,
    temperature: 0.4,
  });

  return object;
}