import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
      context: {
        // グローバルコンテキストをここに追加できます
      },
      reloadOnPartialChange: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        // 他のHTMLファイルがある場合はここに追加
      },
    },
  },
});

