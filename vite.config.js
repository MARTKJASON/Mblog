import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    build: {
        outDir: 'public/build',  // Specify the output directory for the build
        manifest: true,  // Ensure Vite generates a manifest.json file
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].js',  // Customize entry file naming if needed
                chunkFileNames: 'js/[name].js',   // Customize chunk file naming if needed
                assetFileNames: 'assets/[name].[ext]', // Customize asset file naming if needed
            }
        }
    }
});
