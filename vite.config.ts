import { defineConfig, loadEnv } from 'vite';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Thư mục output cho production build
  },
  plugins: [
    react(),
    tsconfigPaths(),
    EnvironmentPlugin('all'),
    viteCompression(),
    svgr({ 
      svgrOptions: {
        // svgr options
      },
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [ { name: 'removeEmptyAttrs', active: false } ]
      }
    }),
    
  ],

  server: { port: 3200 }
});
