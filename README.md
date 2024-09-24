# eslint-config-flat-recommended

[npm package](https://www.npmjs.com/package/eslint-config-flat-recommended)

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

You can use the `recommendedConfig` function to generate an ESLint configuration tailored to your project. the configuration includes rules for JavaScript, TypeScript, imports, React, Prettier, and stylistic.

### Example

```javascript
// eslint.config.js file

import recommendedConfig from "eslint-config-flat-recommended";

export default recommendedConfig();
```

### Options

```javascript
// Example ESLint configuration
const eslintConfig = recommendedConfig({
  js: true, // Include JavaScript linting (default: true)
  ts: true, // Include TypeScript linting (default: true)
  imports: true, // Include import linting (default: true)
  react: true, // Include React linting (default: true)
  prettier: true, // include Prettier integration (default: true)
  stylistic: true, // Include stylistic linting (default: false)
  globals: ["browser", "node"], // Add global variables (default: ["browser", "node"])
});
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Mohamed Tharwat
