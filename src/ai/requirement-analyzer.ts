import { generateObject } from "ai";
import { z } from "zod";
import { LanguageModel } from "ai";

export const RequirementSchema = z.object({
  purpose: z.string().describe("Main purpose of the skill"),
  targetUsers: z.string().describe("Target audience for this skill"),
  inputs: z.array(z.string()).describe("Expected inputs"),
  outputs: z.array(z.string()).describe("Expected outputs"),
  capabilities: z.array(z.string()).describe("Required capabilities"),
  constraints: z.array(z.string()).describe("Constraints and limitations"),
  rules: z.array(z.string()).describe("Behavioral rules"),
  edgeCases: z.array(z.string()).describe("Edge cases to handle"),
});

export type Requirement = z.infer<typeof RequirementSchema>;

const SYSTEM_PROMPT = `You are a requirement analyst for AI skills. Analyze the user's natural language description and extract structured requirements.

Return a JSON object with:
- purpose: Main purpose of the skill
- targetUsers: Who will use this skill
- inputs: What inputs the skill expects
- outputs: What outputs the skill produces
- capabilities: Required capabilities
- constraints: Limitations and constraints
- rules: Behavioral rules
- edgeCases: Edge cases to handle

Be specific and thorough.`;

export async function analyzeRequirement(
  model: LanguageModel,
  userInput: string,
  language: "en" | "ar" = "en"
): Promise<Requirement> {
  const prompt = language === "ar" 
    ? `حلل الوصف التالي واستخرج المتطلبات المنظمة:\n\n${userInput}`
    : `Analyze the following description and extract structured requirements:\n\n${userInput}`;

  const { object } = await generateObject({
    model,
    system: SYSTEM_PROMPT,
    prompt,
    schema: RequirementSchema,
    temperature: 0.3,
  });

  return object;
}