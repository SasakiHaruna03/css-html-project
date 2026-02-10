import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
    },
]);

module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error",
    },
};
