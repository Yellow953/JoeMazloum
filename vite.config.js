import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/JoeMazloum/",
  build: {
    // The SSR pass exists only to produce static HTML for crawlers; the client
    // build already emits every asset, so don't write a second copy of them.
    ssrEmitAssets: false,
  },
});
