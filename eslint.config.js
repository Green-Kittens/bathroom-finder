// @ts-check

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jest from "eslint-plugin-jest";

export default [
  { ignores: [".expo", "babel.config.js"] },
  eslintPluginPrettierRecommended,
  reactRecommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["components/__tests__/**"],
    ...jest.configs["flat/recommended"],
  },
];
