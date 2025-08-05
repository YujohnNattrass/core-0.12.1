import { openai } from "@ai-sdk/openai";
import { NewAgentNetwork } from "@mastra/core/network/vNext";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { weatherAgent } from "../agents/weather-agent";
import { weatherWorkflow } from "../workflows/weather-workflow";

export const vnextNetwork = new NewAgentNetwork({
    id: "vnextNetwork",
    instructions: `
    You are a network of helpful agents that can answer questions and help with tasks.
    `,
    name: "vnextNetwork",
    model: openai('gpt-4o-mini'),
    agents: {
        weatherAgent
    },
    workflows: {
        weatherWorkflow,
    },
    memory: new Memory(),
})