# eslint-config-flat-recommended

[Link for the package on npmjs.com](https://www.npmjs.com/package/eslint-config-flat-recommended)

This is an NPM package that provides a simple, recommended, flexible and configurable ESLint setup (flat config), allowing you to easily configure and extend your linting setup based on your project needs. The package supports JavaScript, TypeScript, React, and stylistic linting, along with optional Prettier integration.

## Features

- **JavaScript and TypeScript support**: Linting for JavaScript and TypeScript.
- **React and JSX support**: Includes rules for React.
- **Prettier integration**: Use Prettier for code formatting.
- **Stylistic linting**: Optionally enforces consistent code style across your project.

## Installation

To install the package, run the following command:

```bash
npm i -D eslint-config-flat-recommended
```

## Usage

You can use the `recommendedConfig` function to generate an ESLint configuration tailored to your project. By default, the configuration includes rules for JavaScript, TypeScript, React, and stylistic linting, with an option to include Prettier.

### Example

```javascript
// eslint.config.js file

import recommendedConfig from "eslint-config-recommended";

export default recommendedConfig();
```

### Options Section

### Options

- **`ts`** (`boolean`): Include TypeScript linting rules. Default is `true`.
- **`react`** (`boolean`): Include React linting rules. Default is `true`.
- **`prettier`** (`boolean`): Enable Prettier for code formatting and disable stylistic linting. Default is `true`.
- **`stylistic`** (`boolean`): Include stylistic linting rules. Default is `false`.

```javascript
// Example ESLint configuration
const eslintConfig = recommendedConfig({
  ts: true, // Include TypeScript linting
  react: true, // Include React linting
  prettier: true, // include Prettier integration
  stylistic: true, // Include stylistic linting
});
```

### Configurations Provided

- **JavaScript Linting**: Lints JavaScript using `eslint` recommended rules.
- **TypeScript Linting**: Lints TypeScript using `typescript-eslint` recommended rules.
- **React Linting**: Lints React with recommended rules from `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`.
- **Stylistic Linting**: Enforces consistent coding styles using `@stylistic/eslint-plugin`.
- **Prettier Integration**: Disable prettier rules from `eslint-config-prettier`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Mohamed Tharwat
