// @ts-check

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { ignores: [".expo"] },
  eslintPluginPrettierRecommended,
  reactRecommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
];
