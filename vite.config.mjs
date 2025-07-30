import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // ⚙️ Настройки dev-сервера
  server: {
    host: "localhost",
    port: 5173,
  },

  // ⚙️ Настройки предпросмотра (после сборки)
  preview: {
    host: "localhost",
    port: 4173,
  },

  // 🧩 Плагины
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
    }),
  ],

  // 🏗 Раскомментируй блок ниже, если нужно использовать несколько HTML-файлов
  /*
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        catalog: resolve(__dirname, "catalog.html"),
        about: resolve(__dirname, "about.html"),
        blog: resolve(__dirname, "blog.html"),
      },
    },
  },
  */
});
