import { defineConfig } from "vite";

export default defineConfig({
    build: {
        // The target setting only needs to be modified to support
        // top-level await (which is used in index.html for simplicity).
        // If you refrain from using top-level await, the default target
        // would work just fine.
        target: "es2022",
        sourcemap: true,
    },
});
