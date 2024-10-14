import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss'
import { cleandir } from "rollup-plugin-cleandir";
import packageJson from "./package.json" assert { type: "json" };

const entry = "src/index.ts"
const external = [
  ...Object.keys({
    ...packageJson.dependencies,
    ...packageJson.peerDependencies,
  }),
];
const outputDir = "dist";

export default [
  {
    input: entry,
    output: [
      {
        format: "cjs",
        file: `${outputDir}/bundle.cjs`,
        sourcemap: true,
      },
      {
        format: "es",
        file: `${outputDir}/bundle.mjs`,
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        extract: 'dist/base.css'
      }),
      resolve(),
      typescript({
        tsconfig: "tsconfig.build.json",
      }),
      commonjs(),
      terser(),
      cleandir(outputDir),
    ],
    external
  },
];
