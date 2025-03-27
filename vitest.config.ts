import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Needed for React Testing Library
    globals: true,        // If you want describe/test without importing from 'vitest'
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
});