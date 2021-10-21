import { defineConfig } from 'vite';
import { name, version } from './package.json';
import path from 'path';

import dts from "rollup-plugin-dts";

const resolve = (url: string) => path.resolve(__dirname, url);

export default defineConfig({
    build: {
        // lib: {
        //     entry: resolve('src/index.ts'),
        //     name: 'ViteTsTypes',
        //     formats: ['es', 'umd'],
        //     fileName: 'vite-ts-types',
        // },
        // outDir: './lib',
        rollupOptions:{
            input: "./lib/index.d.ts",
            output: [{ file: "dist/core.d.ts", format: "es"}],
            plugins: [dts()],
        }
    },
    define: {
        pkgJson: { name, version },
    }
});
