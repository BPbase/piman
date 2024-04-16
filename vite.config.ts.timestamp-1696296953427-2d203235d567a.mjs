// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import { defineConfig } from "file:///Users/neil/Documents/code/piman/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/neil/Documents/code/piman/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///Users/neil/Documents/code/piman/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/neil/Documents/code/piman";
var __vite_injected_original_import_meta_url = "file:///Users/neil/Documents/code/piman/vite.config.ts";
var buildDemoConfig = {
  plugins: [
    vue()
  ],
  base: "/piman/demo",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      // "@": resolve(__dirname, "./src")
    }
  },
  build: {
    outDir: "demo"
  },
  server: {
    host: "0.0.0.0"
  }
};
var buildPackageConfig = {
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true,
      insertTypesEntry: true,
      aliasesExclude: ["src/views"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      // "@": resolve(__dirname, "./src")
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/components/main.ts",
      name: "pimanVue3",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `piman.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      input: {
        main: resolve(__vite_injected_original_dirname, "src/components/main.ts")
      },
      external: ["vue"],
      output: {
        assetFileNames: "piman.css",
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
        }
      }
    }
  }
};
var vite_config_default = defineConfig(({ command, mode }) => {
  if (command === "production-package") {
    return buildPackageConfig;
  } else {
    return buildDemoConfig;
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmVpbC9Eb2N1bWVudHMvY29kZS9waW1hbi12dWUzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbmVpbC9Eb2N1bWVudHMvY29kZS9waW1hbi12dWUzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9uZWlsL0RvY3VtZW50cy9jb2RlL3BpbWFuLXZ1ZTMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuY29uc3QgYnVpbGREZW1vQ29uZmlnID0ge1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKClcbiAgXSxcbiAgYmFzZTogJy9waW1hbi12dWUzL2RlbW8nLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICAvLyBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIilcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGVtbydcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJzAuMC4wLjAnXG4gIH1cbn1cblxuY29uc3QgYnVpbGRQYWNrYWdlQ29uZmlnID0ge1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZHRzKHtcbiAgICAgIGNsZWFuVnVlRmlsZU5hbWU6IHRydWUsXG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgICAgYWxpYXNlc0V4Y2x1ZGU6IFsnc3JjL3ZpZXdzJ11cbiAgICB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICAvLyBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIilcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHNcbiAgICAgIGVudHJ5OiBcInNyYy9jb21wb25lbnRzL21haW4udHNcIixcbiAgICAgIG5hbWU6ICdwaW1hblZ1ZTMnLFxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJjanNcIiwgXCJ1bWRcIl0sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdDogc3RyaW5nKSA9PiBgcGltYW4tdnVlMy4ke2Zvcm1hdH0uanNgXG5cbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcbiAgICAgIC8vIGludG8geW91ciBsaWJyYXJ5XG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvY29tcG9uZW50cy9tYWluLnRzXCIpXG4gICAgICB9LFxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdwaW1hbi12dWUzLmNzcycsXG4gICAgICAgIGV4cG9ydHM6IFwibmFtZWRcIixcbiAgICAgICAgLy8gUHJvdmlkZSBnbG9iYWwgdmFyaWFibGVzIHRvIHVzZSBpbiB0aGUgVU1EIGJ1aWxkXG4gICAgICAgIC8vIGZvciBleHRlcm5hbGl6ZWQgZGVwc1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn1cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcblxuICBpZiAoY29tbWFuZCA9PT0gJ3Byb2R1Y3Rpb24tcGFja2FnZScpIHtcbiAgICByZXR1cm4gYnVpbGRQYWNrYWdlQ29uZmlnXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJ1aWxkRGVtb0NvbmZpZ1xuICB9XG5cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlTLFNBQVMsZUFBZSxXQUFXO0FBRXBVLFNBQVMsZUFBZTtBQUN4QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBTGhCLElBQU0sbUNBQW1DO0FBQXlJLElBQU0sMkNBQTJDO0FBT25PLElBQU0sa0JBQWtCO0FBQUEsRUFDdEIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLEVBQ047QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUE7QUFBQSxJQUV0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGO0FBRUEsSUFBTSxxQkFBcUI7QUFBQSxFQUN6QixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxNQUNsQixrQkFBa0I7QUFBQSxNQUNsQixnQkFBZ0IsQ0FBQyxXQUFXO0FBQUEsSUFDOUIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUE7QUFBQSxJQUV0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQTtBQUFBLE1BRUgsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sT0FBTyxLQUFLO0FBQUEsTUFDNUIsVUFBVSxDQUFDLFdBQW1CLGNBQWMsTUFBTTtBQUFBLElBRXBEO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQTtBQUFBLE1BR2IsT0FBTztBQUFBLFFBQ0wsTUFBTSxRQUFRLGtDQUFXLHdCQUF3QjtBQUFBLE1BQ25EO0FBQUEsTUFDQSxVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLFNBQVM7QUFBQTtBQUFBO0FBQUEsUUFHVCxTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBR0EsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUVqRCxNQUFJLFlBQVksc0JBQXNCO0FBQ3BDLFdBQU87QUFBQSxFQUNULE9BQU87QUFDTCxXQUFPO0FBQUEsRUFDVDtBQUVGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
