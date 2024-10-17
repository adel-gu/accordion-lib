import rootPrettier from "../../prettier.config.mjs";

/** @type {import('prettier').Config} */
export default {
  ...rootPrettier,
  plugins: [...rootPrettier.plugins, "prettier-plugin-tailwindcss", "prettier-plugin-curly"],
  tailwindAttributes: ["className"],
  tailwindFunctions: ["clsx", "cn", 'cva', "twMerge"]
};
