import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const buildDemoConfig = {
  plugins: [
    vue()
  ],
  base: '/piman/demo',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // "@": resolve(__dirname, "./src")
    }
  },
  build: {
    outDir: 'demo'
  },
  server: {
    host: '0.0.0.0'
  }
}

const buildPackageConfig = {
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true,
      insertTypesEntry: true,
      aliasesExclude: ['src/views']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // "@": resolve(__dirname, "./src")
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/components/main.ts",
      name: 'pimanVue3',
      formats: ["es", "cjs", "umd"],
      fileName: (format: string) => `piman.${format}.js`

    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      input: {
        main: resolve(__dirname, "src/components/main.ts")
      },
      external: ['vue'],
      output: {
        assetFileNames: 'piman.css',
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  if (mode === 'production-package') {
    return buildPackageConfig
  } else {
    return buildDemoConfig
  }

})
