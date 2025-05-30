import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/*"],
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
});
