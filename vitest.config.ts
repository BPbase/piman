import { defineConfig, configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.ts', '**/*.spec.ts'],
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

// import { fileURLToPath } from 'node:url'
// import { mergeConfig, defineConfig } from 'vite'
// import { configDefaults } from 'vitest/config'
// import viteConfig from './vite.config'

// export default mergeConfig(
//   viteConfig,
//   defineConfig({
//     test: {
//       environment: 'jsdom',
//       exclude: [...configDefaults.exclude, 'e2e/*'],
//       root: fileURLToPath(new URL('./', import.meta.url)),
//       transformMode: {
//         web: [/\.[jt]sx$/]
//       }
//     }
//   })
// )
