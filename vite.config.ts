/// <reference types="vitest" />

import { resolve } from "node:path";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(root, ""),
			"@components": resolve(root, "components"),
			"@pages": resolve(root, "pages"),
			"@theme": resolve(root, "theme"),
		},
	},
	plugins: [react(), legacy()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",
	},
});
