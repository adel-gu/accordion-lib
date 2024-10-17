import globals from "globals";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from 'eslint-config-prettier';
import tailwind from "eslint-plugin-tailwindcss";
import typescriptParser from "@typescript-eslint/parser"


import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

const eslintrcConfig = compat.config({
  extends: ["airbnb", "airbnb-typescript",  "airbnb/hooks", 'plugin:@typescript-eslint/recommended-type-checked', 'plugin:@typescript-eslint/stylistic-type-checked'],
  plugins: [
      "react",
      "@typescript-eslint"
  ],
  overrides: [
    {
      files: ['*.stories.@(ts|tsx)'],
      extends: ["plugin:storybook/recommended"],
    },
  ],
})


export default [
  {languageOptions: { globals: globals.browser, parser: typescriptParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.eslint.json"
    } }},
  { ignores: ['node_modules/', 'dist/'] },
  pluginReact.configs.flat.recommended,
  ...eslintrcConfig,
  ...tailwind.configs["flat/recommended"],
  eslintConfigPrettier
];