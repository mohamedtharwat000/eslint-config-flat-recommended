import eslint from "@eslint/js";
import tslint from "typescript-eslint";
import importLint from "eslint-plugin-import";
import reactLint from "eslint-plugin-react";
import hooksLint from "eslint-plugin-react-hooks";
import jsxLint from "eslint-plugin-jsx-a11y";
import stylisticLint from "@stylistic/eslint-plugin";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import g from "globals";

const esLintRecommended = {
  name: "eslint:recommended",
  files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
  rules: eslint.configs.recommended.rules,
};

const tsLintRecommended = {
  name: "typescript-eslint:recommended",
  files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
  plugins: tslint.configs.recommended[0].plugins,
  languageOptions: tslint.configs.recommended[0].languageOptions,
  rules: {
    ...tslint.configs.recommended[1].rules,
    ...tslint.configs.recommended[2].rules,
  },
};

const importLintRecommended = {
  name: "eslint-plugin-import:recommended",
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
  plugins: importLint.flatConfigs.recommended.plugins,
  languageOptions: importLint.flatConfigs.recommended.languageOptions,
  rules: importLint.flatConfigs.recommended.rules,
};

const reactLintRecommended = {
  name: "eslint-plugin-react:recommended",
  files: ["**/*.jsx", "**/*.tsx"],
  plugins: reactLint.configs.flat.recommended.plugins,
  languageOptions: reactLint.configs.flat.recommended.languageOptions,
  rules: reactLint.configs.flat.recommended.rules,
};

const reactHooksLintRecommended = {
  name: "eslint-plugin-react-hooks:recommended",
  files: ["**/*.jsx", "**/*.tsx"],
  plugins: hooksLint,
  rules: hooksLint.configs.recommended.rules,
};

const jsxLintRecommended = {
  name: "eslint-plugin-jsx-a11y:recommended",
  files: ["**/*.jsx", "**/*.tsx"],
  plugins: jsxLint.flatConfigs.recommended.plugins,
  languageOptions: jsxLint.flatConfigs.recommended.languageOptions,
  rules: jsxLint.flatConfigs.recommended.rules,
};

const prettierLintRecommended = {
  name: "eslint-plugin-prettier:recommended",
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
  plugins: prettierPlugin,
  rules: prettierConfig.rules,
};

const stylisticLintRecommended = {
  name: "stylistic:recommended",
  files: ["**/*.js", "**/*.ts", "**/*.mjs", "**/*.cjs", "**/*.jsx", "**/*.tsx"],
  plugins: stylisticLint.configs["recommended-flat"].plugins,
  rules: {
    ...stylisticLint.configs["disable-legacy"].rules,
    ...stylisticLint.configs["recommended-flat"].rules,
  },
};

export default function recommendedConfig(
  {
    js = true,
    ts = true,
    imports = true,
    react = true,
    prettier = true,
    stylistic = false,
    globals = ["browser", "node"],
  } = {
    js: true,
    ts: true,
    imports: true,
    react: true,
    prettier: true,
    stylistic: false,
    globals: ["browser", "node"],
  }
) {
  let config = [];

  if (js) {
    config.push(esLintRecommended);
  }

  if (ts) {
    config.push(tsLintRecommended);
  }

  if (imports) {
    config.push(importLintRecommended);
  }

  if (react) {
    config.push(reactLintRecommended);
    config.push(reactHooksLintRecommended);
    config.push(jsxLintRecommended);
  }

  if (prettier && !stylistic) {
    config.push(prettierLintRecommended);
  }

  if (stylistic && !prettier) {
    config.push(stylisticLintRecommended);
  }

  if (
    globals &&
    Array.isArray(globals) &&
    globals.length >= 1 &&
    globals.every((item) => typeof item === "string")
  ) {
    config.push({
      languageOptions: {
        globals: {},
      },
    });

    globals.forEach(
      (global) =>
        g[global] &&
        Object.assign(
          config[config.length - 1].languageOptions.globals,
          g[global]
        )
    );
  }

  return config;
}
