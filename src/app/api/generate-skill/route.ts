import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { createAIProvider, AIProvider } from "@/ai/providers";
import { analyzeRequirement } from "@/ai/requirement-analyzer";
import { designArchitecture } from "@/ai/skill-architect";
import { generateSkillFiles } from "@/ai/skill-generator";
import { z } from "zod";

const RequestSchema = z.object({
  idea: z.string().min(10),
  provider: z.enum(["openai", "anthropic"]),
  model: z.string().min(1),
  apiKey: z.string().min(1),
  baseURL: z.string().url().optional(),
  language: z.enum(["en", "ar"]).default("en"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = RequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { idea, provider, model, apiKey, baseURL, language } = parsed.data;

    const aiProvider = createAIProvider({
      provider,
      apiKey,
      model,
      baseURL,
    });

    const requirement = await analyzeRequirement(aiProvider, idea, language);
    const architecture = await designArchitecture(aiProvider, requirement, language);
    const files = generateSkillFiles(architecture);

    return NextResponse.json({
      success: true,
      skill: {
        name: architecture.name,
        version: architecture.version,
        description: architecture.description,
        files,
      },
    });
  } catch (error) {
    console.error("Skill generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate skill", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}