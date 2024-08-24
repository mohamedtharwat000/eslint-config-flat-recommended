import eslint from "@eslint/js";
import tslint from "typescript-eslint";
import reactLint from "eslint-plugin-react";
import jsxLint from "eslint-plugin-jsx-a11y";
import hooksLint from "eslint-plugin-react-hooks";
import stylisticLint from "@stylistic/eslint-plugin";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

const tsLintRecommended = tslint.configs.recommended;
const eslintRecommended = {
  name: "eslint:recommended",
  files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
  ...eslint.configs.recommended,
};
const reactLintRecommended = {
  name: "eslint-plugin-react:recommended",
  files: ["**/*.jsx", "**/*.tsx"],
  ...reactLint.configs.flat.recommended,
};
const reactHooksLint = {
  name: "eslint-plugin-react-hooks:recommended",
  files: ["**/*.jsx", "**/*.tsx"],
  ...hooksLint.configs.recommended,
};
const jsxLintRecommended = {
  name: "eslint-plugin-jsx-a11y:recommended",
  files: ["**/*.jsx", "**/*.tsx"],
  ...jsxLint.flatConfigs.recommended,
};
const prettierLint = {
  name: "eslint-plugin-prettier",
  files: [
    "**/*.js",
    "**/*.jsx",
    "**/*.mjs",
    "**/*.cjs",
    "**/*.ts",
    "**/*.tsx",
    "**/*.mts",
    "**/*.cts",
  ],
  rules: prettierConfig.rules,
  plugins: prettierPlugin,
};
const stylisticLintRecommended = {
  name: "stylistic:recommended",
  files: [
    "**/*.js",
    "**/*.jsx",
    "**/*.mjs",
    "**/*.cjs",
    "**/*.ts",
    "**/*.tsx",
    "**/*.mts",
    "**/*.cts",
  ],
  ...stylisticLint.configs["recommended-flat"],
};
const stylisticLintDisableLegacy = {
  name: "stylistic:disable-legacy",
  files: [
    "**/*.js",
    "**/*.jsx",
    "**/*.mjs",
    "**/*.cjs",
    "**/*.ts",
    "**/*.tsx",
    "**/*.mts",
    "**/*.cts",
  ],
  ...stylisticLint.configs["disable-legacy"],
};

export const configJs = [eslintRecommended];

export const configTs = [...tsLintRecommended];

export const configReact = [
  reactLintRecommended,
  jsxLintRecommended,
  reactHooksLint,
];

export const configStylistic = [
  stylisticLintRecommended,
  stylisticLintDisableLegacy,
];

export const configPrettier = [prettierLint];

export default function recommendedConfig({
  ts = true,
  react = true,
  stylistic = true,
  prettier = false,
} = {}) {
  let config = [...configJs];

  if (ts) {
    config = [...config, ...configTs];
  }
  if (react) {
    config = [...config, ...configReact];
  }
  if (prettier) {
    config = [...config, ...configPrettier];
    stylistic = false;
  }
  if (stylistic) {
    config = [...config, ...configStylistic];
  }
  return config;
}
