import { SkillArchitecture } from "./skill-architect";

export interface SkillFiles {
  "SKILL.md": string;
  "metadata.json": string;
  "examples/basic-example.md": string;
  "examples/advanced-example.md": string;
  "tests/basic-tests.json": string;
  "tests/edge-cases.json": string;
  "evaluation/evaluation-config.json": string;
}

export function generateSkillFiles(architecture: SkillArchitecture): SkillFiles {
  const skillMd = generateSkillMarkdown(architecture);
  const metadataJson = generateMetadataJson(architecture);
  const basicExample = generateBasicExample(architecture);
  const advancedExample = generateAdvancedExample(architecture);
  const basicTests = generateBasicTests(architecture);
  const edgeCaseTests = generateEdgeCaseTests(architecture);
  const evaluationConfig = generateEvaluationConfig(architecture);

  return {
    "SKILL.md": skillMd,
    "metadata.json": metadataJson,
    "examples/basic-example.md": basicExample,
    "examples/advanced-example.md": advancedExample,
    "tests/basic-tests.json": basicTests,
    "tests/edge-cases.json": edgeCaseTests,
    "evaluation/evaluation-config.json": evaluationConfig,
  };
}

function generateSkillMarkdown(arch: SkillArchitecture): string {
  return `# ${arch.name}

${arch.description}

## Purpose
${arch.instructions}

## Inputs
\`\`\`json
${JSON.stringify(arch.inputSchema, null, 2)}
\`\`\`

## Outputs
\`\`\`json
${JSON.stringify(arch.outputSchema, null, 2)}
\`\`\`

## Rules
${arch.rules.map((r) => `- ${r}`).join("\n")}

## Edge Cases
${arch.edgeCases.map((e) => `- ${e}`).join("\n")}

## Metadata
- **Category**: ${arch.metadata.category}
- **Tags**: ${arch.metadata.tags.join(", ")}
- **Version**: ${arch.version}
${arch.metadata.author ? `- **Author**: ${arch.metadata.author}` : ""}
`;
}

function generateMetadataJson(arch: SkillArchitecture): string {
  return JSON.stringify(
    {
      name: arch.name,
      description: arch.description,
      version: arch.version,
      category: arch.metadata.category,
      tags: arch.metadata.tags,
      author: arch.metadata.author,
      inputSchema: arch.inputSchema,
      outputSchema: arch.outputSchema,
    },
    null,
    2
  );
}

function generateBasicExample(arch: SkillArchitecture): string {
  const example = arch.examples[0];
  return `# Basic Example: ${example?.name || "Default Example"}

## Input
\`\`\`json
${JSON.stringify(example?.input || {}, null, 2)}
\`\`\`

## Expected Output
\`\`\`json
${JSON.stringify(example?.expectedOutput || {}, null, 2)}
\`\`\`
`;
}

function generateAdvancedExample(arch: SkillArchitecture): string {
  const example = arch.examples[1] || arch.examples[0];
  return `# Advanced Example: ${example?.name || "Advanced Example"}

## Input
\`\`\`json
${JSON.stringify(example?.input || {}, null, 2)}
\`\`\`

## Expected Output
\`\`\`json
${JSON.stringify(example?.expectedOutput || {}, null, 2)}
\`\`\`
`;
}

function generateBasicTests(arch: SkillArchitecture): string {
  return JSON.stringify(
    arch.testCases.map((tc) => ({
      name: tc.name,
      input: tc.input,
      expectedBehavior: tc.expectedBehavior,
    })),
    null,
    2
  );
}

function generateEdgeCaseTests(arch: SkillArchitecture): string {
  return JSON.stringify(
    arch.edgeCases.map((ec, i) => ({
      name: `Edge Case ${i + 1}: ${ec}`,
      description: ec,
      expectedBehavior: ["Handle gracefully", "Provide clear error message"],
    })),
    null,
    2
  );
}

function generateEvaluationConfig(arch: SkillArchitecture): string {
  return JSON.stringify(
    {
      skillName: arch.name,
      version: arch.version,
      criteria: [
        "Instruction following",
        "Output format compliance",
        "Edge case handling",
        "Rule adherence",
      ],
      threshold: 0.8,
      testCases: arch.testCases.length,
    },
    null,
    2
  );
}