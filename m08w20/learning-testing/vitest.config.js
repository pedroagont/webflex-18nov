import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./setup-test.js"],
    browser: {
      enabled: true,
      instances: [{ browser: "chrome" }],
    },
  },
});
