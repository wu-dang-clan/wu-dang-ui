import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import { dts } from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

import { createRequire } from "node:module";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      peerDepsExternal(),
      commonjs(),
      terser(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      babel({
        babelHelpers: "bundled",
        sourceType: "unambiguous",
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        exclude: "node_modules/**",
      }),
      url({
        include: "**/*.svg",
        limit: 8192,
        emitFiles: true,
        fileName: "[name][hash][extname]",
      }),
      svgr(),
      postcss({
        extensions: [".css"],
        inject: true,
        extract: false,
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, "class-variance-authority/types"],
  },
];
