module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint-config-next",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "error",
    "prefer-const": "error",
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "@next/next/no-document-import-in-page": 0,
  },
};
