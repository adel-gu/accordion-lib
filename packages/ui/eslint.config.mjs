import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from 'eslint-config-prettier';
import tailwind from "eslint-plugin-tailwindcss";


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
  parser: "@typescript-eslint/parser",
  parserOptions: {
      ecmaFeatures: {
          "jsx": true
      },
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.json"
  },
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
  {languageOptions: { globals: globals.browser }},
  { ignores: ['node_modules/', 'dist/'] },
  pluginReact.configs.flat.recommended,
  ...eslintrcConfig,
  ...tailwind.configs["flat/recommended"],
  eslintConfigPrettier
  // pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
];