import eslint from "@eslint/js";
import tslint from "typescript-eslint";
import reactLint from "eslint-plugin-react";
import jsxLint from "eslint-plugin-jsx-a11y";
import hooksLint from "eslint-plugin-react-hooks";
import stylisticLint from "@stylistic/eslint-plugin";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import g from "globals";

const eslintRecommended = {
  name: "eslint:recommended",
  files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
  ...eslint.configs.recommended,
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

const reactLintRecommended = {
  name: "eslint-plugin-react:recommended",
  files: ["**/*.jsx", "**/*.tsx"],
  ...reactLint.configs.flat.recommended,
};

const reactHooksLintRecommended = {
  name: "eslint-plugin-react-hooks:recommended",
  files: ["**/*.jsx", "**/*.tsx"],
  ...hooksLint.configs.recommended,
};

const jsxLintRecommended = {
  name: "eslint-plugin-jsx-a11y:recommended",
  files: ["**/*.jsx", "**/*.tsx"],
  ...jsxLint.flatConfigs.recommended,
};

const prettierLintRecommended = {
  name: "eslint-plugin-prettier:recommended",
  files: ["**/*.js", "**/*.ts", "**/*.mjs", "**/*.cjs", "**/*.jsx", "**/*.tsx"],
  rules: prettierConfig.rules,
  plugins: prettierPlugin,
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

export const configJs = [eslintRecommended];

export const configTs = [tsLintRecommended];

export const configReact = [
  reactLintRecommended,
  jsxLintRecommended,
  reactHooksLintRecommended,
];

export const configPrettier = [prettierLintRecommended];

export const configStylistic = [stylisticLintRecommended];

export default function recommendedConfig(
  {
    js = true,
    ts = false,
    react = false,
    prettier = false,
    stylistic = false,
    globals = [],
  } = {
    js: true,
    ts: false,
    react: false,
    prettier: false,
    stylistic: false,
    globals: [],
  }
) {
  let config = [];

  if (js) {
    config = [...config, ...configJs];
  }

  if (ts) {
    config = [...config, ...configTs];
  }

  if (react) {
    config = [...config, ...configReact];
  }

  if (prettier) {
    config = [...config, ...configPrettier];
  }

  if (stylistic) {
    config = [...config, ...configStylistic];
  }

  if (
    globals &&
    Array.isArray(globals) &&
    globals.length >= 1 &&
    globals.every((item) => typeof item === "string")
  ) {
    const globalsToAdd = {};

    globals.forEach((global) => {
      globalsToAdd[global] = g[global];
    });

    config = [
      ...config,
      {
        languageOptions: {
          globals: globalsToAdd,
        },
      },
    ];
  }

  return config;
}
