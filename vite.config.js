import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/ui.tsx'),
            name: 'ui',
            fileName: 'ui',
            formats: ['iife']
        },
        outDir: 'dist',
        rollupOptions: {
            output: {
                entryFileNames: '[name].js',
                extend: true
            }
        }
    }
});
