import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    ".open-next/**",
    ".wrangler/**",
    ".vercel/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "next-env.d.ts",
    "cloudflare-env.d.ts",
    ".playwright-mcp/**",
  ]),
]);

export default eslintConfig;
