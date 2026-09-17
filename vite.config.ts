import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Plain Vite config, built directly from official plugins (no third-party
// config wrapper). Order matters: tsconfigPaths and tailwindcss first,
// tanstackStart before viteReact, nitro last so it can see the fully
// configured pipeline.
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    nitro(),
  ],
  environments: {
    ssr: {
      build: {
        rollupOptions: { input: "./src/server.ts" },
      },
    },
  },
});
