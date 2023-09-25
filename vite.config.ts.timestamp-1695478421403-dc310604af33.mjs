// vite.config.ts
import { defineConfig } from "file:///D:/Project/Personal%20Project/figma-react/node_modules/vite/dist/node/index.js";
import viteCompression from "file:///D:/Project/Personal%20Project/figma-react/node_modules/vite-plugin-compression/dist/index.mjs";
import viteImagemin from "file:///D:/Project/Personal%20Project/figma-react/node_modules/vite-plugin-imagemin/dist/index.mjs";
import react from "file:///D:/Project/Personal%20Project/figma-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
import EnvironmentPlugin from "file:///D:/Project/Personal%20Project/figma-react/node_modules/vite-plugin-environment/dist/index.js";
import tsconfigPaths from "file:///D:/Project/Personal%20Project/figma-react/node_modules/vite-tsconfig-paths/dist/index.mjs";
import svgr from "file:///D:/Project/Personal%20Project/figma-react/node_modules/vite-plugin-svgr/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    EnvironmentPlugin("all"),
    viteCompression(),
    svgr({
      svgrOptions: {
        // svgr options
      }
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
        plugins: [{ name: "removeEmptyAttrs", active: false }]
      }
    })
  ],
  server: { port: 3200 }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXFBlcnNvbmFsIFByb2plY3RcXFxcZmlnbWEtcmVhY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RcXFxcUGVyc29uYWwgUHJvamVjdFxcXFxmaWdtYS1yZWFjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdC9QZXJzb25hbCUyMFByb2plY3QvZmlnbWEtcmVhY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XHJcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2VtaW4nO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCBFbnZpcm9ubWVudFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xyXG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgdHNjb25maWdQYXRocygpLFxyXG4gICAgRW52aXJvbm1lbnRQbHVnaW4oJ2FsbCcpLFxyXG4gICAgdml0ZUNvbXByZXNzaW9uKCksXHJcbiAgICBzdmdyKHsgXHJcbiAgICAgIHN2Z3JPcHRpb25zOiB7XHJcbiAgICAgICAgLy8gc3ZnciBvcHRpb25zXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHZpdGVJbWFnZW1pbih7XHJcbiAgICAgIGdpZnNpY2xlOiB7XHJcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXHJcbiAgICAgICAgaW50ZXJsYWNlZDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgb3B0aXBuZzoge1xyXG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vempwZWc6IHtcclxuICAgICAgICBxdWFsaXR5OiAyMFxyXG4gICAgICB9LFxyXG4gICAgICBwbmdxdWFudDoge1xyXG4gICAgICAgIHF1YWxpdHk6IFswLjgsIDAuOV0sXHJcbiAgICAgICAgc3BlZWQ6IDRcclxuICAgICAgfSxcclxuICAgICAgc3Znbzoge1xyXG4gICAgICAgIHBsdWdpbnM6IFsgeyBuYW1lOiAncmVtb3ZlRW1wdHlBdHRycycsIGFjdGl2ZTogZmFsc2UgfSBdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuXHJcbiAgc2VydmVyOiB7IHBvcnQ6IDMyMDAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVCxTQUFTLG9CQUE2QjtBQUN2VixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFdBQVc7QUFDbEIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxVQUFVO0FBR2pCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLGtCQUFrQixLQUFLO0FBQUEsSUFDdkIsZ0JBQWdCO0FBQUEsSUFDaEIsS0FBSztBQUFBLE1BQ0gsYUFBYTtBQUFBO0FBQUEsTUFFYjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsYUFBYTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ1IsbUJBQW1CO0FBQUEsUUFDbkIsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFFBQ2xCLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTLENBQUUsRUFBRSxNQUFNLG9CQUFvQixRQUFRLE1BQU0sQ0FBRTtBQUFBLE1BQ3pEO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsUUFBUSxFQUFFLE1BQU0sS0FBSztBQUN2QixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
