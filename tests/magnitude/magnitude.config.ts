import { type MagnitudeConfig } from 'magnitude-test';

// Learn more about configuring Magnitude:
// https://docs.magnitude.run/customizing/configuration

export default {
    url: "http://localhost:5173",
    planner: {
        provider: 'vertex-ai',
        options: {
            model: 'gemini-2.5-pro-preview-05-06',
            location: 'us-central1'
        }
    },
    executor: {
        provider: 'moondream', // only moondream currently supported
        options: {
            apiKey: process.env.MOONDREAM_API_KEY // not necessary if self-hosted
        }
    }
} satisfies MagnitudeConfig;
