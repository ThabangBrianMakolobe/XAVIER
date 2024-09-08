import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/tests',
    use: {
        baseURL: 'http://localhost:3000',
    },
});
